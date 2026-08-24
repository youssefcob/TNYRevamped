<script setup lang="ts">
import Modal from '@/SharedComponents/modal.vue';
import PrivacyPractices from './PrivacyPractices.vue';
import EditableText from '@/Components/Admin/EditableText.vue';
import { ref, Ref } from 'vue';

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const privacy: Ref<InstanceType<typeof Modal> | null> = ref(null);

const openModal = () => {
    if (privacy.value) {
        privacy.value.openModal();
    }
};

const closeModal = () => {
    if (privacy.value) {
        privacy.value.closeModal();
    }
};
</script>

<template>
    <Modal ref="privacy">
        <PrivacyPractices @close="closeModal()" />
    </Modal>
    <footer class="container">
        <div class="up">
            <div class="logo">
                <img src="@/Svg/footerlogo.svg" alt="">
            </div>
            <div class="info-wrapper">
                <div class="links">
                    <EditableText tag="h3" content-key="global.footer_legacy.links_heading" page="global" default="Quick Link" />
                    <ul>
                        <li><EditableText tag="span" content-key="global.footer_legacy.link.0" page="global" default="About TNY" /></li>
                        <li><EditableText tag="span" content-key="global.footer_legacy.link.1" page="global" default="Job Seekers" /></li>
                        <li><EditableText tag="span" content-key="global.footer_legacy.link.2" page="global" default="Employers" /></li>
                        <li><EditableText tag="span" content-key="global.footer_legacy.link.3" page="global" default="TNY News" /></li>
                    </ul>
                </div>
                <div class="contact-wrapper">
                    <EditableText tag="h3" content-key="global.footer_legacy.info_heading" page="global" default="Our Info" />

                    <!-- Map Link -->
                    <a href="https://maps.google.com/?q=8746+20th+Avenue,+Brooklyn,+NY+11214" target="_blank" rel="noopener noreferrer"
                        class="contact-info">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.6673 1.33301L16.334 19.6663" stroke="#21A8E0" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M34.6673 1.33301L23.0007 34.6663L16.334 19.6663L1.33398 12.9997L34.6673 1.33301Z"
                                stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <EditableText tag="span" class="text" content-key="global.footer_legacy.map_label" page="global" default="View on Google Maps" />
                    </a>

                    <!-- Address Link -->
                    <a href="https://maps.google.com/?q=8746+20th+Avenue,+Brooklyn,+NY+11214" target="_blank"
                        rel="noopener noreferrer" class="contact-info">
                        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M31 16.667C31 28.3337 16 38.3337 16 38.3337C16 38.3337 1 28.3337 1 16.667C1 12.6887 2.58035 8.87344 5.3934 6.06039C8.20644 3.24734 12.0218 1.66699 16 1.66699C19.9782 1.66699 23.7936 3.24734 26.6066 6.06039C29.4196 8.87344 31 12.6887 31 16.667Z"
                                stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M16 21.667C18.7614 21.667 21 19.4284 21 16.667C21 13.9056 18.7614 11.667 16 11.667C13.2386 11.667 11 13.9056 11 16.667C11 19.4284 13.2386 21.667 16 21.667Z"
                                stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <EditableText tag="span" class="text" content-key="global.footer_legacy.address" page="global" default="8746 20th Avenue, Brooklyn, NY 11214" />
                    </a>

                    <!-- Phone Numbers Links -->
                    <div class="contact-info">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M34.6664 26.1998V31.1998C34.6683 31.664 34.5732 32.1235 34.3872 32.5487C34.2013 32.974 33.9286 33.3558 33.5865 33.6696C33.2445 33.9834 32.8407 34.2223 32.401 34.371C31.9613 34.5197 31.4953 34.5749 31.0331 34.5332C25.9044 33.9759 20.9781 32.2234 16.6497 29.4165C12.6228 26.8576 9.20862 23.4435 6.64973 19.4165C3.83302 15.0685 2.08013 10.1182 1.53306 4.9665C1.49141 4.50561 1.54618 4.0411 1.69389 3.60254C1.8416 3.16398 2.07901 2.76098 2.391 2.4192C2.70299 2.07742 3.08273 1.80435 3.50604 1.61737C3.92935 1.43039 4.38696 1.33361 4.84973 1.33317H9.84973C10.6586 1.32521 11.4427 1.61163 12.056 2.13906C12.6693 2.66648 13.0699 3.39891 13.1831 4.19984C13.3941 5.79995 13.7855 7.37105 14.3497 8.88317C14.574 9.47971 14.6225 10.128 14.4896 10.7513C14.3566 11.3746 14.0478 11.9467 13.5997 12.3998L11.4831 14.5165C13.8557 18.6891 17.3105 22.1439 21.4831 24.5165L23.5997 22.3998C24.0529 21.9517 24.625 21.6429 25.2483 21.51C25.8715 21.3771 26.5199 21.4256 27.1164 21.6498C28.6285 22.2141 30.1996 22.6055 31.7997 22.8165C32.6093 22.9307 33.3487 23.3385 33.8773 23.9623C34.4058 24.5861 34.6867 25.3825 34.6664 26.1998Z"
                                stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="text">
                            <a href="tel:+13474414283"><EditableText tag="span" content-key="global.footer_legacy.phone_1" page="global" default="(347) 441-4283" /></a> – <a href="tel:+19179858327"><EditableText tag="span" content-key="global.footer_legacy.phone_2" page="global" default="(917) 985-8327" /></a>
                        </span>
                    </div>

                    <!-- Email Link -->
                    <a href="mailto:staffing@therapyofnewyork.com" class="contact-info">
                        <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.66732 1.66699H31.334C33.1673 1.66699 34.6673 3.16699 34.6673 5.00033V25.0003C34.6673 26.8337 33.1673 28.3337 31.334 28.3337H4.66732C2.83398 28.3337 1.33398 26.8337 1.33398 25.0003V5.00033C1.33398 3.16699 2.83398 1.66699 4.66732 1.66699Z"
                                stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M34.6673 5L18.0007 16.6667L1.33398 5" stroke="#21A8E0" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <EditableText tag="span" class="text" content-key="global.footer_legacy.email" page="global" default="staffing@therapyofnewyork.com" />
                    </a>
                </div>
            </div>
        </div>
        <div class="down">
            <div class="policy" @click="openModal()">
                <EditableText tag="span" content-key="global.footer_legacy.policy" page="global" default="TNY Staffing Corporation © 2026. Privacy Policy" />
            </div>
            <div class="follow">
                <EditableText tag="span" content-key="global.footer_legacy.follow_label" page="global" default="Follow us:" />

                <div class="socials">
                    <div class="socials">
                        <!-- LinkedIn Logo -->
                        <a href="https://www.linkedin.com/company/therapy-of-new-york" target="_blank"
                            rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="156 4 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M158.001 24.1688H161.601V10.8488H158.001V24.1688ZM159.801 4.96875C158.601 4.96875 157.641 5.92875 157.641 7.12875C157.641 8.32875 158.601 9.28875 159.801 9.28875C161.001 9.28875 161.961 8.32875 161.961 7.12875C161.961 5.92875 161.001 4.96875 159.801 4.96875ZM167.721 12.8888V10.8488H164.121V24.1688H167.721V17.3288C167.721 13.4888 172.641 13.2488 172.641 17.3288V24.1688H176.241V16.0087C176.241 9.52875 169.401 9.76875 167.721 12.8888Z"
                                    fill="white" />
                            </svg>
                        </a>

                        <!-- Facebook Logo -->
                        <a href="https://www.facebook.com/Therapyofnewyorkstaffingcompany/" target="_blank"
                            rel="noopener noreferrer">
                            <svg width="24" height="24" viewBox="195 2.56836 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_facebook)">
                                    <path
                                        d="M207 2.56836C208.102 2.56836 209.164 2.70898 210.188 2.99023C211.211 3.27148 212.164 3.67773 213.047 4.20898C213.93 4.74023 214.738 5.36523 215.473 6.08398C216.207 6.80273 216.836 7.61133 217.359 8.50977C217.883 9.4082 218.285 10.3652 218.566 11.3809C218.848 12.3965 218.992 13.459 219 14.5684C219 15.5527 218.887 16.5059 218.66 17.4277C218.434 18.3496 218.105 19.2285 217.676 20.0645C217.246 20.9004 216.73 21.666 216.129 22.3613C215.527 23.0566 214.848 23.6855 214.09 24.248C213.332 24.8105 212.52 25.2715 211.652 25.6309C210.785 25.9902 209.859 26.2559 208.875 26.4277V18.0371H211.676L212.203 14.5684H208.875V12.3184C208.875 11.8887 208.945 11.5488 209.086 11.2988C209.227 11.0488 209.414 10.8613 209.648 10.7363C209.883 10.6113 210.148 10.5293 210.445 10.4902C210.742 10.4512 211.051 10.4316 211.371 10.4316H211.863C212.027 10.4316 212.188 10.4355 212.344 10.4434V7.49023C211.906 7.41211 211.461 7.35352 211.008 7.31445C210.555 7.27539 210.105 7.25586 209.66 7.25586C208.934 7.25586 208.289 7.36523 207.727 7.58398C207.164 7.80273 206.691 8.11523 206.309 8.52148C205.926 8.92773 205.633 9.41602 205.43 9.98633C205.227 10.5566 205.125 11.2012 205.125 11.9199V14.5684H202.078V18.0371H205.125V26.4277C204.148 26.2793 203.223 26.0176 202.348 25.6426C201.473 25.2676 200.66 24.8066 199.91 24.2598C199.16 23.7129 198.484 23.084 197.883 22.373C197.281 21.6621 196.766 20.8926 196.336 20.0645C195.906 19.2363 195.578 18.3613 195.352 17.4395C195.125 16.5176 195.008 15.5605 195 14.5684C195 13.4668 195.141 12.4043 195.422 11.3809C195.703 10.3574 196.109 9.4043 196.641 8.52148C197.172 7.63867 197.797 6.83008 198.516 6.0957C199.234 5.36133 200.043 4.73242 200.941 4.20898C201.84 3.68555 202.797 3.2832 203.812 3.00195C204.828 2.7207 205.891 2.57617 207 2.56836Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_facebook">
                                        <rect width="24" height="24" fill="white" transform="translate(195 2.56836)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>

                        <!-- Instagram Logo -->
                        <a href="https://www.instagram.com/therapyofnewyork/" target="_blank" rel="noopener noreferrer">
                            <svg width="24" height="24" viewBox="235 2.56836 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M241.96 2.56836H252.04C255.88 2.56836 259 5.68836 259 9.52836V19.6084C259 21.4543 258.267 23.2246 256.961 24.5298C255.656 25.8351 253.886 26.5684 252.04 26.5684H241.96C238.12 26.5684 235 23.4484 235 19.6084V9.52836C235 7.68245 235.733 5.91215 237.039 4.6069C238.344 3.30164 240.114 2.56836 241.96 2.56836ZM241.72 4.96836C240.574 4.96836 239.475 5.4235 238.665 6.23366C237.855 7.04382 237.4 8.14262 237.4 9.28836V19.8484C237.4 22.2364 239.332 24.1684 241.72 24.1684H252.28C253.426 24.1684 254.525 23.7132 255.335 22.9031C256.145 22.0929 256.6 20.9941 256.6 19.8484V9.28836C256.6 6.90036 254.668 4.96836 252.28 4.96836H241.72ZM253.3 6.76836C253.698 6.76836 254.079 6.92639 254.361 7.2077C254.642 7.489 254.8 7.87053 254.8 8.26836C254.8 8.66618 254.642 9.04772 254.361 9.32902C254.079 9.61032 253.698 9.76836 253.3 9.76836C252.902 9.76836 252.521 9.61032 252.239 9.32902C251.958 9.04772 251.8 8.66618 251.8 8.26836C251.8 7.87053 251.958 7.489 252.239 7.2077C252.521 6.92639 252.902 6.76836 253.3 6.76836ZM247 8.56836C248.591 8.56836 250.117 9.2005 251.243 10.3257C252.368 11.4509 253 12.9771 253 14.5684C253 16.1597 252.368 17.6858 251.243 18.811C250.117 19.9362 248.591 20.5684 247 20.5684C245.409 20.5684 243.883 19.9362 242.757 18.811C241.632 17.6858 241 16.1597 241 14.5684C241 12.9771 241.632 11.4509 242.757 10.3257C243.883 9.2005 245.409 8.56836 247 8.56836ZM247 10.9684C246.045 10.9684 245.13 11.3476 244.454 12.0228C243.779 12.6979 243.4 13.6136 243.4 14.5684C243.4 15.5231 243.779 16.4388 244.454 17.1139C245.13 17.7891 246.045 18.1684 247 18.1684C247.955 18.1684 248.87 17.7891 249.546 17.1139C250.221 16.4388 250.6 15.5231 250.6 14.5684C250.6 13.6136 250.221 12.6979 249.546 12.0228C248.87 11.3476 247.955 10.9684 247 10.9684Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
.container {
    background-color: #031116;
    @include pagePadding();
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        margin-bottom: 1rem;
    }


    .up {
        display: flex;
        justify-content: space-around;
        padding-bottom: 2rem;
        border-bottom: 1px solid white;



        // align-items: center;
        .logo {
            margin-top: 1rem;

            img {
                width: clamp(100px, 10vw, 500px);
            }
        }

        .info-wrapper {
            display: flex;
            gap: 4vw;

            @include media-max(phone) {
                flex-direction: column;
                // gap: 4rem;
            }

            .links {


                h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 1rem;
                }

                ul {
                    list-style: none;

                    li {
                        font-size: 1rem;
                        color: white;
                        margin-bottom: 1rem;
                        text-decoration: underline;
                        cursor: pointer;

                    }
                }
            }

            .contact-wrapper {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .contact-info {
                    display: flex;
                    gap: 3rem;
                    align-items: center;
                    text-decoration: none;
                    color: white;

                    .text,
                    .text a,
                    a {
                        text-decoration: none;
                        color: white;
                        font-size: 0.9rem;
                    }

                    svg {
                        width: 1.6rem;
                        height: 1.6rem;
                    }
                }
            }
        }

        @include media-max(tablet) {
            flex-direction: column;
            gap: 4rem;
            justify-content: center;
            align-items: center;

            .logo {
                img {
                    width: clamp(100px, 30vw, 500px);
                }
            }

            .up {
                justify-content: space-between;
            }
        }
    }

    .down {
        padding: 1.5rem 9rem;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include media-max(phone) {
            flex-direction: column;
            gap: 4rem;
            padding: 1.5rem 0;
        }

        span {
            font-weight: 400;

            font-size: 1rem;

            @include media-max(phone) {
                font-size: 0.8rem;
            }
        }
    }
}

.policy {
    cursor: pointer;

}

.follow {
    display: flex;
    gap: 1rem;
    align-items: flex-end;

    .socials {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: .7rem;
        margin-top: 0.5rem;
    }
}
</style>