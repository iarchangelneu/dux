<template>
  <div class="div__back">

    <div class="header-container">
      <div class="careers-banner">
        <img src="../assets/animation/careers1.svg" class="car__anim1" alt="" style="z-index:-1">
        <img src="../assets/animation/careers2.svg" class="car__anim2" alt="" style="z-index:-1">
        <img src="../assets/animation/careers3.svg" class="car__anim3" alt="" style="z-index:-1">
        <img src="../assets/animation/careers4.svg" class="car__anim4" alt="" style="z-index:-1">
        <img src="../assets/animation/careers5.svg" class="car__anim5" alt="" style="z-index:-1">
        <HeaderPart @opened="openedMobMenu" />
        <h1 class="careers-banner__title" data-aos="fade-up" style="z-index:1000" id="p">
          <span class="careers"><img class="span-svg" src="../assets/images/contact/Ellipse1.svg"
              alt="elipse">Careers</span>
          <!-- <span class="color-blue">People </span>are our main treasure -->

        </h1>
      </div>
    </div>

    <div class="devider first-devider">
      <BlockTitle title="DUXGroup Family"></BlockTitle>
    </div>
    <div class="line" v-if="menuClosed">
      <div class="marquee-container">
        <div class="Marquee">
          <div class="Marquee-content">
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>work hard</p>
            </div>
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>work hard</p>
            </div>
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>work hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
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
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>work hard</p>
            </div>
            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>work hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>Play hard</p>
            </div>

            <div class="Marquee-tag max-width">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
              <p>work hard</p>
            </div>
          </div>
        </div>
      </div>
      <div class="video">
        <div class="video__cont" width="560" height="315"
          onclick="this.nextElementSibling.style.display='block'; this.style.display='none'">
          <img src="../assets/images/careers/video-pre320.png" style="cursor:pointer" v-if="window.width <= 450" />
          <img src="../assets/images/careers/video-pre.png" style="cursor:pointer" v-if="window.width > 768" />
          <img src="../assets/images/careers/video-pre768.png" style="cursor:pointer"
            v-if="window.width <= 768 && window.width > 450" />

        </div>
        <iframe class="video__frame" width="560" height="315" src="https://www.youtube.com/embed/e4PBKgLlaHk"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen style="display: none;"></iframe>
      </div>
      <div class="cont__slider">
        <div class="slider swiper-container">
          <!-- <VueSlickCarousel ref="images" v-bind="settingsImages">
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/brooke-cagle-g1Kr4Ozfoac-unsplash1.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/pexels-cowomen-20416291.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/pexels-cowomen-20416293.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/pexels-cowomen-20416294.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/pexels-cowomen-20416296.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/pexels-cowomen-20416297.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/pexels-cowomen-20416298.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/pexels-cowomen-20416299.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/pexels-cowomen-204162910.png"></div>
            <div class="lol"><div class="kek"></div><img src="../assets/images/careers/slider/Rectangle930.png"></div>
          </VueSlickCarousel> -->
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/images/careers/slider/brooke-cagle-g1Kr4Ozfoac-unsplash1.png">
            </div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/pexels-cowomen-20416291.png"></div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/pexels-cowomen-20416293.png"></div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/pexels-cowomen-20416294.png"></div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/pexels-cowomen-20416296.png"></div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/pexels-cowomen-20416297.png"></div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/pexels-cowomen-20416298.png"></div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/pexels-cowomen-20416299.png"></div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/pexels-cowomen-204162910.png"></div>
            <div class="swiper-slide"><img src="../assets/images/careers/slider/Rectangle930.png"></div>
          </div>

        </div>
      </div>
    </div>
    <div class="devider">
      <BlockTitle title="BENEFITS"></BlockTitle>
    </div>
    <div class="benefits">
      <h2 class="benefits__title" data-aos="fade-up">We
        <span class="color-blue"> love our people</span>,
        appreciate our team, and try to become like a second
        <span class="color-blue">family</span>.
        Want to be a part of our team? <span class="color-blue">Then join us!</span>
      </h2>
      <div class="row">
        <div class="row__container">
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Modern, iGaming environment in a sunny climate
          </p>
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Team lunches, drinks, and team events
          </p>
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="2000">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Employee Development Plans
          </p>
        </div>
        <div class="row__container">
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="2000">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Seafront offices
          </p>
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Birthdays (we celebrate by giving employees birthday gifts + yummy treats)
          </p>
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Mobile phone allowance
          </p>
        </div>
        <div class="row__container">
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Private health insurance
          </p>
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="2000">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Flexi-time
          </p>
          <p class="row__text" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Kitchen packed with free flowing treats/ fruit/ snacks
          </p>
        </div>
      </div>
    </div>
    <div class="devider">
      <BlockTitle title="CAREER"></BlockTitle>
    </div>
    <div class="career" data-aos="fade-up">
      <h2 class="career__title">Start your
        <span class="color-blue"> star</span>
        career at
        <span class="color-blue">DUXGroup</span>
      </h2>
      <div class="openings__content">
        <div id="BambooHR" data-domain="duxgroup.bamboohr.com" data-version="1.0.0" data-departmentid="">
          <div id="BambooHR-ATS">
            <div id="addhere"
              style="font-family: Lato, sans-serif; font-size: 12px; color: rgb(153, 153, 153); text-align: right; margin: 9px 9px 0px 0px;">



            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="devider">
      <BlockTitle title="Interview Process Timeline" :large="1"></BlockTitle>
    </div>
    <div class="stages" v-if="menuClosed">
      <div class="stage-container" data-aos="fade">
        <h2 class="stage-container-title">Stage 01</h2>
        <p class="stage-container-sub-title">CV Screening</p>
        <img class="border__img" src="../assets/images/careers/border.png" alt="">
      </div>
      <img class="line-svg " src="../assets/images/careers/Line.svg" alt="Line" v-if="window.width > 768"
        data-aos="fade" data-aos-duration="200" data-aos-delay="200"/>
      <img class="line-svg " src="../assets/images/line__768.svg" alt="Line"
        v-if="window.width <= 768 && window.width > 450" />
      <img class="line-svg " src="../assets/images/careers/Line.svg" alt="Line" v-if="window.width <= 450" />
      <div class="stage-container" data-aos="fade" data-aos-duration="300" data-aos-delay="400">
        <h2 class="stage-container-title">Stage 02</h2>
        <p class="stage-container-sub-title">1st Interview with HR</p>
        <img class="border__img" src="../assets/images/careers/border.png" alt="">
      </div>
      <img class="line-svg " src="../assets/images/careers/Line.svg" alt="Line" v-if="window.width > 768"
        data-aos="fade" data-aos-duration="200" data-aos-delay="700"/>
      <img class="line-svg " src="../assets/images/line__768.svg" alt="Line"
        v-if="window.width <= 768 && window.width > 450" />
      <img class="line-svg " src="../assets/images/careers/Line.svg" alt="Line" v-if="window.width <= 450" />
      <div class="stage-container" data-aos="fade" data-aos-duration="300" data-aos-delay="900">
        <h2 class="stage-container-title">Stage 03</h2>
        <p class="stage-container-sub-title">Interview with Hiring Manager</p>
        <p class="stage-container-sub-text">*Home Task may be included in this stage</p>
        <img class="border__img" src="../assets/images/careers/border.png" alt="">
      </div>
      <img class="line-svg " src="../assets/images/careers/Line.svg" alt="Line" v-if="window.width > 768"
        data-aos="fade" data-aos-duration="200" data-aos-delay="1200"/>
      <img class="line-svg " src="../assets/images/wline__768.svg" style="transform: rotate(0deg);" alt="Line"
        v-if="window.width <= 768 && window.width > 450" />
      <img class="line-svg " src="../assets/images/careers/Line.svg" alt="Line" v-if="window.width <= 450" />
      <div class="stage-container" data-aos="fade" data-aos-duration="300" data-aos-delay="1400">
        <h2 class="stage-container-title">Stage 04</h2>
        <p class="stage-container-sub-title">Final Interview with Management</p>
        <p class="stage-container-sub-text">(Usually for high level position)</p>
        <img class="border__img" src="../assets/images/careers/border.png" alt="">
      </div>
      <img class="line-svg " src="../assets/images/careers/Line.svg" alt="Line" v-if="window.width > 768"
        data-aos="fade" data-aos-duration="200" data-aos-delay="1700"/>
      <img class="line-svg " src="../assets/images/rline__768.svg" alt="Line"
        v-if="window.width <= 768 && window.width > 450" />
      <img class="line-svg " src="../assets/images/careers/Line.svg" alt="Line" v-if="window.width <= 450" />
      <div class="stage-container" data-aos="fade" data-aos-duration="300" data-aos-delay="1900">
        <h2 class="stage-container-title">Stage 05</h2>
        <p class="stage-container-sub-title">Offer stage</p>
        <img class="border__img" src="../assets/images/careers/border.png" alt="">
      </div>
      <img class="mobile-line " src="../assets/images/careers/mobile-line.svg" alt="mobile" />
    </div>
    <div class="devider">
      <!-- <img src="../assets/images/careers/about.svg" alt="about"/> -->
      <BlockTitle title="About our team"></BlockTitle>
    </div>
    <div class="igaming">
      <h2 class="igaming-title" data-aos="fade-up">
        Innovative
        <span class="color-blue"> iGaming</span>
        Meets a Passion for Tech
      </h2>
      <div class="igaming-container" data-aos="fade-up" data-aos-duration="1500">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16" />
          </div>
          <div class="igaming-container-left-side-text">
            <h3 class="igaming-container-left-side-title">We think several steps ahead</h3>
          </div>
        </div>
        <div class="igaming-container-right-side">
          <p class="igaming-container-right-side-text">
            Hello world, DUXGroup calling! We’re a specialized team of
            iGaming professionals that always manage to impress our customers and partners by providing the most
            innovative and optimised iGaming solutions.
          </p>
        </div>
      </div>
      <div class="igaming-container" data-aos="fade-up" data-aos-duration="1500">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16" />
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
      <div class="igaming-container" data-aos="fade-up" data-aos-duration="1500">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16" />
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
      <div class="igaming-container" data-aos="fade-up" data-aos-duration="1500">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16" />
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
      <div class="igaming-container" data-aos="fade-up" data-aos-duration="1500">
        <div class="igaming-container-left-side">
          <div class="igaming-container-left-side-dote">
            <img src="../assets/images/careers/dote16.svg" alt="dote16" />
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
      <h2 class="title" data-aos="fade-up">
        We are always in <span class="color-blue">search of talented</span> and dedicated
        <span class="color-blue">professionals.</span>
        Let’s raise the
        bar of possible through
        <span class="color-blue">growth together.</span>

      </h2>
    </div>
    <div class="footer">
      <FooterPart />
    </div>
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import FooterPart from "@/components/Footer";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import BlockTitle from "../components/BlockTitle.vue";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import postscribe from 'postscribe'

Swiper.use([Navigation, Pagination, Autoplay])

export default {
  name: "Careers-page",
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      mainTitle: 'People are our main treasure',
      window: {
        width: 0
      },
      menuClosed: true,
      settingsImages: {
        draggable: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        infinite: true,
        centerPadding: '100px',
        // touchMove: true,
        // autoplay: true,
        speed: 3000,
        // autoplaySpeed: 1500,
        adaptiveHeight: true,
        variableWidth: true,
        // swipeToSlide: true,
        pauseOnHover: false,
        // pauseOnFocus: true,
        // waitForAnimate: false,
      },
    }
  },
  components: {
    HeaderPart,
    FooterPart,
    VueSlickCarousel,
    BlockTitle,
  },
  methods: {
    spaBspCreate(block, amount=1){
        for(let i = 0; i < amount; i++){
          let spanBsp = document.createElement('span');
          spanBsp.innerText = 'I';
          spanBsp.classList.add('spanBsp')
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
          if(window.innerWidth < 450){
            this.spaBspCreate(block)
          }
        }

        span.classList.add('mainTitleWord')
        block.appendChild(span)

        word.split('').forEach((letter) => {
          let spanInside = this.spanletterCreate(letter)
          setTimeout(() => { span.appendChild(spanInside) }, timer)
          timer += 50
        })

        if(ind==0){
          if(window.innerWidth < 340){
            this.spaBspCreate(block, 10)
          }
          else if(window.innerWidth < 450){
            this.spaBspCreate(block, 15)
          }
          else if(window.innerWidth < 1272){
            this.spaBspCreate(block, 15)
          }
          else{
            this.spaBspCreate(block, 5)
          }
        }

        this.spaBspCreate(block)
      })
    },
    loadb(){
      let recaptchaScript = document.createElement('script')
      // recaptchaScript.setAttribute('src', 'https://duxgroup.bamboohr.com/js/embed.js')
      recaptchaScript.src = 'https://duxgroup.bamboohr.com/js/embed.js'
      recaptchaScript.async = true;
      recaptchaScript.defer = true;
      document.body.appendChild(recaptchaScript)  
    },
    salamfunction() {
      console.log('asd')

      var rootId = 'BambooHR-ATS';
      var el = document.getElementById('BambooHR');

      if(!el) {
        console.error('BambooHR-ATS: Hmm, Looks like we are missing something, Double check the code snippet.');
        return;
      }

      var departmentId = el.getAttribute('data-departmentId');
      var domain = el.getAttribute('data-domain');
      var version = el.getAttribute('data-version') || '1.0.0';
      var noPudgy = el.hasAttribute('data-noPudgy');

      if(!domain) {
        console.error('BambooHR-ATS: We are unable to retrieve the domain, Double check the code snippet.');
        return;
      }

      var root = document.createElement('div');
      root.id = rootId;
      el.appendChild(root);

      var footer =  document.createElement('div');
      footer.style = 'font-family: "Lato", sans-serif; font-size: 12px; color: #999; text-align: right; margin: 9px 9px 0px 0px;'
      var poweredBy = document.createTextNode('Powered by');
      var logo = document.createElement('img');
        logo.src = 'https://resources.bamboohr.com/images/footer-logo.png';
        logo.alt = 'BambooHR - HR software';
        logo.style = 'display:inline;'
      var link = document.createElement('a')
        link.href = 'http://www.bamboohr.com';
        link.target = '_blank';
        link.rel = 'external'

      link.appendChild(logo);
      footer.appendChild(poweredBy);
      footer.appendChild(link);

      el.appendChild(footer);

      var embedUrl = 'https://' + domain + '/jobs/embed2.php?version=' + encodeURIComponent(version) + '';

      if (departmentId) {
        embedUrl += '&departmentId=' + encodeURIComponent(departmentId);
      }

      var xmlhttp = new XMLHttpRequest();
      // document.addEventListener('readystatechange', function(event) {
      //   if (event.target.readyState === 'complete') {
      //     xmlhttp.onreadystatechange=function() {
      //       if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

      //         var content = xmlhttp.responseText;
      //         if(root) root.innerHTML = content;
      //         if(!noPudgy) {
      //           showPudgy();
      //         }
      //       }
      //     }
      //     xmlhttp.open('GET', embedUrl, true);
      //     xmlhttp.send();
      //   }
      // });
      xmlhttp.onreadystatechange=function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

              var content = xmlhttp.responseText;
              if(root) root.innerHTML = content;
              if(!noPudgy) {
                showPudgy();
              }
            }
          }
          xmlhttp.open('GET', embedUrl, true);
          xmlhttp.send();

      function showPudgy() {
        var ASCI_MAP = [null,["в–€в–€в–€в–€в–€в–€вЂЃ  в–€в–€в–€в–€в–€вЂЃ в–€в–€в–€вЂЃ   в–€в–€в–€вЂЃв–€в–€в–€в–€в–€в–€вЂЃ  в–€в–€в–€в–€в–€в–€вЂЃ  в–€в–€в–€в–€в–€в–€вЂЃ в–€в–€вЂЃ  в–€в–€вЂЃв–€в–€в–€в–€в–€в–€ "],null,["в–€в–€вЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€в–€в–€вЂЃ в–€в–€в–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃ  в–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃв–€в–€ "],null,["в–€в–€в–€в–€в–€в–€вЂЃвЂЃв–€в–€в–€в–€в–€в–€в–€вЂЃв–€в–€вЂЃв–€в–€в–€в–€вЂЃв–€в–€вЂЃв–€в–€в–€в–€в–€в–€вЂЃвЂЃв–€в–€вЂЃ   в–€в–€вЂЃв–€в–€вЂЃ   в–€в–€вЂЃв–€в–€в–€в–€в–€в–€в–€вЂЃв–€в–€в–€в–€в–€в–€ "],null,["в–€в–€вЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃвЂЃв–€в–€вЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃ   в–€в–€вЂЃв–€в–€вЂЃ   в–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃв–€в–€вЂЃв–€в–€вЂЃвЂЃвЂЃв–€в–€ "],null,["в–€в–€в–€в–€в–€в–€вЂЃвЂЃв–€в–€вЂЃ  в–€в–€вЂЃв–€в–€вЂЃ вЂЃвЂЃвЂЃ в–€в–€вЂЃв–€в–€в–€в–€в–€в–€вЂЃвЂЃвЂЃв–€в–€в–€в–€в–€в–€вЂЃвЂЃвЂЃв–€в–€в–€в–€в–€в–€вЂЃвЂЃв–€в–€вЂЃ  в–€в–€вЂЃв–€в–€вЂЃ  в–€в–€ "],null,[" "],null, ['Pudgy the Panda says Hello!'], null, null, [10], ["в–„в–„в–„в–„"], [17], [".в–„в–„в–„в–„"],  null, [8], ["в–“в–€в–€в–Ђв•™'"], [19], ["в””в–Ђв–€в–€в–„"],  null, [7], ["jв–€в–Ђ"], [26], ["в””в–Ђ"],  null, [7], ["."],  null, [6], [";"], [7], ["в–„mв•–"], [10], ["в–„m,"],  null, [1],  ["в–€в–€в–€в–ЊГ†в–„"], [6], ["в•љв–€в–„в–“"], [3],  ["]в–“в–Њ"], [3], ["в•џв–€в–„в–€"],  null, ["в–€в–€в–€в–“в–“в–€в–€в–„"], [7], ["'"], [13], ["'"],  null, ["в–ђв–€в–€в–€в–€в–€в–€в–€в–€,"], [14], [".в–„в•ђВІ"],  null, [1], ["в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–“в–„в–„в–„в–„в–„в•“,,,,,,,,,,,,,в•“в–„в–„в–„в–„в–„в–“в–€в–€в–€в–€в–€в–Њ"],  null, [1], ["в•™в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€"],  null, [3], ["в–€в–€в–€в–€в–€в–€в–Ђв–Ђв–Ђв–Ђв•™в•™в•™в””в””в”Ђ'''"], [4], ["'''в”Ђв””в””в•™в–€в–€в–€в–€в–€в–€в–€в–€в–€в–€"],  null, [3], ["в•™в•™в”"], [27], ["в•«в–€в–€в–€в–€в–€в–€в–€в–€'"],  null, [3], ["в–ђв–‘"], [28], ["^в–€в–€в–€в–€в–€в–€в–€в–€"],  null, [3], ["'."], [28], ["в–‘в–ђв–€в–€в–€в–€в–€в–€вЊђ"],  null, [4], ["в–‘в”‚"], [27], ["^в–‘в””в–€в–€в–€в–Њв•™"],  null, [4], ["]в–‘в”‚в”‚"],  null, [5], ["в–‘в–‘в–‘в”‚в”‚"],  null, [6], ["в–‘в–‘в–‘в–‘в–‘в”‚в”‚"],  null, [7], ["в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в”‚в”‚"], [21], ["в”‚"],  null, [8], ["в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в”‚в”‚"], [9], ["в”‚в”‚в”‚в–‘в–‘в–‘"],  null, [10], ["в–„в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в”‚О“"],  null, [10], ["в•џв–€в–„в–„в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–‘в–„в–“в–€"] ];
        var hello_from_BambooHR = ASCI_MAP.reduce((agg, val) => {
          if (val === null) return agg + '\n';
          agg = agg += '%c';

          if(typeof val[0] === 'number') {
            for (var i = 0; i < val[0]; i++) {
              agg = agg += ' ';
            }
          } else {
            agg += val[0];
          }
          return agg;
        }, '');

        var color = ASCI_MAP
          .filter(x => x !== null)
          .map(
            val => `color:#527a00; font-family: monospace, font-weight: bold`
        );
        // To remove Pudgy, add data-noPudgy to the snippet
        console.log(hello_from_BambooHR, ...color);
      }

    },
    openedMobMenu(value) {
      if (value) {
        this.menuClosed = !this.menuClosed
      } else {
        this.menuClosed = true
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
    }
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
    this.salamfunction();
    // postscribe('#addhere', `<script src="https://duxgroup.bamboohr.com/js/embed.js" type="text/javascript" async="" defer=""><\/script>`)
    // this.loadb();
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 0
      },
      spaceBetween: 24,
      grabCursor: true,


      // width: 577,
      speed: 5000,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
      breakpoints: {
        // when window width is >= 320px
        // 320: {
        //   slidesPerView: 2,
        //   spaceBetween: 20
        // },
        // when window width is >= 480px
        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // when window width is >= 640px
        // 640: {
        //   slidesPerView: 4,
        //   spaceBetween: 40
        // },
        320: {
          // slidesPerView: 4,
          spaceBetween: 8
        },
        760: {
          // slidesPerView: 4,
          spaceBetween: 16
        },
        1025: {
          // slidesPerView: 4,
          spaceBetween: 24
        }
      }
    })
  }

}
</script>

<style>
.slick-slide {
  margin-right: 20px !important;
}

@media screen and (max-width: 1024px) {
  .slick-slide {
    margin-right: 12px !important;
  }
}

.BambooHR-ATS-Location {
  display: flex;
  align-items: center;
}

.BambooHR-ATS-Location:hover {
  background: #1F2941;
}

.BambooHR-ATS-Location::after {
  padding-left: 24px;
  content: url('../assets/images/job__arrow.svg');
  display: none;
}

.BambooHR-ATS-Jobs-Item:hover .BambooHR-ATS-Location::after {
  display: inline;
}



.BambooHR-ATS-board ul {
  padding: 2px 0px 12px 0px !important;
  margin-bottom: 0 !important;
}

.BambooHR-ATS-Jobs-Item {
  transition: all .5s;
}

.BambooHR-ATS-Jobs-Item:hover {
  background: #1F2941;
  padding-left: 17px !important;
  padding-right: 17px;
}

.BambooHR-ATS-board li:hover {
  /* background: #1F2941; */
  /* padding-left: 17px !important; */
  /* padding-right: 17px; */

}

.BambooHR-ATS-board a {
  font-size: 20px !important;
  color: #F0F0F0 !important;
  text-decoration: none !important;
  font-weight: 400 !important;
  font-family: 'Exo' !important;
}

.BambooHR-ATS-board li {
  color: #828FA1 !important;
  font-size: 14px !important;
  font-family: 'Oxygen' !important;
  padding-left: 0 !important;
  padding: 14px;
  padding-top: 7px;
  padding-bottom: 8px;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  -webkit-transition: all .5s;
  transition: all .5s;
}

.BambooHR-ATS-board h2 {
  margin-bottom: 15px !important;
  border-bottom: 0 !important;
  font-size: 35px !important;
  color: #F0F0F0 !important;
  font-family: 'Exo' !important;
  font-weight: 400 !important;
}

@media screen and (max-width:450px) {

 

  .openings__content:hover {
    width: 100%;

  }

  .BambooHR-ATS-Jobs-Item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }

  .BambooHR-ATS-board li:hover {
    background: unset;
    padding-left: 0 !important;
    padding-right: 14px !important;

  }

  .career-main-block-items:hover {
    background: unset;
    padding-left: 0 !important;
    padding-right: 14px !important;

  }

  .BambooHR-ATS-board a {
    font-size: 14px !important;

  }

  .BambooHR-ATS-Jobs-Item:hover .BambooHR-ATS-Location::after {
    display: none;
  }

  .BambooHR-ATS-Location {
    font-size: 12px;
    white-space: nowrap;
  }
   .BambooHR-ATS-board h2{
    margin-bottom: 0px !important;
    margin-top: 24px !important;
  }
}
</style>
<style lang="scss" scoped>
.openings__content {
  width: 100%;
  padding: 0 17px 0 17px;

}



.career-main-block-items {
  transition: all 0.5s;
  cursor: pointer;
}

.career-main-block-items:hover {
  background: #1F2941;
  padding-left: 17px;
  padding-right: 17px;

}

.career-main-block-items:hover .career-main-block-items-text-container-job-hirer:after {
  padding-left: 24px;
  content: url('../assets/images/job__arrow.svg');
}

@keyframes anim1 {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.25;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}


.car__anim1,
.car__anim2,
.car__anim3,
.car__anim4,
.car__anim5 {
  position: absolute;
}

.car__anim2,
.car__anim5 {
  animation: anim1 3s linear infinite;
}

.car__anim1,
.car__anim3,
.car__anim4 {
  animation: anim1 4s linear infinite;
  animation-delay: 1s;
}

.car__anim1 {
  top: 92px;
  left: 1px;
}

.car__anim2 {
  left: 195px;
  top: 13px;
}

.car__anim3 {
  left: 670px;
  top: 85px;
}

.car__anim4 {
  right: 450px;
  top: 220px;
}

.car__anim5 {
  right: -90px;
  top: -70px;

}

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
    padding: 0.25em;
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
          font-size: 86px;
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

@media (max-width: 1025px) and (min-width: 1024px) {
  .car__anim1 {
    animation: anim1 7s linear infinite;
  }

  .car__anim2 {
    width: 150px;
    animation: anim1 8s linear infinite;
  }

  .car__anim3 {
    animation: anim1 9s linear infinite;
  }

  .car__anim4 {
    width: 100px;
    animation: anim1 10s linear infinite;
  }

  .car__anim5 {
    width: 300px;
    animation: anim1 11s linear infinite;
  }

  .careers-banner {
    min-height: 417px !important;

    &__title {
      margin-top: 100px !important;
    }
  }

  .line {
    padding-top: 72px !important;
  }

  .devider {
    padding-top: 105px !important;
  }

  .careers {
    font-size: 22px !important;
    line-height: 28px !important;
    position: relative;
    top: 7px;

    &>img {
      width: 10px;
    }
  }

  .careers-banner__title {
    font-size: 84px !important;
    line-height: 105% !important;
    max-width: 755px !important;
  }

  .line {

    .video {
      padding: 88px 113px 60px 113px !important;
      height: auto !important;
    }

    .slider {
      // padding-left: 100px !important;

      div {
        img {
          // width: 430px !important;
          // margin-left: 16px !important;
        }
      }
    }
  }

  .igaming-container-left-side-title {
    line-height: 110% !important;
  }

  .igaming-container-left-side-dote {
    padding-top: 13px !important;
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

  .igaming-container-left-side-dote>img {
    width: 14px;
  }

  .igaming-container-left-side-title {
    line-height: 28px !important;
  }

  .igaming-container-left-side-dote {
    padding-top: 7px !important;
  }

  .careers-banner {
    min-height: 300px !important;

  }

  .careers-banner__title {
    margin-top: 40px !important;
    font-size: 68px !important;
    line-height: 105% !important;
    max-width: 503px !important;
  }

  .first-devider {
    padding-top: 72px !important;
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
          // width: 400px !important;
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



@media (max-width: 768px) and (min-width: 633px) {
  .igaming-container-left-side-dote {
    display: inline !important;
    margin-top: 7px !important;
  }
}



@media (max-width: 768px) and (min-width: 320px) {
  .car__anim1 {
    animation: anim1 8s linear infinite;
  }

  .car__anim2 {
    width: 150px;
    animation: anim1 9s linear infinite;
  }

  .car__anim3 {
    animation: anim1 10s linear infinite;
  }

  .car__anim4 {
    width: 100px;
    animation: anim1 11s linear infinite;
  }

  .car__anim5 {
    width: 250px;
    animation: anim1 12s linear infinite;
  }

  .careers-banner {
    // background: url("../assets/images/careers/320.svg") no-repeat;

    min-height: 265px !important;

    &__title {
      margin-top: 60px !important;
    }
  }

  .igaming-container-left-side-dote>img {
    width: 10px;
  }

  .igaming-container-left-side-title {
    line-height: 25.25px !important;
  }

  .igaming-container-left-side-dote {
    padding-top: 0 !important;
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
  }

  .first-devider {
    padding-top: 72px !important;
  }

  .careers {
    display: flex;
    font-size: 16px !important;
    margin-bottom: 0 !important;

    &>img {
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
    cursor: pointer;
  }

  .benefits__title {
    font-size: 22px !important;
    max-width: 288px !important;
  }

  .row__text {
    font-size: 18px !important;

    &>span>img {
      width: 10px;
    }
  }

  .careers-banner__title {
    font-size: 34px !important;
    max-width: 265px !important;
  }

  .Marquee-tag>svg {
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
      // padding-left: 16px !important;

      div {
        img {
          // width: 210px !important;
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

  .prev,
  .next {
    cursor: pointer;
  }

  .prev {
    // margin-right: 20px;
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
    font-size: 48px;
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
  position: relative;
  // background: url("../assets/images/careers/careers-bg.svg") no-repeat right top;
  min-height: 702px;
  background-size: contain;
  padding: 25px;
  z-index: 0;

  &__title {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    line-height: 95%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
    margin-top: 250px;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    & .careers {
      font-family: "Oxygen", sans-serif;
      font-style: normal;
      width: fit-content;
      font-weight: 400;
      font-size: 28px;
      line-height: 195%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
      margin: 0 70px 0 0;
      display: inline-flex;
      align-items: center;

      & .span-svg {
        margin-right: 11px;
        vertical-align: baseline;
      }
    }
  }
}

.devider {
  padding-top: 150px;
  display: flex;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;
  padding-right: 25px;
  padding-left: 25px;

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
    // padding-left: 25px;
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
    font-size: 48px;
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
    font-size: 48px;
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
      border-bottom: 1px solid #828FA1;
      ;
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
        align-items: flex-end;

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
      cursor: pointer;

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
      border: 1px solid rgba(0, 255, 255, 0);
      // border-image: url(../assets/images/careers/border.png);
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
      max-width: 85%;
    }

    @media screen and (max-width: 1024px) {
      width: 150px;
      height: 150px;

      &-title{
        font-size: 20px;
      }

      &-sub-title {
        font-size: 16px;
      }

      &-sub-text{
        font-size: 10px;
      }
    }
  }
}



@media screen and (max-width: 768px) {
  .igaming-container-left-side-dote {
    margin-right: 32px !important;
  }

  .line-svg:nth-child(6) {
    left: 79vw !important;
  }

  .mobile-line {
    left: 89vw !important;
  }

  .line-svg:nth-child(8) {
    right: 41% !important;
  }

  .stage-container:nth-child(9) {
    right: 60% !important;
  }

  .stage-container:nth-child(7) {
    right: 21.2% !important;
  }

  .stage-container-sub-title {
    max-width: 121px !important;
  }

  .stages {
    margin-top: -140px;
  }

  .blockTitle__cont {
    z-index: 1000;
  }

  .career__title {
    font-size: 58px !important;
    line-height: 110% !important;
  }

  .row__text {
    font-size: 16px !important;
    width: 30%;
  }

  .benefits__title {
    margin-top: 56px !important;
    font-size: 38px !important;
    max-width: 724px !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .devider {
    padding-top: 72px !important;
  }

  .line .slider div img {
    // width: 400px !important;
  }

  .marquee-container .Marquee-content .Marquee-tag p {
    font-size: 58px !important;
    line-height: 105% !important;
  }

  .careers-banner__title {
    font-size: 68px !important;
    max-width: 674px !important;
  }

  .careers {
    display: flex;
    font-size: 20px !important;
    margin-top: 10px !important;
  }
}

@media screen and (max-width: 475px) {
  .igaming-container-left-side-dote {
    margin-right: 8px !important;
  }
  .marquee-container .Marquee-content .Marquee-tag p {
    font-size: 38px !important;
    line-height: 105% !important;
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
    font-size: 48px;
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
        margin-right: 102px;
        padding-top: 17px;
      }

      @media screen and (max-width: 1024px) {
        &-dote {
          margin-right: 65px;
        }
      }

      @media screen and (max-width: 480px) {
        &-dote {
          margin-right: 8px;
        }
      }

      &-title {
        max-width: 480px;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
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
        line-height: 150%;
        color: #98A6B9;

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
  .careers-banner__title {
    margin-top: 98px;
  }

  .careers-form__container {
    padding: 32px;
  }

  .row__text {
    max-width: 300px;
    // font-size: 22px;
  }

  .career__title {
    max-width: 577px;

  }

  .stage-container {
    // max-width: 150px;
    // max-height: 150px;
  }

  .stage-container-title {
    // font-size: 22px !important;
  }

  .stage-container-sub-title {
    // font-size: 16px !important;
  }

  .stage-container-sub-text {
    // font-size: 10px !important;
  }

  .igaming-container-left-side-title {
    max-width: 307px;
    // font-size: 34px !important;
  }

  .igaming-container-right-side-text {
    max-width: 480px;
    // font-size: 18px !important;
  }

  .title-container {
    padding: 110px 32px;
  }
}

@media screen and (max-width: 450px) {
  .stages .line-svg {
    margin: 0 181px !important;
  }

  .stages {
    padding-top: 176px !important;
  }

  .line .slider div img {
    // width: 234px !important;
  }

  .career__title {
    font-size: 34px !important;
    line-height: 110% !important;
  }
}

@media screen and (max-width: 375px) {
  .stages .line-svg {
    margin: 0 44% !important;
  }

  .stages {
    padding-top: 176px !important;
  }

  .line .slider div img {
    // width: 234px !important;
  }

  .career__title {
    font-size: 34px !important;
    line-height: 110% !important;
  }
}

@media screen and (max-width: 768px) {
  .stages {
    padding: 96px 8px 0px 8px;
    justify-content: space-between !important;


    .line {
      width: 121px !important;
      height: 100px !important;
    }


    .stage-container-sub-title {
      max-width: 121px !important;
      line-height: 17px !important;
    }
  }
}

@media only screen and (max-width: 960px) {
  .Marquee-tag {
    p {
      font-size: 58px !important;
    }
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
    transform: rotate(360deg);
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

.border__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}

.stage-container {
  position: relative;
}

.stage-container:hover img {
  display: block;
}

.div__back {
  background-color: #010C28;
}

@media screen and (max-width: 1024px) {
  .video__cont {
    width: 798px;
    height: 340px;
  }

  .video__cont img {
    width: 100%;
    height: 100%;
  }

  .video__frame {
    width: 798px !important;
    height: 340px !important;
    min-height: unset !important;
  }

  .slider {
    // padding-left: 113px !important;
  }

  .slick-slide {
    margin-right: 10px !important;
  }

  .benefits__title {
    padding-right: 32px;
    padding-left: 32px;
  }

  .row__text {
    font-size: 22px !important;
    width: 30%;
  }

  .igaming-container-left-side-dot {
    margin-right: 65px !important;
  }
}

@media screen and (max-width: 1024px) and (min-width: 800px) {
  .careers {
    margin-top: 3px !important;
  }

  .igaming-container {
    width: calc(100% - 64px);
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media screen and (max-width:768px) {
  .row__text {
    font-size: 16px !important;
    width: 30%;
    line-height: 20px !important;
  }

  .benefits[data-v-5c6edceb] {
    padding: 8px !important;
  }

}

@media screen and (max-width:768px) and (min-width:600px) {
  .careers {
    margin-top: 0px !important;
    // margin-bottom: 3px !important;
  }

  .igaming-container {
    width: calc(95% - 16px);
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media screen and (max-width: 480px) {

  .igaming {
    padding: 0 16px !important;
  }
  .igaming-container-left-side-dote{
    margin-right: 8px;
  }

  .igaming-container {
    padding: 10px 0 !important;
  }

  .career-main-block-items-text-container {
    align-items: flex-start !important;
  }

  .video__cont {
    width: 288px;
    height: 160px;
  }

  .video__cont img {
    width: 100%;
    height: 100%;
  }

  .video__frame {
    width: 288px !important;
    height: 160px !important;
    min-height: unset !important;
  }

  .slick-slider {
    padding-left: 16px !important;
  }

  .benefits__title {
    font-size: 22px !important;
  }

  .benefits {
    padding: 16px;
  }

  .benefits__title {
    padding-right: 0px;
    padding-left: 0px;
  }

  .row {
    margin-top: 39px;
  }

  .row__text {
    margin-top: 16px;
    font-family: 'Exo' !important;
    text-transform: none !important;
    font-size: 18px !important;
  }

  .row__container {
    margin-top: 0px !important;
  }

  .devider {
    padding-top: 72px;
  }

  .stage-container-title {
    font-size: 20px !important;
  }

  .stages {
    padding-top: 32px;
  }

  .igaming-title {
    margin-top: 24px;
  }
}

@media screen and (max-width: 480px) {

  .careers-banner{
    z-index: 1001;
  }
  .careers-banner__title {
    font-size: 34px !important;
    max-width: 251px !important;
  }
}

@media screen and (max-width: 480px) and (min-width: 375px) {
  .careers {
    font-size: 20px !important;
  }

  .careers-banner__title {
    font-size: 40px !important;
    max-width: 340px !important;
  }

  .video__cont {
    width: 350px;
    height: 195px;
  }

  .video__cont img {
    width: 100%;
    height: 100%;
  }

  .video__frame {
    width: 350px !important;
    height: 195px !important;
    min-height: unset !important;
  }

  .benefits__title {
    font-size: 26px !important;
    max-width: 330px !important;
  }

  .career__title {
    font-size: 38px !important;
    max-width: 275px !important;
  }

  .stage-container-title {
    font-size: 24px !important;
  }

  .stage-container-sub-title {
    font-size: 18px !important;
  }

  .igaming-title {
    font-size: 38px !important;
    max-width: 300px !important;
  }

  .igaming-container-left-side-title {
    font-size: 20px !important;
  }

  .igaming-container-right-side-text {
    font-size: 16px !important;
    margin-top: 20px;
  }

  .igaming-container {
    margin-top: 24px !important;
  }

  .title {
    font-size: 24px !important;
  }
}

@media screen and (max-width: 320px) {

  .careers-banner__title {
    font-size: 34px !important;
    max-width: 265px !important;
  }
  .slick-slider {
    padding-left: 4px !important;
  }
}

.kek {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0;
  cursor: ew-resize;
}

.lol {
  position: relative;
}

.cont__slider {
  // margin-left: 380px;
  overflow: hidden;
}

.swiper-slide {
  width: 577px;
}

.swiper-slide img {
  width: 100%;
}

.swiper-slide-prev {
  // transition: opacity 6s;
  // opacity: 0;
}

.swiper-button-prev,
.swiper-button-next {
  position: relative;
}

.swiper-button-prev img,
.swiper-button-next img {
  width: 29px;
  height: 14px;
  cursor: pointer;
}

.swiper-button-next:after,
.swiper-button-prev::after {
  content: unset;
}

.swiper-button-next {
  margin-left: 32px;
}

.swiper-button-prev {
  left: unset;
}

@media screen and (max-width: 1440px) {
  .span-svg {
    min-width: 14px;
    max-width: 14px;
  }

  .cont__slider {
    // margin-left: 144px;
    overflow: hidden;
  }
}

@media screen and (max-width: 1220px) {
  .cont__slider {
    // margin-left: 34px;
    overflow: hidden;
  }

  .swiper-slide {
    width: 477px;
  }
}

@media screen and (max-width: 1024px) {
  .cont__slider {
    // margin-left: 113px;
    overflow: hidden;
  }

  .swiper-slide {
    width: 430px;
  }
}

@media screen and (max-width: 768px) {
  .cont__slider {
    // margin-left: 16px;
    overflow: hidden;
  }

  .swiper-slide {
    width: 400px;
  }
}

@media screen and (max-width: 480px) {
  .cont__slider {
    // margin-left: 32px;
    overflow: hidden;
  }

  .swiper-slide {
    width: 214px;
  }
}

@media screen and (max-width: 480px) {
  .cont__slider {
    // margin-left: 16px;
    overflow: hidden;
  }

  .swiper-slide {
    width: 214px;
  }
  .car__anim5{
    right: -144px;
    top: -27px;
  }
  .car__anim2{
    left: 1px;
    top: 40px;
    width: 111px;
  }
  .car__anim1{
    top: 92px;
    left: 170px;
    width: 88px;
  }
  .car__anim3{
    left: 162px;
    top: 23px;
    width: 50px;
  }
  .stages{
    .stage-container-sub-title{
      max-width: 90% !important;
    }
    .stage-container-sub-text{
      max-width: 100% !important;
    }
  }
}
</style>

<style>
.slider img {
  cursor: ew-resize;
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