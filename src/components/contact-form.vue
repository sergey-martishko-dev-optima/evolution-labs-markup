<script setup lang="ts">

</script>

<template>
    <section class="contact-form">
        <div class="container">
            <div class="row-line">
                <div class="column-w50">
                    <h3 class="contact-form__title">For leasing inquiries and
                        additional information,
                        please enter your
                        contact information.</h3>
                    <a class="desktop download" target="_blank" href="https://pdfobject.com/pdf/sample.pdf">DOWNLOAD
                        BROCHURE</a>
                </div>
                <div class="column-w50">
                    <form class="form">
                        <div class="item">
                            <input type="text" class="input-field" placeholder="FIRST NAME"/>
                        </div>
                        <div class="item">
                            <input type="text" class="input-field" placeholder="LAST NAME"/>
                        </div>
                        <div class="item">
                            <input type="text" class="input-field" placeholder="COMPANY"/>
                        </div>
                        <div class="item">
                            <input type="text" class="input-field" placeholder="PHONE"/>
                        </div>
                        <div class="item">
                            <input type="email" class="input-field" placeholder="EMAIL"/>
                        </div>
                        <div class="item">
                            <input class="form-submit" type="submit" value="SUBMIT"/>
                        </div>
                        <div class="item mobile">
                            <a class="download" target="_blank" href="https://pdfobject.com/pdf/sample.pdf">DOWNLOAD
                                BROCHURE</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contact-form {
    background: #DAE0DE;
    padding: 100px 38px 300px;
    position: relative;
    @media (max-width: 767px) {
        padding-bottom: 140px;
        padding-top: 0;
    }

    &:before {
        content: "";
        background: url("/images/contact-line.svg") repeat-x 100% 0;
        background-size: cover;
        height: 236px;
        display: block;
        position: absolute;
        top: -236px;
        left: 0;
        right: 0;
        @media (max-width: 1600px) {
            background-position: -100% 0;
            height: 323px;
        }
        @media (max-width: 1240px) {
            height: 236px;
        }
        @media (max-width: 767px) {
            background-position: 2% 0;
            height: 111px;
            top: -110px;
        }
    }

    &__title {
        font: normal normal 300 70px/80px 'Flecha M', sans-serif;
        letter-spacing: 0;
        color: #FF5B35;
        margin-bottom: 30px;
        @media (max-width: 1540px) {
            font-size: 50px;
            line-height: 55px;
        }
        @media (max-width: 767px) {
            font-size: 30px;
            line-height: 38px;
            margin-bottom: 50px;
        }
    }

    .download {
        text-decoration: underline;
        font: normal normal normal 26px/30px 'Flecha M', sans-serif;
        letter-spacing: 0;
        color: #2C72E4;
        transition: .4s;
        &:hover {
          color: #FF5B35;
          text-decoration: none;
        }
    }

    .form {
        padding: 0 50px;
        @media (max-width: 767px) {
            padding: 0;
        }

        .item {
            margin-bottom: 30px;
            @media (max-width: 767px) {
                margin-bottom: 50px;
                display: flex;
                justify-content: center;
            }
        }

        .input-field {
            background: transparent;
            border: 0;
            border-bottom: 1px solid #0B0511;
            width: 100%;
            font: normal normal 300 34px/42px 'Graphik', sans-serif;

            &::placeholder {
                color: #0B0511;
            }

            @media (max-width: 1340px) {
                font-size: 20px;
                line-height: 27px;
            }
        }
    }

    .form-submit {
        background: #2C72E4;
        border-radius: 10px;
        padding: 10px 30px;
        width: 100%;
        max-width: 565px;
        @media (max-width: 1540px) {
            max-width: 250px;
            margin: 0 auto;
            display: block;
        }
    }
}
</style>
