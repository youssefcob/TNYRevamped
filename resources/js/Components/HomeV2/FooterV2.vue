<template>
  <footer class="footer2" id="contact">
    <div class="footer2__main">

      <!-- Brand column -->
      <div class="footer2__col footer2__col--brand">
        <div class="footer2__brand">
          <img src="@/Svg/logo.svg" alt="TNY" class="footer2__logo" />
          <div>
            <p class="footer2__brand-name">TNY Staffing Corporation </p>
            <p class="footer2__brand-tagline">Healthcare Staffing</p>
          </div>
        </div>
        <p class="footer2__desc">
          Connecting therapy professionals with healthcare facilities across New York. Premium
          staffing solutions built for modern care.
        </p>
        <div class="footer2__socials">
          <a href="https://www.linkedin.com/company/therapy-of-new-york" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/Therapyofnewyorkstaffingcompany/" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/therapyofnewyork/" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="white" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Solutions -->
      <div class="footer2__col">
        <p class="footer2__col-heading">Solutions</p>
        <ul class="footer2__links">
          <li><a href="/services">Physical Therapy Staffing</a></li>
          <li><a href="/services">Occupational Therapy Staffing</a></li>
          <li><a href="/services">Speech Therapy Staffing</a></li>
          <li><a href="/services">School-Based Staffing</a></li>
          <li><a href="/services">Emergency Staffing</a></li>
          <li><a href="/services">Credentialing Support</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div class="footer2__col">
        <p class="footer2__col-heading">Company</p>
        <ul class="footer2__links">
          <li><a href="/about">About Us</a></li>
          <!-- <li><a href="#">Case Studies</a></li> -->
          <!-- <li><a href="#">Testimonials</a></li> -->
          <!-- <li><a href="#">Industries We Serve</a></li> -->
          <li><a href="/news">Resources</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <!-- Stay Informed -->
      <div class="footer2__col">
        <p class="footer2__col-heading">Stay Informed</p>
        <p class="footer2__stay-desc">Staffing insights and healthcare workforce updates, direct to your inbox.</p>
        <div class="footer2__newsletter">
          <input type="email" placeholder="Your email address" class="footer2__email-input" />
          <button class="footer2__email-btn" aria-label="Subscribe">→</button>
        </div>
        <div class="footer2__contact-info">
          <div class="footer2__contact-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>(347) 441-4283</span>
          </div>
          <div class="footer2__contact-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>staffing@therapyofnewyork.com</span>
          </div>
          <div class="footer2__contact-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>575 8th Ave, 10th Floor, New York, NY 10018</span>
          </div>
        </div>
      </div>

    </div>

    <div class="footer2__bottom">
      <p class="footer2__copyright">© 2026 TNY Staffing Corporation . All rights reserved.</p>
      <div class="footer2__legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <!-- <a href="#">Accessibility</a> -->
        <!-- <a href="#">Sitemap</a> -->
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer2 {
  background: $color-grey-dark;
  padding: 4rem 12.1875rem 0;

  @media (max-width: 1200px) { padding: 3rem 2rem 0; }

  &__main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.5rem;
    padding-bottom: 2.5rem;

    @media (max-width: 1024px) { grid-template-columns: 1fr 1fr; }
    @media (max-width: 640px)  { grid-template-columns: 1fr; }
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &--brand { gap: 1rem; }
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  &__logo {
    height: 2.375rem;
    width: auto;
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }

  &__brand-name {
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 0.95rem;
    color: $color-white;
    line-height: 1.2;
  }

  &__brand-tagline {
    font-family: $font-body;
    font-size: 0.65rem;
    color: $color-white;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__desc {
    font-family: $font-body;
    font-size: 0.84rem;
    line-height: 1.7;
    color: $color-white;
  }

  &__socials {
    display: flex;
    gap: 0.5rem;
  }

  &__social {
    width: 2.125rem;
    height: 2.125rem;
    background: rgba(255,255,255,0.05);
    border: 0.8px solid $color-white;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background 0.2s;

    &:hover { background: rgba(255,255,255,0.15); }
  }

  &__col-heading {
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 0.65rem;
    color: $color-white;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  &__links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    a {
      font-family: $font-body;
      font-size: 0.85rem;
      color: $color-white;
      text-decoration: none;
      line-height: 1.275;
      transition: opacity 0.2s;

      &:hover { opacity: 0.7; }
    }
  }

  &__stay-desc {
    font-family: $font-body;
    font-size: 0.84rem;
    line-height: 1.65;
    color: $color-white;
  }

  &__newsletter {
    display: flex;
    background: rgba(255,255,255,0.06);
    border: 0.8px solid $color-white;
    border-radius: 0.625rem;
    overflow: hidden;
    height: 2.72rem;
  }

  &__email-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 0.875rem;
    font-family: $font-body;
    font-size: 0.83rem;
    color: $color-white;

    &::placeholder { color: rgba(255,255,255,0.5); }
  }

  &__email-btn {
    width: 2.6875rem;
    background: $color-orange;
    border: none;
    color: $color-white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover { background: darken(#FF9B37, 8%); }
  }

  &__contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  &__contact-item {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    span {
      font-family: $font-body;
      font-size: 0.82rem;
      color: $color-white;
    }

    svg { flex-shrink: 0; }
  }

  &__bottom {
    border-top: 0.8px solid rgba(255,255,255,0.08);
    padding: 1.5rem 0 1.5rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 1200px) { padding-left: 0; }
    @media (max-width: 640px) { flex-direction: column; align-items: flex-start; }
  }

  &__copyright {
    font-family: $font-body;
    font-size: 0.78rem;
    color: $color-white;
  }

  &__legal {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    a {
      font-family: $font-body;
      font-size: 0.78rem;
      color: $color-white;
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover { opacity: 0.7; }
    }
  }
}
</style>
