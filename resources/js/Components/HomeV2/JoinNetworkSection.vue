<template>
  <section class="join">
    <div class="join__text">
      <p class="section-label">For Healthcare Professionals</p>
      <h2 class="join__title">Join our Network</h2>
      <p class="join__body">
        TNY Therapy of New York partners with experienced healthcare professionals seeking
        flexible opportunities, supportive recruiters, and meaningful placements across
        hospitals, rehabilitation centers, clinics, and healthcare organizations.
      </p>
    </div>

    <div class="join__visual">
      <div class="join__image-wrap">
        <div class="join__image-bg"></div>
      </div>

      <div class="join__card">
        <div class="join__card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
        </div>
        <div>
          <h4 class="join__card-title">Flexible Opportunities</h4>
          <p class="join__card-body">Access assignments that match your schedule and preferences.</p>
        </div>
      </div>

      <a href="/apply" class="join__cta">Explore Jobs</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.join {
  padding: 5rem 7.5rem;
  background: $color-white;
  display: flex;
    flex-direction: column;

  gap: 5rem;
  align-items: flex-start;

  @media (max-width: 1100px) { padding: 3rem 2rem; gap: 3rem; }
  @media (max-width: 900px) { flex-direction: column; gap: 2rem; }

  &__text {
    flex-shrink: 0;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h2-size-mobile, 3.5vw, $h2-size-desktop);
    line-height: $h2-line-height;
    color: $color-dark;
  }

  &__body {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: clamp($body-size-mobile, 1.5vw, $body-size-desktop);
    line-height: $body-line-height;
    color: $color-dark;
  }

  &__visual {
    flex: 1 1 0;
    width: 100%;
    position: relative;
    min-height: 34rem;
    display: flex;
    align-items: flex-end;

    @media (max-width: 900px) { min-height: 22rem; }
  }

  &__image-wrap {
    position: absolute;
    inset: 0;
  }

  &__image-bg {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background: linear-gradient(135deg, rgba($color-blue, 0.15) 0%, rgba($color-sand, 0.2) 100%);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      right: -2rem;
      top: 0;
      width: 55%;
      height: 100%;
      background: $color-blue;
      clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
      opacity: 0.6;
    }
  }

  &__card {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.25rem;
    background: rgba(#0f2b3d, 0.9);
    border-radius: 1.25rem;
    width: 18rem;
    margin-bottom: 4rem;
    margin-left: 0.5rem;

    @media (max-width: 640px) { width: 14rem; margin-bottom: 2rem; }
  }

  &__card-icon {
    width: 3rem;
    height: 3rem;
    background: rgba(255,255,255,0.1);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    color: $color-white;
    margin: 0;
  }

  &__card-body {
    font-family: $font-body;
    font-size: 1rem;
    color: rgba(255,255,255,0.8);
    margin: 0;
  }

  &__cta {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 18rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #0f2b3d;
    border-radius: 80px;
    color: #0f2b3d;
    background: $color-white;
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: $btn-size;
    text-decoration: none;
    transition: all 0.25s;
    z-index: 3;

    &:hover { background: #0f2b3d; color: $color-white; }
  }
}
</style>
