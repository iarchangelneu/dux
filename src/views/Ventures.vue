<template>
  <div class="container">
    <div class="header">
      <div class="header__menu">
        <div class="cubes">
          <div class="cube" data-aos="fade-down" data-aos-delay="0"></div>
          <div class="cube" data-aos="fade-down" data-aos-delay="300"></div>
          <div class="cube" data-aos="fade-down" data-aos-delay="500"></div>
          <div class="cube" data-aos="fade-down" data-aos-delay="700"></div>
          <div class="cube" data-aos="fade-down" data-aos-delay="900"></div>
          <div class="cube" data-aos="fade-down" data-aos-delay="1100"></div>
          <div class="cube" data-aos="fade-down" data-aos-delay="1300"></div>
          <div class="cube" data-aos="fade-down" data-aos-delay="1500"></div>
          <!--          <div class="changeable"></div>-->
        </div>
        <!--        <div class="animatin-header_width">-->
        <!--          <img src="../assets/images/ventures/header-bg.png" />-->
        <!--        </div>-->
        <HeaderPart @opened="openedMobMenu" style="padding: 25px" />
      </div>
      <!--      <img src="../assets/images/ventures/header-bg.png"/>-->
      <div class="content">
        <p class="p">
          <span class="brave">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <span>DUXGROUP VENTURES</span>
          </span>
          We invest in <br /> <span class="blue">the future of<br> iGaming</span>
        </p>
      </div>
    </div>
    <div class="investment">
      <div class="title">
        <BlockTitle title="investments"></BlockTitle>
      </div>
      <div class="content" data-aos="fade-down">
        <p><span class="blue">DUXGROUP VENTURES</span> IS A VENTURE CAPITAL FUND THAT INVESTS <span class="blue">€1-5
            MILLION</span> IN IGAMING PROJECTS IN LINE WITH A <span class="blue">WIN-WIN MODEL</span> </p>
        <div class="imgs">
          <img src="../assets/images/ventures/investment/euro-big.png" class="first__fig fig__hover" />
          <img src="../assets/images/ventures/investment/dive-small.png" class="first__fig fig__hover2" />
          <img src="../assets/images/ventures/investment/euro-middle.png" class="first__fig fig__hover3" />
          <img src="../assets/images/ventures/investment/euro-small.png" class="first__fig fig__hover4" />
          <img src="../assets/images/ventures/investment/Union.png" class="first__fig fig__hover5" />
        </div>
      </div>
    </div>
    <div class="principes">
      <div class="title">
        <BlockTitle title="Our principles"></BlockTitle>
      </div>
      <div class="items" data-aos="fade-down">
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/3.png" />
            <p>1 + 1 = 3</p>
          </div>
          <div class="text">
            <p>The principle of synergy will help your business develop geometrically.</p>
          </div>
        </div>
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/2.png" />
            <p>A Strong Team</p>
          </div>
          <div class="text">
            <p>We have combined the best experts in the field of marketing, product, and operations in the online
              gambling sector.</p>
          </div>
        </div>
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/1.png" />
            <p>iGaming Network</p>
          </div>
          <div class="text">
            <p>We have been working in the market for more than 8 years and can introduce you to all the right people.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="invest">
      <div class="title">
        <BlockTitle title="We don't just invest money"></BlockTitle>
      </div>
      <div data-aos="fade-down">
        <div class="list__title__mob">
          <p>There are more than <br style="display:none"> <span class="blue">350 professionals</span> in our team</p>
        </div>
        <div class="description">
          <div class="list">
            <div class="list__title">
              <p>There are more than <span class="blue"><br>350 professionals</span> in our team</p>
            </div>
            <div class="items">
              <ul>
                <li>Developers</li>
                <li>BI analyticians</li>
                <li>Marketologists</li>
                <li>Designers</li>
                <li>lawyers</li>
                <li>financiers</li>
                <li>And many more</li>
              </ul>
            </div>
          </div>
          <div class="img">
            <img src="../assets/images/ventures/invest/image.jpeg" />
          </div>
        </div>
      </div>
      <div class="advert" data-aos="fade-down">
        <p>WE ARE A <span class="blue">STRONG TEAM</span> THAT HAS BEEN WORKING IN IGAMING FOR MORE THAN <span
            class="blue">8 YEARS.</span>
          WHEN WE INVEST, <span class="blue">WE NOT ONLY INVEST MONEY,</span> BUT ALL THE EXPERTISE WE HAVE GATHERED
          DURING OUR OWN BUSINESS ADVENTURE.
          WE CAN OFFER ALL OUR <span class="blue">INVALUABLE KNOWLEDGE AND EXPERIENCE,</span> WHICH WE CALL <span
            class="blue"> SMART MONEY.</span>
          WE CAN HELP YOU <span class="blue">ENTER THE IGAMING MARKET</span> AND SAVE TIME.</p>
      </div>
    </div>
    <div class="introduce">
      <div class="title">
        <BlockTitle title="Introduce yourself"></BlockTitle>
      </div>
      <div class="content" data-aos="fade-down">
        <div class="request">
          <p>Please <span class="blue">tell us</span> the following about <span class="blue">your business:</span></p>
        </div>
        <div class="list">
          <ul>
            <li><span>Please write your name and your company name.</span></li>
            <li><span>Tell us your position within the company.</span></li>
            <li><span>What does your company do? What is its main idea?</span></li>
            <li><span>What are the advantages of your business? How can it compete on the market?</span></li>
            <li><span>How do you think we can help your company? What do you want from our collaboration?</span></li>
            <li><span>Please leave your request in our contact form. These questions will help us get acquainted and
                find common ground.</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact">
      <div data-aos="fade-down">
        <div class="title">
          <p>Have a <span class="blue">cool idea</span> and want to conquer the <span class="blue">iGaming
              market?</span>
            Then write to us and we'll figure out how to make a <span class="blue">great product together.</span></p>
        </div>
        <div class="form">
          <input type="email" placeholder="You contact e-mail" id="mail__input">
          <textarea placeholder="Comment"></textarea>
          <p @click="test">apply now</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <FooterPart />

    </div>
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import FooterPart from "@/components/Footer";
import BlockTitle from '../components/BlockTitle.vue';
export default {
  name: "Ventures-page",
  data() {
    return {
      menuClosed: false,
    }
  },
  methods: {
    openedMobMenu(value) {
      if (value) {
        this.menuClosed = !this.menuClosed
      } else {
        this.menuClosed = true
      }
    },
    test() {
      let mail = document.getElementById('mail__input')

      if (mail.value.length <= 0) {
        mail.classList.add('error')
      }
      else {
        mail.classList.remove('error')
      }
    },
  },
  components: { FooterPart, HeaderPart, BlockTitle },
}
</script>

<style scoped lang="scss">
.error {
  border: 1px solid #C22B2B !important;
}

@keyframes rotate__figure {


  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

.first__fig {
  animation: rotate__figure 10s infinite linear;
  -webkit-animation: rotate__figure 10s infinite linear;
  -moz-animation: rotate__figure 10s infinite linear;
  -o-animation: rotate__figure 10s infinite linear;
}

::placeholder {
  color: #828FA1;
}

.menu-opened-for-container {
  padding: 25px 0;
}

.blue {
  color: #2F5BD8;
}

.small-header {
  display: none;
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .header {
    background: #010C28 url('../assets/images/gradient.png') center;
    background-size: cover;
    //background: linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
    position: relative;
    overflow: hidden;
    z-index: 1;
    height: 702px;

    &__menu {
      z-index: 10;
      //background-image: url('../assets/images/ventures/header-bg.png');
      //background-repeat: no-repeat;
      min-height: 300px;
      //padding: 25px;
      background-position: right;

      .cubes {
        position: absolute;
        right: 0;
        margin: 0;
        z-index: -1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        div:nth-child(1) {
          width: 50px;
          height: 100px !important;
        }

        div:nth-child(2) {
          width: 70px;
          height: 150px !important;
        }

        div:nth-child(3) {
          //animation: 1s ease-in 2s 1 run;
          width: 90px;
          height: 190px !important;
        }

        div:nth-child(4) {
          width: 110px;
          height: 240px !important;
        }

        div:nth-child(5) {
          width: 130px;
          height: 290px !important;
        }

        div:nth-child(6) {
          width: 150px;
          height: 360px !important;
        }

        div:nth-child(7) {
          width: 170px;
          height: 360px !important;
        }

        div:nth-child(8) {
          width: 190px;
          height: 360px !important;
        }

        .cube {
          //background-color: red;
          border: 1px solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(to bottom, #0046b0, #0058ba, #0069c2, #0079c8, #0089cd);
        }
      }
    }
  }

  .container .header .content .p .brave svg {
    min-width: 20px;
    min-height: 20px;
  }

  .container .contact .title {
    width: 85% !important;
  }

  .container .invest .description .list__title p {
    font-size: 36px !important;

  }

  .container .invest .list__title__mob p {
    font-size: 38px !important;

  }

  .container .header .content .p .brave {
    margin-top: 20px !important;
  }

  .container .header .content .p .brave svg {
    max-width: 14px !important;
    max-height: 14px !important;
    min-width: 14px;
  }

  .container {
    &>* {
      margin-top: -1px;
    }

    .header {
      height: 740px !important;

      &__menu {
        //background-image: url('../assets/images/ventures/header1024.png') !important;
        //min-height: 700px !important;
        //.cubes{
        //  .cube{
        //
        //  }
        //  div:nth-child(1){
        //    width: 20px !important;
        //    margin-right: 10px !important;
        //  }
        //  div:nth-child(2){
        //    width: 40px !important;
        //    margin-right: 10px !important;
        //  }
        //  div:nth-child(3){
        //    width: 60px !important;
        //    margin-right: 12px !important;
        //  }
        //  div:nth-child(4){
        //    width: 80px !important;
        //    margin-right: 15px !important;
        //  }
        //  div:nth-child(5){
        //    width: 100px !important;
        //    margin-right: 20px !important;
        //  }
        //  div:nth-child(6){
        //    width: 120px !important;
        //    margin-right: 40px !important;
        //  }
        //  div:nth-child(7){
        //    width: 140px !important;
        //    margin-right: 60px !important;
        //  }
        //  div:nth-child(8){
        //    width: 160px !important;
        //    margin-right: 25px !important;
        //  }
        //}
        background-position: top 0px right 0 !important;

        .cubes {
          // div:nth-child(1) {
          //   width: 30px !important;
          //   height: 60px !important;
          //   margin-right: 10px !important;
          // }

          // div:nth-child(2) {
          //   width: 20px !important;
          //   height: 80px !important;
          //   margin-right: 10px !important;
          // }

          // div:nth-child(3) {
          //   width: 40px !important;
          //   height: 100px !important;
          //   margin-right: 12px !important;
          // }

          // div:nth-child(4) {
          //   width: 60px !important;
          //   height: 110px !important;
          //   margin-right: 15px !important;
          // }

          // div:nth-child(5) {
          //   width: 80px !important;
          //   height: 110px !important;
          //   margin-right: 18px !important;
          // }

          // div:nth-child(6) {
          //   width: 90px !important;
          //   height: 110px !important;
          //   margin-right: 20px !important;
          // }

          // div:nth-child(7) {
          //   width: 100px !important;
          //   height: 110px !important;
          //   margin-right: 25px !important;
          // }

          // div:nth-child(8) {
          //   width: 120px !important;
          //   height: 110px !important;
          //   margin-right: 20px !important;
          // }
        }
      }

      .content {
        p {
          margin-top: 70px !important;
          font-size: 110px !important;
          line-height: 105% !important;

          .brave {
            width: 250px !important;
            margin-right: 0px !important;
            font-size: 28px !important;
            line-height: 35px !important;
            letter-spacing: 0.03em !important;
            vertical-align: top !important;
          }
        }
      }
    }

    .investment {
      padding-top: 100px !important;

      .content {
        padding: 200px 0 125px 25px !important;

        p {
          width: 60% !important;
          font-size: 58px !important;
        }
      }

      .imgs {
        img:first-child {
          top: 20px !important;
          right: 20% !important;
        }

        img:nth-child(5) {
          top: 230px !important;
          right: 0 !important;
        }

        img:nth-child(3) {
          left: 150px !important;
        }

        img:nth-child(2) {
          bottom: 15px !important;
          right: 200px !important;
        }
      }
    }

    .principes {
      padding-top: 10px !important;
      padding-bottom: 110px !important;

      .items {
        .item {
          &__title {
            font-weight: 400 !important;
            font-size: 28px !important;
            line-height: 28px !important;
            letter-spacing: 0.03em !important;
          }

          .text {
            font-weight: 400 !important;
            font-size: 20px !important;
            line-height: 27px !important;
          }
        }
      }
    }

    .invest {
      .list__title__mob {
        margin-top: 70px;
        display: none !important;
        width: 75% !important;
        padding: 0 25px;
      }

      .description {
        margin-top: 20px !important;

        .list {
          &__title {
            display: block !important;
          }

          .items {
            margin: 0 !important;
          }
        }
      }
    }

    .introduce {
      .content {


        &>* {
          width: 100% !important;
        }

        .request p {
          font-size: 58px !important;
        }

        .list ul {
          padding-left: 20px !important;

          li {
            font-size: 19px !important;

            span {
              left: 20px !important;
            }
          }
        }
      }
    }

    .contact {
      padding: 100px 0 !important;
    }
  }
}

@media screen and (max-width: 1024px) {
  .container .header .content .p .brave svg {
    min-width: 10px;
    min-height: 10px;
  }

  .container {
    &>* {
      margin-top: -1px;
    }

    .header {
      height: 430px !important;

      &__menu {
        //background-image: url('../assets/images/ventures/header768.png') !important;
        min-height: 120px !important;
        background-position: top 0px right 0 !important;

        .cubes {
          div:nth-child(1) {
            width: 10px !important;
            height: 60px !important;
            margin-right: 10px !important;
          }

          div:nth-child(2) {
            width: 20px !important;
            height: 80px !important;
            margin-right: 10px !important;
          }

          div:nth-child(3) {
            width: 40px !important;
            height: 100px !important;
            margin-right: 12px !important;
          }

          div:nth-child(4) {
            width: 60px !important;
            height: 110px !important;
            margin-right: 15px !important;
          }

          div:nth-child(5) {
            width: 80px !important;
            height: 110px !important;
            margin-right: 18px !important;
          }

          div:nth-child(6) {
            width: 90px !important;
            height: 110px !important;
            margin-right: 20px !important;
          }

          div:nth-child(7) {
            width: 100px !important;
            height: 110px !important;
            margin-right: 25px !important;
          }

          div:nth-child(8) {
            width: 120px !important;
            height: 110px !important;
            margin-right: 20px !important;
          }
        }
      }

      .content {
        p {
          font-size: 84px !important;
          line-height: 105% !important;

          .brave {
            margin: 0 !important;
            margin-right: 30px !important;
            margin-bottom: 27px !important;
            font-size: 22px !important;
            width: 160px !important;
            line-height: 25px !important;
            vertical-align: bottom !important;

            svg {
              width: 15px !important;
              height: 15px !important;
            }
          }
        }
      }
    }

    .investment {
      padding-top: 70px !important;

      .content {
        padding: 90px 0 70px 8px !important;

        p {
          width: 75% !important;
          font-size: 58px !important;
        }
      }

      .imgs {
        img:nth-child(4) {
          top: 80px !important;
          left: 10px !important;
          width: 40px !important;
          height: 40px !important;
        }

        img:nth-child(3) {
          top: 0px !important;
          left: 80px !important;
          width: 75px !important;
          height: 75px !important;
        }

        img:first-child {
          top: 20px !important;
          right: 20% !important;
          width: 140px !important;
          height: 110px !important;
        }

        img:nth-child(5) {
          top: 150px !important;
          right: 20px !important;
          width: 180px !important;
          height: 175px !important;
        }

        img:nth-child(2) {
          bottom: 0 !important;
          right: 200px !important;
          width: 68px !important;
          height: 62px !important;
        }
      }
    }

    .principes {
      padding-top: 10px !important;
      padding-bottom: 70px !important;

      .items {
        padding: 50px 8px 0 8px !important;

        .item {
          &__title {
            font-size: 20px !important;
            line-height: 25px !important;
            letter-spacing: 0.03em !important;

            p {
              margin-left: 20px !important;
            }

            img {
              width: 48px !important;
              ;
            }
          }

          .text {
            font-size: 16px !important;
            line-height: 20px !important;
            letter-spacing: 0.04em !important;
          }
        }
      }
    }

    .invest {
      .list__title__mob {
        margin-top: 70px;
        display: block !important;
        width: 75% !important;
        padding: 0 25px;

        p {
          font-size: 58px !important;
          line-height: 60px !important;
          letter-spacing: 0.03em !important;
          text-transform: uppercase !important;
        }
      }

      .description {
        margin-top: 20px !important;

        .list {
          &__title {
            display: none !important;
          }

          .items {
            margin-top: 0 !important;
          }
        }

        .img {
          width: 50% !important;
        }
      }

      .advert {
        padding: 48px 8px !important;

        p {
          font-size: 38px !important;
          line-height: 110% !important;
        }
      }
    }

    .introduce {
      .content {
        flex-direction: column !important;
        margin-top: 55px !important;

        &>* {
          width: 100% !important;
        }

        .request p {
          font-size: 58px !important;

          line-height: 60px !important;
        }

        .list ul {
          padding-left: 20px !important;

          li {
            font-size: 18px !important;
            line-height: 24px !important;

            span {
              left: 15px !important;
            }
          }
        }
      }
    }

    .contact {
      padding: 70px 0 110px 0 !important;

      .title {
        width: 95% !important;
        margin: 0 auto;

        p {
          font-weight: 400 !important;
          font-size: 58px !important;
          line-height: 60px !important;
          letter-spacing: 0.03em !important;
        }
      }
    }
  }
}

@media screen and (max-width: 450px) {

  .container .header .content p {
    display: flex !important;
    // font-size: 20px !important;
  }

  .container .contact .form p {
    border-radius: 4px !important;
  }

  .container {
    .header {
      .content {
        .p {
          .brave {
            margin-bottom: 10px !important;
          }
        }
      }
    }
  }

  .container .header .content .p .brave svg {
    margin-bottom: 0 !important;

  }
}

@media screen and (max-width: 450px) {
  .container {
    .header {
      .content {
        .p {
          font-size: 20px !important;
        }
      }
    }
  }

  .container .header .content p {
    display: flex !important;
  }

  .container .header .content .p {
    font-size: 34px !important;
  }
}

@media screen and (max-width: 768px) {


  .container {
    .header {
      &__menu {
        //background-image: url('../assets/images/ventures/header768.png') !important;
        min-height: 120px !important;
        background-position: top 0px right 0 !important;

        .cubes {
          div:nth-child(1) {
            width: 30px !important;
            height: 60px !important;
            margin-right: 10px !important;
          }

          div:nth-child(2) {
            width: 40px !important;
            height: 80px !important;
            margin-right: 10px !important;
          }

          div:nth-child(3) {
            width: 40px !important;
            height: 100px !important;
            margin-right: 12px !important;
          }

          div:nth-child(4) {
            width: 60px !important;
            height: 110px !important;
            margin-right: 15px !important;
          }

          div:nth-child(5) {
            width: 80px !important;
            height: 110px !important;
            margin-right: 18px !important;
          }

          div:nth-child(6) {
            width: 70px !important;
            height: 110px !important;
            margin-right: 20px !important;
          }

          div:nth-child(7) {
            width: 80px !important;
            height: 110px !important;
            margin-right: 25px !important;
          }

          div:nth-child(8) {
            width: 100px !important;
            height: 110px !important;
            margin-right: 20px !important;
          }
        }
      }

      .content {
        .p {
          font-size: 68px !important;

          .brave {
            font-size: 20px !important;
            white-space: normal;
            line-height: 25px !important;
          }
        }

        p {
          display: block !important;
        }
      }
    }
  }

  .container .header .content p .brave {}

  .container .header .content p .brave svg {
    margin-bottom: 0 !important;
  }

  .container .investment .content p {
    width: 80% !important;
    font-size: 38px !important;
  }

  .container .invest .list__title__mob p {
    font-size: 38px !important;
    line-height: 42px !important;
  }

  .container .invest .list__title__mob {
    width: 90% !important;
  }

  .container .invest .list__title__mob br {
    display: block !important;
  }

  .container .invest .advert p {
    font-size: 34px !important;
    line-height: 110% !important;
  }

  .container .introduce .content .request p {
    font-size: 38px !important;
    line-height: 42px !important;
  }

  .container .contact .title p {
    font-size: 45px !important;
    line-height: 42px !important;
  }
}

@media screen and (max-width: 450px) {
  .container .header .content .p .brave {
    font-size: 16px !important;
    white-space: nowrap;
  }

  .container {
    .header {
      .content {

        .p {
          font-size: 34px !important;
        }
      }
    }
  }

  .container .header .content p {
    display: flex !important;
  }

  .container .header .content .p {
    font-size: 34px !important;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .container .contact .form input {

    border-radius: 4px !important;

  }

  .container .contact .form textarea {
    border-radius: 4px !important;

  }

  .container .invest .list__title__mob {
    width: 90% !important;
  }

  .small-header {
    display: block !important;
  }

  .container {
    &>* {
      margin-top: -1px;
    }

    .header {
      height: 290px !important;

      &__menu {
        //background-image: url('../assets/images/ventures/header320.png') !important;
        min-height: 120px !important;
        background-position: top 0px right 0 !important;

        .cubes {
          div:nth-child(1) {
            width: 10px !important;
            height: 30px !important;
            margin-right: 4px !important;
          }

          div:nth-child(2) {
            width: 15px !important;
            height: 50px !important;
            margin-right: 8px !important;
          }

          div:nth-child(3) {
            width: 15px !important;
            height: 60px !important;
            margin-right: 8px !important;
          }

          div:nth-child(4) {
            width: 20px !important;
            height: 80px !important;
            margin-right: 8px !important;
          }

          div:nth-child(5) {
            width: 30px !important;
            height: 90px !important;
            margin-right: 10px !important;
          }

          div:nth-child(6) {
            width: 40px !important;
            height: 100px !important;
            margin-right: 10px !important;
          }

          div:nth-child(7) {
            width: 50px !important;
            height: 120px !important;
            margin-right: 12px !important;
          }

          div:nth-child(8) {
            width: 55px !important;
            height: 120px !important;
            margin: 0 !important;
          }
        }
      }

      .content {
        padding: 16px !important;

        p {
          font-size: 34px !important;
          line-height: 110% !important;
          display: flex;
          flex-direction: column;

          .brave {
            white-space: nowrap;
            margin: 0 !important;
            font-size: 16px !important;
            text-align: left !important;
            line-height: 20px !important;
            display: inline-flex !important;
            align-items: center;
            vertical-align: super !important;

            svg {
              width: 10px !important;
              height: 10px !important;
              overflow: initial !important;
            }
          }
        }
      }
    }

    .investment {
      padding-top: 70px !important;

      .title {
        padding: 0 15px !important;

        img:nth-child(1) {
          display: none !important;
        }
      }

      .content {
        padding: 100px 0 60px 8px !important;

        p {
          width: 90% !important;
          font-size: 22px !important;
          text-align: center !important;
        }
      }

      .imgs {
        img:nth-child(4) {
          top: 80px !important;
          left: 10px !important;
          width: 30px !important;
          height: 30px !important;
        }

        img:nth-child(3) {
          top: 10px !important;
          left: 15% !important;
          width: 55px !important;
          height: 55px !important;
        }

        img:first-child {
          top: 40px !important;
          left: 35% !important;
          width: 80px !important;
          height: 66px !important;
        }

        img:nth-child(5) {
          top: 0px !important;
          right: 10px !important;
          width: 105px !important;
          height: 100px !important;
        }

        img:nth-child(2) {
          bottom: 0 !important;
          right: 30% !important;
          width: 74px !important;
          height: 67px !important;
        }
      }
    }

    .principes {
      .title {
        padding: 0 15px !important;

        img:first-child {
          display: none;
        }
      }

      padding-top: 10px !important;
      padding-bottom: 70px !important;

      .items {
        padding: 38px 16px 0 16px !important;
        flex-direction: column !important;

        .item {
          width: 100% !important;

          &__title {
            font-size: 22px !important;
            line-height: 28px !important;
            letter-spacing: 0.03em !important;

            p {
              margin-left: 20px !important;
            }

            img {
              width: 48px !important;
              ;
            }
          }

          .text {
            font-size: 16px !important;
            line-height: 20px !important;
            letter-spacing: 0.04em !important;
          }
        }
      }
    }

    .invest {
      .title {
        padding: 0 16px !important;

        img:first-child {
          display: none;
        }
      }

      .list__title__mob {
        margin-top: 70px;
        display: block !important;
        padding: 0 16px;

        p {
          font-size: 22px !important;
          line-height: 28px !important;
          letter-spacing: 0.03em !important;
          text-transform: uppercase !important;
        }
      }

      .description {
        margin-top: 20px !important;
        flex-direction: column !important;
        align-items: flex-start !important;

        .list {
          &__title {
            display: none !important;
          }

          .items {
            margin-top: 0 !important;

            ul {
              padding: 0 16px !important;

              li {
                font-size: 16px !important;
                line-height: 20px !important;
                margin-bottom: 15px !important;
                letter-spacing: 0.03em !important;

              }
            }
          }
        }

        .img {
          margin-top: 30px;
          width: 100% !important;

          img {
            width: 100% !important;
          }
        }
      }

      .advert {
        padding: 36px 17px 72px 17px !important;

        p {
          font-size: 16px !important;
          line-height: 20px !important;
          letter-spacing: 0.03em !important;
          width: 100% !important;
          text-align: left !important;
          margin: 0 !important;
        }
      }
    }

    .introduce {
      .title {
        padding: 0 16px !important;

        img:first-child {
          display: none;
        }
      }

      .content {
        flex-direction: column !important;
        margin-top: 40px !important;
        padding: 0 16px !important;

        &>* {
          width: 100% !important;
        }

        .request p {
          font-size: 22px !important;
          line-height: 28px !important;
          letter-spacing: 0.03em !important;
        }

        .list ul {
          padding-left: 16px !important;
          margin-top: 36px !important;

          li {
            font-size: 14px !important;
            margin-bottom: 20px !important;
            letter-spacing: 0.04em !important;

            span {
              left: 10px !important;
              font-size: 14px !important;
              line-height: 18px !important;
              letter-spacing: 0.04em !important;
            }
          }
        }
      }
    }

    .contact {
      padding: 50px 0 !important;

      .title {
        width: 95% !important;
        margin: 0 auto;

        p {
          font-weight: 400 !important;
          font-size: 22px !important;
          line-height: 28px !important;
          letter-spacing: 0.03em !important;
        }
      }

      .form {
        margin-top: 30px !important;

        input,
        textarea,
        p {
          width: 288px !important;
        }
      }
    }
  }
}

@-webkit-keyframes run {
  0% {
    left: 0;
  }

  100% {
    left: 100%;
    width: 0 !important;
  }
}

.container {
  &>* {
    margin-top: -1px;
  }

  .header {
    background: #010C28 url('../assets/images/gradient.png') center;
    background-size: cover;
    //background: linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
    position: relative;
    overflow: hidden;
    z-index: 1;
    height: 702px;

    &__menu {
      z-index: 10;
      //background-image: url('../assets/images/ventures/header-bg.png');
      //background-repeat: no-repeat;
      min-height: 300px;
      //padding: 25px;
      background-position: right;

      .cubes {
        position: absolute;
        right: 0;
        margin: 0;
        z-index: -1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        .cube {
          //background-color: red;
          border: 1px solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(to bottom, #0046b0, #0058ba, #0069c2, #0079c8, #0089cd);
        }

        div.cube {
          margin-right: 40px;
        }

        div:nth-child(1) {
          width: 50px;
          height: 50px;
        }

        div:nth-child(2) {
          width: 70px;
          height: 100px;
        }

        div:nth-child(3) {
          //animation: 1s ease-in 2s 1 run;
          width: 90px;
          height: 150px;
        }

        div:nth-child(4) {
          width: 110px;
          height: 200px;
        }

        div:nth-child(5) {
          width: 130px;
          height: 250px;
        }

        div:nth-child(6) {
          width: 150px;
          height: 300px;
        }

        div:nth-child(7) {
          width: 170px;
          height: 300px;
        }

        div:nth-child(8) {
          width: 190px;
          height: 300px;
        }

        .changeable {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to bottom, #02185b, #001856, #001751, #00174c, #001647);
          z-index: 999;
          background-color: transparent;
          visibility: visible;
          position: absolute;
          overflow: hidden;
          animation: 1s ease-in 1s 1 run;
          animation-fill-mode: forwards;
        }
      }
    }

    .animatin-header_width {
      //margin-top: -90px;
      //z-index: -99;
      //text-align: right;
      //display: block;
      //margin-left: auto;
      position: absolute;
      z-index: 3;
      top: 0;
      left: 50%;
      //border: 1px solid red;
      width: 50%;
      height: 400px;
      overflow: hidden;
      -webkit-animation: linear;
      -webkit-animation-name: run;
      -webkit-animation-duration: 3s;

      img {
        width: auto;
        height: 200px;
        overflow: hidden;
        //float: right;
      }
    }


    .content {
      padding: 25px;

      .p {
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 134px;
        line-height: 95%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
        margin: 0;

        //width: 1350px;
        .brave {
          font-family: 'Oxygen', sans-serif, sans-serif;
          font-style: normal;
          width: 300px;
          text-align: left;
          font-weight: 400;
          font-size: 38px;
          line-height: 95%;
          display: inline-flex;

          align-items: center;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          margin: 16px 70px 0px 0;
          vertical-align: top;

          svg {
            margin-bottom: 26px;
            margin-right: 11px;
            vertical-align: baseline;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .investment {
    width: 100%;
    background-color: #010C28;
    padding-top: 150px;

    .title {
      padding: 0 25px;

      img {
        width: 100%;
      }
    }

    .content {
      padding: 250px 25px;
      position: relative;

      p {
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 58px;
        color: white;
        line-height: 105%;
        width: 45%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      .imgs {
        img:first-child {
          position: absolute;
          right: 30%;
          top: 50px;
          -webkit-transition: all .5s;
          -o-transition: all 5s;
          -moz-transition: all 5s;
          transition: all .5s;
        }

        img:first-child:hover {
          margin-top: -10px;
          margin-right: 15px;
        }

        img:nth-child(2) {
          position: absolute;
          bottom: 250px;
          right: 40%;
          -webkit-transition: all .5s;
          -o-transition: all 5s;
          -moz-transition: all 5s;
          transition: all .5s;
        }

        img:nth-child(2):hover {
          margin-right: -15px;
          margin-bottom: -10px;
        }

        img:nth-child(3) {
          position: absolute;
          top: 0px;
          left: 300px;
          -webkit-transition: all .5s;
          -o-transition: all 5s;
          -moz-transition: all 5s;
          transition: all .5s;
        }

        img:nth-child(3):hover {
          margin-top: -5px;
          margin-left: 10px;
        }

        img:nth-child(4) {
          position: absolute;
          top: 125px;
          left: 50px;
          -webkit-transition: all .5s;
          -o-transition: all 5s;
          -moz-transition: all 5s;
          transition: all .5s;
        }

        img:nth-child(4):hover {
          margin-top: 7px;
          margin-left: 10px;
        }

        img:nth-child(5) {
          position: absolute;
          top: 300px;
          right: 150px;
          -webkit-transition: all .5s;
          -o-transition: all 5s;
          -moz-transition: all 5s;
          transition: all .5s;
        }

        img:nth-child(5):hover {
          margin-top: -20px;
        }
      }
    }
  }

  .principes {
    background-color: #010C28;
    position: relative;
    padding-bottom: 180px;

    //margin-top: 90px;
    .title {
      padding: 0 25px;

      img {
        width: 100%;
      }
    }

    .items {
      padding: 93px 0 0 0;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;

      .item {
        width: 28%;

        &__title {
          display: flex;
          align-items: center;
          font-family: 'Oxygen', sans-serif, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 35px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;

          p {
            margin-left: 35px;
          }
        }

        .text {
          font-family: 'Exo', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 125%;
          color: #F0F0F0;

          p {
            margin: 0;
          }

        }
      }
    }
  }

  .invest {
    background-color: #010C28;

    .title {
      padding: 1px 25px;

      img {
        width: 100%;
      }
    }

    .list__title__mob {
      display: none;

      p {
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 58px;
        line-height: 105%;
        margin: 0;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
      }
    }

    .description {
      padding: 0 25px;
      margin-top: 90px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .list {
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &__title {
          p {
            font-family: 'Oxygen', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 38px;
            line-height: 48px;
            letter-spacing: 0.03em;
            margin: 0;
            text-transform: uppercase;
            color: #F0F0F0;
          }
        }

        .items {
          margin-top: 50px;

          ul {
            list-style-image: url("../assets/images/ventures/invest/dot.svg");

            li {
              font-family: 'Oxygen', sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
              letter-spacing: 0.03em;
              margin-bottom: 15px;
              text-transform: uppercase;
              color: #F0F0F0;

              &::before {
                margin-left: 15px;
              }
            }

            li:before {
              margin-left: 15px;
            }
          }
        }
      }

      .img {
        width: 40%;

        img {
          width: 100%;
          float: right;
        }
      }
    }

    .advert {
      padding: 88px 80px 150px 80px;

      p {
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 38px;
        line-height: 48px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #F0F0F0;
        //width: 74%;
        margin: 0 auto;
      }
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      .advert {
        padding: 60px 32px 110px 32px !important;

        p {
          //width: 100% !important;
        }
      }
    }

    @media (min-width: 769px) and (max-width: 1023px) {
      .advert {
        padding: 48px 8px 70px 8px !important;

        p {
          //width: 100% !important;
          font-size: 34px !important;
          line-height: 110% !important;
        }
      }
    }



    @media (min-width: 320px) and (max-width: 767px) {
      .advert {
        padding: 36px 16px 70px 16px !important;

        p {
          font-size: 16px !important;
          line-height: 20px !important;
          letter-spacing: 0.03em !important;
        }
      }
    }
  }

  .introduce {
    background-color: #010C28;

    .title {
      padding: 0 25px;

      img {
        width: 100%;
      }
    }

    .content {
      padding: 0 25px;
      display: flex;
      margin-top: 90px;
      justify-content: space-between;
      align-items: flex-start;

      .request {
        width: 44%;

        p {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 58px;
          //margin-top: 90px;
          line-height: 105%;
          margin: 0;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #F0F0F0;
        }
      }

      .list {
        width: 40%;

        ul {
          list-style-image: url("../assets/images/ventures/invest/dot.svg");

          li {
            &:not(:last-child) {
              margin-bottom: 17px;
            }

            span {
              font-family: 'Oxygen', sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 20px;
              line-height: 27px;
              color: #F0F0F0;
              position: relative;
              left: 15px;

            }
          }
        }
      }
    }
  }

  .contact {
    padding: 150px 0;
    background-color: #010C28;

    .title {
      width: 70%;
      margin: 0 auto;

      p {
        margin: 0;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 58px;
        line-height: 105%;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      margin-top: 90px;

      input,
      textarea {
        width: 100%;
      }

      input {
        border: 1px solid #828FA1;
        background: transparent;
        padding: 15px 0 15px 15px;
        border-radius: 8px;
        color: #828FA1;
        font-size: 16px;
        width: 510px;
        font-family: 'Oxygen';
      }

      textarea {
        border: 1px solid #828FA1;
        background: transparent;
        padding: 15px 0 15px 15px;
        margin-top: 20px;
        border-radius: 8px;
        resize: none;
        color: #828FA1;
        font-size: 16px;
        width: 510px;
        font-family: 'Oxygen';
        min-height: 108px;
        margin-bottom: 14px;
      }

      p {
        margin-top: 0;
        margin-bottom: 0;
        padding: 17px 0 17px 15px;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 105%;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #F0F0F0;
        cursor: pointer;
        text-align: left;
        background: #2F5BD8;
        border-radius: 8px;
        width: 510px;
        display: flex;
        align-items: center;
        min-height: 19px;
      }

      p::after {
        content: url('../assets/images/btn_arrow.svg');
        padding-left: 352px;
        background-repeat: no-repeat;
        display: none;

      }

      p:hover:after {
        display: inline;
      }

      p:hover {
        background: #0E339C;
      }
    }
  }

  .footer {
    background-color: #010C28;
    padding: 0 25px !important;
  }



  @media (min-width: 320px) and (max-width: 768px) {
    .footer {
      padding: 0 16px !important;
    }
  }
}
</style>