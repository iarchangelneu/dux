<template>
  <div>
    <div class="header-container">

      <img src="../assets/images/contact/NormEl.svg" class="round0 rounds RoundsAnime" alt="">

      <img src="../assets/images/contact/NormEl1.svg" class="round1 rounds LinesAnime" alt="">
      <img src="../assets/images/contact/Line1.svg" class="line1 lines LinesAnime" alt="">

      <img src="../assets/images/contact/CropedEl.svg" class="round2 rounds LinesAnime" alt="">
      <img src="../assets/images/contact/Line2.svg" class="line2 lines LinesAnime" alt="">

      <img src="../assets/images/contact/NormEl1.svg" class="round3 rounds LinesAnime" alt="">
      <img src="../assets/images/contact/Line3.svg" class="line3 lines LinesAnime" alt="">

      <img src="../assets/images/contact/NormEl1.svg" class="round4 rounds LinesAnime" alt="">
      <img src="../assets/images/contact/Line4.svg" class="line4 lines LinesAnime" alt="">

      <img src="../assets/images/contact/CropedEl.svg" class="round01 rounds LinesAnime" alt="">

      <img src="../assets/images/contact/NormEl1.svg" class="round5 rounds LinesAnime" alt="">
      <img src="../assets/images/contact/Line5.svg" class="line5 lines LinesAnime" alt="">

      <img src="../assets/images/contact/CropedEl.svg" class="round6 rounds LinesAnime" alt="">
      <img src="../assets/images/contact/Line6.svg" class="line6 lines LinesAnime" alt="">

      <img src="../assets/images/contact/NormEl1.svg" class="round7 rounds LinesAnime" alt="">
      <img src="../assets/images/contact/Line7.svg" class="line7 lines LinesAnime" alt="">

      <img src="../assets/images/contact/NormEl1.svg" class="round8 rounds LinesAnime" alt="">
      <img src="../assets/images/contact/Line8.svg" class="line8 lines LinesAnime" alt="">

      <div class="contact-banner">
        <div class="header">
          <HeaderPart />
        </div>
        <h1 class="contact-banner__title" id="p">
          <span class="contact-us"><img class="span-svg" src="../assets/images/contact/Ellipse1.svg"
              alt="elipse">contact us</span>
          <!-- We are open <span class="color-blue">24/7</span> for any kind of <span class="color-blue">collaboration</span> -->
        </h1>
      </div>
    </div>

    <div class="devider">
      <BlockTitle title="investments"></BlockTitle>
    </div>
    <div class="contact-form__container">
      <form action="#" class="contact-form" data-aos="fade-up" data-aos-duration="1500">
        <div class="form-left-side">
          <h2 class="form-left-side-title">General questions:</h2>
          <p class="form-left-side-text">hello@duxgroup.com</p>
        </div>
        <div class="form-right-side">
          <input type="text" placeholder="Your contact e-mail" class="form-right-side-input" id="mail__input">
          <small class="error__msg" id="error__msg">Error message</small>

          <textarea placeholder="Comment"></textarea>
          <p @click="test" class="apply">Apply now <img src="../assets/images/btn_arrow.svg" alt=""></p>
        </div>
      </form>
    </div>

    <div class="footer">
      <FooterPart />

    </div>
  </div>

</template>

<script>
import HeaderPart from "@/components/Header";
import FooterPart from "@/components/Footer"
import BlockTitle from '../components/BlockTitle.vue';


export default {
  data() {
    return {
      mainTitle: 'We are open 24/7 for any kind of collaboration',
    }
  },
  name: "Contact-us",
  components: { HeaderPart, FooterPart, BlockTitle },
  methods: {
    test() {
      let mail = document.getElementById('mail__input')
      let error = document.getElementById('error__msg')

      if (mail.value.length <= 0) {
        mail.style.borderColor = '#C22B2B'
        error.style.display = 'block'
      }
      else {
        mail.style.borderColor = '#828FA1'
        error.style.display = 'none'
      }
    },
    spaBspCreate(block, amount = 1) {
      for (let i = 0; i < amount; i++) {
        let spanBsp = document.createElement('span');
        spanBsp.innerText = 'I';
        spanBsp.classList.add('spanBsp')
        block.appendChild(spanBsp)
      }
    },
    spanletterCreate(letter) {
      let spanInside = document.createElement('span');
      spanInside.innerText = letter;
      spanInside.classList.add('mainTitleLetter')
      return spanInside
    },
    titleBlock() {
      let firstSplit = this.mainTitle.split(' ')

      let block = document.getElementById('p')
      let timer = 0;

      firstSplit.forEach((word, ind) => {
        let span = document.createElement('span');
        span.id = 'word' + ind;

        if (ind == 3 || ind == 8) {
          span.classList.add('blue')
          // if(window.innerWidth < 450){
          //   this.spaBspCreate(block)
          // }
        }

        if (ind == 3 || ind == 8) {
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
  mounted() {

    this.titleBlock();

    function addOpac(el) {
      // console.log(el);
      document.querySelector(`.${el}`).classList.remove('LinesAnimeR')
      document.querySelector(`.${el}`).classList.add('LinesAnime')
      document.querySelector(`.${el}`).classList.add('LinesShow')
    }
    function remOpac(el) {
      document.querySelector(`.${el}`).classList.remove('LinesAnime')
      document.querySelector(`.${el}`).classList.add('LinesAnimeR')
      setTimeout(() => { document.querySelector(`.${el}`).classList.remove('LinesShow') }, 1000)
      // document.querySelector(`.${el}`).classList.remove('LinesShow')
    }
    function addShow(el) {
      document.querySelector(`.${el}`).classList.remove('RoundsAnimeR')
      document.querySelector(`.${el}`).classList.add('RoundsAnime')
      document.querySelector(`.${el}`).classList.add('RoundsShow')
    }
    function remShow(el) {
      document.querySelector(`.${el}`).classList.remove('RoundsAnime')
      document.querySelector(`.${el}`).classList.add('RoundsAnimeR')
      setTimeout(() => { document.querySelector(`.${el}`).classList.remove('RoundsShow') }, 1000)
      // document.querySelector(`.${el}`).classList.remove('RoundsShow')
    }

    // function animating() {
    //   //SHOWING

    //   setTimeout(addOpac, 1000, 'line1')
    //   setTimeout(addOpac, 1100, 'line4')
    //   setTimeout(addOpac, 1200, 'line7')
    //   setTimeout(addOpac, 1300, 'line2')
    //   setTimeout(addOpac, 1500, 'line5')
    //   setTimeout(addOpac, 1600, 'line8')
    //   setTimeout(addOpac, 1700, 'line6')
    //   setTimeout(addOpac, 1800, 'line3')

    //   setTimeout(addShow, 1900, 'round3')
    //   setTimeout(addShow, 1900, 'round7')
    //   setTimeout(addShow, 1900, 'round01')

    //   setTimeout(addShow, 2900, 'round1')
    //   setTimeout(addShow, 2900, 'round2')
    //   setTimeout(addShow, 2900, 'round5')
    //   setTimeout(addShow, 2900, 'round6')
    //   setTimeout(addShow, 2900, 'round8')

    //   setTimeout(addShow, 3900, 'round4')
    //   setTimeout(addShow, 3900, 'round0')

    //   //REMOVING

    //   setTimeout(remShow, 4900, 'round4')
    //   setTimeout(remShow, 4900, 'round0')

    //   setTimeout(remShow, 5900, 'round1')
    //   setTimeout(remShow, 5900, 'round2')
    //   setTimeout(remShow, 5900, 'round5')
    //   setTimeout(remShow, 5900, 'round6')
    //   setTimeout(remShow, 5900, 'round8')

    //   setTimeout(remShow, 6900, 'round3')
    //   setTimeout(remShow, 6900, 'round7')
    //   setTimeout(remShow, 6900, 'round01')

    //   setTimeout(remOpac, 7000, 'line1')
    //   setTimeout(remOpac, 7100, 'line4')
    //   setTimeout(remOpac, 7200, 'line7')
    //   setTimeout(remOpac, 7300, 'line2')
    //   setTimeout(remOpac, 7400, 'line5')
    //   setTimeout(remOpac, 7500, 'line8')
    //   setTimeout(remOpac, 7600, 'line6')
    //   setTimeout(remOpac, 7700, 'line3')
    // }

    function animating() {
      //SHOWING

      setTimeout(addOpac, 1000, 'line3')
      setTimeout(addOpac, 1000, 'round3')

      setTimeout(addOpac, 1300, 'line1')
      setTimeout(addOpac, 1300, 'round1')

      setTimeout(addOpac, 1500, 'line7')
      setTimeout(addOpac, 1500, 'round7')
      
      setTimeout(addOpac, 1900, 'line4')
      setTimeout(addOpac, 1900, 'round4')

      setTimeout(addOpac, 2300, 'line6')
      setTimeout(addOpac, 2300, 'round6')

      setTimeout(addOpac, 2700, 'line2')
      setTimeout(addOpac, 2700, 'round2')
     
      setTimeout(addOpac, 3100, 'line8')
      setTimeout(addOpac, 3100, 'round8')

      setTimeout(addOpac, 3400, 'line5')
      setTimeout(addOpac, 3400, 'round5')

      setTimeout(addOpac, 1900, 'round01')
      setTimeout(addOpac, 3900, 'round0')

      

      //REMOVING
      setTimeout(remOpac, 4900, 'round3')
      setTimeout(remOpac, 4900, 'line3')

      setTimeout(remOpac, 5400, 'round1')
      setTimeout(remOpac, 5400, 'line1')

      setTimeout(remOpac, 6000, 'round7')
      setTimeout(remOpac, 6000, 'line7')

       setTimeout(remOpac, 6500, 'round4')
      setTimeout(remOpac, 6500, 'line4')

      setTimeout(remOpac, 6900, 'round6')
      setTimeout(remOpac, 6900, 'line6')

      setTimeout(remOpac, 7200, 'line2')
      setTimeout(remOpac, 7200, 'round2')

      setTimeout(remOpac, 7400, 'round8')
      setTimeout(remOpac, 7400, 'line8')

      setTimeout(remOpac, 7500, 'round5')
      setTimeout(remOpac, 7500, 'line5')
      
      
      
     
      setTimeout(remOpac, 5500, 'round0')
      setTimeout(remOpac, 5500, 'round01')
    }

    animating();

    setInterval(animating,
      8500
    )
  }

}
</script>
    

<style lang="scss" scoped>
.error__msg {
  color: #C22B2B;
  font-size: 14px;
  // margin-bottom: ;
  margin-left: 0px;
  display: block;
  transition: display .3s;
  display: none;
}

.error {
  border: 1px solid #C22B2B !important;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::placeholder {
  color: #828FA1;
}

.color-blue {
  color: #2F5BD8;
}

.header-container {
  background: #010C28 url('../assets/images/gradient.png') center;
  background-size: cover;

  .contact-banner {
    // background: url("../assets/images/contact/Union.svg") no-repeat;
    background-size: contain;
    padding: 25px;
    min-height: 702px;

    &__title {
      font-family: "Oxygen", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 132px;
      line-height: 95%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #F0F0F0;
      margin-top: 410px;
      max-width: 1615px;

      & .contact-us {
        font-family: "Oxygen", sans-serif;
        font-style: normal;
        width: fit-content;
        font-weight: 400;
        font-size: 38px;
        line-height: 48px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #F0F0F0;
        margin: 0 70px 0px 0;
        vertical-align: top;
        position: relative;
        top: 9px;
        display: inline-flex;
        align-items: center;


        @media screen and (max-width:1440px) {
          margin-right: 4.51vw;
        }

        & .span-svg {
          margin-right: 11px;
          vertical-align: baseline;
        }
      }
    }
  }
}

.devider {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 150px;
  display: flex;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;

  img {
    width: 100%;
  }
}

form {
  .apply {
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
    min-height: 20px;
    transition: all .3s;

    img {
      padding-left: 352px;
      opacity: 0;
      transition: all .3s;
    }
  }



  .apply:hover img {
    opacity: 1;
  }

  .apply:hover {
    background: #0E339C;
  }
}

.contact-form__container {
  background: #010C28 no-repeat;
  min-height: 700px;
  padding-top: 88px;
  display: flex;
  width: 100%;
  margin-top: -1px;
  align-items: flex-start;
  justify-content: center;

  & .contact-form {
    display: flex;
    justify-content: space-around;
    background: url("../assets/images/contact/Vector.svg") no-repeat center;
    min-height: 454px;
    width: 1154px;

    & .form-left-side {
      margin-top: 114px;

      &-title {
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 35px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #F0F0F0;
        margin: 0;
      }

      &-text {

        margin: 0;
        font-family: 'Exo', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        color: #828FA1;

      }
    }

    & .form-right-side {
      margin-top: 114px;
      display: flex;
      flex-direction: column;

      &-input {
        color: white;
        resize: none;
        max-width: 510px;
        height: 48px;
        border: 1px solid #828FA1;
        border-radius: 8px;
        margin-bottom: 10px;
        background: none;
        padding: 14px;
        transition: all .3s;

        &:nth-child(2) {
          width: 510px;
          height: 108px;
          border: 1px solid #828FA1;
          border-radius: 8px;
          margin-bottom: 14px;

        }
      }

      textarea {
        border: 1px solid #828FA1;
        background: transparent;
        padding: 15px 0 15px 15px;

        border-radius: 8px;
        resize: none;
        color: #828FA1;
        font-size: 16px;
        margin-top: 10px;
        width: 510px;
        font-family: 'Oxygen';
        min-height: 108px;
        margin-bottom: 14px;
      }
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

.devider {
  margin-top: -1px !important;
}

@media only screen and (max-width: 1300px) {

  .contact-form {
    width: 960px !important;
  }

  .divider {
    margin-top: -1px !important;
  }

}

@media only screen and (max-width: 1160px) {
  .contact-banner__title {
    font-size: 84px;
  }

  .contact-form__container {
    padding: 32px;
  }

  .contact-banner {
    // background: url("../assets/images/contact/1024.svg") no-repeat, linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  }
}


@media only screen and (max-width: 998px) {
  form {
    .apply {

      width: 352px;
    }

  }

  .form-left-side-title {
    font-size: 20px !important;
  }

  .form-left-side-text {
    font-size: 20px !important;
    margin-bottom: 20px !important;
  }

  .form-right-side-input {
    width: 352px !important;
  }
}

@media (max-width: 1439px) and (min-width: 1024px) {

  .contact-banner {
    min-height: 417px !important;
  }

}

@media (max-width: 1023px) and (min-width: 769px) {
  .contact-banner {
    min-height: 300px !important;
  }

}

@media (max-width: 768px) and (min-width: 320px) {

  .contact-banner {
    min-height: 265px !important;
  }


}

@media only screen and (max-width: 768px) {
  .contact-banner {
    // background: url("../assets/images/contact/768.svg") no-repeat, linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  }
}

@media only screen and (max-width: 676px) {

  .devider {
    padding-top: 0 !important;
  }

  .contact-banner__title {
    max-width: 674px !important;
    font-size: 68px !important;
    margin-top: 40px !important;
  }

  .contact-us {
    max-width: 100% !important;
    font-size: 20px !important;
    margin: 0 !important;
    display: flex;
    flex-direction: row;
    width: 100% !important;
  }

  .contact-form {
    flex-direction: column;
    padding: 0 30px;
    justify-content: center !important;
  }

  .form-left-side {
    margin-top: 0 !important;
  }

  .form-right-side {
    margin-top: 0 !important;
  }

  .form-right-side-input {
    max-width: 100% !important;
    width: 100% !important;
  }
}

@media only screen and (max-width: 592px) {
  .contact-banner__title {
    max-width: 288px !important;
    font-size: 34px !important;
  }

}

@media screen and (max-width:768px) {
  .header-container .contact-banner__title {
    font-size: 68px !important;
    width: 692px !important;
  }
}

@media only screen and (max-width: 321px) {
  .contact-banner {
    // background: url("../assets/images/contact/320.svg") no-repeat, linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  }
}


@media screen and (max-width: 1440px) {
  .contact-form__container .contact-form .form-right-side-input {
    font-size: 16px;
    font-family: 'Oxygen';
    color: #828FA1;

  }

  .header-container .contact-banner {
    // background: url(/img/Union.a63e40e7.svg) no-repeat;
    background-size: contain;
    padding: 25px;
    min-height: 730px;
  }

  .contact-us {
    font-size: 28px !important;
    line-height: 28px !important;
    margin-top: 0 !important;
    position: relative;
    margin-top: 50px !important;

    &>img {
      width: 14px;
    }
  }

  .devider {
    padding-top: 105px !important;
  }

  .contact-banner__title {
    font-size: 110px !important;
    line-height: 105% !important;
    margin-top: 285px !important;
    max-width: 1261px !important;
  }

  .header-container .contact-banner__title .contact-us {
    top: -33px;
  }
}

@media screen and (max-width: 1024px) {
  .header-container .contact-banner__title .contact-us {
    top: -3px;
  }

  .contact-form__container {
    padding: 64px 32px 0 32px;
    min-height: 622px;
  }

  .contact-form__container .contact-form {
    background: url('../assets/images/contact1024.png') no-repeat center;
  }

  .header-container .contact-banner__title {

    font-size: 84px !important;
    width: 900px !important;

  }

  .contact-us {

    margin-top: 20px !important;
  }

  .contact-us {
    font-size: 20px !important;
    line-height: 25px !important;
    // margin: 0 !important;
    position: relative;
    top: 10px;
    margin-top: 15px !important;

    &>img {
      width: 10px;
    }
  }

  .devider {
    padding-top: 72px !important;
  }

  .contact-banner__title {
    font-size: 68px !important;
    line-height: 105% !important;
    margin-top: 90px !important;
    max-width: 900px !important;
  }
}

@media screen and (max-width: 768px) {
  .contact-form__container {
    padding: 64px 8px 0 8px;
    min-height: 622px;
  }

  .contact-form__container .contact-form {
    background: url('../assets/images/contact720.png') no-repeat center !important;
  }

  .header-container .contact-banner__title {
    font-size: 68px !important;
    width: 735px !important;
  }
}

@media screen and (max-width: 450px) {
  form {
    .apply{
      img{
            padding-left: 190px;
      }
    }
  }
  .contact-form{
    width: 100% !important;
  }
  .contact-us {
    position: initial !important;
    font-size: 16px !important;
    line-height: 20px !important;
    margin: 0 140px 0 0 !important;

    &>img {
      width: 10px;
    }
  }

  .devider {
    padding-top: 72px !important;
    padding-left: 16px;
    padding-right: 16px;
  }

  .contact-banner__title {
    font-size: 34px !important;
    line-height: 110% !important;
    margin-top: 60px !important;
    max-width: 288px !important;
  }

  .contact-form__container .contact-form {
    .form-right-side{
      textarea{
        width: 100%;
      }
    }
    background: url('../assets/images/contact320.png') no-repeat center !important;
  }

  .contact-form {
    padding: 0 80px !important;
  }

  .form-left-side-text {
    font-size: 14px !important;
  }

  .form-left-side-title {
    width: 244px;

    .header-container .contact-banner__title {
      font-size: 16px !important;
    }
  }

  .header-container .contact-banner__title {
    font-size: 34px !important;
  }

  .contact-form__container {

    min-height: 600px !important;

  }
}

@media screen and (min-width: 375px) and (max-width: 450px) {
  .contact-form__container .contact-form .form-left-side-title {
    margin-top: -50px;
  }

  .contact-form__container {
    padding: 64px 8px 72px 8px;
  }

  .contact-form__container .contact-form {
    background: url('../assets/images/gamingbg.png') no-repeat cover !important;
    background-size: 383px 530px !important;
    min-height: 590px !important;
    padding: 0 23px !important;

  }

  .form-left-side-text {
    margin-bottom: 30px !important;
  }

  .contact-form__container .contact-form .form-right-side-input {
    margin-bottom: 30px;
    border-radius: 4px !important;
  }
}

.lines {
  display: none;
}

.rounds {
  display: none;
}

.round0 {
  position: absolute;
  top: 18.19vw;
  left: 2.78vw;
}

.round1 {
  position: absolute;
  top: 1.46vw;
  left: 16.25vw;
  width: 7.99vw;
}

.line1 {
  display: none;
  position: absolute;
  top: 0;
  left: 24.03vw;
  width: 55.14vw;
}

.round2 {
  position: absolute;
  top: 13.19vw;
  left: 14.17vw;
  width: 5.69vw;
  // height: 82px;
}

.line2 {
  position: absolute;
  top: 0;
  left: 19.58vw;
  width: 59.58vw;
}

.round3 {
  position: absolute;
  top: 12.78vw;
  left: 27.01vw;
  width: 9.79vw;
  // height: 141px;
}

.line3 {
  position: absolute;
  top: 0;
  left: 36.11vw;
  width: 43.13vw;
}

.round4 {
  position: absolute;
  top: 10.56vw;
  left: 45.07vw;
  width: 7.50vw;
  // height: 108px;
}

.line4 {
  position: absolute;
  top: 0;
  left: 51.60vw;
  width: 27.64vw;
}

.round01 {
  width: 3.26vw;
  // height: 47px;
  position: absolute;
  top: 20.90vw;
  left: 40.69vw;
}

.round5 {
  position: absolute;
  top: 20.42vw;
  left: 56.11vw;
  width: 5vw;
  // height: 72px;
}

.line5 {
  position: absolute;
  top: 0;
  left: 59.86vw;
  width: 19.38vw;
}

.round6 {
  position: absolute;
  top: 14.65vw;
  left: 64.65vw;
  width: 5.63vw;
  // height: 81px;
}

.line6 {
  position: absolute;
  top: 0;
  left: 68.61vw;
  width: 10.63vw;
}

.round7 {
  position: absolute;
  top: 7.71vw;
  left: 72.29vw;
  width: 13.19vw;
  // height: 190px;
}

.line7 {
  position: absolute;
  top: 0;
  left: 78.75vw;
  width: 0.49vw;
}

.round8 {
  position: absolute;
  top: 18.75vw;
  left: 93.26vw;
  width: 4.93vw;
  // height: 71px;
}

.line8 {
  position: absolute;
  top: 0;
  left: 79.10vw;
  width: 15.76vw;
}
</style>

<style>
@keyframes opac {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes opacR {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes width {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

@keyframes widthR {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0);
  }
}

.LinesAnime {
  animation-duration: 2s;
  animation-name: opac;
  /* display: block !important; */
  /* opacity: 1 !important; */
}

.LinesAnimeR {
  animation-duration: 1s;
  animation-name: opacR;
  /* display: block !important; */
  /* opacity: 1 !important; */
}

.RoundsAnime {
  animation-duration: 1s;
  animation-name: width;
  /* display: block !important; */
  /* opacity: 1 !important; */
}

.RoundsAnimeR {
  animation-duration: 1s;
  animation-name: widthR;
  /* display: block !important; */
  /* opacity: 1 !important; */
}

.RoundsShow {
  display: block !important;
}

.LinesShow {
  display: block !important;
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
    font-size: 34px;
  }
}

@media screen and (max-width: 340px) {
  .spanBsp {
    font-size: 16px;
  }
}
</style>