<script setup lang="ts">

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="row-line">
                <div class="column">
                    <a href="#" class="footer__logo">
                        <img src="/images/logo-footer.svg" alt=""/>
                    </a>
                </div>
                <div class="column">
                    <div class="row-line">
                        <div class="column-w50">
                            <h4 class="name">Danny Sheridan</h4>
                            <p><a class="mail-link" href="mailto:danny.sheridan@jll.com">danny.sheridan@jll.com</a></p>
                        </div>
                        <div class="column-w50">
                            <h4 class="name">Amanda Davis</h4>
                            <p><a class="mail-link" href="mailto:amanda.davis@jll.com">amanda.davis@jll.com</a></p>
                        </div>
                    </div>
                    <ul class="company-list">
                        <li><a href="#"><img src="/images/stolen-ico.svg" alt="STONEBRIDGE"></a></li>
                        <li><a href="#"><img src="/images/jll-ico.svg" alt="JLL"></a></li>
                    </ul>
                </div>
            </div>
            <p class="copy">Copyright © 2024 Stonebridge. All rights reserved <br/>
                Disclosures & Licenses DMCA </p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    background: #FF5B35;
    padding: 0 38px 30px;
    position: relative;
    @media (min-width: 768px) and (max-width: 1023px) {
        padding-top: 3px;
    }
    @media (max-width: 767px) {
        padding: 0 20px 30px;
    }
    &:before {
        content: "";
        background: url("/images/footer-line.svg") repeat-x 50% 0;
        background-size: cover;
        height: 236px;
        display: block;
        position: absolute;
        top: -236px;
        left: -550px;
        right: 0;
        @media (max-width: 1540px) {
            left: -439px;
        }
        @media (max-width: 1240px) {
            left: -156px;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            left: -68px;
            height: 170px;
            top: -168px;
        }
        @media (max-width: 767px) {
            background-position: 33% 0;
            height: 114px;
            top: -113px;
            left: -43px;
        }
    }

    .column {
        &:first-child {
          @media (min-width: 768px) {
            width: 35%;
          }
        }

        &:last-child {
            @media (min-width: 768px) and (max-width: 1023px) {
                padding-left: 40px;
            }
            @media (min-width: 768px) {
                width: 65%;
            }
        }
    }

    .row-line {
        @media (max-width: 767px) {
            justify-content: space-between;
        }

        .column-w50 {
            @media (max-width: 767px) {
                width: 50%;
            }
        }
    }

    &__logo {
        max-width: 256px;
        width: 100%;
        height: auto;
        @media (min-width: 768px) and (max-width: 1023px) {
            max-width: 180px;
        }
        @media (max-width: 767px) {
            max-width: 150px;
            display: block;
            margin-bottom: 50px;
        }
    }

    .name {
        font: normal normal 300 35px/30px 'Flecha M', sans-serif;
        letter-spacing: 0;
        color: #FFFFFF;
        margin: 0;
        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 28px;
        }
        @media (max-width: 767px) {
            font-size: 22px;
        }
    }

    .mail-link {
        font: normal normal normal 22px/30px 'Graphik', sans-serif;
        letter-spacing: 0;
        color: #FFFFFF;
        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 16px;
        }
        @media (max-width: 767px) {
            font-size: 12px;
        }
        &:hover {
            text-decoration: underline;
        }
    }

    .copy {
        margin-top: 87px;
        color: white;
        font-family: 'Graphik', sans-serif;
        text-align: center;
        @media (max-width: 767px) {
            margin-top: 37px;
        }
    }

    .company-list {
        display: flex;
        align-items: center;
        margin-left: -33px;
        margin-top: 88px;
        @media (max-width: 767px) {
            margin-top: 30px;
        }

        li {
            padding: 0 33px;
            position: relative;

            &:first-child {
                &:after {
                    content: "";
                    display: block;
                    background: #FFFFFF;
                    width: 1px;
                    height: 100%;
                    position: absolute;
                    right: 0;
                    top: 0
                }
            }
        }
    }
}
</style>
