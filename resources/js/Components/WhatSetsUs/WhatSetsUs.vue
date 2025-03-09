<template>
    <div class="container">
        <h2 class="title">What Sets Us Apart</h2>

        <div class="first-wrapper">
            <p class="big">Our ability to provide high-quality candidates, responsive service, industry expertise, a
                strong network,
                transparency, compliance, and a focus on building long-term relationships with our clients.</p>
            <!-- <img src="images/whatsetsus/small.png" alt=""> -->
            <div class="img" :style="`background-image:url(/images/whatsetsus/small.png)`"></div>
        </div>

        <div class="second-wrapper">
            <div class="img" :style="`background-image:url(/images/whatsetsus/big.png)`"></div>

            <div class="content">
                <div class="box">
                    <h3 class="big">Our Vision</h3>
                    <p class="big">Our vision is to become the leading partner in the delivery of highly efficient
                        professionals in
                        the healthcare staffing industry and the staffing agency of choice by helping people find the
                        best organization where they can practice their skills, bringing out their best talent possible.
                    </p>
                </div>
                <div class="box">
                    <h3 class="big">Our Mission</h3>
                    <p class="big">Our ongoing commitment revolves around elevating the caliber of patient care through
                        the
                        meticulous selection and employment of highly skilled and accredited professionals.</p>
                </div>
            </div>
        </div>

        <div class="btn-container">
            <button class="btn"> <span class="btnFont">Apply Now</span></button>
            <button class="btn secondary"> <span class="btnFont">Request Service</span></button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
$gap: 2rem;
$border-radius:40px;

.container {
    @include pagePadding();
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $gap;
    background-color: $light-grey;
    p{
        line-height: 150%;

    }



    .first-wrapper {
        gap: $gap;
        display: grid;
        grid-template-columns: 4fr 2fr;
        overflow: hidden;
        min-height: 13rem;

        @include media-max(tablet) {
            grid-template-columns: 1fr;
        }

        p.big {
            display: flex;
            align-items: center;
        }

        .img {
            // width: 100%;
            height: 100%;
            min-height: 7rem;
            background-size: cover;
            border-radius: $border-radius;

            @include media-max(tablet) {
                min-height: 10rem;
            }

            // border-radius:14px;

            // background-position: center;
        }

    }

    .second-wrapper {
        display: grid;
        gap: $gap;
        grid-template-columns: 3fr 2fr;

        @include media-max(tablet) {
            grid-template-columns: 1fr;
        }

        .img {
            min-width: 100%;
            min-height: 100%;
            background-size: cover;
            border-radius: $border-radius;

            @include media-max(tablet) {
                min-width: 10rem;
                min-height: 100%;
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: $gap;

            .box {
                display: flex;
                flex-direction: column;
                gap: calc($gap / 2);
                border: 3px solid $navy;
                padding: 2rem;
                border-radius: 14px;
                text-align: center;

                h3.big {
                    color: $blue;
                }

                p.big {
                    color: $black;
                }
            }
        }

    }



    h2.title {
        @extend h1;
        color: $navy;
    }

    h3.big {
        @extend h2;
        color: $navy;
    }

    p.big {
        @extend h3;
        color: $black;
    }

    .btn-container{
        width:100%;
        display:flex;
        justify-content: space-between;
    }
}
</style>