<?php

namespace Tests\Feature;

use App\Support\LegacyServiceRequestFields;
use PHPUnit\Framework\TestCase;

class ServiceRequestBackfillTest extends TestCase
{
    public function test_packed_requirements_are_split_into_fields(): void
    {
        $requirements = "this is a test\n\nRequested Positions: Physical Therapist (PT), "
            . "School-Based Clinicians (PT, OT, SLP - IEP Compliant), Physical Therapist – Limited Permit Holder\n"
            . "Open Roles: 3\nStart Date: 2026-10-02\nUrgency: Immediate Start";

        $this->assertSame([
            'requested_positions' => [
                'Physical Therapist (PT)',
                'School-Based Clinicians (PT, OT, SLP - IEP Compliant)',
                'Physical Therapist – Limited Permit Holder',
            ],
            'open_roles' => 3,
            'start_date' => '2026-10-02',
            'urgency' => 'Immediate Start',
            'requirements' => 'this is a test',
        ], LegacyServiceRequestFields::parse($requirements));
    }

    public function test_only_the_answers_that_were_given_are_filled(): void
    {
        $this->assertSame(
            ['urgency' => 'Flexible', 'requirements' => "First paragraph.\n\nSecond paragraph."],
            LegacyServiceRequestFields::parse("First paragraph.\r\n\r\nSecond paragraph.\r\n\r\nUrgency: Flexible")
        );
    }

    public function test_unrecognised_lines_stay_in_the_requirements(): void
    {
        $fields = LegacyServiceRequestFields::parse(
            "Need cover.\n\nOpen Roles: 3\nPay Range: $40-$50/hr\nStart Date: 2026-08-31\nUrgency: Urgent (ASAP)"
        );

        $this->assertSame([
            'open_roles' => 3,
            'start_date' => '2026-08-31',
            'urgency' => 'Urgent (ASAP)',
            'requirements' => "Need cover.\n\nPay Range: $40-$50/hr",
        ], $fields);
    }

    public function test_values_that_do_not_fit_their_column_stay_in_the_requirements(): void
    {
        $fields = LegacyServiceRequestFields::parse("Need cover.\n\nOpen Roles: a few\nStart Date: asap\nUrgency: Flexible");

        $this->assertSame([
            'urgency' => 'Flexible',
            'requirements' => "Need cover.\n\nOpen Roles: a few\nStart Date: asap",
        ], $fields);
    }

    public function test_plain_requirements_are_left_alone(): void
    {
        $this->assertSame([], LegacyServiceRequestFields::parse('We need two therapists.'));
        $this->assertSame([], LegacyServiceRequestFields::parse("Line one.\n\nLine two, Urgency: none."));
        $this->assertSame([], LegacyServiceRequestFields::parse("Urgency: typed by hand on the first line"));
        $this->assertSame([], LegacyServiceRequestFields::parse(null));
    }
}
