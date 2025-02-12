<template>
    <ul role="menubar">
        <li role="menuitem">
            <a href="#home">Home</a>

        </li>
        <li role="menuitem">
            <a href="#about">About us</a>
        </li>
        <li role="menuitem">
            <a href="#services">Services</a>
        </li>
        <li role="menuitem">
            <a href="#employers">Employers</a>
        </li>
        <li role="menuitem">
            <a href="#jobs">Job Seekers</a>
        </li>
        <li role="menuitem">
            <a href="#news">News</a>
        </li>
        <li role="menuitem">
            <a href="#contact">Contact Us</a>
        </li>

    </ul>
</template>

<style scoped lang="scss">

ul{
    display:flex;
    gap:1rem;
    list-style:none;
    li{
        a{
            text-decoration:none;
            color:black;
            font-size:1.2rem;
            position: relative;
            &::after{
                content:'';
                position: absolute;
                bottom:-3px;
                // margin-top:5px;
                display:block;
                width:0%;
                height:2px;
                background:$blue;
                transition:width .3s;
            }
            &:hover{
                &::after{
                    width:100%;
                }
            }
        }
    }
}

</style>