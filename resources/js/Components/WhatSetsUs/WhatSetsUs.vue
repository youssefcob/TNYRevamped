<template>
    <div class="container">
        <h2>What Sets Us Apart</h2>

        <div class="first-wrapper">
            <p>Our ability to provide high-quality candidates, responsive service, industry expertise, a strong network,
                transparency, compliance, and a focus on building long-term relationships with our clients.</p>
            <!-- <img src="images/whatsetsus/small.png" alt=""> -->
            <div class="img" :style="`background-image:url(/images/whatsetsus/small.png)`"></div>
        </div>

        <div class="second-wrapper">
            <div class="img-wrapper">
                <img src="images/whatsetsus/big.png" alt="">
            </div>
            <div class="content">
                <div class="box">
                    <h3>Our Vision</h3>
                    <p>Our vision is to become the leading partner in the delivery of highly efficient professionals in the healthcare staffing industry and the staffing agency of choice by helping people find the best organization where they can practice their skills, bringing out their best talent possible.</p>
                </div>
                <div class="box">
                    <h3>Our Mission</h3>
                    <p>Our ongoing commitment revolves around elevating the caliber of patient care through the meticulous selection and employment of highly skilled and accredited professionals.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$gap:2rem;
.container{
    @include pagePadding();
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $gap;
    .first-wrapper{
       display:flex;
       align-items: center;
       gap:$gap;
       @extend h3;
       line-height: 120%;
       .img{
        width:100%;
       }

    }

    .second-wrapper{
        display:flex;
        gap: $gap;
    }
}
</style>