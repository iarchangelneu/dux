<template>
  <div>

    <div class="header-container">
      <div class="careers-banner">
        <HeaderPart @opened="openedMobMenu"/>
        <h1 class="careers-banner__title">
        <span class="careers"><img class="span-svg" src="../assets/images/contact/Ellipse1.svg"
                                   alt="elipse">Careers</span>
          <span class="color-blue">People </span>are our main treasure
        </h1>
      </div>
    </div>

    <div class="devider first-devider">
      <img src="../assets/images/careers/careers.svg" alt="careers"/>
    </div>
    <div class="line" v-if="menuClosed">
      <div class="marquee-container">
        <div class="Marquee">
          <div class="Marquee-content">
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>work hard</p>
            </div>
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>work hard</p>
            </div>
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>work hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>Play hard</p>
            </div>

          </div>
        </div>
      </div>

      <div class="marquee-container">
        <div class="Marquee">
          <div class="Marquee-content" style="animation-delay: 2s">
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>work hard</p>
            </div>
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>work hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>work hard</p>
            </div>
          </div>
        </div>
      </div>
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/e4PBKgLlaHk" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
      <div class="slider">
        <VueSlickCarousel ref="images" v-bind="settingsImages">
          <img src="../assets/images/careers/slider/brooke-cagle-g1Kr4Ozfoac-unsplash1.png">
          <img src="../assets/images/careers/slider/pexels-cowomen-20416291.png">
          <img src="../assets/images/careers/slider/pexels-cowomen-20416293.png">
          <img src="../assets/images/careers/slider/pexels-cowomen-20416294.png">
          <img src="../assets/images/careers/slider/pexels-cowomen-20416296.png">
          <img src="../assets/images/careers/slider/pexels-cowomen-20416297.png">
          <img src="../assets/images/careers/slider/pexels-cowomen-20416298.png">
          <img src="../assets/images/careers/slider/pexels-cowomen-20416299.png">
          <img src="../assets/images/careers/slider/pexels-cowomen-204162910.png">
          <img src="../assets/images/careers/slider/Rectangle930.png">
        </VueSlickCarousel>
        <div class="arrows">
          <div class="prev" @click="$refs.images.prev()">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#2F5BD8" class="bi bi-arrow-left"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </div>
          <div class="next" @click="$refs.images.next()">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#2F5BD8" class="bi bi-arrow-right"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="devider">
      <img src="../assets/images/careers/benefites.svg" alt="careers"/>
    </div>
    <div class="benefits">
      <h2 class="benefits__title">We
        <span class="color-blue"> love our people</span>,
        appreciate our team, and try to become like a second
        <span class="color-blue">family</span>.
        Want to be a part of our team? <span class="color-blue">Then join us!</span>
      </h2>
      <div class="row">
        <div class="row__container">
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Modern, iGaming environment in a sunny climate.
          </p>
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Team lunches, drinks, and team events.
          </p>
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Employee Development Plans.
          </p>
        </div>
        <div class="row__container">
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Seafront offices.
          </p>
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Birthdays (we celebrate by giving employees birthday gifts + yummy treats).
          </p>
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Mobile phone allowance.
          </p>
        </div>
        <div class="row__container">
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Private health insurance.
          </p>
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Flexi-time.
          </p>
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Kitchen packed with free flowing treats/ fruit/ snacks.
          </p>
        </div>
      </div>
    </div>
    <div class="devider">
      <img src="../assets/images/careers/header.svg" alt="header"/>
    </div>
    <div class="career">
      <h2 class="career__title">Start your
        <span class="color-blue"> star</span>
        career at
        <span class="color-blue">DUXGroup</span>
      </h2>
      <div class="career-main-block">
        <h3 class="career-main-block-subtitle">Job openings</h3>
        <h3 class="career-main-block-subtitle">Open Positions</h3>
        <div class="career-main-block-items">
          <p class="career-main-block-items-company-name">Affiliate Department</p>
          <div class="career-main-block-items-text-container">
            <p class="career-main-block-items-text-container-job-position">Junior Affiliate Manager</p>
            <p class="career-main-block-items-text-container-job-hirer">Sliema, Malta</p>
          </div>
        </div>
        <div class="career-main-block-items">
          <p class="career-main-block-items-company-name">Affiliate Department</p>
          <div class="career-main-block-items-text-container">
            <p class="career-main-block-items-text-container-job-position">Junior Affiliate Manager</p>
            <p class="career-main-block-items-text-container-job-hirer">Sliema, Malta</p>
          </div>
        </div>
        <div class="career-main-block-items">
          <p class="career-main-block-items-company-name">Affiliate Department</p>
          <div class="career-main-block-items-text-container">
            <p class="career-main-block-items-text-container-job-position">Junior Affiliate Manager</p>
            <p class="career-main-block-items-text-container-job-hirer">Sliema, Malta</p>
          </div>
        </div>
        <div class="career-main-block-items">
          <p class="career-main-block-items-company-name">Affiliate Department</p>
          <div class="career-main-block-items-text-container">
            <p class="career-main-block-items-text-container-job-position">Junior Affiliate Manager</p>
            <p class="career-main-block-items-text-container-job-hirer">Sliema, Malta</p>
          </div>
        </div>
        <div class="career-main-block-items">
          <p class="career-main-block-items-company-name">Affiliate Department</p>
          <div class="career-main-block-items-text-container">
            <p class="career-main-block-items-text-container-job-position">Junior Affiliate Manager</p>
            <p class="career-main-block-items-text-container-job-hirer">Sliema, Malta</p>
          </div>
        </div>
        <button class="career-main-block-button">see more <img src="../assets/images/careers/right.svg" alt="right">
        </button>
      </div>
    </div>
    <div class="devider">
      <img src="../assets/images/careers/linesecond.svg" alt="line second"/>
    </div>
    <div class="stages" v-if="menuClosed">
      <div class="stage-container">
        <h2 class="stage-container-title">Stage 01</h2>
        <p class="stage-container-sub-title">CV Screening</p>
      </div>
      <img class="line-svg" src="../assets/images/careers/Line.svg" alt="Line"/>
      <div class="stage-container">
        <h2 class="stage-container-title">Stage 02</h2>
        <p class="stage-container-sub-title">1st Interview with HR</p>
      </div>
      <img class="line-svg" src="../assets/images/careers/Line.svg" alt="Line"/>
      <div class="stage-container">
        <h2 class="stage-container-title">Stage 03</h2>
        <p class="stage-container-sub-title">Interview with Hiring Manager</p>
        <p class="stage-container-sub-text">*Home Task may be<br> included in this stage</p>
      </div>
      <img class="line-svg" src="../assets/images/careers/Line.svg" alt="Line"/>
      <div class="stage-container">
        <h2 class="stage-container-title">Stage 04</h2>
        <p class="stage-container-sub-title">Final Interview with Management</p>
        <p class="stage-container-sub-text">(Usually for high level position)</p>
      </div>
      <img class="line-svg" src="../assets/images/careers/Line.svg" alt="Line"/>
      <div class="stage-container">
        <h2 class="stage-container-title">Stage 05</h2>
        <p class="stage-container-sub-title">Offer stage</p>
      </div>
      <img class="mobile-line" src="../assets/images/careers/mobile-line.svg" alt="mobile"/>
    </div>
    <div class="devider">
      <img src="../assets/images/careers/about.svg" alt="about"/>
    </div>
    <div class="igaming">
      <h2 class="igaming-title">
        Innovative
        <span class="color-blue">  iGaming</span>
        Meets a Passion for Tech
      </h2>
      <div class="igaming-container">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16"/>
          </div>
          <div class="igaming-container-left-side-text">
            <h3 class="igaming-container-left-side-title">We think several steps ahead</h3>
          </div>
        </div>
        <div class="igaming-container-right-side">
          <p class="igaming-container-right-side-text">
            Hello world, DUXGroup calling! We’re a specialized team of
            iGaming professionals that always manage to impress our customers and partners by providing the most
            innovative and optimised iGaming solutions.Hello world, DUXGroup calling! We’re a specialized team of
            iGaming professionals that always manage to impress our customers and partners by providing the most
            innovative and optimised iGaming solutions.
          </p>
        </div>
      </div>
      <div class="igaming-container">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16"/>
          </div>
          <div class="igaming-container-left-side-text">
            <h3 class="igaming-container-left-side-title">We take care about our people</h3>
          </div>
        </div>
        <div class="igaming-container-right-side">
          <p class="igaming-container-right-side-text">
            Our people are not just employees. At DUXGroup, we’re a family! Everyone's an expert at what they do and we
            work together to create the projects and products that both we and our customers are passionate about. We
            live by the motto: "Improve, Perfect, Revolutionize!"
          </p>
        </div>
      </div>
      <div class="igaming-container">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16"/>
          </div>
          <div class="igaming-container-left-side-text">
            <h3 class="igaming-container-left-side-title">We love what we do</h3>
          </div>
        </div>
        <div class="igaming-container-right-side">
          <p class="igaming-container-right-side-text">You want the most enthusiastic people in the iGaming industry?
            You’ve found them! We pride ourselves on being self-sufficient because we only hire the best talent around.
            Our DUXFamily is highly specialized, solves problems efficiently, and, most importantly, has a lot of fun
            doing it!
          </p>
        </div>
      </div>
      <div class="igaming-container">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16"/>
          </div>
          <div class="igaming-container-left-side-text">
            <h3 class="igaming-container-left-side-title">EVERYTHING YOU NEED TO WORK COMFORTABLY</h3>
          </div>
        </div>
        <div class="igaming-container-right-side">
          <p class="igaming-container-right-side-text">We could boast about our amazing seaview offices and other
            amazing features you can expect when you join our company. But let’s be honest, the most important aspect of
            work wellbeing has to do with the people you spend time with. Not only are our employees the most qualified
            and professional at what they do; everybody is also very personable and you’ll fit in with us right away!
          </p>
        </div>
      </div>
      <div class="igaming-container">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16"/>
          </div>
          <div class="igaming-container-left-side-text">
            <h3 class="igaming-container-left-side-title">ENGAGING EVENTS</h3>
          </div>
        </div>
        <div class="igaming-container-right-side">
          <p class="igaming-container-right-side-text">
            Our teams are growing, with tons of people joining every month. To make sure everyone gets to know each
            other, DUXGroup is organising many company events, giving everyone the chance to socialise and meet new
            people, integrate into the teams, and build that family connection we value so much.
          </p>
        </div>
      </div>
    </div>
    <div class="title-container">
      <h2 class="title">
        We are always in <span class="color-blue">search of talented</span> and dedicated
        <span class="color-blue">professionals.</span>
        Let’s raise the
        bar of possible through
        <span class="color-blue">growth together.</span>

      </h2>
    </div>
    <div class="footer">
      <FooterPart/>
    </div>
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import FooterPart from "@/components/Footer";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "Careers-page",

  data() {
    return {
      menuClosed: true,
      settingsImages: {
        arrows: false,
        dots: false,
        slidesToShow: 3,
        infinite: true,
        centerPadding: '100px',
        touchMove: true,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        variableWidth: true,
      },
    }
  },
  components: {
    HeaderPart, FooterPart, VueSlickCarousel
  },
  methods: {
    openedMobMenu(value) {
      if (value) {
        this.menuClosed = !this.menuClosed
      } else {
        this.menuClosed = true
      }
    },
  }

}
</script>

<style>
.slick-slide {
  margin-right: 20px !important;
}
</style>
<style lang="scss" scoped>

.line {
  background: #010C28;
  padding-top: 112px;

}

.marquee-container {
  //margin: 15px auto;
  overflow: hidden;
  background-color: #010C28;

  .Marquee {
    width: 100vw;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 1em;
    color: #fff;
    font-weight: 200;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;


    .Marquee-content {
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: box;
      display: flex;
      -webkit-animation: marquee 20s linear infinite running;
      -moz-animation: marquee 20s linear infinite running;
      -o-animation: marquee 20s linear infinite running;
      -ms-animation: marquee 20s linear infinite running;
      animation: marquee 20s linear infinite running;

      .Marquee-tag {
        width: fit-content;
        display: -webkit-inline-box;
        display: -moz-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-box;
        display: inline-flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -o-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -o-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        -ms-transition: all 0.2s ease;
        transition: all 0.2s ease;

        p {
          color: #F0F0F0;
          font-family: 'Oxygen';
          font-style: normal;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 84px;
          line-height: 95%;
          width: max-content;
          margin: 0;
        }

        svg {
          margin: 40px;
        }

        .circle {
          margin: 40px;
          width: 30px !important;
          height: 30px !important;
          background-color: #2F5BD8;
          border-radius: 50%;
        }
      }

    }
  }
}

@-moz-keyframes marquee {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
}

@-webkit-keyframes marquee {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
}

@-o-keyframes marquee {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
}

@keyframes marquee {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
}

@media (max-width: 1439px) and (min-width: 1024px) {
  .careers-banner{
    min-height: 417px !important;
    height: 417px !important;
    &__title{
      margin-top: 100px !important;
    }
  }
  .line {
    padding-top: 72px !important;
  }
  .careers {
    font-size: 22px !important;
    line-height: 28px !important;
    position: relative;
    top: 7px;
  }
  .careers-banner__title {
    font-size: 84px !important;
    line-height: 105% !important;
    max-width: 619px !important;
  }
  .line {

    .video {
      padding: 88px 113px 60px 113px !important;
      height: auto !important;
    }

    .slider {
      padding-left: 25px !important;

      div {
        img {
          width: 580px !important;
          margin-left: 20px !important;
        }
      }
    }
  }
  .marquee-container {
    .Marquee {
      padding: 0 !important;

      &-content {
        .Marquee-tag {
          font-size: 84px !important;
          padding: 0 !important;
        }
        }
      }
    }
  }


@media (max-width: 1023px) and (min-width: 769px) {
  .careers {
    font-size: 20px !important;
    line-height: 25px !important;
    margin: 0 52px 0 0 !important;
    position: relative;
    top: 5px;
  }
  .careers-banner{
    min-height: 300px !important;
    height: 300px !important;
  }
  .careers-banner__title {
    margin-top: 40px !important;
    font-size: 68px !important;
    line-height: 105% !important;
    max-width: 503px !important;
  }
  .first-devider{
    padding-top: 50px !important;
  }
  .line {
    padding-top: 67px !important;
  }
  .line {
    .video {
      padding: 55px 8px 50px 8px !important;
      height: auto !important;
    }

    .slider {
      padding-left: 8px !important;

      div {
        img {
          width: 400px !important;
        }
      }
    }
  }

  .marquee-container {
    .Marquee {
      padding: 0 !important;
      margin: 0 !important;

      &-content {
        .Marquee-tag {
          margin: 0 !important;
          padding: 0 !important;

          .circle {
            margin: 30px !important;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) and (min-width: 320px) {
  .careers-banner {
    background: url("../assets/images/careers/320.svg") no-repeat;
    height: 265px !important;
    min-height: 265px !important;
    &__title{
      margin-top: 60px !important;
    }
  }
  .first-devider{
    padding-top: 70px !important;
  }
  .careers {
    display: flex;
    font-size: 16px !important;
    margin-bottom: 0 !important;

    & > img {
      width: 10px;
    }
  }
  .career__title {
    font-size: 34px !important;
    line-height: 110% !important;
  }
  .career-main-block-subtitle:nth-child(1) {
    font-size: 26px !important;
    line-height: 125% !important;
  }
  .career-main-block-subtitle {
    font-size: 20px !important;
    line-height: 27px !important;
  }
  .career-main-block-items-company-name {
    font-size: 14px !important;
    line-height: 18px !important;
  }
  .career-main-block-items-text-container-job-position {
    font-size: 18px !important;
    line-height: 24px !important;
  }
  .career-main-block-items-text-container-job-hirer {
    font-size: 14px !important;
    line-height: 18px !important;
  }
  .career-main-block-button {
    font-size: 12px !important;
    line-height: 105% !important;
  }
  .benefits__title {
    font-size: 22px !important;
    max-width: 288px !important;
  }
  .row__text {
    font-size: 18px !important;

    & > span > img {
      width: 10px;
    }
  }

  .careers-banner__title {
    font-size: 34px !important;
    max-width: 251px !important;
  }
  .Marquee-tag > svg {
    margin: 0 20px !important;
  }
  .line {
    padding-top: 38px !important;
  }
  .line {
    .video {
      padding: 38px 16px 24px 16px !important;
      height: auto !important;
    }

    .slider {
      padding-left: 16px !important;

      div {
        img {
          width: 210px !important;
        }
      }
    }
  }
  .marquee-container {
    .Marquee {
      padding: 0 !important;
      margin: 0 !important;

      &-content {
        .Marquee-tag {
          margin: 0 !important;
          padding: 0 !important;

          p {
            font-size: 38px !important;
            line-height: 105% !important;

          }

          .circle {
            margin: 30px !important;
          }
        }
      }
    }
  }
}

.arrows {
  display: flex;
  align-items: center;
  margin-top: 30px;

  .prev, .next {
    cursor: pointer;
  }

  .prev {
    margin-right: 20px;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title-container {
  background-color: #010C28;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 115px;

  & .title {
    max-width: 1212px;
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


.color-blue {
  color: #2F5BD8;
}

.mobile-line {
  display: none;
}

.header-container {
  background: #010C28 url('../assets/images/gradient.png') center;
  background-size: cover;
}

.careers-banner {
  background: url("../assets/images/careers/careers-bg.svg") no-repeat right top;
  min-height: 702px;
  background-size: contain;
  padding: 25px;

  &__title {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 134px;
    line-height: 95%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
    margin-top: 250px;
    max-width: 1000px;

    & .careers {
      font-family: "Oxygen", sans-serif;
      font-style: normal;
      width: fit-content;
      font-weight: 400;
      font-size: 34px;
      line-height: 195%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
      margin: 0 70px 70px 0;
      vertical-align: top;

      & .span-svg {
        margin-right: 11px;
        vertical-align: baseline;
      }
    }
  }
}

.devider {
  padding-top: 100px;
  display: flex;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;

  img {
    width: 100%;
  }
}

.line {

  .video {
    background-color: #010C28;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 145px;

    iframe {
      width: 100%;
      min-height: 500px;
    }
  }

  .slider {
    background-color: #010C28;
    padding-left: 25px;
  }

  marquee {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 118px;
    line-height: 95%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;

    svg {
      //vertical-align: super;
      margin: 40px;
    }
  }

}

.benefits {
  background-color: #010C28;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 90px;

  &__title {
    max-width: 1214px;
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

.row {
  width: 100%;

  &__container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 72px;

    & .row__text {
      width: 374px;
      font-family: 'Oxygen', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 35px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
      display: flex;

      & span {
        margin-right: 12px;
      }
    }
  }
}

.career {
  background-color: #010C28;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 90px;

  &__title {
    max-width: 820px;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 68px;
    line-height: 105%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
  }

  &-main-block {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
    padding: 88px 25px 50px 25px;

    &-subtitle {
      font-family: 'Exo', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      line-height: 47px;
      color: #F0F0F0;
      text-align: start;

      &:nth-child(2) {
        font-family: 'Exo', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 125%;
        color: #F0F0F0;
      }
    }

    &-items {
      border-bottom: 1px solid #828FA1;;
      padding-bottom: 15px;

      &-company-name {
        margin-top: 15px;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.04em;
        color: #828FA1;

      }

      &-text-container {
        display: flex;
        width: 100%;
        justify-content: space-between;

        &-job-hirer {

          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.04em;
          color: #828FA1;

        }

        &-job-position {
          font-family: 'Exo', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 27px;
          color: #F0F0F0;
          margin-top: 5px;
        }
      }
    }

    &-button {
      background: none;
      font-family: 'Oxygen', sans-serif;
      display: flex;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      border: none;
      line-height: 105%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #F0F0F0;
      margin-top: 42px;

      img {
        margin-left: 15px;
      }
    }
  }
}

.stages {
  background-color: #010C28;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 96px 25px 0 25px;
  justify-content: space-between;
  position: relative;

  & .line-svg {
    margin: 0 10px;
  }

  & .stage-container {

    width: 228px;
    height: 228px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #828FA1;
    border-radius: 10px;

    &:hover {
      border: 1px solid #00FFFF;
    }

    &-title {
      font-family: 'Oxygen', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 35px;
      text-align: center;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
    }

    &-sub-title {
      font-family: 'Exo', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      text-align: center;
      color: #F0F0F0;
      margin-top: 8px;
    }

    &-sub-text {
      margin-top: 8px;
      font-family: 'Oxygen', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 105%;
      text-align: center;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #F0F0F0;
    }
  }
}

.igaming {
  background-color: #010C28;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    margin-top: 96px;
    max-width: 820px;
    text-align: center;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 105%;

    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
  }

  &-container {
    margin-top: 70px;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #828FA1;

    &-left-side {
      display: flex;

      &-dote {
        margin-right: 10%;
        padding-top: 10px;
      }

      &-title {
        max-width: 472px;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 38px;
        line-height: 48px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #F0F0F0;
      }
    }

    &-right-side {
      &-text {
        max-width: 562px;
        font-family: 'Exo', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        color: #F0F0F0;

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

@media only screen and (max-width: 1300px) {

  .careers-form {
    width: 960px !important;

  }

}

@media only screen and (max-width: 1160px) {
  .careers-banner {
    min-height: 0;
  }
  .careers-banner__title {
    margin-top: 98px;
  }
  .devider {
    padding-top: 105px;
  }
  .careers-form__container {
    padding: 32px;
  }

  .row__text {
    max-width: 285px;
    font-size: 22px;
  }
  .career__title {
    max-width: 577px;

  }
  .stage-container {
    max-width: 150px;
    max-height: 150px;
  }
  .stage-container-title {
    font-size: 22px !important;
  }
  .stage-container-sub-title {
    font-size: 16px !important;
  }
  .stage-container-sub-text {
    font-size: 10px !important;
  }
  .igaming-container-left-side-title {
    max-width: 307px;
    font-size: 34px !important;
  }
  .igaming-container-right-side-text {
    max-width: 480px;
    font-size: 18px !important;
  }
  .title-container {
    padding: 110px 32px;
  }
}

@media only screen and (max-width: 960px) {
  .Marquee-tag {
    p {
      font-size: 58px !important;
    }
  }

  .devider {
    padding-top: 72px;
  }
  .benefits {
    padding: 56px;
  }


  .career {
    padding-top: 56px;
  }
  .career__title {
    max-width: 485px !important;
  }
  .stage-container {
    max-width: 150px !important;
    max-height: 150px !important;
  }
  .career-main-block {
    padding: 48px 26px;
  }
  .stages {
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 500px;
  }
  .stage-container {
    margin-top: 36px;

    &:nth-child(1) {
      margin-top: 0;
    }

    &:nth-child(3) {
      margin-top: 0;
    }

    &:nth-child(5) {
      margin-top: 0;
    }

    &:nth-child(7) {
      margin-top: 0;
    }
  }
  .line-svg:nth-child(8) {
    display: none;
  }
  .stage-container-title {
    max-width: 130px !important;
    font-size: 20px !important;
  }
  .stage-container-sub-title {
    max-width: 107px !important;
    font-size: 14px !important;
  }
  .stage-container-sub-text {
    max-width: 123px !important;
    font-size: 9px !important;
  }
  .igaming-title {
    max-width: 591px !important;
    font-size: 38px !important;
  }
  .igaming-container-left-side-title {
    max-width: 268px !important;
    font-size: 22px !important;
  }
  .igaming-container-right-side-text {
    max-width: 376px !important;
    font-size: 16px !important;
  }
  .title-container {
    padding: 72px 8px !important;
  }
  .title {
    max-width: 752px !important;
    font-size: 38px !important;
  }
}

@media only screen and (max-width: 844px) {
  .line-svg:nth-child(6) {
    display: flex;
    position: absolute;
    top: 95%;
    left: 77.6vw;
    transform: rotate(180deg);
  }
  .line-svg:nth-child(8) {
    display: block;
    position: absolute;
    top: 95%;
    transform: rotate(180deg);
    right: 51%;
  }
  .mobile-line {
    display: block;
    position: absolute;
    left: 84vw;
    top: 372px;
  }
  .stage-container {
    &:nth-child(7) {

      margin-top: 36px;
      position: absolute;
      top: 73%;
      right: 30%;
    }

    &:nth-child(9) {
      margin-top: 36px;
      position: absolute;
      right: 63%;
      top: 73%;
    }
  }

}

@media only screen and (max-width: 816px) {

  .line-svg:nth-child(6) {
    display: flex;
    position: absolute;
    top: 95%;
    left: 77.2vw;
    transform: rotate(180deg);
  }
}

@media only screen and (max-width: 772px) {

  .line-svg:nth-child(6) {
    display: flex;
    position: absolute;
    top: 95%;
    left: 76.8vw;
    transform: rotate(180deg);
  }
}

@media only screen and (max-width: 718px) {

  .line-svg:nth-child(6) {
    display: flex;
    position: absolute;
    top: 95%;
    left: 76.3vw;
    transform: rotate(180deg);
  }
  .line-svg:nth-child(8) {
    display: block;
    position: absolute;
    top: 95%;
    transform: rotate(180deg);
    right: 52%;
  }
}

@media only screen and (max-width: 633px) {


  .mobile-line {
    display: none;
  }
  .line-svg {
    position: initial !important;
    transform: rotate(90deg) !important;
    margin-top: 5px !important;
  }
  .stages {
    display: flex;
    height: 1180px !important;
  }
  .stage-container {
    margin: 20px 0 !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  .stage-container:nth-child(7) {

    position: initial;

  }
  .stage-container:nth-child(9) {

    position: initial;

  }
  .stage-container-sub-title {
    max-width: 100% !important;
    font-size: 14px !important;
  }
  .stage-container-title {
    max-width: 100% !important;
    font-size: 14px !important;
  }
  .stage-container-sub-text {
    max-width: 100% !important;
    font-size: 14px !important;
  }
  .line marquee {
    height: 48px;
    font-size: 38px;
  }
  .line marquee svg {
    margin: 0;
  }
  .benefits {
    padding: 32px;
  }
  .benefits__title {
    max-width: 288px !important;
    font-size: 22px !important;
  }
  .row__container {
    width: 100%;
    flex-direction: column;
  }
  .row__text {
    width: 100% !important;
    max-width: 100% !important;

  }
  .career__title {
    max-width: 265px !important;

  }
  .career-main-block {
    padding: 32px 8px
  }
  .career-main-block-items-text-container {
    flex-direction: column;
  }
  .igaming-title {
    max-width: 287px !important;
    font-size: 34px !important;
  }
  .igaming-container {
    flex-direction: column;
  }
  .igaming-container-right-side-text {
    margin-top: 10px;
  }
  .igaming-container-left-side-dote {
    margin: 10px;
  }
  .igaming-container-left-side-title {
    max-width: 100% !important;
    font-size: 20px !important;
  }
  .igaming-container-right-side-text {
    max-width: 100% !important;
    font-size: 14px !important;
  }
  .title {
    max-width: 288px !important;
    font-size: 22px !important;
  }
}

</style>