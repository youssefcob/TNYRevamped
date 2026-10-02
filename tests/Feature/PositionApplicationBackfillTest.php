<?php

namespace Tests\Feature;

use App\Support\LegacyApplicationFields;
use PHPUnit\Framework\TestCase;

class PositionApplicationBackfillTest extends TestCase
{
    public function test_a_packed_message_is_split_into_fields(): void
    {
        $message = "License Status: Licensed\r\nYears of Experience: 1–3 years\r\nPreferred Setting: SNF / Subacute\r\n"
            . "Employment Type: Full-Time\r\nDesired Start Date: 2026-08-31\r\nNotes: Available to start.\r\nCall after 5pm.";

        $this->assertSame([
            'license_status' => 'Licensed',
            'years_experience' => '1–3 years',
            'preferred_setting' => 'SNF / Subacute',
            'employment_type' => 'Full-Time',
            'start_date' => '2026-08-31',
            'message' => "Available to start.\nCall after 5pm.",
            'city' => 'New York',
            'state' => 'NY',
            'zip' => null,
        ], LegacyApplicationFields::parse($message, 'New York, NY'));
    }

    public function test_a_packed_message_without_notes_leaves_no_message(): void
    {
        $fields = LegacyApplicationFields::parse("License Status: In Process\nEmployment Type: Per Diem", null);

        $this->assertSame([
            'license_status' => 'In Process',
            'employment_type' => 'Per Diem',
            'message' => null,
        ], $fields);
    }

    public function test_a_message_with_only_notes_keeps_the_note(): void
    {
        $this->assertSame(
            ['message' => 'License Status: mine is pending'],
            LegacyApplicationFields::parse('Notes: License Status: mine is pending', null)
        );
    }

    public function test_the_placeholder_message_is_cleared(): void
    {
        $this->assertSame(['message' => null], LegacyApplicationFields::parse('Application submitted via website.', null));
    }

    public function test_a_free_text_message_and_a_real_zip_are_left_alone(): void
    {
        $this->assertSame([], LegacyApplicationFields::parse("Hello,\nEmployment Type: any", '10001'));
        $this->assertSame([], LegacyApplicationFields::parse('I would love to join.', '10001-1234'));
        $this->assertSame([], LegacyApplicationFields::parse(null, null));
    }

    public function test_an_invalid_start_date_is_dropped(): void
    {
        $fields = LegacyApplicationFields::parse("License Status: Licensed\nDesired Start Date: next month", null);

        $this->assertSame(['license_status' => 'Licensed', 'message' => null], $fields);
    }

    public function test_a_city_without_a_state_becomes_the_city(): void
    {
        $this->assertSame(
            ['city' => 'New York', 'state' => null, 'zip' => null],
            LegacyApplicationFields::parse(null, 'New York')
        );
    }
}
