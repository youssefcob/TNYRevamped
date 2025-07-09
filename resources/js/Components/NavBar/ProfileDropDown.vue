<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import user from "@/mixins/user";
import { jobSeekerProfileState } from "@/state/state";
import { Link } from "@inertiajs/vue3";

const userIsLoggedIn = user.loggedIn();
const userData = user.get();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
function closeDropdown() {
  isOpen.value = false;
}
function handleClickOutside(event: MouseEvent) {
  if (
    isOpen.value &&
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target as Node)
  ) {
    isOpen.value = false;
  }
}
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const profile = jobSeekerProfileState.value?.[0] || {};
const profileImage = profile.image || "https://randomuser.me/api/portraits/men/32.jpg"; // fallback placeholder
const profileName = userData?.name || "Profile";
const profileTitle = profile.position?.title || "";
</script>

<template>
  <div class="profile-dropdown-wrapper" ref="dropdownRef">
    <div class="profile-trigger" @click="toggleDropdown">
      <span>{{ profileName }}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#135672"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div v-if="isOpen" class="dropdown-menu">
      <div class="profile-card">
        <img :src="profileImage" class="profile-img" alt="Profile" />
        <div class="profile-info">
          <div class="profile-name">{{ profileName }}</div>
          <div class="profile-title">{{ profileTitle }}</div>
        </div>
        <button class="close-btn" @click="closeDropdown">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L14 14M14 6L6 14"
              stroke="#222"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <div class="dropdown-list">
        <Link href="/profile" class="dropdown-item" >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13.25C8.83 13.25 6.25 10.67 6.25 7.5C6.25 4.33 8.83 1.75 12 1.75C15.17 1.75 17.75 4.33 17.75 7.5C17.75 10.67 15.17 13.25 12 13.25ZM12 3.25C9.66 3.25 7.75 5.16 7.75 7.5C7.75 9.84 9.66 11.75 12 11.75C14.34 11.75 16.25 9.84 16.25 7.5C16.25 5.16 14.34 3.25 12 3.25Z"
              fill="#135672"
            />
            <path
              d="M20.5901 23.25C20.1801 23.25 19.8401 22.91 19.8401 22.5C19.8401 19.05 16.3202 16.25 12.0002 16.25C7.68015 16.25 4.16016 19.05 4.16016 22.5C4.16016 22.91 3.82016 23.25 3.41016 23.25C3.00016 23.25 2.66016 22.91 2.66016 22.5C2.66016 18.23 6.85015 14.75 12.0002 14.75C17.1502 14.75 21.3401 18.23 21.3401 22.5C21.3401 22.91 21.0001 23.25 20.5901 23.25Z"
              fill="#135672"
            />
          </svg>
          <span>Profile</span>
        </Link>

        
        <Link :href="user.get().user_type == 'job_seeker' ? '/vacancies' : '/talents'" class="dropdown-item">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5987 8.9007C19.3601 8.90089 20.093 9.19062 20.6488 9.71116C21.2045 10.2317 21.5415 10.9441 21.5915 11.7039L21.5987 11.9007V19.1007C21.5985 19.8622 21.3088 20.595 20.7882 21.1508C20.2677 21.7065 19.5553 22.0435 18.7955 22.0935L18.5987 22.1007H11.3987C10.637 22.1008 9.90382 21.8112 9.34782 21.2907C8.79182 20.7701 8.45464 20.0575 8.40468 19.2975L8.39868 19.1007V11.9007C8.39856 11.139 8.68816 10.4058 9.20873 9.84985C9.72929 9.29385 10.4419 8.95667 11.2019 8.9067L11.3987 8.9007H18.5987ZM18.5987 10.1007H11.3987C10.9512 10.1007 10.5198 10.2674 10.1886 10.5682C9.85734 10.8691 9.65003 11.2825 9.60708 11.7279L9.59868 11.9007V19.1007C9.5987 19.5482 9.76538 19.9796 10.0662 20.3108C10.3671 20.642 10.7805 20.8493 11.2259 20.8923L11.3987 20.9007H18.5987C19.0461 20.9007 19.4775 20.734 19.8088 20.4332C20.14 20.1323 20.3473 19.7189 20.3903 19.2735L20.3987 19.1007V11.9007C20.3987 11.4532 20.232 11.0218 19.9311 10.6906C19.6303 10.3594 19.2169 10.1521 18.7715 10.1091L18.5987 10.1007ZM15.1931 4.9347L15.2507 5.1231L15.9407 7.7007H14.6975L14.0915 5.4339C13.9756 5.00178 13.703 4.6283 13.3267 4.38626C12.9505 4.14423 12.4975 4.05098 12.0563 4.1247L11.8871 4.1607L4.93068 6.0255C4.49878 6.14162 4.12558 6.41436 3.88378 6.79059C3.64198 7.16682 3.5489 7.6196 3.62268 8.0607L3.65868 8.2311L5.52348 15.1851C5.6234 15.5572 5.84007 15.8874 6.14161 16.1271C6.44315 16.3669 6.81367 16.5036 7.19868 16.5171V17.7171C6.58575 17.7042 5.99149 17.5038 5.49588 17.143C5.00028 16.7821 4.62714 16.2781 4.42668 15.6987L4.36428 15.4947L2.50068 8.5395C2.30359 7.80402 2.39355 7.02112 2.75231 6.34951C3.11107 5.67789 3.71178 5.16782 4.43268 4.9227L4.62228 4.8663L11.5763 3.0027C12.2793 2.81424 13.0269 2.8878 13.6798 3.20969C14.3326 3.53158 14.8461 4.07984 15.1247 4.7523L15.1931 4.9347Z"
              fill="#393A3C"
            />
          </svg>
            <span>{{user.get().user_type == 'job_seeker' ? 'Vacancies' : 'Talents'}}</span>
          
        </Link>
      </div>
      <div class="logout-item">
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#135672"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M16 17l5-5-5-5M21 12H9m-4 8V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
        </svg>
        <span>Logout</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-dropdown-wrapper {
  position: relative;
  display: inline-block;
  .profile-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    color: black;
    user-select: none;
    .avatar {
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }
  }
  .dropdown-menu {
    position: absolute;
    top: 110%;
    right: 0;
    background: linear-gradient(160deg, #b2e0e6 0%, #a3c9ce 100%);
    // border-radius: 1.2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    min-width: 20rem;
    min-height: 24rem;
    z-index: 10;
    padding: 0 0 1.5rem 0;
    display: flex;
    flex-direction: column;
    // align-items: stretch;
    .profile-card {
      display: flex;
      //   align-items: center;
      gap: 1rem;
      padding: 1rem 1rem 1rem 1rem;
      border-bottom: 1px solid #e0e0e0;
      position: relative;
      .profile-img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 1rem;
        object-fit: cover;
        border: 2px solid #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }
      .profile-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-top: 0.5rem;
        .profile-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #222;
        }
        .profile-title {
          font-size: 1rem;
          color: #555;
        }
      }
      .close-btn {
        background: none;
        border: none;
        position: absolute;
        top: 1.2rem;
        right: 1.2rem;
        cursor: pointer;
        padding: 0.2rem;
        border-radius: 50%;
        transition: background 0.2s;
        &:hover {
          background: #e0e0e0;
        }
      }
    }
    .dropdown-list {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      margin-top: 0.5rem;
      .dropdown-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.9rem 1rem;
        font-size: 1.08rem;
        color: #222;
        cursor: pointer;
        border-left: 3px solid transparent;
        background: transparent;
        transition: background 0.2s, border-color 0.2s;
        text-decoration: none;

       
        svg {
          min-width: 20px;
        }
        &.active,
        &:hover {
          background: #fff;
          border-left: 3px solid #135672;
        }
      }
    }
    .logout-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.2rem 2rem 0.2rem 1rem;
      font-size: 1.08rem;
      border-top: 1px solid #e0e0e0;
      color: #222;
      cursor: pointer;
      margin-top: auto;
      svg {
        min-width: 20px;
      }
      &:hover {
        color: #135672;
        background: #e0f7fa;
      }
    }
  }
}
</style>
