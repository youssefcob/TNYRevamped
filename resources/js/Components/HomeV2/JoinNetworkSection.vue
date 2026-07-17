<template>
  <section class="join">
    <div class="join__text">
      <p class="section-label">For Healthcare Professionals</p>
      <h2 class="join__title">Join our Network</h2>
      <p class="join__body">
        TNY Staffing Corporation  partners with experienced healthcare professionals seeking
        flexible opportunities, supportive recruiters, and meaningful placements across
        hospitals, rehabilitation centers, clinics, and healthcare organizations.
      </p>
    </div>

    <div class="join__visual">
      <div class="join__card">
        <div class="join__card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M7 25.6666V4.66659C7 4.04775 7.24583 3.45425 7.68342 3.01667C8.121 2.57908 8.71449 2.33325 9.33333 2.33325H18.6667C19.2855 2.33325 19.879 2.57908 20.3166 3.01667C20.7542 3.45425 21 4.04775 21 4.66659V25.6666H7Z"
              stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M7.00016 14H4.66683C4.04799 14 3.4545 14.2458 3.01691 14.6834C2.57933 15.121 2.3335 15.7145 2.3335 16.3333V23.3333C2.3335 23.9522 2.57933 24.5457 3.01691 24.9832C3.4545 25.4208 4.04799 25.6667 4.66683 25.6667H7.00016"
              stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M21 10.5H23.3333C23.9522 10.5 24.5457 10.7458 24.9832 11.1834C25.4208 11.621 25.6667 12.2145 25.6667 12.8333V23.3333C25.6667 23.9522 25.4208 24.5457 24.9832 24.9832C24.5457 25.4208 23.9522 25.6667 23.3333 25.6667H21"
              stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.6665 7H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M11.6665 11.6667H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M11.6665 16.3333H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M11.6665 21H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <div>
          <h4 class="join__card-title">Flexible Opportunities</h4>
          <p class="join__card-body">Access assignments that match your schedule and preferences.</p>
        </div>
      </div>

      <div class="join__image-wrap">
        <div class="join__shape" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 787 614" fill="none">
            <path d="M0 152.721H241.083L315.6 327.259L556.683 0H789L355.05 614H113.967L184.1 492.447L0 152.721Z"
              fill="#24A8E0" />
          </svg>
        </div>

        <div class="join__image-bg">
          <img src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994267/2_ylphoc.webp"
            alt="Physical therapy professional" class="join__image" />
        </div>
      </div>

      <a href="/apply" class="join__cta">Explore Jobs</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.join {
  padding: 0rem 7.5rem;
  background: $color-white;
  display: flex;
  flex-direction: column;

  // gap: 5rem;
  align-items: flex-start;

  @media (max-width: 1100px) {
    padding: 0rem 2rem;
    gap: 3rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }

  &__text {
    flex-shrink: 0;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;

    @media (max-width: 900px) {
      display: none;
    }
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

    @media (max-width: 900px) {
      min-height: 22rem;
    }

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: stretch;
      min-height: auto;
    }
  }

  &__shape {
    position: absolute;
    top: 100%;
    right: -5rem;
    transform: translate(-7%, -100%);
    width: 50rem;
    max-width: 55%;
    z-index: 0;
    pointer-events: none;

    svg {
      width: 100%;
      height: auto;
      display: block;
    }



    // @media (max-width: 900px) {
    //   right: -2rem;
    //   width: 16rem;
    // }

    @media (max-width: 640px) {
      // right: -1.5rem;
      // width: 9rem;
      max-width: 100%;
    }
  }

  &__image-wrap {
    position: absolute;
    inset: 0;
    z-index: 1;

    @media (max-width: 640px) {
      position: relative;
      inset: auto;
      height: 20rem;
      margin-bottom: 1.5rem;
    }
  }

  &__image-bg {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    // background: linear-gradient(135deg, rgba($color-blue, 0.15) 0%, rgba($color-sand, 0.2) 100%);
    position: relative;
    overflow: hidden;


    >img {
      position: absolute;
      top: -24%;
      left: 50%;
      transform: translateX(-50%);
      // width: 70%
      height: 130%;
      object-fit: cover;
      object-position: center;

      @media (max-width: 640px) {}
    }
  }

  &__card {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.25rem;
    background: rgba(#0f2b3d, 0.9);
    border-radius: 1.25rem;
    width: 43%;
    margin-bottom: 4rem;
    margin-left: 0.5rem;
    align-self: center;

    @media (max-width: 640px) {
      align-self: flex-start;
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  &__card-icon {
    width: 3rem;
    height: 3rem;
    background: rgba(255, 255, 255, 0.1);
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
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }

  &__cta {
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
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


    &:hover {
      background: #0f2b3d;
      color: $color-white;
    }

    @media (max-width: 640px) {
      position: relative;
      bottom: auto;
      left: auto;
      margin: 0 auto;
      transform: none;
      margin-bottom: 1rem;
      margin-top: 0;
    }
  }
}
</style>
