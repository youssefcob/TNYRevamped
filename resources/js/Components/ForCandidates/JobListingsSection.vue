<script setup lang="ts">
import { ref, computed } from 'vue';
import Modal from '@/SharedComponents/modal.vue';
import EditableText from '@/Components/Admin/EditableText.vue';
import { slugify } from '@/mixins/slug';

interface Position {
  id: number;
  title: string;
  description: string;
  available: boolean;
  address?: string | null;
}

const props = defineProps<{ positions: Position[] }>();

const search = ref('');

const filtered = computed(() => {
  const q = search.value.toLowerCase().trim();
  if (!q) return props.positions;
  return props.positions.filter(
    p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
  );
});

const detailsModal = ref<InstanceType<typeof Modal> | null>(null);
const activePosition = ref<Position | null>(null);

function viewDetails(pos: Position) {
  activePosition.value = pos;
  detailsModal.value?.openModal();
}
</script>

<template>
  <section id="openings" class="listings">
    <div class="listings__inner">

      <!-- Header -->
      <div class="listings__header">
        <EditableText tag="p" class="listings__label" content-key="candidates.listings.label" page="candidates" default="Open Positions" />
        <EditableText tag="h2" class="listings__title" content-key="candidates.listings.title" page="candidates" default="Explore Current Opportunities" />
        <EditableText tag="p" class="listings__subtitle" content-key="candidates.listings.subtitle" page="candidates"
          default="Explore flexible therapy opportunities across specialties, healthcare environments, and every NYC borough." />
      </div>

      <!-- Search bar -->
      <div class="listings__filters">
        <div class="listings__search-wrap">
          <svg class="listings__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            v-model="search"
            type="text"
            class="listings__search"
            placeholder="Search by role, specialty, or location"
          />
        </div>
      </div>

      <!-- Table -->
      <div class="listings__table-wrap">
        <div class="listings__table">

          <!-- Header row -->
          <div class="listings__thead">
            <div class="listings__th listings__th--position">Position</div>
            <div class="listings__th listings__th--cols">
              <span>Location</span>
              <span>Type</span>
              <span>Setting</span>
              <span>Action</span>
            </div>
          </div>

          <!-- Empty state -->
          <div v-if="filtered.length === 0" class="listings__empty">
            <p>No open positions found{{ search ? ' matching your search' : '' }}.</p>
          </div>

          <!-- Rows -->
          <div
            v-for="(pos, idx) in filtered"
            :key="pos.id"
            class="listings__row"
            :class="{ 'listings__row--last': idx === filtered.length - 1 }"
          >
            <div class="listings__cell listings__cell--position">
              <p class="listings__pos-title">{{ pos.title }}</p>
            </div>
            <div class="listings__cell listings__cell--cols">
              <span class="listings__cell-text">New York, NY</span>
              <span class="listings__cell-text">Full-Time</span>
              <span class="listings__cell-text">—</span>
              <div class="listings__actions">
                <button type="button" class="listings__view-btn" @click="viewDetails(pos)">View</button>
                <a :href="`/apply/${slugify(pos.title)}`" class="listings__apply-btn">Apply</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <Modal ref="detailsModal">
      <div v-if="activePosition" class="job-details">
        <h3>{{ activePosition.title }}</h3>
        <p class="job-details__meta">
          {{ activePosition.address || 'New York, NY' }} · Full-Time
        </p>
        <p class="job-details__desc">{{ activePosition.description }}</p>
        <a :href="`/apply/${slugify(activePosition.title)}`" class="listings__apply-btn job-details__apply">Apply</a>
      </div>
    </Modal>
  </section>
</template>

<style scoped lang="scss">
.listings {
  background: $color-white;
  padding: 5rem 7.5rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 75rem;
    margin: 0 auto;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 49.5rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-orange;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3.5vw, 2.5rem);
    line-height: 1.1;
    color: $color-dark;
  }

  &__subtitle {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.7;
    color: $color-dark;
    margin-top: 0.25rem;
  }

  &__filters {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  &__search-wrap {
    flex: 1;
    position: relative;
    min-width: 20rem;

    @media (max-width: 640px) { min-width: 0; width: 100%; }
  }

  &__search-icon {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba($color-dark, 0.4);
    pointer-events: none;
  }

  &__search {
    width: 100%;
    height: 3.75rem;
    padding: 0 1.5rem 0 3.25rem;
    border: 1px solid rgba($color-dark, 0.15);
    border-radius: 0.75rem;
    font-family: $font-body;
    font-size: 1.125rem;
    color: $color-dark;
    background: $color-white;
    outline: none;
    transition: border-color 0.2s;

    &::placeholder { color: rgba($color-dark, 0.4); }
    &:focus { border-color: $color-blue; }
  }

  &__table-wrap {
    overflow-x: auto;

    @media (max-width: 900px) { overflow-x: visible; }
  }

  &__table {
    background: rgba($color-sand, 0.1);
    border: 1px solid rgba($color-dark, 0.1);
    border-radius: 2.5rem;
    overflow: hidden;
    min-width: 50rem;

    @media (max-width: 900px) { min-width: 0; background: $color-white; border: none; }
  }

  &__thead {
    background: #0f2b3d;
    display: flex;
    align-items: center;
    padding: 1.5rem 1.5rem 1.5rem 0;
    border-radius: 2.5rem 2.5rem 0 0;

    @media (max-width: 900px) { display: none; }
  }

  &__th {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.25rem;
    color: $color-white;
    text-align: center;

    &--position {
      flex: 0 0 24rem;
      padding-left: 1.5rem;
      text-align: left;
    }

    &--cols {
      flex: 1;
      display: flex;
      gap: 1.5rem;

      span {
        flex: 1;
        text-align: center;
      }
    }
  }

  &__empty {
    padding: 3rem 1.5rem;
    text-align: center;
    font-family: $font-body;
    font-size: 1.125rem;
    color: rgba($color-dark, 0.5);
  }

  &__row {
    display: flex;
    align-items: center;
    padding-right: 1.5rem;
    border-bottom: 1px solid rgba($color-dark, 0.1);

    &--last { border-bottom: none; }

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      gap: 1rem;
      border-bottom: none;
    }
  }

  &__cell {
    padding: 0 0.625rem;

    &--position {
      flex: 0 0 24rem;
      padding: 1.25rem 1rem 1.25rem 1.5rem;

      @media (max-width: 900px) { flex: none; padding: 0; text-align: center; }
    }

    &--cols {
      flex: 1;
      display: flex;
      gap: 1.5rem;
      align-items: center;
      padding: 1.25rem 0;

      @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 0.75rem;
        padding: 0;
      }
    }
  }

  &__pos-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.25rem;
    color: $color-dark;
    line-height: 1.3;

    @media (max-width: 900px) { font-size: 1.625rem; }
  }

  &__pos-desc {
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: rgba($color-dark, 0.65);
    margin-top: 0.375rem;
    line-height: 1.3;
  }

  &__cell-text {
    flex: 1;
    font-family: $font-heading;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    color: $color-dark;
    text-align: center;

    @media (max-width: 900px) { flex: none; }
  }

  &__actions {
    flex: 1;
    display: flex;
    gap: 0.75rem;
    max-width: 16rem;

    @media (max-width: 900px) { max-width: none; width: 100%; }
  }

  &__view-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.9375rem;
    background: transparent;
    border: 1px solid #0f2b3d;
    color: #0f2b3d;
    border-radius: 2.5rem;
    font-family: $font-heading;
    font-size: $btn-size;
    font-weight: $btn-weight;
    cursor: pointer;
    transition: background 0.25s, color 0.25s;

    &:hover { background: #0f2b3d; color: $color-white; }
  }

  &__apply-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.9375rem;
    background: #0f2b3d;
    color: $color-white;
    border-radius: 2.5rem;
    font-family: $font-heading;
    font-size: $btn-size;
    font-weight: $btn-weight;
    text-decoration: none;
    transition: background 0.25s;
    max-width: 10.0625rem;

    &:hover { background: lighten(#0f2b3d, 10%); }

    @media (max-width: 900px) { max-width: none; }
  }
}

.job-details {
  background: $color-white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  max-width: 32rem;

  h3 {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.5rem;
    color: $color-dark;
  }

  &__meta {
    font-family: $font-body;
    font-size: 1rem;
    color: rgba($color-dark, 0.55);
    margin-top: 0.5rem;
  }

  &__desc {
    font-family: $font-body;
    font-size: 1.0625rem;
    line-height: 1.7;
    color: $color-dark;
    margin-top: 1.5rem;
    white-space: pre-line;
  }

  &__apply {
    margin-top: 2rem;
    max-width: none;
  }
}
</style>
