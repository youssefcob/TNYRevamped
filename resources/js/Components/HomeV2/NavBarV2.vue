<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';

const scrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => { scrolled.value = window.scrollY > 40; };
onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <nav class="nav2" :class="{ 'nav2--scrolled': scrolled }">
    <div class="nav2__inner">
      <Link href="/" class="nav2__logo">
        <img src="@/Svg/logo.svg" alt="Therapy of New York" />
      </Link>

      <div class="nav2__links">
        <a href="/solutions">Solutions</a>
        <a href="/employers">For Employers</a>
        <a href="/candidates">For Candidates</a>
        <a href="/resources">Resources</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div class="nav2__ctas">
        <Link href="/apply" class="nav2__btn nav2__btn--outline">Find Jobs</Link>
        <Link href="/requestService" class="nav2__btn nav2__btn--primary">Hire Staff</Link>
      </div>

      <button class="nav2__hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="nav2__mobile" :class="{ 'nav2__mobile--open': menuOpen }">
      <a href="/solutions" @click="menuOpen = false">Solutions</a>
      <a href="/employers" @click="menuOpen = false">For Employers</a>
      <a href="/candidates" @click="menuOpen = false">For Candidates</a>
      <a href="/news" @click="menuOpen = false">Resources</a>
      <a href="/about" @click="menuOpen = false">About</a>
      <a href="/contact" @click="menuOpen = false">Contact</a>
      <div class="nav2__mobile-ctas">
        <Link href="/apply" class="nav2__btn nav2__btn--outline">Find Jobs</Link>
        <Link href="/requestService" class="nav2__btn nav2__btn--primary">Hire Staff</Link>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: background 0.3s ease;

  &--scrolled {
    background: rgba(#142235, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 7.5rem;
    gap: 1rem;

    @media (max-width: 1100px) { padding: 1.25rem 2rem; }
  }

  &__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    img {
      height: 2.8rem;
      width: auto;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: rgba(250,249,247,0.15);
    border-radius: 80px;
    padding: 0.75rem 1rem;

    a {
      color: $color-white;
      text-decoration: none;
      font-family: $font-body;
      font-size: $caption-size;
      padding: 0.5rem 0.75rem;
      border-radius: 60px;
      transition: background 0.2s;
      white-space: nowrap;

      &:hover { background: rgba(255,255,255,0.1); }
    }

    @media (max-width: 1100px) { display: none; }
  }

  &__ctas {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;

    @media (max-width: 1100px) { display: none; }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 9rem;
    border-radius: 80px;
    font-family: $font-heading;
    font-size: 1rem;
    font-weight: $fw-semibold;
    text-decoration: none;
    transition: all 0.25s;
    cursor: pointer;

    &--outline {
      border: 1px solid rgba(255,255,255,0.7);
      color: $color-white;
      background: transparent;

      &:hover { background: rgba(255,255,255,0.1); }
    }

    &--primary {
      background: $color-orange;
      color: #0f2b3d;
      border: none;

      &:hover { background: darken(#FF9B37, 8%); }
    }
  }

  &__hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: $color-white;
      border-radius: 2px;
      transition: all 0.3s;
    }

    @media (max-width: 1100px) { display: flex; }
  }

  &__mobile {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 2rem 1.5rem;
    background: rgba(#142235, 0.98);

    &--open { display: flex; }

    a {
      color: $color-white;
      text-decoration: none;
      font-family: $font-body;
      font-size: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
  }

  &__mobile-ctas {
    display: flex;
    gap: 0.75rem;
    padding-top: 1rem;
  }
}
</style>
