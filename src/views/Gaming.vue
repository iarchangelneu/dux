<template>
  <div class="container">
    <div class="header_part">
      <div class="menu">
        <Header @opened="openedMobMenu" />
      </div>
      <div class="images images__vl">
        <img src="../assets/images/gaming/leftLock.svg" id="left__lock" style="" class="left__lock"
          data-aos-easing="linear" data-aos-duration="500" alt="" data-aos="zoom-in" data-aos-delay="2500">
        <!-- <img src="../assets/images/gaming/header-photo.svg" style="float: right" /> -->

        <img src="../assets/images/gaming/shildUp.svg" id="shildUp" class="shildUp" alt="" data-aos-easing="linear"
          data-aos-duration="500" data-aos="zoom-in" data-aos-delay="2000">
        <img src="../assets/images/gaming/lodckBot.svg" id="lodckBot" class="lodckBot" alt="" data-aos-easing="linear"
          data-aos-duration="500" data-aos="zoom-in" data-aos-delay="1500">
        <img src="../assets/images/gaming/shildBot.svg" id="shildBot" class="shildBot" alt="" data-aos-easing="linear"
          data-aos-duration="500" data-aos="zoom-in" data-aos-delay="3000">
        
        <div class="anim__top__cont" id="anim__top__cont" data-aos-duration="1000" data-aos-delay="500" data-aos="fade-in">
          <img class="anim__lineTop" src="../assets/images/gaming/lineTop.svg" alt="">

        </div>
        <div class="anim__bot__cont" id="anim__bot__cont" data-aos-duration="500" data-aos="fade-in">
          <img class="anim__lineBot" src="../assets/images/gaming/lineBot.svg" alt="">
        </div>
      </div>
      <div class="content" v-if="menuClosed">
        <p class="p" id="p">
          <span class="brave">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <span>Why It Matters</span>
          </span>
          <!-- <span class="blue">Responsible</span> Gaming -->
        </p>
      </div>
    </div>
    <div class="learn">
      <div class="title">
        <BlockTitle title="Learn more"></BlockTitle>
      </div>
      <div class="content">
        <p data-aos="fade-up" data-aos-duration="1500">
          <span class="text-part">Gambling should always be seen as entertainment and nothing else. Unfortunately,
            sometimes people can take it too far and potentially lose control of their betting. You should never
            consider gambling as a source of income or a chance to recover from debt. Always keep track of the time and
            money you spent on gambling, check this with yourself every day.</span>
          <span class="text-part">If you are spending more money or time on gambling than you would like, please
            consider the several measures that can help, set Personal Limits on the time and money spent, consider a
            Self-Exclusion, and seek help and support from the trusted independent bodies available to you.</span>
          <span class="text-part">
            You can always take this gambling <a href="https://www.begambleaware.org/do-i-have-gambling-problem"
              class="blue" style="text-decoration:none"> addiction quiz</a> to see if you're showing any
            signs of a gambling addiction.
          </span>
        </p>
      </div>
    </div>
    <div class="lists">
      <div class="title">
        <BlockTitle title="how it works"></BlockTitle>
      </div>
      <div class="content">
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>HOW TO LIMIT YOUR LOSSES AND SPENDING</p>
          </div>
          <h4>We offer a Personal Limits feature. Here you can set limits on the amount you deposit, lose, wager, and
            spend in one game. Or even on your overall account activity. You can change these limits at any time.
            Customers have the flexibility of increasing/decreasing their purchase limits in order to control their
            level by adhering to KYC processes in accordance to the project. Reducing the limit will take effect
            immediately, but an increase in any limit will happen after email confirmation.</h4>
        </div>
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>Cooling-Off Period</p>
          </div>
          <h4>You can set a cooling-off period for 1 week, 1 month, 3 months, or 6 months. When this limit is in effect,
            the system may limit the possibility of making a deposit and close access to all promotional offers. You can
            still withdraw any remaining funds during this period. This Cooling-Off period is instantly applied to your
            account and when it expires your account will be re-activated automatically.</h4>
        </div>
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>Self-Exclusion</p>
          </div>
          <h4>You can set a Self-Exclusion Limit for 6 months, 9 months, or 1 year. When you do this your Player Account
            will be immediately disabled and you will be excluded from all of our promotional offers for the period you
            are excluded. You cannot deposit or withdraw funds when this exclusion is active. When this exclusion
            expires your account will not be automatically re-activated. When you set a Self-exclusion it lets us know
            that we need to do everything we can to block your access to your account and make sure that you receive no
            promotional materials whatsoever.</h4>
        </div>
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>LET???S SEE SOME ID</p>
          </div>
          <h4>We only accept players who are at least 18 years old and use all available methods we have to stop any
            minors from registering and playing. We always reserve the right to ask for any proof of identity and if the
            player is not 18+ their access to our casinos will be denied immediately.</h4>
        </div>
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div class="our__r">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>OUR REALITY CHECK</p>
          </div>
          <h4>Time flies when you're having fun, so we send hourly notifications in-game to remind you of your Casino
            expenditure. Regardless of how many games you are playing, we will always let you know every hour. This is
            to help you reflect on your bets and perhaps consider stopping for a while.</h4>
        </div>
      </div>
    </div>
    <div class="seeking">
      <div class="title">
        <BlockTitle title="seeking outside help"></BlockTitle>
      </div>
      <div class="content">
        <div data-aos="fade-up" data-aos-duration="1500">
          <img src="../assets/images/gaming/seeking-bg.svg" v-if="window.width > 1024" />
          <img src="../assets/images/seeking2.png" alt="" v-if="window.width <= 1024 && window.width > 450">
          <img src="../assets/images/seeking320.png" v-if="window.width <= 450" />
          <div class="text">
            <p>Please contact any of the following organizations for consultation and support:</p>
            <span>Gamblers Anonymous <a href="https://www.gamblersanonymous.org/ga/"
                class="">http://www.gamblersanonymous.org/ga/</a> </span>
            <span>GamCare <a href="https://www.gamblersanonymous.org/ga/" class="">https://www.gamcare.org.uk/</a>
            </span>
            <span>Gambling Therapy <a href="https://www.gamcare.org.uk/"
                class="">https://www.gamblingtherapy.org/</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlockTitle from '../components/BlockTitle.vue';
export default {
  name: "Gaming_page",
  components: {
    Header, Footer,
    BlockTitle
  },
  data() {
    return {
      mainTitle: 'RESPONSIBLE GAMING',
      window: {
        width: 0,
      },
      menuClosed: true,
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
    handleResize() {
      this.window.width = window.innerWidth;
    },
    spaBspCreate(block, amount=1){
        for(let i = 0; i < amount; i++){
          let spanBsp = document.createElement('span');
          spanBsp.innerText = ' ';
          // spanBsp.classList.add('spanBsp')
          block.appendChild(spanBsp)
        }
    },
    spanletterCreate(letter){
      let spanInside = document.createElement('span');
      spanInside.innerText = letter;
      spanInside.classList.add('mainTitleLetter')
      return spanInside
    },
    titleBlock(){
      let firstSplit = this.mainTitle.split(' ')

      let block = document.getElementById('p')
      let timer = 0;

      firstSplit.forEach((word, ind) => {
        let span = document.createElement('span');
        span.id = 'word' + ind;

        if (ind == 0) {
          span.classList.add('blue')
          // if(window.innerWidth < 450){
          //   this.spaBspCreate(block)
          // }
        }

        span.classList.add('mainTitleWord')
        block.appendChild(span)

        word.split('').forEach((letter) => {
          let spanInside = this.spanletterCreate(letter)
          setTimeout(() => { span.appendChild(spanInside) }, timer)
          timer += 50
        })

        // if(ind==0){
        //   if(window.innerWidth < 340){
        //     this.spaBspCreate(block, 10)
        //   }
        //   else if(window.innerWidth < 450){
        //     this.spaBspCreate(block, 5)
        //   }
        //   else{
        //     this.spaBspCreate(block, 3)
        //   }
        // }

        this.spaBspCreate(block)
      })
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    this.titleBlock();
    // setTimeout(() => { document.getElementById('anim__top__cont').classList.add('anim__top__cont__active') }, 500)
    // setTimeout(() => { document.getElementById('anim__bot__cont').classList.add('anim__bot__cont__active') }, 1500)
    setTimeout(() => {
      document.getElementById('left__lock').classList.add('trans')
    }, 2500)
    setTimeout(() => {
      document.getElementById('shildUp').classList.add('trans')
    }, 2000)
    setTimeout(() => {
      document.getElementById('lodckBot').classList.add('trans')
    }, 1500)
    setTimeout(() => {
      document.getElementById('shildBot').classList.add('trans')
    }, 300)
  }
}
</script>

<style lang="scss" scoped>
.blue {
  color: #2F5BD8;
}

.small-bg {
  display: none;
}

.container {
  .header_part {
    background: #010C28 url('../assets/images/gradient.png') center;
    background-size: cover;
    //background: linear-gradient(180deg,#02185b,#00174e,#001542,#001135,#010c28);
    height: 702px;

    .menu {
      padding: 25px 25px 0 25px;
    }

    .images {
      width: 100%;
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: flex-end;
      position: relative;

      img {
        // height: 420px;
      }
    }

    .content {
      padding: 0 25px;
      position: relative;
      width: 1000px;
      margin-top: 120px;

      .p {
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 134px;
        line-height: 95%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
        margin: 157px 0 0;
        width: 1400px;

        .blue {
          vertical-align: text-top;
        }

        .brave {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 34px;
          line-height: 110%;
          display: inline-flex;
          align-items: baseline;
          min-width: 160px;
          max-width: 200px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          margin: 0 70px 50px 0;
          vertical-align: bottom;

          svg {
            margin-right: 11px;
            vertical-align: baseline;
            min-width: 20px;
            min-height: 20px;
          }
        }
        
        @media screen and (max-width: 768px) {
          .brave{
            max-width: 150px;
          }
        }
      }
    }
  }

  .learn {
    padding-top: 450px;
    background-color: #010c28;

    .title {
      padding: 0 25px;

      img {
        width: 100%;
      }
    }

    .content {
      width: 50%;
      margin: 0 auto;
      padding: 96px 0px;

      p {
        margin: 0;
        font-family: 'Exo', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 125%;
        color: #F0F0F0;
        display: flex;
        flex-direction: column;

        .text-part:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }

  .lists {
    background-color: #010c28;

    .title {
      padding: 0 25px;

      img {
        width: 100%;
      }
    }

    .content {
      padding: 100px 25px 0 25px;

      &__item {
        &:first-child {
          border: none
        }

        border-top: 1px solid #828FA1;
        display: flex;
        padding: 10px 0 110px 0;
        align-items: flex-start;
        justify-content: space-between;

        div {
          display: flex;
          align-items: flex-start;
          height: fit-content;
          width: 35%;

          svg {
            margin-right: 100px;
            min-width: 20px;
            margin-top: 12px;
          }

          p {
            font-family: 'Oxygen', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 38px;
            line-height: 48px;
            margin: 0;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: #F0F0F0;
          }
        }

        h4 {
          max-width: 562px;
          // font-family: 'Oxygen', sans-serif;
          font-family: "Exo", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          margin: 0;
          line-height: 150%;
          color: #98A6B9;
        }
      }
    }
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    .seeking .content .text {
      padding-left: calc(50px + (250 - 50) * ((100vw - 1440px) / (1920 - 1440)));
      padding-right: calc(50px + (250 - 50) * ((100vw - 1440px) / (1920 - 1440)));
    }
  }

  .seeking {
    padding-top: 25px;
    background-color: #010c28;

    .title {
      padding: 0 25px;

      img {
        width: 100%;
      }
    }

    .content {
      position: relative;
      width: 81%;
      margin: 0 auto;
      margin-top: 90px;
      display: flex;
      justify-content: center;

      .text {
        position: absolute;
        margin: 0 auto;
        top: 0;
        padding-top: 90px;
        padding-bottom: 82px;

        //padding: 90px 250px 82px 250px;
        p {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 38px;
          margin: 0;
          line-height: 48px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          padding-bottom: 35px;
        }

        span {
          display: block;
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 28px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #828FA1;

          a {
            margin-left: 25px;
            text-transform: lowercase;
            color: #485567;
          }
        }

        span:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }
  }

  .footer {
    background-color: #010c28;
    padding: 150px 25px 0 25px;
  }

}

@media (min-width: 320px) and (max-width: 768px) {
  .footer {
    padding: 50px 16px 0 16px !important;
  }
}



@media screen and (max-width: 1024px) {
  .container .footer {
    padding: 110px 25px 0 25px !important;
  }

  .container .seeking .content .text {
    padding-top: 117px !important;

  }

  .container {
    .lists {
      .content__item {
        .our__r {
          width: 45% !important;
        }
      }
    }
  }
}

@media screen and (max-width: 450px) {


  .container {
    .lists {
      .content__item {
        h4 {
          margin-top: 8px;
        }

        .our__r {
          width: auto !important;
        }
      }
    }
  }

}

@media screen and (max-width: 1440px) {
  .container .header_part .content .p .brave svg {
    min-width: 14px !important;
    min-height: 14px !important;
  }

  .container .lists .content__item div {

    width: 41% !important;
  }

  .container .seeking .content {
    width: 90%;

  }

  .container .lists .content__item div p {

    font-size: 28px;

  }

  .container .learn .content {
    width: 45%;
    margin: 0 auto;
    padding: 92px 142px;
  }

  .container .learn .content p {
    font-size: 24px !important;
    ;
  }

  .container {
    &>* {
      margin-top: -1px;
    }

    .learn {
      padding-top: 105px !important;
    }

    .header_part {
      height: 756px !important;

      p {
        font-size: 134px !important;
        width: 1030px !important;
      }

      .images {
        img {
          //width: 100% !important;
          // height: 261px !important;
        }
      }

      .content {
        p {
          font-size: 110px !important;
          line-height: 105% !important;
          margin: 34px 0 0 !important;

          span {
            margin: 10px 40px 10px 0 !important;
            vertical-align: top !important;
            

          }

          span.brave {

            font-size: 28px !important;
            line-height: 28px !important;
          }
        }
      }
    }

    .lists {
      .content {
        &__item {
          div {
            svg {
              margin-right: 61px !important;
            }
          }

          h4 {
            width: 50% !important;
          }
        }
      }
    }

    .seeking {
      .content {


        .text {
          width: 85% !important;
          padding-left: 45px;


          p {
            font-size: 38px !important;
            line-height: 45px !important;
          }

          span {
            // font-size: 20px !important;
          }

          span:not(:last-child) {
            margin-bottom: 20px !important;
          }
        }
      }
    }
  }

}

@media screen and (max-width: 1024px) {
  .container .seeking .content .text p {
    font-size: 28px !important;
    line-height: 35px !important;
  }

  .container {
    .lists {
      .content__item:nth-child(1) {
        div {
          p {
            font-size: 35px !important;
          }
        }
      }
    }
  }

  .container .lists .content__item h4 {
    font-size: 18px !important;
  }

  .container .lists .content__item div svg {
    min-width: 16px;
    max-width: 16px;
  }

  .container .learn .content {
    width: 70%;
  }

  .container .learn .content p {
    font-size: 20px !important;
  }

  .container .header_part .content .p .brave svg {
    margin-right: 11px;
    vertical-align: baseline;
    min-width: 10px;
    min-height: 10px;
    max-height: 10px;
    max-width: 10px;
  }

  .container .header_part .content p span {
    margin: 10px 40px 4px 0 !important;
    vertical-align: top !important;
  }

  .container .header_part .content p {
    font-size: 84px !important;
    line-height: 105% !important;
    margin: -40px 0 0 !important;
  }
}

@media screen and (max-width: 450px) {
  .container .footer {
    padding: 45px 25px 0 25px !important;
  }

  .container .lists .content__item:nth-child(1) div p {
    font-size: 20px !important;
  }
}

@media (max-width: 769px) {
  .container {
    &>* {
      margin-top: -1px;
    }

    .header_part {
      height: 300px !important;

      .menu {
        padding: 17px 8px 0 8px !important;
      }

      .images {
        img {
          // height: 184px !important;
        }
      }

      .content {
        padding: 0 8px !important;

        p {
          font-size: 68px !important;
          width: 715px !important;
          ;
          line-height: 105% !important;
          margin: -75px 0 0 !important;

          span.brave {
            font-size: 22px !important;
            margin: 0px 20px 0 0px !important;
            vertical-align: top !important;
          }
        }
      }
    }

    .lists .content__item div svg {
      width: 12px !important;
      height: 12px !important;
    }

    .learn {
      padding-top: 72px !important;

      .content {
        width: 70% !important;
        padding: 80px 0 !important;

        p {
          font-size: 18px !important;
        }
      }
    }

    .lists {
      .content {
        padding: 50px 25px 0 25px !important;

        &__item {
          padding: 10px 0 60px 0 !important;

          div {
            svg {
              margin-right: 10px !important;
            }

            p {
              font-size: 22px !important;
              line-height: 35px !important;
            }
          }

          h4 {
            font-size: 16px !important;
            width: 50% !important;
          }
        }
      }
    }

    .seeking {
      padding: 0 !important;

      .content {
        img {
          width: 100% !important;
        }

        .text {
          width: 92% !important;
          padding: 50px 40px 35px 40px !important;

          p {
            font-size: 20px !important;
            line-height: 24px !important;
            padding-bottom: 15px !important;
          }

          span {
            font-size: 16px !important;
            line-height: 23px !important;
            letter-spacing: 0.03em !important;
          }

          span:not(:last-child) {
            margin-bottom: 20px !important;
          }
        }
      }
    }
  }

}

@media screen and (max-width: 767px) {
    .container .header_part .content p span {
      margin: 0 !important;
    }

    .container {
      &>* {
        margin-top: -1px;
      }

      .header_part {
        height: 265px !important;

        .images {
          img {
            // height: 120px !important;
          }
        }

        .content {
          p {
            font-size: 34px !important;
            width: 100% !important;
            line-height: 110% !important;
            position: relative !important;
            margin-top: -20px !important;
            display: flex !important;
            flex-direction: column !important;

            span.brave {
              font-size: 16px !important;
              line-height: 20px !important;
              margin: 0 15px 10px 0 !important;
              vertical-align: middle !important;

              svg {
                width: 10px !important;
                height: 10px !important;
              }
            }
          }
        }
      }

      .learn {
        .title {
          padding: 0 16px !important;
        }

        padding-top: 70px !important;

        .content {
          width: auto !important;
          padding: 30px 16px !important;

          p {
            font-size: 20px !important;
          }
        }
      }

      .lists {
        .content {
          padding: 20px 16px 0 16px !important;
          display: flex !important;
          flex-direction: column !important;

          &__item {
            padding: 10px 0 30px 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;

            div {
              width: auto !important;
              display: flex !important;

              //align-items: center !important;
              svg {
                margin-right: 10px !important;
                width: 10px !important;
                margin-top: 5px !important;
                height: 10px !important;
              }

              p {
                font-size: 20px !important;
                line-height: 25px !important;
                margin-bottom: 8px !important;
              }
            }

            h4 {
              width: auto !important;
              font-size: 16px !important;
              line-height: 16px !important;
              font-family: 'Exo';
              line-height: 20px !important;
            }
          }
        }
      }

      .seeking {
        padding: 0 !important;

        .content {
          width: 95% !important;
          margin-top: 0px !important;

          img:first-child {
            display: none;
          }

          //img.small-bg{
          //  display: block !important;
          //  width: 100% !important;
          //}
          .text {
            position: relative;
            margin-top: 50px !important;
            background-image: url('../assets/images/seeking320.png');
            background-position: center;
            background-size: cover;
            width: auto !important;
            border-radius: 15px !important;
            margin: 0 auto;
            padding: 60px 27px !important;
            margin-bottom: 40px !important;

            p {
              font-size: 16px !important;
              line-height: 20px !important;
              padding-bottom: 25px !important;
            }

            span {
              font-size: 16px !important;
              line-height: 20px !important;

              a {
                display: block !important;
                margin-left: 0 !important;
                font-size: 12px !important;
                line-height: 16px !important;
                letter-spacing: 0.04em !important;
              }
            }

            span:not(:last-child) {
              margin-bottom: 30px !important;
            }
          }
        }
      }

    }

  }

@media screen and (max-width: 450px) {
  .images__vl{
    margin-top: 20px;
  }
  .container .seeking .title {
    padding: 0 25px;
    padding-top: 72px;
  }

  .container .lists .title {
    padding: 0px 25px;
    padding-top: 72px;
  }

  .container .header_part .content p span {
    margin: 0 !important;
  }

  .container {
    &>* {
      margin-top: -1px;
    }

    .header_part {
      height: 265px !important;

      .images {
        img {
          // height: 60px !important;
        }
      }

      .content {
        p {
          font-size: 34px !important;
          width: 100% !important;
          line-height: 110% !important;
          position: relative !important;
          margin-top: -20px !important;
          display: flex !important;
          flex-direction: column !important;

          span.brave {
            font-size: 16px !important;
            line-height: 20px !important;
            margin: 0 15px 10px 0 !important;
            vertical-align: middle !important;

            svg {
              width: 10px !important;
              height: 10px !important;
            }
          }
        }
      }
    }

    .learn {
      .title {
        padding: 0 16px !important;
      }

      padding-top: 70px !important;

      .content {
        width: auto !important;
        padding: 30px 16px !important;

        p {
          font-size: 20px !important;
        }
      }
    }

    .lists {
      .content {
        padding: 20px 16px 0 16px !important;
        display: flex !important;
        flex-direction: column !important;

        &__item {
          padding: 10px 0 30px 0 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;

          div {
            width: auto !important;
            display: flex !important;

            //align-items: center !important;
            svg {
              margin-right: 10px !important;
              width: 10px !important;
              margin-top: 5px !important;
              height: 10px !important;
            }

            p {
              font-size: 20px !important;
              line-height: 25px !important;
            }
          }

          h4 {
            width: auto !important;
            font-size: 16px !important;
            line-height: 20px !important;
          }
        }
      }
    }

    .seeking {
      padding: 0 !important;

      .content {
        width: 95% !important;
        margin-top: 0px !important;

        img:first-child {
          display: none;
        }

        //img.small-bg{
        //  display: block !important;
        //  width: 100% !important;
        //}
        .text {
          position: relative;
          margin-top: 50px !important;
          background-image: url('../assets/images/seeking320.png');
          background-position: center;
          background-size: cover;
          width: auto !important;
          border-radius: 15px !important;
          margin: 0 auto;
          padding: 50px 16px !important;

          p {
            font-size: 16px !important;
            line-height: 20px !important;
            padding-bottom: 25px !important;
          }

          span {
            font-size: 16px !important;
            line-height: 20px !important;

            a {
              display: block !important;
              margin-left: 0 !important;
              font-size: 12px !important;
              line-height: 16px !important;
              letter-spacing: 0.04em !important;
            }
          }

          span:not(:last-child) {
            margin-bottom: 30px !important;
          }
        }
      }
    }

  }

  
}
.images__vl {
  margin-top: 140px;
}

@media screen and (max-width: 1024px){
 .images__vl {
  margin-top: 80px;
}
}

@media screen and (min-width: 375px) and (max-width: 425px) {
  .images__vl {
    margin-top: 50px;
  }
  .container {
    .seeking {
      .content {
        .text {
          background-image: url('../assets/images/gamingbg.png') !important;
          background-repeat: no-repeat !important;
          background-size: contain !important;
          padding-top: 62px !important;
          padding-bottom: 126px !important;

          p {
            font-size: 19px !important;
            padding-bottom: 54px !important;
          }

          span {
            font-size: 19px !important;

            a {
              font-size: 15px !important;
              margin-top: 4px !important;
            }
          }
        }


      }
    }
  }
}



.anim__top__cont {
  width: 75.69vw;
  transition: width 2s;
  overflow-x: hidden;
  position: relative;
  overflow-y: visible;
}

.anim__lineTop {
  width:100%;
}

.anim__bot__cont {
  margin-top: 2.08vw;
  width: 60.76vw;
  transition: width 2s;
  overflow-x: hidden;
}

.anim__lineBot {
  width:100%;
}

@media screen and (max-width: 1024px) {
  .anim__top__cont {
  width: 75.69vw;
  transition: width 2s;
  overflow-x: hidden;
  position: relative;
  overflow-y: visible;
}

.anim__bot__cont {
  margin-top: 2.08vw;
  width: 60.76vw;
  transition: width 2s;
  overflow-x: hidden;
}
}

.left__lock {
  position: absolute;
  left: 160px;
  top: -30px;
}
.left__lock:hover {
  position: absolute;
  left: 175px;
  top: -30px;
}

.shildUp {
  position: absolute;
  // top: -118px;
  top: -7vw;
  // right: 665px;
  right: 47.48vw;
}
.shildUp:hover {
  position: absolute;
  // top: -118px;
  top: -8vw;
  // right: 665px;
  right: 48.48vw;
}

.lodckBot {
  position: absolute;
  // top: -118px;
  top: 3.5vw;
  // right: 665px;
  right: 30.48vw;
}
.lodckBot:hover {
  position: absolute;
  // top: -118px;
  top: 2.8vw;
  // right: 665px;
  right: 29.7vw;
}

.shildBot {
  position: absolute;
  // top: -118px;
  bottom: -10vw;
  // right: 665px;
  right: 1.8vw;
}
.shildBot:hover {
  position: absolute;
  // top: -118px;
  bottom: -11.39vw;
  // right: 665px;
  right: 3.19vw;
}

.trans{
  transition: 1s !important;
}

@media screen and (max-width: 1378px) {
.shildBot{
  bottom: -13vw;
}
}

@media screen and (max-width: 1024px) {
  .anim__top__cont {
  width: 69.43vw;
  transition: width 2s;
  overflow-x: hidden;
  position: relative;
  overflow-y: visible;
}

.anim__bot__cont {
  margin-top: 2.08vw;
  width: 56.25vw;
  transition: width 2s;
  overflow-x: hidden;
}
.shildUp{
  width: 68px;
  top: -6vw;
  right: 43.5vw;
}
.lodckBot{
  width: 30px;
  right: 28vw;
  top: 3.5vw;
}
.left__lock{
  width: 64px;
  left: 200px;
  top: -17px;
}
.shildBot{
  width: 98px;
  bottom: -10vw;
  right: 5.8vw;
}
.container{
  .header_part{

    height: unset !important;
    .content{
      margin-top: 45px;
    }
  }
}
}
@media screen and (max-width: 768px) {
  .anim__top__cont {
  width: 65.63vw;
  transition: width 2s;
  overflow-x: hidden;
  position: relative;
  overflow-y: visible;
}

.anim__bot__cont {
  margin-top: 2.08vw;
  width: 52.86vw;
  transition: width 2s;
  overflow-x: hidden;
}
.shildUp{
  width: 48px;
  top: -6vw;
  right: 41vw;
}
.lodckBot{
  width: 22px;
  right: 26.5vw;
  top: 3.5vw;
}
.left__lock{
  width: 46px;
  left: 180px;
  top: -17px;
}
.shildBot{
  width: 70px;
  bottom: -10vw;
  right: 4.8vw;
}
.container{
  .header_part{

    height: unset !important;
    .content{
      margin-top: 77px;
    }
  }
}
}
@media screen and (max-width: 450px) {
  .anim__top__cont {
  width: 96.25vw;
  transition: width 2s;
  overflow-x: hidden;
  position: relative;
  overflow-y: visible;
}

.anim__bot__cont {
  margin-top: 2.08vw;
  width: 76.88vw;
  transition: width 2s;
  overflow-x: hidden;
}
.shildUp{
  width: 10vw;
  top: -8vw;
  right: 59.5vw;
}
.lodckBot{
  width: 4.38vw;
  right: 37vw;
  top: 5.5vw;
}
.left__lock{
  width: 46px;
  left: 180px;
  top: -17px;
  display: none;
}
.shildBot{
  width: 14.38vw;
  bottom: -14vw;
  right: 3.8vw;
}
.container{
  .header_part{

    height: unset !important;
    .content{
      margin-top: 77px;
    }
  }
}
}
</style>

<style>
.anim__top__cont__active {
  width: 75.69vw !important;
  /* width: 100% !important; */
}

.anim__bot__cont__active {
  width: 60.76vw !important;
}

.anim__rot {
  animation: 3s linear 0s normal none infinite running rot;
  -webkit-animation: 3s linear 0s normal none infinite running rot;
}

.anim__rot__left {
  animation: 3s linear 0s normal none infinite running rotl;
  -webkit-animation: 3s linear 0s normal none infinite running rotl;
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rot {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotl {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@-webkit-keyframes rotl {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>

<style>
@keyframes asd {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
    bottom: 0px;
  }
}

.mainTitleLetter {
  animation-duration: 0.7s;
  animation-name: asd;
  display: inline-block;
}

.mainTitleWord {
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
}
.blue {
  color: #2F5BD8;
}
.spanBsp {
  opacity: 0;
}
@media screen and (max-width: 1271px) {
  .spanBsp {
    font-size: 45px;
  }
}

@media screen and (max-width: 1024px) {
  .spanBsp {
    font-size: 50px;
  }
}

@media screen and (max-width: 768px) {
  .spanBsp {
    font-size: 44px;
  }
}

@media screen and (max-width: 450px) {
  .spanBsp {
    font-size: 34px;
  }
}

@media screen and (max-width: 376px) {
  .spanBsp {
    font-size: 26px;
  }
}
@media screen and (max-width: 340px) {
  .spanBsp {
    font-size: 16px;
  }
}
</style>