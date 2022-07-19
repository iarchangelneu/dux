<template>
  <div class="container">
    <div class="header_part">
      <div class="menu">
        <Header />
      </div>
      <div class="images">
        <img src="../assets/images/gaming/header-photo.svg" style="float: right" />
      </div>
      <div class="content">
        <p class="p">
                <span class="brave">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                  </svg>
                  <span>Why It Matters</span>
                </span>
          <span class="blue">Responsible</span> Gaming
        </p>
      </div>
    </div>
    <div class="learn">
      <div class="title">
        <img src="../assets/images/gaming/learn.svg" />
      </div>
      <div class="content">
        <p>
          <span class="text-part">Gambling should always be seen as entertainment and nothing else. Unfortunately, sometimes people can take it too far and potentially lose control of their betting. You should never consider gambling as a source of income or a chance to recover from debt. Always keep track of the time and money you spent on gambling, check this with yourself every day.</span>
          <span class="text-part">If you are spending more money or time on gambling than you would like, please consider the several measures that can help, set Personal Limits on the time and money spent, consider a Self-Exclusion, and seek help and support from the trusted independent bodies available to you.</span>
          <span class="text-part">
            You can always take this gambling <span class="blue"> addiction quiz</span> to see if you're showing any signs of a gambling addiction.
          </span>
        </p>
      </div>
    </div>
    <div class="lists">
      <div class="title">
        <img src="../assets/images/gaming/howitwork.svg" />
      </div>
      <div class="content">
        <div class="content__item">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
            <h3>HOW TO LIMIT YOUR LOSSES AND SPENDING</h3>
          </div>
          <h4>We offer a Personal Limits feature. Here you can set limits on the amount you deposit, lose, wager, and spend in one game. Or even on your overall account activity. You can change these limits at any time. Customers have the flexibility of increasing/decreasing their purchase limits in order to control their level by adhering to KYC processes in accordance to the project. Reducing the limit will take effect immediately, but an increase in any limit will happen after email confirmation.</h4>
        </div>
        <div class="content__item">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
            <h3>Cooling-Off Period</h3>
          </div>
          <h4>You can set a cooling-off period for 1 week, 1 month, 3 months, or 6 months. When this limit is in effect, the system may limit the possibility of making a deposit and close access to all promotional offers. You can still withdraw any remaining funds during this period. This Cooling-Off period is instantly applied to your account and when it expires your account will be re-activated automatically.</h4>
        </div>
        <div class="content__item">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
            <h3>Self-Exclusion</h3>
          </div>
          <h4>You can set a Self-Exclusion Limit for 6 months, 9 months, or 1 year. When you do this your Player Account will be immediately disabled and you will be excluded from all of our promotional offers for the period you are excluded. You cannot deposit or withdraw funds when this exclusion is active. When this exclusion expires your account will not be automatically re-activated. When you set a Self-exclusion it lets us know that we need to do everything we can to block your access to your account and make sure that you receive no promotional materials whatsoever.</h4>
        </div>
        <div class="content__item">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
            <h3>LET’S SEE SOME ID</h3>
          </div>
            <h4>We only accept players who are at least 18 years old and use all available methods we have to stop any minors from registering and playing. We always reserve the right to ask for any proof of identity and if the player is not 18+ their access to our casinos will be denied immediately.</h4>
        </div>
        <div class="content__item">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
            <h3>OUR REALITY CHECK</h3>
          </div>
          <h4>Time flies when you're having fun, so we send hourly notifications in-game to remind you of your Casino expenditure. Regardless of how many games you are playing, we will always let you know every hour. This is to help you reflect on your bets and perhaps consider stopping for a while.</h4>
        </div>
      </div>
    </div>
    <div class="seeking">
      <div class="title">
        <img src="../assets/images/gaming/seeking-title.svg" />
      </div>
      <div class="content">
        <img src="../assets/images/gaming/seeking-bg.svg" />
        <img src="../assets/images/gaming/seeking-bg320.svg" class="small-bg"/>
        <div class="text">
          <p>Please contact any of the following organizations for consultation and support:</p>
          <span>Gamblers Anonymous <a href="https://www.gamblersanonymous.org/ga/" class="blue">http://www.gamblersanonymous.org/ga/</a> </span>
          <span>GamCare <a href="https://www.gamblersanonymous.org/ga/" class="blue">https://www.gamcare.org.uk/</a> </span>
          <span>Gambling Therapy <a href="https://www.gamcare.org.uk/" class="blue">https://www.gamblingtherapy.org/</a> </span>
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
export default {
  name: "Gaming_page",
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss" scoped>
.blue{
  color: #2F5BD8;
}
.small-bg{
  display: none;
}
.container{
  .header_part{
    background: #010C28 url('../assets/images/gradient.png') center;
    background-size: cover;
    //background: linear-gradient(180deg,#02185b,#00174e,#001542,#001135,#010c28);
    .menu{
      padding: 25px 25px 0 25px;
    }
    .images{
      width: 90%;
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
      img{
        width: 100%;
      }
    }

    .content{
      padding: 0 25px;
      position: relative;
      .p{
        position: absolute;
        top: -50px ;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 134px;
        line-height: 95%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
        margin: 0;
        width: 1400px;
        .blue{
          vertical-align: text-top;
        }
        .brave{
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 34px;
          line-height: 110%;
          display: inline-flex;
          align-items: baseline;
          min-width: 160px;
          max-width: 170px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          margin: 0 70px 50px 0;
          vertical-align: bottom;
          svg{
            margin-right: 11px;
            vertical-align: baseline;
          }
        }
      }
    }
  }
  .learn{
    padding-top: 450px;
    background-color: #010c28;
    .title{
      padding: 0 25px;
      img{
        width: 100%;
      }
    }
    .content{
      width: 50%;
      margin: 0 auto;
      padding: 130px 0px;
      p{
        margin: 0;
        font-family: 'Exo', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 125%;
        color: #F0F0F0;
        display: flex;
        flex-direction: column;
        .text-part:not(:last-child){
          margin-bottom: 20px;
        }
      }
    }
  }
  .lists{
    background-color: #010c28;
    .title{
      padding: 0 25px;
      img{
        width: 100%;
      }
    }
    .content{
        padding: 100px 25px 0 25px;
        &__item{
          &:first-child{
            border:none
          }

          border-top: 1px solid #828FA1;
          display: flex;
          padding: 10px 0 110px 0;
          align-items: flex-start;
          justify-content: space-between;
          div{
            display: flex;
            align-items: baseline;
            width: 35%;
            svg{
              margin-right: 100px;
              min-width: 20px;
            }
            h3{
              font-family: 'Oxygen' ,sans-serif;
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
          h4{
            max-width: 562px;
            font-family: 'Exo', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            margin: 0;
            line-height: 27px;
            color: #F0F0F0;
          }
        }
      }
  }
  @media (min-width: 1440px) and (max-width: 1920px){
    .seeking .content .text{
      padding-left: calc(50px + (250 - 50) * ((100vw - 1440px) / (1920 - 1440)));
      padding-right: calc(50px + (250 - 50) * ((100vw - 1440px) / (1920 - 1440)));
    }
  }
  .seeking{
    padding-top: 150px;
    background-color: #010c28;
    .title{
      padding: 0 25px;
      img{
        width: 100%;
      }
    }
    .content{
      position: relative;
      width: 81%;
      margin: 0 auto;
      margin-top: 90px;
      display: flex;
      justify-content: center;
      .text{
        position: absolute;
        margin: 0 auto;
        top: 0;
        padding-top: 90px;
        padding-bottom: 82px;
        //padding: 90px 250px 82px 250px;
        p{
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
        span{
          display: block;
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 28px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          a{
            margin-left: 25px;
            text-transform: lowercase;
          }
        }
        span:not(:last-child){
          margin-bottom: 30px;
        }
      }
    }
  }
  .footer{
    background-color: #010c28;
    padding: 150px 25px 0 25px;
  }

}

@media (min-width: 320px) and (max-width: 768px){
  .footer{
    padding: 50px 16px 0 16px !important;
  }
}
@media (min-width: 1024px) and (max-width: 1439px) {
.container{
  & > *{
    margin-top: -1px;
  }
  .learn{
    padding-top: 200px !important;
  }
  .header_part{
    p{
      font-size: 134px !important;
      width: 1100px !important;
    }
    .images{
      img{
        width: 100% !important;
      }
    }
    .content{
      p{
        font-size: 84px !important;
        line-height: 105% !important;
        top: -110px !important;
        span{
          margin: 0 40px 10px 0 !important;
          vertical-align: middle !important;

        }
        span.brave{

          font-size: 22px !important;
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
            margin-right: 50px !important;
          }
        }
        h4{
          width: 50% !important;
        }
      }
    }
  }
  .seeking{
    .content{
      img{
        width: 100%  !important;
      }
      .text{
        width: 92% !important;
        padding: 50px 40px 35px 40px !important;
        p{
          font-size: 24px !important;
          line-height: 30px !important;
        }
        span{
          font-size: 16px !important;
        }
        span:not(:last-child){
          margin-bottom: 20px !important;
        }
      }
    }
  }
}
  
}
@media (min-width: 769px) and (max-width: 1024px) {
.container{
  & > *{
    margin-top: -1px;
  }
  .header_part{
    .images{
      img{
        width: 100% !important;
      }
    }
    .content{
      p{
        font-size: 68px !important;
        width: 700px !important; ;
        line-height: 105% !important;
        top: -80px !important;
        span.brave{
          font-size: 22px !important;
          margin: 10px 20px 0 0px !important;
          vertical-align: top !important;
        }
      }
    }
  }
  .lists .content__item div svg{
    width: 12px !important;
    height: 12px !important;
  }
  .learn{
    padding-top: 210px !important;
    .content{
      width: 70% !important;
      padding: 80px 0 !important;
      p{
        font-size: 18px !important;
      }
    }
  }
  .lists{
    .content{
      padding: 50px 25px 0 25px !important;
      &__item{
        padding: 10px 0 60px 0 !important;
        div{
          svg{
            margin-right: 10px !important;
          }
          h3{
            font-size: 25px !important;
            line-height: 35px !important;
          }
        }
        h4{
          width: 50% !important;
        }
      }
    }
  }
  .seeking{
    padding: 0 !important;
    .content{
      img{
        width: 100%  !important;
      }
      .text{
        width: 92% !important;
        padding: 50px 40px 35px 40px !important;
        p{
          font-size: 20px !important;
          line-height: 24px !important;
          padding-bottom: 15px !important;
        }
        span{
          font-size: 16px !important;
          line-height: 23px !important;
          letter-spacing: 0.03em !important;
        }
        span:not(:last-child){
          margin-bottom: 20px !important;
        }
      }
    }
  }
}

}
@media (min-width: 320px) and (max-width: 768px) {
.container{
  & > *{
    margin-top: -1px;
  }
  .header_part{
    .images{
      img{
        width: 100% !important;
      }
    }
    .content{
      p{
        font-size: 34px !important;
        width: 100% !important;
        line-height: 110% !important;
        position: relative !important;
        top: 0 !important;
        margin-top: -50px !important;
        display: flex !important;
        flex-direction: column !important;
        span.brave{
          font-size: 16px !important;
          line-height: 20px !important;
          margin: 0 15px 10px 0 !important;
          vertical-align: middle !important;
          svg{
            width: 10px !important;
            height: 10px !important;
          }
        }
      }
    }
  }
  .learn{
    .title{
      padding: 0 16px !important;
    }
    padding-top: 70px !important;
    .content{
      width: auto !important;
      padding: 30px 16px !important;
      p{
        font-size: 14px !important;
      }
    }
  }
  .lists{
    .content{
      padding: 20px 16px 0 16px !important;
      display: flex !important;
      flex-direction: column !important;
      &__item{
        padding: 10px 0 30px 0 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        div{
          width: auto !important;
          display: flex !important;
          align-items: center !important;
          svg{
            margin-right: 10px !important;
            width: 10px !important;
            height: 10px !important;
          }
          h3{
            font-size: 16px !important;
            line-height: 25px !important;
          }
        }
        h4{
          width: auto !important;
          font-size: 14px !important;
          line-height: 16px !important;
        }
      }
    }
  }
  .seeking{
    padding: 0 !important;
    .content{
      width: 95% !important;
      margin-top: 0px !important;
      img:first-child{
        display: none;
      }
      //img.small-bg{
      //  display: block !important;
      //  width: 100% !important;
      //}
      .text{
        position: relative;
        margin-top: 50px !important;
        background-image: url('../assets/images/gaming/seeking-bg.svg');
        background-position: center;
        background-size: cover;
        width: auto !important;
        border-radius: 15px !important;
        margin: 0 auto;
        padding: 50px 16px !important;
        p{
          font-size: 16px !important;
          line-height: 20px !important;
          padding-bottom: 25px !important;
        }
        span{
          font-size: 16px !important;
          line-height: 20px !important;
          a{
            display: block !important;
            margin-left: 0 !important;
            font-size: 12px !important;
            line-height: 16px !important;
            letter-spacing: 0.04em !important;
          }
        }
        span:not(:last-child){
          margin-bottom: 30px !important;
        }
      }
    }
  }

}

}
</style>