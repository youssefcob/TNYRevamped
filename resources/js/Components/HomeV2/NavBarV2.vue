<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';

const scrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => { scrolled.value = window.scrollY > window.innerHeight * 0.6; };
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
      <a href="/resources" @click="menuOpen = false">Resources</a>
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
  font-size: 12px;

  &--scrolled {
    background: transparent;

    .nav2__links,
    .nav2__btn--outline {
      background: rgba(20, 34, 53, 0.75);
      border-color: rgba(255, 255, 255, 0.1);
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.75em 0;
    gap: 1em;

    @media (max-width: 1100px) { 
      justify-content: space-between;
      padding: 1.25em 2em; }
  }

  &__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    img {
      height: 2.8em;
      width: auto;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 0.25em;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 80px;
    padding: 0.75em 1em;
    transition: background 0.5s ease, border-color 0.5s ease;

    >a {
      color: $color-white;
      text-decoration: none;
      font-family: $font-body;
      font-size: 1.25em;
      padding: 0.5em 0.75em;
      border-radius: 60px;
      transition: background 0.2s;
      white-space: nowrap;

      &:hover { background: rgba(255,255,255,0.1); }
    }

    @media (max-width: 1100px) { display: none; }
  }

  &__ctas {
    display: flex;
    gap: 0.5em;
    flex-shrink: 0;

    @media (max-width: 1100px) { display: none; }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75em;
    width: 11em;
    border-radius: 80px;
    font-family: $font-heading;
    font-size: 1.2em;
    font-weight: $fw-semibold;
    text-decoration: none;
    transition: all 0.25s;
    cursor: pointer;

    &--outline {
      border: 1px solid rgba(255, 255, 255, 0.18);
      color: $color-white;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      transition: background 0.5s ease, border-color 0.5s ease;

      &:hover { background: rgba(255,255,255,0.2); }
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
    padding: 0.5em;

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
    gap: 0.5em;
    padding: 1em 2em 1.5em;
    background: rgba(#142235, 0.98);

    &--open { display: flex; }

    a {
      color: $color-white;
      text-decoration: none;
      font-family: $font-body;
      font-size: 1em;
      padding: 0.75em 0;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
  }

  &__mobile-ctas {
    display: flex;
    gap: 0.75em;
    padding-top: 1em;
  }
}
</style>
