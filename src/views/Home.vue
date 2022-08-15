<template>
  <div class="container">
    <div class="header">
      <div class="bg-img">
        <div class="bg-img-images">
          <img src="../assets/images/home/title/klor.png" class="klor" data-aos="fade-up" data-aos-duration="2000" />
          <img src="../assets/images/home/title/zar-mec.png" class="zar-mec" data-aos="fade-up"
            data-aos-duration="2000" />
          <img src="../assets/images/home/title/zar-poqr.png" class="zar-poqr" data-aos="fade-up"
            data-aos-duration="2000" />
        </div>
        <div class="menu">
          <Header @opened="openedMobMenu" />
          <div class="content">
            <!-- <p class="p" data-aos="fade-up"> -->
            <p class="p" id="p">
              <span class="brave">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
                  viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <!-- {{ this.text }} -->
                    <div class="swiper-slide" v-for="title in header_text" :key="title">
                      {{title}}
                    </div>
                  </div>
                </div>
              </span>
              <!-- We Were Born To Make History -->

              <!-- <span class="mainTitleLetter" v-for="(letter,ind) in word" :key="ind" >{{ letter }}</span>&zwnj; -->



              <!-- {{ mainTitleArr }} -->
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="history">
      <div class="title">
        <BlockTitle title="what we are?"></BlockTitle>
      </div>
      <p data-aos="fade-up" data-aos-duration="1500">
        When DUXGroup started in <span class="blue">2020</span>, we set out to make history by creating something great,
        aiming to set the pace for the entire industry. <br /> <br />
        Individuals <span class="blue">specialising in iGaming</span>, mobile marketing, and product development came
        together to form three incredible teams into one strong project.
        <span class="blue">“DUX” means “leader”</span>. And DUXGroup turns this name into reality.
        We are <span class="blue">leaders in everything</span> we do and continue to push our tribe forward every day.
        Our mission? We want to <span class="blue">revolutionize</span> the iGaming segment!
      </p>
    </div>
    <div class="running">
      <div class="title">
        <p data-aos="fade-up" data-aos-duration="500" >We follow the principle </p>
      </div>
      <div class="line" v-if="menuClosed">
        <!--          <marquee direction="row" behavior="slide" height="100" width="100%" bgcolor="#010C28" Scrollamount=20>-->
        <!--&lt;!&ndash;          <div class="ticker-wrapper">&ndash;&gt;-->
        <!--            <div class="item" v-for="(item, id) in running" :key="id">-->
        <!--              <div class="circle"></div>-->
        <!--              <p>{{ item }}</p>-->
        <!--            </div>-->
        <!--&lt;!&ndash;          </div>&ndash;&gt;-->
        <!--          </marquee>-->

        <div class="marquee-container">
          <div class="Marquee nomr">
            <div class="Marquee-content">
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Revolutionize</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Improve</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Perfect</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Revolutionize</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Improve</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Perfect</p>
              </div>
            </div>
          </div>
        </div>
        <div class="marquee-container">
          <div class="Marquee">
            <div class="Marquee-content Marquee-content3" style="padding-left: 50px;">
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Improve</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Perfect</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Revolutionize</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Improve</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Perfect</p>
              </div>
              <div class="Marquee-tag">
                <div class="circle"></div>
                <p>Revolutionize</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="partnership">
      <div class="divide_partnership">
        <BlockTitle title="what we do?"></BlockTitle>
      </div>
      <div class="title" data-aos="fade-up" data-aos-duration="1500">
        <p>Synergy and partnership</p>
      </div>
      <div class="items" data-aos="fade-up" data-aos-duration="1500">
        <div class="item" @mouseover="firstCardHover=true" @mouseleave="firstCardHover=false">
          <img src="../assets/images/partnership-bg.png" class="partnership-bg" v-if="window.width > 1024 && firstCardHover == false" />
          <img src="../assets/images/home/CardsAnimeHover.png" class="partnership-bg gradient" v-show="window.width > 1024 && firstCardHover == true" />
          <img src="@/assets/images/partnership__bg2.png" class="partnership-bg"
            v-if="window.width <= 1024 && window.width > 450" alt="">
          <img src="@/assets/images/partnership__bg3.png" class="partnership-bg bg__mob" v-if="window.width <= 375"
            alt="">
          <img src="@/assets/images/partnership__bg4.png" class="partnership-bg bg__mob "
            v-if="window.width <= 450 && window.width > 375" alt="">


          <div class="anime">
            <div class="imgs view1">
              <img src="../assets/images/partnership/view1/1.png" />
              <img src="../assets/images/partnership/view1/2.png" />
              <img src="../assets/images/partnership/view1/3.png" />
              <img src="../assets/images/partnership/view1/4.png" />
            </div>
          </div>
          <div class="content" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <p class="title">In People we Trust</p>
            <p class="text">We build any and all success on hiring industry experts, who know exactly what our customers
              demand.
              At DuxGroup there is no micromanagement, because we trust everyone to do their job to the highest
              standard. Our teams and people are our greatest asset.</p>
          </div>
        </div>
        <div class="item" @mouseover="secondCardHover=true" @mouseleave="secondCardHover=false">
          <img src="../assets/images/partnership-bg.png" class="partnership-bg" v-if="window.width > 1024 && secondCardHover == false" />
          <img src="../assets/images/home/CardsAnimeHover.png" class="partnership-bg gradient" v-show="window.width > 1024 && secondCardHover == true" />
          <img src="@/assets/images/partnership__bg2.png" class="partnership-bg"
            v-if="window.width <= 1024 && window.width > 450" alt="">
          <img src="@/assets/images/partnership__bg3.png" class="partnership-bg bg__mob2" v-if="window.width <= 375"
            alt="">
          <img src="@/assets/images/partnership__bg4.png" class="partnership-bg bg__mob "
            v-if="window.width <= 450 && window.width > 375" alt="">
          <div class="anime">
            <div class="imgs view2">
              <img src="../assets/images/partnership/view2/1.png" />
              <img src="../assets/images/partnership/view2/2.png" />
            </div>
          </div>
          <div class="content" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <p class="title">Transparency is Gold – Honesty, Directness, Clarity</p>
            <p class="text">We build any and all success on hiring industry experts, who know exactly what our customers
              demand.
              At DuxGroup there is no micromanagement, because we trust everyone to do their job to the highest
              standard. Our teams and people are our greatest asset.</p>
          </div>
        </div>
        <div class="item" @mouseover="thirdCardHover=true" @mouseleave="thirdCardHover=false">
          <img src="../assets/images/partnership-bg.png" class="partnership-bg" v-if="window.width > 1024 && thirdCardHover == false" />
          <img src="../assets/images/home/CardsAnimeHover.png" class="partnership-bg gradient" v-show="window.width > 1024 && thirdCardHover == true" />
          <img src="@/assets/images/partnership__bg2.png" class="partnership-bg"
            v-if="window.width <= 1024 && window.width > 450" alt="">
          <img src="@/assets/images/partnership__bg3.png" class="partnership-bg bg__mob3" v-if="window.width <= 375"
            alt="">
          <img src="@/assets/images/partnership__bg4.png" class="partnership-bg bg__mob bg__mob414"
            v-if="window.width <= 450 && window.width > 375" alt="">
          <div class="anime">
            <div class="imgs view3">
              <img src="../assets/images/partnership/view3/1.png" />
              <img src="../assets/images/partnership/view3/2.png" />
              <img src="../assets/images/partnership/view3/3.png" />
              <img src="../assets/images/partnership/view3/4.png" />
            </div>
          </div>
          <div class="content" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <p class="title" >Resilience is Key – We have a plan</p>
            <p class="text">We want to make an impact. But we are not too proud to admit that sometimes we need to
              re-adjust. Getting up after a fall and looking at different solutions that no one has ever thought of
              before - This is our strength.
              We learn from our mistakes and create something different. We live by the 1+1=3 principle, because with
              each new try, we add greater value. Every time.</p>
          </div>
        </div>
        <div class="item" @mouseover="forthCardHover=true" @mouseleave="forthCardHover=false">
          <img src="../assets/images/partnership-bg.png" class="partnership-bg" v-if="window.width > 1024 && forthCardHover == false" />
          <img src="../assets/images/home/CardsAnimeHover.png" class="partnership-bg gradient" v-show="window.width > 1024 && forthCardHover == true" />
          <img src="@/assets/images/partnership__bg2.png" class="partnership-bg"
            v-if="window.width <= 1024 && window.width > 450" alt="">
          <img src="@/assets/images/partnership__bg3.png" class="partnership-bg bg__mob4" v-if="window.width <= 375"
            alt="">
          <img src="@/assets/images/partnership__bg4.png" class="partnership-bg bg__mob "
            v-if="window.width <= 450 && window.width > 375" alt="">
          <div class="anime">
            <div class="imgs view4">
              <img src="../assets/images/partnership/view4/1.png" />
              <img src="../assets/images/partnership/view4/2.png" />
              <img src="../assets/images/partnership/view4/3.png" />
            </div>
          </div>
          <div class="content" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <p class="title">Team Dux – Together. – We are colleagues</p>
            <p class="text">But first and foremost, we like each other and we are friends. We are one team and we stand
              together in our mission. There is no hierarchy.
              You can have a coffee with your immediate colleagues or the "Head of Anything". This is by far the most
              important value we hold.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="slider">
      <div class="header-sldier">
        <BlockTitle title="what do we have?"></BlockTitle>
      </div>
      <div class="title" data-aos="fade-up" data-aos-duration="1000">
        <p>We create <span class="blue">products</span> that players <span class="blue">love</span></p>
      </div>
      <div class="slide_part" data-aos="fade-up" data-aos-duration="2000">
        <div class="slider">
          <div @mouseover="firstSliderCardHover=true" @mouseleave="firstSliderCardHover=false">
            <img src="../assets/images/slider/Card1.png" v-if="firstSliderCardHover==false">
            <img src="../assets/images/home/WhatWeHave.png" v-else>
          </div>
          <div @mouseover="secondSliderCardHover=true" @mouseleave="secondSliderCardHover=false">
            <img src="../assets/images/slider/Card2.png" v-if="secondSliderCardHover==false">
            <img src="../assets/images/home/WhatWeHave2.png" v-else>
          </div>
          <div  @mouseover="thirdSliderCardHover=true" @mouseleave="thirdSliderCardHover=false">
            <img src="../assets/images/slider/Card3.png" v-if="thirdSliderCardHover==false">
            <img src="../assets/images/home/WhatWeHave3.png" v-else>
          </div>
        </div>
        <VueSlickCarousel ref="carousel" v-bind="settingsImages" class="vue-slick">
          <div><img src="../assets/images/slider/Card1.png"></div>
          <div><img src="../assets/images/slider/Card2.png"></div>
          <div><img src="../assets/images/slider/Card3.png"></div>
        </VueSlickCarousel>
        <div class="arrows">
          <div class="prev" @click="showPrev">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#2F5BD8" class="bi bi-arrow-left"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
          </div>
          <div class="next" @click="showNext">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#2F5BD8" class="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="divider">

      <div class="marquee-container">
        <div class="Marquee" style="margin-bottom: 0;">
          <div class="Marquee-content">
            <div class="Marquee-tag max-width">
              <!-- <img src="../assets/images/marquee/nineCasino.svg" class="ml10" /> -->
              <div class="TestCazino Nine" onclick="window.open('https://ninecasino.com/', '_blank')">
                <img src="../assets/images/marquee/NineLogo.png" alt="">
              </div>
              <p>WE LOVE</p>
            </div>

            <div class="Marquee-tag max-width">
              <!-- <img src="../assets/images/marquee/pino.svg" class="ml10" /> -->
              <div class="TestCazino Pino" onclick="window.open('https://www.pinocasino.com/', '_blank')">
                <img src="../assets/images/marquee/PinoLogo.svg" alt="">
              </div>
              <p>WE LOVE</p>
            </div>

            <div class="Marquee-tag max-width">
              <!-- <img src="../assets/images/marquee/duxcasino.svg" class="ml10" /> -->
              <div class="TestCazino DuxMar" onclick="window.open('https://www.duxcasino.com/', '_blank')">
                <img src="../assets/images/marquee/DuxLogo.svg" alt="">
              </div>
              <p>WE LOVE</p>
            </div>
            <div class="Marquee-tag max-width">
              <!-- <img src="../assets/images/marquee/nineCasino.svg" class="ml10" /> -->
              <div class="TestCazino Nine" onclick="window.open('https://ninecasino.com/', '_blank')">
                <img src="../assets/images/marquee/NineLogo.png" alt="">
              </div>
              <p>WE LOVE</p>
            </div>

            <div class="Marquee-tag max-width">
              <!-- <img src="../assets/images/marquee/pino.svg" class="ml10" /> -->
              <div class="TestCazino Pino" onclick="window.open('https://www.pinocasino.com/', '_blank')">
                <img src="../assets/images/marquee/PinoLogo.svg" alt="">
              </div>
              <p>WE LOVE</p>
            </div>

            <div class="Marquee-tag max-width">
              <!-- <img src="../assets/images/marquee/duxcasino.svg" class="ml10" /> -->
              <div class="TestCazino DuxMar" onclick="window.open('https://www.duxcasino.com/', '_blank')">
                <img src="../assets/images/marquee/DuxLogo.svg" alt="">
              </div>
              <p>WE LOVE</p>
            </div>

          </div>
        </div>
      </div>
      <div class="marquee-container marqueeSecond">
        <div class="Marquee">
          <div class="Marquee-content2">
            <div class="Marquee-tag max-width">
              <p>WHAT WE DO</p>
              <!-- <img src="../assets/images/marquee/octo.svg" class="ml10" /> -->
              <div class="TestCazino Octo" onclick="window.open('https://www.octocasino.com/', '_blank')">
                <img src="../assets/images/marquee/OctoLogo.svg" alt="">
              </div>
            </div>
            <div class="Marquee-tag max-width">
              <p>WHAT WE DO</p>
              <div class="TestCazino Gets" onclick="window.open('https://www.getslots.com/', '_blank')">
                <img src="../assets/images/marquee/GetslotsLogo.svg" alt="">
              </div>
              <!-- <img src="../assets/images/marquee/getslots.svg" class="ml10" /> -->
            </div>

            <div class="Marquee-tag max-width">
              <p>WHAT WE DO</p>
              <!-- <img src="../assets/images/marquee/octo.svg" class="ml10" /> -->
              <div class="TestCazino Octo" onclick="window.open('https://www.octocasino.com/', '_blank')">
                <img src="../assets/images/marquee/OctoLogo.svg" alt="">
              </div>
            </div>
            <div class="Marquee-tag max-width">
              <p>WHAT WE DO</p>
              <!-- <img src="../assets/images/marquee/getslots.svg" class="ml10" /> -->
              <div class="TestCazino Gets" onclick="window.open('https://www.getslots.com/', '_blank')">
                <img src="../assets/images/marquee/GetslotsLogo.svg" alt="">
              </div>
            </div>

            <div class="Marquee-tag max-width">
              <p>WHAT WE DO</p>
              <!-- <img src="../assets/images/marquee/octo.svg" class="ml10" /> -->
              <div class="TestCazino Octo" onclick="window.open('https://www.octocasino.com/', '_blank')">
                <img src="../assets/images/marquee/OctoLogo.svg" alt="">
              </div>
            </div>

            <div class="Marquee-tag max-width">
              <p>WHAT WE DO</p>
              <!-- <img src="../assets/images/marquee/getslots.svg" class="ml10" /> -->
              <div class="TestCazino Gets" onclick="window.open('https://www.getslots.com/', '_blank')">
                <img src="../assets/images/marquee/GetslotsLogo.svg" alt="">
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="content">
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <h3>DUXPlatform</h3>
          </div>
          <h4>IGaming platform that includes a casino and a sports betting solution. Innovative. Flexible. Comfortable.
            Unique.</h4>
        </div>
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <h3>Affiliate Program</h3>
          </div>
          <h4>A strategic partner of Chilli Partners, with huge expertise and connections in affiliate marketing. The
            main office is located in Malta.</h4>
        </div>
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <h3>DuxOperation</h3>
          </div>
          <h4>A team of professionals in the field of casino and sports operations. We have experience working with the
            largest brands in the world. We have the following departments: CRM, VIP, support, antifraud, payments, BI,
            and more.</h4>
        </div>
        <div class="content__item" data-aos="fade-up" data-aos-duration="1500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
              viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <h3>DUXVentures</h3>
          </div>
          <h4>We invest money in what we understand: iGaming, mobile marketing, digital, and crypto. The main principle
            is 1+1=3. We don’t just offer money. We give the project our expertise, experience, skills, and abilities.
          </h4>
        </div>
      </div>
    </div>
    <div class="mission">
      <div class="title">
        <BlockTitle title="our mission"></BlockTitle>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1500">
        <p data-aos="fade-up" data-aos-duration="1500">Make <span class="blue">big waves</span> in the iGaming segment together with <span class="blue">our
            team</span> and build an awesome <span class="blue">ecosystem</span></p>
        <img src="../assets/images/mission/6.png" class="forth_figure forth_figure1" />
        <img src="../assets/images/mission/23.png" class="second_figure forth_figure2" />
        <img src="../assets/images/mission/33.png" class="third_figure forth_figure3"/>
        <img src="../assets/images/mission/45.png" class="first_figure forth_figure4"/>
      </div>
    </div>
    <div class="gambling">
      <div class="title">
        <BlockTitle title="safe gambling"></BlockTitle>
      </div>
      <div class="content">
        <div class="figure" data-aos="fade-up" data-aos-duration="1500">
          <p>Gambling should always be seen as entertainment and nothing else. Unfortunately, sometimes people can take
            it too far and potentially lose control of their betting.
            You should never consider gambling as a source of income or a chance to recover from debt.
            Always keep track of the time and money you spent on gambling, check this with yourself every day.
          </p>
          <div class="circle" @click="goToGaming()" @mouseover="upHere = true" @mouseleave="upHere = false">
            <span style="line-height: 180%;">READ MORE</span>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="#00FFFF" class="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg> -->
            <img v-if="upHere == false" class="bi bi-arrow-right" src="../assets/images/home/Arrow.svg" alt="">
            <img v-else class="bi bi-arrow-right" src="../assets/images/home/ArrowHov.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="events">
      <div class="divider_event">
        <BlockTitle title="events"></BlockTitle>
      </div>
      <div class="content">
        <div class="title">
          <p data-aos="fade-up" data-aos-duration="1500">We always <span class="blue">participate</span> in</p>
        </div>
        <div class="organizations">
          <div class="img" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
            <img src="../assets/images/organizations/sigma.svg" />
          </div>
          <div class="img" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">
            <img src="../assets/images/organizations/affiliate.svg" />
          </div>
          <div class="img" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
            <img src="../assets/images/organizations/asia.png" />
          </div>
          <div class="img" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1400">
            <img src="../assets/images/home/Amster.svg" />
          </div>
        </div>
        <div class="organizations__mob">
          <div style="display:flex; justify-content:space-between; align-items:center">
            <div class="img">
              <img src="../assets/images/organizations/sigma.svg" />
            </div>
            <div class="img">
              <img src="../assets/images/organizations/affiliate.svg" />
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:70px">
            <div class="img">
              <img src="../assets/images/organizations/london.svg" />
            </div>
            <div class="img">
              <img src="../assets/images/organizations/asia.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="holding">
      <div class="title">
        <BlockTitle title="holding news"></BlockTitle>
      </div>
      <div class="slider-holding">
        <div class="items" data-aos="fade-up" data-aos-duration="1500">
          <VueSlickCarousel ref="holding" v-bind="settings">
            <div>
              <div class="item"
                onclick="window.open('https://www.igbaffiliate.com/partner-insights/duxgroup-people-are-the-core-asset-in-our-business/', '_blank')">
                <div class="content centre__cont">
                  <p class="date">31.08.2021</p>
                  <div class="centre">
                    <p class="item_title">IGBAFFILIATE </p>
                    <p class="item_content">DUXGroup: People are the core asset in our business</p>
                  </div>
                </div>
                <div class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor"
                    class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div class="item"
                onclick="window.open ('https://europeangaming.eu/portal/latest-news/2021/07/14/96210/hurricane-global-became-duxgroup-and-acquired-pinocasino/', '_blank')">
                <div class="content centre__cont">
                  <p class="date">11.07.2021</p>
                  <div class="centre">
                    <p class="item_title">European Gaming </p>
                    <p class="item_content">Hurricane Global became DUXGroup and acquired PinoCasino </p>
                  </div>
                </div>

                <div class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor"
                    class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div class="item"
                onclick="window.open ('https://igamingbusiness.com/company-news/duxgroup-launches-new-duxplatform-project/', '_blank')">
                <div class="content centre__cont">
                  <p class="date">24.09.2021</p>
                  <div class="centre">
                    <p class="item_title">IGBAFFILIATE </p>
                    <p class="item_content">DUXGroup launches new DUXPlatform project </p>
                  </div>
                </div>

                <div class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor"
                    class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>



          </VueSlickCarousel>
          <div class="arrows arrows-news">
            <div class="prev" @click="$refs.holding.prev()">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#2F5BD8" class="bi bi-arrow-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
            </div>
            <div class="next" @click="$refs.holding.next()">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#2F5BD8" class="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offices">
      <div class="title">
        <BlockTitle title="our offices"></BlockTitle>
      </div>
      <div>
        <div class="office">
          <img src="../assets/images/offices/3.jpeg" data-aos="fade-up" data-aos-duration="5000" />
          <img src="../assets/images/offices/1.jpeg" data-aos="fade-up" data-aos-duration="4000" />
          <img src="../assets/images/offices/2.jpeg" class="abs" data-aos="fade-up" data-aos-duration="3000" />
        </div>
        <div class="map">

          <img src="../assets/images/offices/map.png" />
          <img src="../assets/images/offices/map320.png" alt="map" class="small-map" />
          <div class="malta">
            <div class="circle"></div>
            <div class="text">MALTA</div>
          </div>
          <div class="cyprus">
            <div class="circle"></div>
            <div class="text">CYPRUS</div>
          </div>
          <div class="cards" id="cards">
            <div class="card">
              <p>Established in <span class="grey">2020</span></p>
              <p>Number of employees: <span class="grey">350+</span></p>
              <p>Number of open vacancies: <span class="grey">15</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <FooterPart />

    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import FooterPart from "@/components/Footer";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import gsap from "gsap";
import BlockTitle from '../components/BlockTitle.vue';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper.use([Navigation, Pagination, Autoplay])


let mooveCursor = () => {
  const cards = document.querySelector('#cards');

  const moveCursor = (e) => {
    // console.log(window.location.pathname)

    var mouseY = e.clientY;
    var mouseX = e.clientX;

    if (window.location.pathname == '/') {
      // console.log(document.querySelector('.map').offsetWidth - document.querySelector('#cards').offsetWidth + 90)
      if (window.innerWidth >= 1920) {
        if (mouseX < 700 || mouseX > document.querySelector('.map').offsetWidth - 650
        || e.pageY > document.querySelector('.map').getBoundingClientRect().top+window.pageYOffset + 550
        || e.pageY < document.querySelector('.map').getBoundingClientRect().top+window.pageYOffset + 141
        ) {
          document.querySelector('#cards').style.visibility = `hidden`;
        } else {
          document.querySelector('#cards').style.visibility = `visible`;
          
        }
      }
      else if (window.innerWidth >= 1200) {
        if ((mouseX < 500 || mouseX > document.querySelector('.map').offsetWidth - 400) 
        || e.pageY > document.querySelector('.map').getBoundingClientRect().top+window.pageYOffset + 447
        || e.pageY < document.querySelector('.map').getBoundingClientRect().top+window.pageYOffset + 141
        ) 
            // && (e.pageY < (document.querySelector('.map').getBoundingClientRect().top + window.pageYOffset + 600))
            // && (e.pageY > document.querySelector('.map').getBoundingClientRect().top+window.pageYOffset + 400)
        {
          document.querySelector('#cards').style.visibility = `hidden`;
        } else {
          // console.log(e.pageY>9140);
          document.querySelector('#cards').style.visibility = `visible`;
          // console.log(document.querySelector('.map').getBoundingClientRect().top + window.pageYOffset)
          // console.log(e.pageY)
        }
      }
      else if (window.innerWidth >= 900) {
        if (mouseX < 90 || mouseX > document.querySelector('.map').offsetWidth - 70) {
          document.querySelector('#cards').style.visibility = `hidden`;
        } else {
          document.querySelector('#cards').style.visibility = `visible`;
        }
      }

      // if(window.innerWidth < 1024){
      //   if( mouseX < 40 || mouseX > document.querySelector('.map').offsetWidth - document.querySelector('#cards').offsetWidth){
      //     document.querySelector('#cards').style.visibility = `visible`;
      //   }
      //   mouseY = e.clientY -200;
      //   mouseX = e.clientX;
      // }

      // if (window.innerWidth > 480 && window.innerWidth < 1920) {
      //   if (mouseX < 90 || mouseX > document.querySelector('.map').offsetWidth - document.querySelector('#cards').offsetWidth - 40) {
      //     document.querySelector('#cards').style.visibility = `hidden`;
      //     console.log('mouse ' + mouseX)
      //     // console.log('XYI ' + (document.querySelector('.map').offsetWidth - document.querySelector('#cards').offsetWidth - 40))
      //   } else {
      //     console.log(mouseX)
      //     // console.log(document.querySelector('.map').offsetWidth - document.querySelector('#cards').offsetWidth - 40)
      //     document.querySelector('#cards').style.visibility = `visible`;
      //   }
      // }


      if (mouseX < document.querySelector('.map').offsetWidth - 400) {
        document.querySelector('#cards').style.transform = `translate3d(${mouseX}px, ${mouseY - 150}px, 0)`;
      }
      else {
        document.querySelector('#cards').style.transform = `translate3d(${document.querySelector('.map').offsetWidth - 400}px, ${mouseY - 150}px, 0)`;
      }

    }
  }


  window.addEventListener('mousemove', moveCursor)

  if (cards) {
    gsap.to("#curveText", {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%"
    }).timeScale(1);

  }
}

mooveCursor();

export default {
  name: 'home-page',
  data() {

    return {
      firstSliderCardHover: false,
      secondSliderCardHover: false,
      thirdSliderCardHover: false,
      firstCardHover: false,
      secondCardHover: false,
      thirdCardHover: false,
      forthCardHover: false,
      upHere: false,
      window: {
        width: 0,
      },
      mainTitle: 'We Were Born To Make History',
      mainTitleArr: [],
      header_text: ['BRAVE', 'SMART', 'MOBILE', 'GAMBLERS'],
      text: 'brave',
      running: ['Revolutionize', 'Improve', 'Perfect', 'Revolutionize'],
      menuClosed: true,
      settingsImages: {
        arrows: false,
        dots: false,
        slidesToShow: 2,
        infinite: false,
        centerMode: false,
        touchMove: true,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 2.5,
        infinite: false,
        touchMove: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
    }
  },
  components: { FooterPart, Header, VueSlickCarousel, BlockTitle },
  methods: {
    goToGaming() {
      this.$router.push('/gaming')
    },
    showNext() {
      this.$refs.carousel.next()
    },
    openedMobMenu(value) {
      if (value) {
        this.menuClosed = !this.menuClosed
      } else {
        this.menuClosed = true
      }
    },
    showPrev() {
      this.$refs.carousel.prev()
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
  watch: {
    text(newVal) {
      if (newVal === 'SMART') {
        setTimeout(() => {
          this.text = 'MOBILE'
        }, 2000);
      } else if (newVal === 'MOBILE') {
        setTimeout(() => {
          this.text = 'GAMBLERS'
        }, 2000);
      } else if (newVal === 'GAMBLERS') {
        setTimeout(() => {
          this.text = 'BRAVE'
        }, 2000);
      } else if (newVal === 'BRAVE') {
        setTimeout(() => {
          this.text = 'SMART'
        }, 2000);
      }
    }
  },
  mounted() {


    // setTimeout(() => {
    //   this.running.push(['Revolutionize', 'Improve', 'Perfect', 'Revolutionize'])
    // }, 9000);

    setTimeout(() => {
      this.text = 'SMART'
    }, 2000);


    let firstSplit = this.mainTitle.split(' ')

    let block = document.getElementById('p')
    console.log(firstSplit);
    let timer = 0;
    firstSplit.forEach((word, ind) => {
      // if(word != ' '){
      //   setTimeout(()=>{this.mainTitleArr.push(word)}, timer)
      // }
      // else{
      //   setTimeout(()=>{this.mainTitleArr.push('&thinsp;')}, timer)
      // }
      let span = document.createElement('span');
      span.id = 'word' + ind;
      span.classList.add('mainTitleWord')
      block.appendChild(span)

      word.split('').forEach((letter) => {

        let spanInside = document.createElement('span');
        spanInside.innerText = letter;
        spanInside.classList.add('mainTitleLetter')

        setTimeout(() => { span.appendChild(spanInside) }, timer)
        timer += 50
      })

      let spanBsp = document.createElement('span');
      spanBsp.innerText = ' ';
      block.appendChild(spanBsp)
    })

    // setTimeout(() => {console.log('asd',firstSplit)}, 1000)
    // this.mainTitleArr = firstSplit

    new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 0,
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2500
      },
    });

  }

}

</script>

<style lang="scss" scoped>
.organizations__mob {
  display: none;
}

.max-width {
  width: max-content !important;
}

.ml10 {
  margin: 0 0.5rem !important;
}

@keyframes cube1 {
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(45deg) scale(.8) translate(15px, 100px);
  }

  100% {
    transform: rotate(0deg) scale(1);
  }
}

@keyframes cube2 {
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(-45deg) scale(.8) translate(-100px, 15px);
  }

  100% {
    transform: rotate(0deg) scale(1);
  }
}

@keyframes cube3 {
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(90deg) scale(.8) translate(100px, 10%);
  }

  100% {
    transform: rotate(0deg) scale(1);
  }
}

@keyframes rotate__figure {


  100% {
    transform: rotate(360deg)
  }
}

.zar-mec {
  animation: cube3 13s linear infinite;
  animation-play-state: running;
  transform-origin: bottom right;
}

.klor {
  animation: cube2 15s linear infinite;
  animation-play-state: running;
  transform-origin: bottom right;
}

.zar-poqr {
  animation: cube1 11s linear infinite;
  animation-play-state: running;
  transform-origin: bottom right;
}

.third_figure,
.second_figure,
.forth_figure,
.first_figure {
  animation: rotate__figure 10s infinite linear;
}

.marquee-container {
  //margin: 15px auto;
  overflow: hidden;

  .Marquee {
    width: 100vw;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    font-weight: 200;
    display: -webkit-box;
    margin-bottom: 25px;
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
      -webkit-animation: marquee 25s linear infinite running;
      -moz-animation: marquee 25s linear infinite running;
      -o-animation: marquee 25s linear infinite running;
      -ms-animation: marquee 25s linear infinite running;
      animation: marquee 25s linear infinite running;
      animation-direction: reverse;

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
          font-size: 96px;
          line-height: 95%;
          margin: 0;
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

    .Marquee-content3{
      // animation-direction: normal;
    }
    .Marquee-content:hover{
        -webkit-animation-play-state:paused;
        -moz-animation-play-state:paused;
        animation-play-state:paused;
    }

    .Marquee-content2 {
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: box;
      display: flex;
      -webkit-animation: marquee 32s linear infinite running;
      -moz-animation: marquee 32s linear infinite running;
      -o-animation: marquee 32s linear infinite running;
      -ms-animation: marquee 32s linear infinite running;
      animation: marquee 32s linear infinite running;
      animation-direction: reverse;
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
          font-size: 96px;
          line-height: 95%;
          margin: 0;
        }

        @media screen and (max-width: 1024px){
          p {
          color: #F0F0F0;
          font-family: 'Oxygen';
          font-style: normal;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 84px !important;
          line-height: 95%;
          margin: 0;
        }
        }

        @media screen and (max-width: 768px){
          p {
          color: #F0F0F0;
          font-family: 'Oxygen';
          font-style: normal;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 68px !important;
          line-height: 95%;
          margin: 0;
        }
        }

        @media screen and (max-width: 475px){
          p {
          color: #F0F0F0;
          font-family: 'Oxygen';
          font-style: normal;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 58px !important;
          line-height: 95%;
          margin: 0;
        }
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
    .Marquee-content2:hover{
        -webkit-animation-play-state:paused;
        -moz-animation-play-state:paused;
        animation-play-state:paused;
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

//.ticker-wrapper{
//  animation: ticker 10s infinite linear forwards;
//  animation-delay: 0s;
//  display: flex;
//  align-items: center;
//  justify-content: space-between;
//  width: fit-content;
//  .item{
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    p{
//      font-family: 'Oxygen', sans-serif;
//      font-style: normal;
//      font-weight: 400;
//      font-size: 118px;
//      line-height: 95%;
//      margin: 0;
//      letter-spacing: 0.02em;
//      text-transform: uppercase;
//      color: #F0F0F0;
//    }
//    .circle{
//      //vertical-align: super;
//      margin: 40px;
//      width: 30px !important;
//      height: 30px !important;
//      background-color: #2F5BD8;
//      border-radius: 50%;
//    }
//  }
//}

//@keyframes ticker {
//  0% {
//    transform: translate(100%, 0);
//  }
//
//  50% {
//    transform: translate(0, 0);
//  }
//
//  100% {
//    transform: translate(-100%, 0);
//  }
//}
.small-map {
  display: none;
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
    margin-right: 20px;
  }
}

.blue {
  color: #2F5BD8;
}

.small-header {
  display: none;
}



@media screen and (min-width: 768px) and (max-width: 1024px) {
  .partnership {
    .items {
      .item {
        & img.partnership-bg {
          width: 100% !important;
          height: 440px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 701px) and (max-width: 768px) {
  .partnership {
    .items {
      .item {
        & img.partnership-bg {
          width: 100% !important;
          height: 255px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 601px) and (max-width: 700px) {
  .partnership {
    .items {
      .item {
        & img.partnership-bg {
          width: 100% !important;
          height: 280px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 501px) and (max-width: 600px) {
  .partnership {
    .items {
      .item {
        & img.partnership-bg {
          width: 100% !important;
          height: 300px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 401px) and (max-width: 500px) {
  .partnership {
    .items {
      .item {
        & img.partnership-bg {
          width: 100% !important;
          height: 340px !important;
        }
      }
    }
  }
}



@media screen and (min-width: 320px) and (max-width: 400px) {
  .partnership {
    .items {
      .item {
        & img.partnership-bg {
          width: 100% !important;
          height: 400px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 400px) {
  .partnership {
    .items {
      .item {
        & img.partnership-bg {
          width: 100% !important;
          height: 400px !important;
        }
      }
    }
  }
}




@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .slider {
    padding-top: 0px !important;
  }

  .ml10 {
    width: 100px !important;
  }

  .container {
    &>* {
      margin-top: -1px;
    }

    .header {
      .bg-img {
        background-size: contain !important;
        min-height: 526px !important;
        
        .klor {
          top: 12% !important;
          right: 50% !important;
        }

        .zar-poqr {
          bottom: -40px !important;
        }

        .menu {
          .content {
            margin-top: 190px !important;

            p {
              width: 80% !important;
              font-size: 84px !important;
              line-height: 105%;
              letter-spacing: 0.02em !important;

              .brave {
                letter-spacing: 0.03em !important;
                font-size: 22px !important;
                line-height: 28px !important;
                margin-right: 30px !important;
                min-width: 170px !important;
                display: inline-flex !important;
                align-items: center !important;
                vertical-align: 45px !important;

                svg {
                  width: 10px !important;
                  height: 10px !important;
                }
              }
            }
          }
        }
      }
    }

    .marquee-container {
      .nomr {
        margin-bottom: -23px !important;
      }

      .Marquee {
        padding: 0 !important;
        margin-bottom: 0;

        &-content {
          .Marquee-tag {
            font-size: 84px !important;
            padding: 0 !important;

            p {
              font-size: 84px !important;
            }
          }
        }
      }

    }

    .history {
      padding-top: 70px !important;

      p {
        font-size: 32px !important;
        width: 70% !important;
        padding-top: 70px !important;
        line-height: 125% !important;
      }
    }

    .running {
      padding-top: 120px !important;

      .title {
        p {
          font-size: 22px !important;
          line-height: 28px !important;
          text-align: center !important;
          letter-spacing: 0.03em !important;
        }
      }

      .line {
        marquee {
          //letter-spacing: 0.02em !important;
          font-size: 84px !important;
          line-height: 105% !important;

          svg {
            vertical-align: sub !important;
          }

          &:first-child {
            margin-bottom: 25px !important;
          }
        }
      }
    }

    .partnership {
      padding-top: 100px !important;

      .title {
        padding: 70px 0 50px 0 !important;

        p {
          margin: 0 !important;
          padding: 0 !important;
        }
      }

      .items {
        .item {
          //padding: 25px;
          width: 48% !important;
          border: none !important;
          background-size: contain;

          //& img:first-child:not(.imgs img){
          //  height: 450px !important;
          //}
          .content {
            .title {
              font-size: 22px !important;
              line-height: 28px !important;
              letter-spacing: 0.03em !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .text {
              font-size: 18px !important;
              line-height: 24px !important;
            }
          }
        }
      }
    }

    .slider {
      .title {
        p {
          font-size: 68px !important;
          line-height: 105% !important;
          text-align: center !important;
          letter-spacing: 0.02em !important;
        }
      }

      .slide_part {
        div {
          img {
            //width: auto !important;
          }
        }
      }
    }

    .divider {
      padding-top: 100px !important;

      marquee {
        letter-spacing: 0.02em !important;
        font-size: 84px !important;
        line-height: 105% !important;

        img {
          width: 70px !important;
          height: auto !important;
        }
      }

      .content {
        padding: 110px 30px 0px 30px !important;

        &__item {
          div {
            width: 50% !important;

            svg {
              width: 16px !important;
              height: 16px !important;
              margin-right: 44px !important;
            }
          }

          h4 {}
        }
      }
    }

    .mission {
      padding-top: 0 !important;

      .content {
        padding: 200px 32px 150px calc(35px + (143 - 35) * ((100vw - 1025px) / (1440 - 1025))) !important;

        p {
          width: 65% !important;
        }

        img.first_figure {
          width: 170px !important;
          height: 150px !important;
        }

        img.third_figure {
          width: 240px !important;
          height: 190px !important;
        }

        img.second_figure {
          width: 340px !important;
          height: 400px !important;
          top: 25%;
        }

        img.forth_figure {
          width: 147px !important;
          height: 161px !important;
        }
      }
    }

    .gambling {
      padding-top: 70px !important;

      .content {
        .figure {
          padding: 73px 97px !important;
          background-image: url('../assets/images/gambling.png');

          p {
            width: 79% !important;
            font-size: 32px !important;
            line-height: 125% !important;
            margin-left: -45px;
          }

          .circle {
            width: 130px;
            height: 130px;
          }
        }
      }
    }

    .events {
      .content {
        .title {
          p {
            width: 70% !important;
            padding: 70px 0 !important;
            margin: 0 auto !important;
          }
        }
      }
    }

    .holding {
      padding-top: 160px !important;

      .slider-holding {
        .items {
          padding-left: 25px !important;

          .item {
            box-sizing: border-box !important;
            width: 340px !important;
            background-size: contain;
            min-height: 430px !important;
            padding: 0 24px 50px 24px !important;

            .item_content {
              font-size: 18px !important;
              line-height: 24px !important;
            }

            .img {
              img {
                width: 80% !important;
              }

            }

            .btn {
              width: 70px !important;
              height: 70px !important;
              margin: 0 !important;
            }
          }
        }
      }
    }

    .offices {
      .office {
        img:first-child {
          width: 60% !important;
        }

        .abs {
          //bottom : calc(20px + (50-20) * ((100vw - 320px) / (1200-320)))
        }
      }
    }
  }
}



@media screen and (min-width: 769px) and (max-width: 1023px) {
  .slick-slide {
    margin-right: 50px !important;
  }

  .container {
    &>* {
      margin-top: -1px !important;
    }

    .header {
      .bg-img {
        background-image: url('../assets/images/home/bg768.png');
        background-position: top right;
        background-size: auto !important;
        min-height: 424px !important;

        .klor {
          width: 153px !important;
          height: 100px !important;
        }

        .zar-mec {
          width: 100px !important;
          height: 100px !important;
          top: 30% !important;
        }

        .zar-poqr {
          width: 50px !important;
          height: 55px !important;
        }

        .menu {
          .content {
            margin-top: 160px !important;
            padding: 0 8px !important;

            p {
              width: 80% !important;
              font-size: 68px !important;
              line-height: 105% !important;
              letter-spacing: 0.02em !important;

              .brave {
                letter-spacing: 0.03em !important;
                font-size: 20px !important;
                min-width: 150px !important;
                line-height: 25px !important;
                display: inline-flex !important;
                align-items: center !important;
                vertical-align: 35px !important;

                svg {
                  width: 10px !important;
                  height: 10px !important;
                }
              }
            }
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
              font-size: 68px !important;
            }

            .circle {
              margin: 30px !important;
            }
          }
        }
      }
    }

    .history {
      padding-top: 55px !important;

      p {
        font-size: 26px !important;
        line-height: 125% !important;
        padding: 55px 70px 80px 70px !important;
        width: auto !important;

      }
    }

    .partnership {
      .items {
        .item {
          width: 47% !important;
          border: none !important;
          background-size: contain;

          .content {
            padding: 0 !important;
            top: 140px !important;

            .title {
              font-size: 20px !important;
              line-height: 25px !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .text {
              font-size: 16px !important;
              line-height: 20px !important;
            }
          }
        }
      }
    }

    .running {
      padding: 0 !important;

      .title {
        p {
          font-size: 22px !important;
          line-height: 28px !important;
          letter-spacing: 0.03em !important;
        }
      }

      .line {
        marquee {
          font-size: 68px !important;
          line-height: 105% !important;

          svg {
            margin: 15px !important;
          }
        }
      }
    }

    .slider {
      .title {
        margin: 50px !important;

        p {
          width: 75% !important;
          font-size: 58px;
          line-height: 105%;
        }
      }

      .slide_part {
        margin-left: 25px !important;
      }
    }

    .divider {
      marquee {
        font-size: 68px !important;
        line-height: 105% !important;
        letter-spacing: 0.02em !important;
      }

      img:nth-child(1) {
        width: 70px !important;
        height: 70px !important;
        vertical-align: bottom !important;
      }
    }

    .content {
      padding: 70px 8px !important;

      &__item {
        padding: 10px 0 36px 0 !important;

        div {
          width: 40% !important;

          svg {
            margin-right: 20px !important;
          }

          h3 {
            font-size: 22px !important;
            line-height: 28px !important;
            letter-spacing: 0.03em !important;
          }
        }

        h4 {
          width: 60% !important;
          font-size: 16px !important;
          line-height: 20px !important;
          letter-spacing: 0.04em !important;
        }
      }
    }

    .mission {
      padding-top: 0 !important;

      .content {
        padding: 170px 32px 140px 32px !important;

        p {
          width: 60% !important;
          font-size: 38px !important;
          line-height: 48px !important;
          letter-spacing: 0.03em !important;
        }

        .first_figure {
          width: 126px !important;
          height: 115px !important;
        }

        .third_figure {
          width: 181px !important;
          height: 143px !important;
        }

        .second_figure {
          width: 280px !important;
          height: 320px !important;
        }

        .forth_figure {
          width: 110px !important;
          height: 120px !important;
          bottom: 10% !important;
        }
      }
    }

    .gambling {
      .title {
        padding-bottom: 60px !important;
      }

      .content {
        padding: 0 !important;

        .figure {
          padding: 72px 48px 48px 48px;
          margin: 0 !important;
          width: auto !important;
          justify-content: space-between !important;

          p {
            font-size: 26px !important;
            line-height: 125% !important;
            width: 70% !important;
          }
        }
      }
    }

    .events {
      padding-top: 70px !important;

      .content {
        padding: 0 !important;

        .title {
          p {
            padding: 65px 0 !important;
            margin: 0 !important;
          }
        }

        .organizations {

          img:first-child,
          img:nth-child(3) {
            width: 95px !important;
          }

          img:nth-child(2),
          img:nth-child(4) {
            width: 69px !important;
          }
        }
      }
    }

    .holding {
      .slider-holding {
        .items {
          padding-left: 25px !important;

          .item {
            width: 310px !important;
            background-size: contain !important;
            margin-right: 20px !important;
            min-height: 510px !important;

            .content {

              padding: 0 !important;

              .date {
                font-weight: 700 !important;
                font-size: 12px !important;
                line-height: 105% !important;
                letter-spacing: 0.04em !important;
              }

              .item_title {
                font-size: 28px !important;
                line-height: 35px !important;
                letter-spacing: 0.03em !important;
                margin: 37px 0 13px 0 !important;
              }

              .item_content {
                font-size: 16px !important;
                line-height: 20px !important;
                letter-spacing: 0.04em !important;
              }
            }

            .img {
              bottom: 100px !important;

              img {
                width: 90% !important;
              }

            }

            .btn {
              width: 70px;
              height: 70px;
              margin-bottom: 100px !important;
            }
          }
        }
      }
    }

    .offices {
      padding: 65px 8px !important;

      .title {
        padding-bottom: 64px !important;
      }

      div {
        .office {
          img:first-child {
            width: 50% !important;
          }

          img:nth-child(2) {
            width: 30% !important;
          }

          img:nth-child(3) {
            width: 24% !important;
            bottom: -150px !important;
            //top: calc(120px + (150 - 120) * ((100vw - 1440px) / (1920 - 1440)));
          }
        }
      }

    }
  }

}

@media screen and (max-width: 768px) {
  .holding .slider-holding .items .item {

    padding: 0 11px !important;

  }

  .events .content .organizations {
    justify-content: space-between !important;
  }

  .partnership .items .item img.partnership-bg {
    width: 100% !important;
    height: 440px !important;
  }

  .slick-slide {
    margin-right: 50px !important;
  }

  .container {
    &>* {
      margin-top: -1px !important;
    }

    .header {
      .bg-img {
        background-image: url('../assets/images/home/bg768.png');
        background-position: top right;
        background-size: auto !important;
        min-height: 424px !important;

        .klor {
          width: 153px !important;
          height: 100px !important;
        }

        .zar-mec {
          width: 100px !important;
          height: 100px !important;
          top: 30% !important;
        }

        .zar-poqr {
          width: 50px !important;
          height: 55px !important;
        }

        .menu {
          .content {
            margin-top: 160px !important;
            padding: 0 8px !important;

            p {
              width: 80% !important;
              font-size: 68px !important;
              line-height: 105% !important;
              letter-spacing: 0.02em !important;

              .brave {
                letter-spacing: 0.03em !important;
                font-size: 20px !important;
                min-width: 150px !important;
                line-height: 25px !important;
                display: inline-flex !important;
                align-items: center !important;
                vertical-align: 35px !important;

                svg {
                  width: 10px !important;
                  height: 10px !important;
                }
              }
            }
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
              font-size: 68px !important;
            }

            .circle {
              margin: 30px !important;
            }
          }
        }
      }
    }

    .history {
      padding-top: 55px !important;

      p {
        font-size: 26px !important;
        line-height: 125% !important;
        padding: 55px 72px 80px 72px !important;
        width: auto !important;

      }
    }

    .partnership {
      .items {
        .item {
          width: 47% !important;
          border: none !important;
          background-size: contain;

          .content {
            padding: 0 !important;
            top: 140px !important;

            .title {
              font-size: 20px !important;
              line-height: 25px !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .text {
              font-size: 16px !important;
              line-height: 20px !important;
            }
          }
        }
      }
    }

    .running {
      padding: 0 !important;

      .title {
        p {
          font-size: 22px !important;
          line-height: 28px !important;
          letter-spacing: 0.03em !important;
        }
      }

      .line {
        marquee {
          font-size: 68px !important;
          line-height: 105% !important;

          svg {
            margin: 15px !important;
          }
        }
      }
    }

    .slider {
      .title {
        margin: 50px !important;

        p {
          width: 75% !important;
          font-size: 58px;
          line-height: 105%;
        }
      }

      .slide_part {
        margin-left: 25px !important;
      }
    }

    .divider {
      padding-top: 86px;

      marquee {
        font-size: 68px !important;
        line-height: 105% !important;
        letter-spacing: 0.02em !important;
      }

      // img:nth-child(1) {
      //   width: 70px !important;
      //   height: 70px !important;
      //   vertical-align: bottom !important;
      // }
    }

    .content {
      padding: 70px 8px !important;

      &__item {
        padding: 10px 0 36px 0 !important;

        div {
          width: 40% !important;

          svg {
            margin-right: 20px !important;
          }

          h3 {
            font-size: 22px !important;
            line-height: 28px !important;
            letter-spacing: 0.03em !important;
          }
        }

        h4 {
          width: 55% !important;
          font-size: 16px !important;
          line-height: 20px !important;
          letter-spacing: 0.04em !important;
        }
      }
    }

    .mission {
      padding-top: 0 !important;

      .content {
        padding: 170px 32px 140px 32px !important;

        p {
          width: 60% !important;
          font-size: 38px !important;
          line-height: 48px !important;
          letter-spacing: 0.03em !important;
        }

        .first_figure {
          width: 126px !important;
          height: 115px !important;
        }

        .third_figure {
          width: 181px !important;
          height: 143px !important;
        }

        .second_figure {
          width: 280px !important;
          height: 320px !important;
        }

        .forth_figure {
          width: 110px !important;
          height: 120px !important;
          bottom: 10% !important;
        }
      }
    }

    .gambling {
      .title {
        padding-bottom: 60px !important;
      }

      .content {
        padding: 0 !important;

        .figure {
          background-image: url('../assets/images/gambling2.png');
          padding: 55px 48px 48px 48px;
          margin: 0 !important;
          width: auto !important;
          justify-content: space-between !important;

          p {
            font-size: 26px !important;
            line-height: 125% !important;
            width: 504px !important;
            margin-left: -17px;
          }

          .circle {
            width: 130px;
            height: 130px;
          }
        }
      }
    }

    .events {
      padding-top: 70px !important;

      .content {
        padding: 0 !important;

        .title {
          p {
            padding: 65px 0 !important;
            margin: 0 !important;
          }
        }

        .organizations {

          img:first-child,
          img:nth-child(3) {
            width: 95px !important;
          }

          img:nth-child(2),
          img:nth-child(4) {
            width: 69px !important;
          }
        }
      }
    }

    .holding {
      .slider-holding {
        .items {
          padding-left: 25px !important;

          .item {
            width: 300px !important;
            background-size: contain !important;
            margin-right: 20px !important;
            min-height: 379px !important;

            .content {

              padding: 0 !important;

              .date {
                font-weight: 700 !important;
                font-size: 12px !important;
                line-height: 105% !important;
                letter-spacing: 0.04em !important;
                padding-left: 13px;
              }

              .item_title {
                font-size: 28px !important;
                line-height: 35px !important;
                letter-spacing: 0.03em !important;
                margin: 37px 0 13px 0 !important;
              }

              .item_content {
                font-size: 16px !important;
                line-height: 20px !important;
                letter-spacing: 0.04em !important;
              }
            }

            .img {
              bottom: 12px !important;

              img {
                width: 90% !important;
              }

            }

            .btn {
              width: 70px;
              height: 70px;
              margin-bottom: 12px !important;
            }
          }
        }
      }
    }

    .offices {
      padding: 65px 8px !important;

      .title {
        padding-bottom: 64px !important;
      }

      div {
        .office {
          img:first-child {
            width: 50% !important;
          }

          img:nth-child(2) {
            width: 30% !important;
          }

          img:nth-child(3) {
            width: 24% !important;
            bottom: -100px !important;
            left: 41%;
            //top: calc(120px + (150 - 120) * ((100vw - 1440px) / (1920 - 1440)));
          }
        }
      }

    }
  }

}

@media screen and (max-width:450px) {
  .organizations__mob {
    display: contents;

    div {
      justify-content: space-around !important;
    }
  }

  .organizations__flex {
    display: flex;
    justify-content: center;
  }

  .organizations {
    display: none !important;
  }

  .container .events .content .title p {
    padding: 0 !important;
    margin: 0 !important;
  }
}



@media screen and (min-width: 320px) and (max-width: 500px) {
  .offices div .office img:nth-child(1) {
    border-radius: 4px !important;
  }

  .offices div .office img:nth-child(2) {
    border-radius: 4px !important;
  }

  .offices div .office img:nth-child(3) {
    border-radius: 4px !important;
  }

  .arrows {
    margin-top: -162px !important;
  }

  .partnership {
    padding-top: 82px !important;

    .title {
      p {
        padding: 41px 0 32px 0 !important;
        font-size: 20px !important;
      }
    }
  }

  .small-header {
    display: block !important;
  }

  .container {
    &>* {
      margin-top: -1px !important;
    }

    .header {
      min-height: 300px !important;

      .bg-img {
        background-image: url('../assets/images/home/bg320.png');
        background-position: top right;
        background-size: auto !important;
        min-height: 436px !important;

        .klor {
          width: 100px !important;
          height: 70px !important;
          left: 7% !important;
          top: 100px !important;
          right: 0 !important;
        }

        .zar-mec {
          width: 105px !important;
          height: 105px !important;
          top: 35% !important;
        }

        .zar-poqr {
          width: 53px !important;
          height: 58px !important;
          right: 15% !important;
          bottom: 0px !important;
        }

        .menu {
          padding: 16px !important;

          .content {
            margin: 0;
            padding: 0 5px !important;
            margin-top: 190px !important;

            p {
              font-size: 34px !important;
              line-height: 110% !important;
              letter-spacing: 0.03em !important;
              width: 95% !important;
              margin: 0 !important;

              .brave {
                svg {
                  width: 10px !important;
                  height: 10px !important;
                }

                letter-spacing: 0.03em !important;
                font-size: 16px !important;
                display: flex !important;
                margin: 0 0 10px 0 !important;
                align-items: center !important;
                line-height: 20px !important;
              }
            }
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
              font-size: 58px !important;
              line-height: 105% !important;

            }

            .circle {
              margin: 30px !important;
            }
          }
        }
      }
    }

    .history {
      padding-top: 50px !important;

      .title {
        padding: 0 15px !important;

        img:nth-child(1) {
          display: none !important;
        }

        img {
          width: 100% !important;
        }
      }

      p {
        padding: 40px 16px 0 16px !important;
        font-size: 20px !important;
        line-height: 27px !important;
        width: auto !important;
      }
    }

    .running {
      padding-top: 90px !important;

      .title {
        p {
          font-size: 20px !important;
          line-height: 25px !important;
          text-align: center !important;
          letter-spacing: 0.03em !important;
        }
      }

      .line {
        marquee {
          letter-spacing: 0.02em !important;
          font-size: 58px !important;
          line-height: 105% !important;

          svg {
            margin: 10px !important;
          }
        }
      }
    }

    .slider {
      .slide_part div img {
        width: 288px !important;
      }

      .header-sldier {
        padding: 0 16px !important;

        img:first-child {
          display: none !important;
        }

        img {
          width: 100% !important;
        }
      }

      .title {
        margin: 50px 0 50px 0 !important;

        p {
          font-size: 34px !important;
          line-height: 110% !important;
          text-align: center !important;
          letter-spacing: 0.03em !important;
          width: auto !important;
        }
      }

      .slide_part {
        margin-left: 16px !important;

        .slider {
          .vue-slick {
            div {

              margin-right: 10px !important;

            }
          }


        }
      }
    }

    .partnership {
      .divide_partnership {
        img:nth-child(1) {
          display: none !important;
        }
      }

      .items {
        flex-direction: column !important;
        padding: 0 16px !important;

        .item {
          .bg__mob {
            height: 345px !important;

            @media screen and (max-width: 414px) {
              .bg__mob {
                height: 405px !important;
              }
            }
          }

          .bg__mob2 {
            height: 393px !important;
          }

          .bg__mob3 {
            height: 444px !important;
          }

          .bg__mob4 {
            height: 388px !important;
          }

          width: 100% !important;

          //& img:first-child{
          //  width: 100% !important;
          //}
          //& img:nth-child(2){
          //  top: 18px !important;
          //  left: 18px !important;
          //  width: 140px !important;
          //  height: 64px !important;
          //}
          .anime {
            top: 10px !important;
          }

          .content {
            top: 98px !important;

            .title {
              font-size: 19px !important;
              line-height: 25px !important;
              letter-spacing: 0.03em !important;
              margin: 30px 0 !important;
            }

            .text {
              font-size: 14px !important;
              line-height: 18px !important;
              letter-spacing: 0.04em !important;
            }
          }
        }
      }
    }

    .divider {
      padding-top: 60px !important;

      marquee {
        font-size: 58px !important;
        line-height: 105% !important;
        letter-spacing: 0.02em !important;

        img {
          width: 60px !important;
          height: 60px !important;
          vertical-align: bottom !important;
        }
      }

      .content {
        padding-top: 80px !important;

        &__item {
          display: flex;
          flex-direction: column !important;
          align-items: flex-start !important;
          padding-bottom: 25px !important;
          padding-left: 16px !important;
          padding-right: 16px !important;

          div {
            width: auto !important;

            svg {
              margin-right: 8px !important;
              width: 15px !important;
              height: 15px !important;
            }

            h3 {
              font-size: 20px !important;
              line-height: 25px !important;
              letter-spacing: 0.03em !important;
            }
          }

          h4 {
            padding-top: 20px !important;
            width: auto !important;
          }
        }
      }
    }

    .mission {
      overflow: hidden !important;

      .title {
        img:first-child {
          display: none !important;
        }
      }

      .content {
        padding: 128px 16px 107px 16px !important;
        min-height: 145px !important;
        position: relative;

        p {
          position: absolute;
          z-index: 99;
          text-align: center;
          width: 90% !important;
          font-size: 22px !important;
          line-height: 28px !important;
          text-align: center !important;
          letter-spacing: 0.03em !important;
        }

        .first_figure {
          width: 62px !important;
          height: 56px !important;
          left: 16px !important;
        }

        .third_figure {
          width: 90px !important;
          height: 70px !important;
          right: 30% !important;
          top: 0 !important;
        }

        .second_figure {
          width: 180px !important;
          height: 220px !important;
          top: 5% !important;
          right: -70px !important;
        }

        .forth_figure {
          width: 55px !important;
          height: 60px !important;
        }
      }
    }

    .gambling {
      padding-top: 30px !important;
      padding-bottom: 80px !important;

      .title {
        padding-bottom: 40px !important;

        img:first-child {
          display: none !important;
        }
      }

      .content {
        margin: 0 !important;

        .figure {
          background-image: url('../assets/images/gmbling-fon320.png');
          background-position: inherit !important;
          padding: 36px 16px !important;
          margin: 0 !important;
          flex-direction: column !important;
          width: auto !important;

          p {
            font-size: 18px !important;
            width: auto !important;
            line-height: 24px !important;
            margin-bottom: 25px !important;
            padding-left: 16px;
          }

          .circle {
            width: 110px !important;
            height: 110px !important;
            letter-spacing: 0.04em !important;
            font-size: 12px !important;
            line-height: 105% !important;
          }
        }
      }
    }

    .events {
      padding: 0 16px !important;

      .divider_event {
        img:first-child {
          display: none;
        }
      }

      .content {
        padding-bottom: 120px !important;

        .title {
          p {
            margin: 40px 0 60px 0 !important;
            font-size: 34px !important;
            line-height: 110% !important;
            letter-spacing: 0.03em !important;
          }
        }

        .organizations {
          display: grid;
          grid-template-columns: auto auto;
          row-gap: 50px;
          justify-content: center;
          align-items: center;
          width: auto !important;
          padding: 0 16px;


          img:nth-child(1),
          img:nth-child(3) {
            width: 95px !important;
            height: 31px !important;
            vertical-align: super;
          }

          img:nth-child(2),
          img:nth-child(4) {
            width: 68px !important;
            height: 64px !important;
            vertical-align: super;
          }

          img {
            margin-right: 40px !important;
          }
        }
      }
    }

    .holding {
      padding-top: 0 !important;

      .title {
        img:first-child {
          display: none !important;
        }
      }

      .slider-holding {
        margin-top: 40px !important;
        padding: 0 16px !important;

        .items {
          padding-left: 0 !important;

          .item {
            width: 248px !important;
            padding: 0 20px !important;

            .content {
              .item_title {
                font-size: 20px !important;
                line-height: 25px !important;
                letter-spacing: 0.03em !important;
              }

              .item_content {
                font-size: 16px !important;
                line-height: 20px !important;
                letter-spacing: 0.04em !important;
              }
            }

            .img {
              bottom: 193px !important;
              display: block !important;
              width: 300px;

              img {
                width: 70% !important;
              }

            }

            .btn {
              width: 65px !important;
              height: 65px !important;
              margin-top: 60px !important;
              margin-bottom: 193px !important;
            }
          }
        }
      }
    }

    .offices {

      padding: 0 !important;
      padding-top: 80px !important;

      .title {
        padding: 0 16px !important;
        width: auto !important;

        img:first-child {
          display: none !important;
        }

        img {
          width: 100% !important;
        }
      }

      div {
        .office {
          flex-direction: column !important;
          padding: 0 16px !important;
          align-items: flex-start !important;

          //width: 80% !important;
          img:nth-child(1) {
            width: 66% !important;
            z-index: 50 !important;
          }

          img:nth-child(2) {
            width: 60% !important;
            margin-top: 16px !important;
            z-index: 150 !important;
            align-self: center;
          }

          img:nth-child(3) {
            width: 24% !important;
            bottom: 110px !important;
            //top: calc(120px + (150 - 120) * ((100vw - 1440px) / (1920 - 1440)));
          }

          .abs {
            width: 30% !important;
            //bottom: 150px !important;
            bottom: calc(80px + (200 - 80) * ((100vw - 320px) / (767 - 320))) !important;
            right: 45px !important;
            left: auto !important;
            z-index: 100 !important;
          }
        }

        .map {

          .cards {
            .card {
              p {
                font-size: 17px !important;
              }
            }
          }

          img:first-child {
            display: none !important;
          }

          .small-map {
            display: block !important;
            width: 90% !important;
            margin: 0 auto;

          }

          .malta {
            .circle {
              position: absolute !important;
              left: 45% !important;
              top: 43% !important;
            }

            .text {
              //left: 260px !important;
              //top: 35% !important;
              left: calc(67px + (260 - 50) * ((100vw - 320px) / (767 - 320)));
              //left: 50px !important;
              //top: 33% !important;
            }
          }

          .cyprus {
            .circle {
              position: absolute !important;
              right: 43.5% !important;
              top: 45.2% !important;
            }

            .text {
              right: calc(60px + (235 - 35) * ((100vw - 320px) / (767 - 320)));
              //top: 41%;
            }
          }
        }

      }
    }
  }

}



.header {
  //background: linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  background: #010C28 url('../assets/images/gradient.png') center;
  background-size: cover;
  min-height: 500px;

  .bg-img {
    width: 100%;
    position: relative;
    background-image: url("../assets/images/home-bg.png");
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 702px;

    z-index: 0;
      .bg-img-images{
        z-index: -1;
        img{
          z-index: -1;
        }
      }

    img.zar-poqr {
      position: absolute;
      bottom: -40px;
      right: 38%;
    }

    img.zar-mec {
      position: absolute;
      top: 40%;
      right: 10%;
    }

    img.klor {
      position: absolute;
      top: 15%;
      right: 40%;
    }

    .menu {
      padding: 25px;

      .content {
        margin-top: 210px;

        //padding: 25px;
        //p::first-line {
        //  line-height:75% !important;
        //}
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
          width: 1100px;

          .brave {
            font-family: 'Oxygen', sans-serif;
            font-style: normal;
            width: fit-content;
            font-weight: 400;
            min-width: 250px;
            font-size: 38px;
            line-height: 75px;
            display: inline-flex;
            align-items: center;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: #F0F0F0;
            margin: 0;
            // margin-right: 50px;
            margin-right: 20px;
            //margin: 0 70px 70px 0;
            vertical-align: top;

            svg {
              margin-right: 11px;
              vertical-align: baseline;
              width: 14px;
              height: 14px;
            }
          }
        }
      }
    }
  }
}

.divide {
  //padding-top: 150px;
  display: flex;
  //width: 100%;
  background-color: #010C28;
  align-items: flex-end;
  padding: 150px 25px 0 25px;

  img {
    width: 100%;
  }
}

.history {
  .title {
    padding: 0 25px;

    img {
      width: 100%;
    }
  }

  background-color: #010C28;
  padding-top: 120px;
  width: 100%;
  font-family: 'Exo',
  system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 125%;
  color: #F0F0F0;

  p {
    width: 740px;
    padding-top: 90px;
    margin: 0 auto;
  }
}

.running {
  padding-top: 150px;
  background-color: #010C28;

  .title {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.03em;
    padding-bottom: 40px;
    text-transform: uppercase;
    color: #F0F0F0;

    p {
      margin: 0;
    }
  }

  .line {
    marquee {
      display: flex;

      .item {
        width: min-content;
        display: flex;
        align-items: center;

        p {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 118px;
          line-height: 95%;
          display: flex;
          margin: 0;
          align-items: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #F0F0F0;
        }

        .circle {
          margin: 40px;
          width: 30px !important;
          height: 30px !important;
          background-color: #2F5BD8;
          border-radius: 50%;
        }
      }

      svg {
        //vertical-align: super;
        margin: 40px;
      }

      &:first-child {
        margin-bottom: 25px !important;
      }
    }

  }
}



.partnership {
  width: 100%;
  background-color: #010C28;
  padding-top: 130px;

  .divide_partnership {
    padding: 0 25px;

    img {
      width: 100%;
    }
  }

  .title {
    p {
      margin: 0;
      padding: 90px 0 50px 0;
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
  }

  .items {
    padding: 0 25px;
    display: flex;
    flex: 50%;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;

    .item {
      position: relative;
      width: 45%;
      margin-bottom: 30px;
      //background-image: url('../assets/images/partnership-bg.png');
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 10px;

      &:hover>.anime .imgs {
        width: 200px;
      }

      &:hover>.anime .view2 img:nth-child(2) {
        left: 35% !important;
      }


      &:hover>.anime .view4 img:nth-child(2) {
        right: 0 !important;
        left: 47px !important;
      }

      &:hover>.anime .view4 img:nth-child(3) {
        right: 10px !important;
      }

      & img:first-child:not(.imgs img) {
        width: 100%;
        height: 400px;
      }

      &:hover>.anime .view3 {
        img:nth-child(3) {
          width: auto;
          position: absolute;
          left: 22%;
          bottom: 0;
        }

        img:nth-child(4) {
          width: auto;
          position: absolute;
          left: 41%;
          bottom: 0;
        }

        @media screen and (max-width: 1024px) {

          img:nth-child(3) {
            width: auto;
            position: absolute;
            left: 22%;
            bottom: 0;
          }

          img:nth-child(4) {
            width: auto;
            position: absolute;
            left: 41%;
            bottom: 0;
          }
        }
      }

      .anime {
        width: 200px;
        height: 90px;
        margin-top: 10px;
        position: absolute;
        top: 24px;
        left: 24px;

        .imgs {
          position: relative;
          transition: width 1s;
          transition-timing-function: ease;
          width: 130px;
          height: 90px;
        }

        .view1 {
          img:nth-child(1) {
            width: 22px;
            height: 22px;
            position: absolute;
            bottom: 10%;
            right: 20%;
          }

          img:nth-child(2) {
            width: 29px;
            height: 29px;
            position: absolute;
            bottom: 20%;
            left: 0;
          }

          img:nth-child(3) {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 0;
            right: 0;
          }

          img:nth-child(4) {
            width: 62px;
            height: 62px;
            position: absolute;
            bottom: 15%;
            left: 30%;
          }

        }

        .view2 {
          img:nth-child(1) {
            width: auto;
            position: absolute;
            left: 0;
            bottom: 0;
          }

          img:nth-child(2) {
            width: auto;
            position: absolute;
            left: 20%;
            top: 0;
          }
        }

        .view3 {
          img:nth-child(1) {
            width: auto;
            position: absolute;
            left: 0;
            bottom: 0;
          }

          img:nth-child(2) {
            width: auto;
            position: absolute;
            left: 10%;
            bottom: 0;
          }

          img:nth-child(3) {
            width: auto;
            position: absolute;
            left: 27%;
            bottom: 0;
          }

          img:nth-child(4) {
            width: auto;
            position: absolute;
            left: 45%;
            bottom: 0;
          }
        }

        .view4 {
          img:nth-child(1) {
            width: auto;
            position: absolute;
            top: 0;
            left: 0;
          }

          img:nth-child(2) {
            width: auto;
            position: absolute;
            bottom: -3px;
            left: 37px !important;
          }

          img:nth-child(3) {
            width: auto;
            position: absolute;
            bottom: -3px;
            right: -35px !important;
          }
        }
      }

      .content {
        position: absolute;
        top: 140px;
        width: calc(100% - 48px);
        //top: calc(120px + (150 - 120) * ((100vw - 1440px) / (1920 - 1440)));
        left: 24px;
        color: white;

        .title {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 28px;
          margin: 28px 0 24px 0;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
        }

        p:nth-child(2) {
          font-family: 'Exo', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          color: #F0F0F0;
          //width: 30vw;
        }
      }

      //.title{
      //  position: absolute;
      //  top: 150px;
      //  font-family: 'Oxygen';
      //  font-style: normal;
      //  font-weight: 400;
      //  font-size: 22px;
      //  line-height: 28px;
      //  letter-spacing: 0.03em;
      //  text-transform: uppercase;
      //  color: #F0F0F0;
      //  left: 24px;
      //}
      //.content{
      //  position: absolute;
      //  left: 24px;
      //}
    }

  }
}

.gradient{
  width: 100%;
  height: 400px;
}

@media screen and (min-width: 375px) and (max-width: 450px) {
  .container {
    .partnership {
      .items {
        .item:nth-child(1) {
          .partnership-bg {
            height: 370px !important;
          }



          .content {
            .text {
              font-size: 18px !important;
            }
          }

          .bg__mob414 {
            height: 400px !important;
          }


        }

        .item:nth-child(2) {
          .partnership-bg {
            height: 400px !important;
          }

          .content {
            .text {
              font-size: 18px !important;
            }
          }
        }

        .item:nth-child(3) {
          .partnership-bg {
            height: 460px !important;
          }

          .content {
            .text {
              font-size: 18px !important;
            }
          }
        }

        .item:nth-child(4) {
          .partnership-bg {
            height: 400px !important;
          }

          .content {
            .text {
              font-size: 18px !important;
            }
          }
        }
      }
    }
  }

}




.header {
  //background: linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  background: #010C28 url('../assets/images/gradient.png') center;
  background-size: cover;
  min-height: 500px;

  .bg-img {
    width: 100%;
    position: relative;
    background-image: url("../assets/images/home-bg.png");
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 702px;
    z-index: 1;

    img.zar-poqr {
      position: absolute;
      bottom: -40px;
      right: 38%;
    }

    img.zar-mec {
      position: absolute;
      top: 40%;
      right: 10%;
    }

    img.klor {
      position: absolute;
      top: 15%;
      right: 40%;
    }

    .menu {
      padding: 25px;

      .content {
        margin-top: 320px;

        //padding: 25px;
        //p::first-line {
        //  line-height:75% !important;
        //}
        .p {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 110px;
          line-height: 95%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #F0F0F0;
          margin: 0;
          // width: 1100px;
          width: 835px;

          .brave {
            font-family: 'Oxygen', sans-serif;
            font-style: normal;
            width: fit-content;
            font-weight: 400;
            min-width: 250px;
            font-size: 28px;
            line-height: 75px;
            display: inline-flex;
            align-items: center;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: #F0F0F0;
            margin: 0;
            // margin-right: 50px;
            margin-right: 20px;
            //margin: 0 70px 70px 0;
            vertical-align: top;
            margin-top: 15px;

            svg {
              margin-right: 11px;
              vertical-align: baseline;
              width: 14px;
              height: 14px;
            }
          }
        }
      }
    }
  }
}

.divide {
  //padding-top: 150px;
  display: flex;
  //width: 100%;
  background-color: #010C28;
  align-items: flex-end;
  padding: 150px 25px 0 25px;

  img {
    width: 100%;
  }
}

.history {
  .title {
    padding: 0 25px;

    img {
      width: 100%;
    }
  }

  background-color: #010C28;
  padding-top: 120px;
  width: 100%;
  font-family: 'Exo',
  system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 125%;
  color: #F0F0F0;

  p {
    width: 740px;
    padding-top: 90px;
    margin: 0 auto;
  }
}

.running {
  padding-top: 150px;
  background-color: #010C28;

  .title {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.03em;
    padding-bottom: 40px;
    text-transform: uppercase;
    color: #F0F0F0;

    p {
      margin: 0;
    }
  }

  .line {
    marquee {
      display: flex;

      .item {
        width: min-content;
        display: flex;
        align-items: center;

        p {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 118px;
          line-height: 95%;
          display: flex;
          margin: 0;
          align-items: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #F0F0F0;
        }

        .circle {
          margin: 40px;
          width: 30px !important;
          height: 30px !important;
          background-color: #2F5BD8;
          border-radius: 50%;
        }
      }

      svg {
        //vertical-align: super;
        margin: 40px;
      }

      &:first-child {
        margin-bottom: 25px !important;
      }
    }

  }
}



.partnership {
  width: 100%;
  background-color: #010C28;
  padding-top: 130px;

  .divide_partnership {
    padding: 0 25px;

    img {
      width: 100%;
    }
  }

  .title {
    p {
      margin: 0;
      padding: 90px 0 50px 0;
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
  }

  .items {
    padding: 0 25px;
    display: flex;
    flex: 50%;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;

    .item {
      position: relative;
      width: 45%;
      margin-bottom: 30px;
      //background-image: url('../assets/images/partnership-bg.png');
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 10px;

      &:hover>.anime .imgs {
        width: 200px;
      }

      &:hover>.anime .view2 img:nth-child(2) {
        left: 35% !important;
      }

      // &:hover>.anime .view4 img:nth-child(2) {
      //   left: 10% !important;
      // }

      & img:first-child:not(.imgs img) {
        width: 100%;
        height: 400px;
      }

      .anime {
        width: 200px;
        height: 90px;
        margin-top: 10px;
        position: absolute;
        top: 24px;
        left: 24px;

        .imgs {
          position: relative;
          transition: width 1s;
          transition-timing-function: ease;
          width: 130px;
          height: 90px;
        }

        .view1 {
          img:nth-child(1) {
            width: 22px;
            height: 22px;
            position: absolute;
            bottom: 10%;
            right: 20%;
          }

          img:nth-child(2) {
            width: 29px;
            height: 29px;
            position: absolute;
            bottom: 20%;
            left: 0;
          }

          img:nth-child(3) {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 0;
            right: 0;
          }

          img:nth-child(4) {
            width: 62px;
            height: 62px;
            position: absolute;
            bottom: 15%;
            left: 30%;
          }

        }

        .view2 {
          img:nth-child(1) {
            width: auto;
            position: absolute;
            left: 0;
            bottom: 0;
          }

          img:nth-child(2) {
            width: auto;
            position: absolute;
            left: 20%;
            top: 0;
          }
        }

        .view3 {
          img:nth-child(1) {
            width: auto;
            position: absolute;
            left: 0;
            bottom: 0;
          }

          img:nth-child(2) {
            width: auto;
            position: absolute;
            left: 10%;
            bottom: 0;
          }

          img:nth-child(3) {
            width: auto;
            position: absolute;
            left: 27%;
            bottom: 0;
          }

          img:nth-child(4) {
            width: auto;
            position: absolute;
            left: 45%;
            bottom: 0;
          }
        }

        .view4 {
          img:nth-child(1) {
            width: auto;
            position: absolute;
            top: 0;
            left: 0;
          }

          img:nth-child(2) {
            width: auto;
            position: absolute;
            bottom: -3px;
            left: 10%;
            transition: 1s;
          }

          img:nth-child(3) {
            width: auto;
            position: absolute;
            bottom: -3px;
            right: 0;
          }
        }
      }

      .content {
        position: absolute;
        top: 140px;
        width: calc(100% - 48px);
        //top: calc(120px + (150 - 120) * ((100vw - 1440px) / (1920 - 1440)));
        left: 24px;
        color: white;

        .title {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 28px;
          margin: 28px 0 24px 0;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
        }

        p:nth-child(2) {
          font-family: 'Exo', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          // color: #F0F0F0;
          color: #98A6B9;
          //width: 30vw;
        }
      }

      //.title{
      //  position: absolute;
      //  top: 150px;
      //  font-family: 'Oxygen';
      //  font-style: normal;
      //  font-weight: 400;
      //  font-size: 22px;
      //  line-height: 28px;
      //  letter-spacing: 0.03em;
      //  text-transform: uppercase;
      //  color: #F0F0F0;
      //  left: 24px;
      //}
      //.content{
      //  position: absolute;
      //  left: 24px;
      //}
    }


  }
}

.slider {
  background-color: #010C28;
  padding-top: 20px;

  .header-sldier {
    padding: 0 25px;

    img {
      width: 100%
    }
  }

  .title {
    margin: 90px 0;
  }

  .slide_part {
    margin-left: 25px;

    .slider {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .vue-slick {
      display: none;
    }

    .arrows {
      display: none;
    }

    div {
      margin-right: 10px;

      img {

        cursor: pointer;
        //min-width: 700px;
        width: 100%;
      }

      @media (min-width: 1439px) {
        img {
          min-width: 450px !important;
          width: 100% !important;
        }
      }

      @media (min-width: 1024px) and (max-width: 1439px) {
        img {
          min-width: 320px !important;
          width: 100% !important;
        }
      }

      @media (min-width: 769px) and (max-width: 1024px) {
        img {
          min-width: 200px !important;
          width: 100% !important;
        }
      }

    }

    @media (min-width: 320px) and (max-width: 768px) {


      .slider {
        display: none !important;
      }

      .vue-slick {
        display: block !important;
      }

      .arrows {
        margin-top: 10px !important;
        display: flex !important;
      }
    }
  }

  p {
    width: 740px;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 105%;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
  }
}

.divider {
  padding-top: 120px;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;
  color: white;

  marquee {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 118px;
    line-height: 95%;
    display: flex;
    height: auto;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;

    img {
      width: 100px;
      height: 100px;
    }

    p {
      margin: 0;
    }

    //display: flex;
  }
}

.divider {
  .content {
    svg {
      width: 16px;
      height: 16px;
    }

    padding: 200px 25px 0 25px;

    &__item {
      border-top: 1px solid #828FA1;
      display: flex;
      padding: 16px 0 110px 0;
      align-items: flex-start;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
        width: 45%;

        svg {
          margin-right: 100px;
        }

        h3 {
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 35px;
          margin: 0;
          width: fit-content;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
        }
      }

      h4 {
        width: 45%;
        font-family: 'Exo', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin: 0;
        // line-height: 27px;
        line-height: 150%;
        // color: #F0F0F0;
        color: rgba(152, 166, 185, 1);
      }
    }
  }
}

.mission {
  padding-top: 70px;
  background-color: #010C28;

  .title {
    //width: 100%;
    padding: 0 25px;

    img {
      width: 100%;
    }
  }

  .content {
    padding: 300px 300px 180px 100px;
    position: relative;
    z-index: 0;

    p {
      font-family: 'Oxygen', sans-serif;
      font-style: normal;
      font-weight: 400;
      width: 69%;
      margin: 0;
      font-size: 48px;
      line-height: 105%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #F0F0F0;
      z-index: 1000;
    }



    .first_figure {
      position: absolute;
      left: 25px;
      top: 30px;
      transition: 1s;
      z-index: -1;
    }

    .first_figure:hover{
      left: 35px;
      top: 40px;
    } 

    .second_figure {
      position: absolute;
      right: -80px;
      top: 20%;
      transition: 2s;
      z-index: -1;
    }
    .second_figure:hover{
      right: -100px;
      top: 15%;
    } 

    .third_figure {
      position: absolute;
      right: 30%;
      top: 30px;
      transition: 2s;
      z-index: -1;
    }
    .third_figure:hover{
      right: 35%;
      top: 15px;
    } 

    .forth_figure {
      position: absolute;
      right: 25%;
      bottom: 0;
      transition: 3s;
      z-index: -1;
      width: 162px;
      height: 177px;
    }
    .forth_figure:hover{
      right: 30%;
      bottom: -10px;
    } 
  }
}

.gambling {
  background-color: #010C28;
  padding: 0 25px;

  .title {
    width: 100%;
    padding-bottom: 100px;

    img {
      width: 100%;
    }
  }

  .content {
    width: 100%;

    .figure {
      background-image: url('../assets/images/gambling-fon.png');
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 15px;
      margin: 0 auto;
      // padding: 112px 90px 90px 50px;
      padding: 112px 88px 90px 88px;

      p {
        font-family: 'Exo', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        margin: 0;
        width: 72%;
        // line-height: 47px;
        line-height: 125%;
        color: #F0F0F0;
      }

      .circle {
        background-color: #010C28;
        width: 194px;
        height: 194px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 105%;
        /* identical to box height, or 15px */

        letter-spacing: 0.04em;
        text-transform: uppercase;

        /* Text/Grey 1 */

        color: #F0F0F0;
        border-radius: 50%;
      }

      .circle:hover {
        background: #1F2941;
        // .bi-arrow-right{
        //   width: 53px;
        //   height: 8px;
        // }
      }
    }
  }

}

.events {
  background-color: #010C28;
  padding: 0 25px;
  padding-top: 150px;

  .divider_event,
  .divider_event img {
    width: 100%;
  }

  .content {
    .title {
      p {
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

    .organizations {
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .img {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        span {
          font-size: 17px;
          font-family: 'Oxygen';
          color: white;
          font-weight: 700;
        }

        //img:not(:last-child){
        //  margin-right: 130px;
        //}
      }

    }
  }
}

.holding {
  background-color: #010C28;
  padding-top: 200px;

  .title {
    padding: 0 25px;

    img {
      width: 100%;
    }
  }

  .slider-holding {
    margin-top: 90px;

    .items {
      padding-left: 25px;

      .item:hover{
        background-image: url('../assets/images/home/News.png');
      }
      .item {
        background-image: url('../assets/images/holding/bg.svg');
        background-repeat: no-repeat;
        background-size: contain;
        min-height: 540px;
        padding: 0 30px;
        margin-right: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        width: 384px !important;

        .content {
          .date {
            font-family: 'Oxygen', sans-serif;
            font-style: normal;
            font-weight: 700;
            margin: 0;
            font-size: 14px;
            line-height: 105%;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            padding-top: 10px;
            color: #828FA1;
          }

          .item_title {
            font-family: 'Oxygen', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 48px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: #F0F0F0;
            margin-top: 54px;
            margin-bottom: 0px;
          }

          .item_content {
            margin-top: 16px;
            // text-align: center;
            font-family: 'Exo', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
            display: flex;
            align-items: flex-end;
            // color: #F0F0F0;
            color: rgba(152, 166, 185, 1);
          }
        }

        .img {
          position: absolute;
          bottom: 45px;
          display: none;
          z-index: -3;

          img {
            width: 100%;
          }
        }

        .btn {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #00FFFF;
          margin-bottom: 50px;
          align-self: flex-end;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }

    }
  }
}

.slider-holding .items .item:hover>.img {
  display: block;
  transition-duration: 2s;
}

.slider-holding .items .item:hover>.btn {
  background-color: #1F2941;
}

.offices {
  padding: 150px 25px;
  background-color: #010C28;

  .title {
    width: 100%;
    padding-bottom: 100px;

    img {
      width: 100%;
    }
  }

  div {
    .office {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      img:nth-child(1) {
        width: 46%;
        border-radius: 10px;
      }

      img:nth-child(2) {
        width: 23%;
        border-radius: 10px;
      }

      .abs {
        position: absolute;
        bottom: -190px;
        left: 40%;

        border-radius: 10px;
        width: 23%;
        z-index: 100;
      }
    }

    .map {
      width: 100%;
      position: relative;
      overflow: hidden;
      //box-shadow: inset 0 0 10px #010C28;
      //border-bottom-left-radius: 50%;
      //border-bottom-right-radius: 50%;
      //border-top-left-radius: 20%;
      //border-top-right-radius: 50%;


      //overflow: hidden;
      //  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);

      //border-radius: 20%;
      //min-height: 500px;
      &:hover>.cards {
        display: block !important;
      }

      img {
        width: 100%;
        overflow: hidden;
        //-webkit-mask-image: radial-gradient(ellipse 90% 237% at 54% 71%, black 30%, transparent 50%);
        -webkit-mask-image: radial-gradient(ellipse 132% 173% at 54% 71%, black 30%, transparent 50%);
      }

      .malta,
      .cyprus {
        .circle {
          height: 8px;
          width: 8px;
          background-color: #2F5BD8;
          border-radius: 50%;
          cursor: pointer;
        }

        .text {
          padding: 8px 16px;
          background: #828FA1;
          border-radius: 30px;
          width: fit-content;
        }
      }

      .malta {
        .circle {
          position: absolute;
          left: 48.8%;
          top: 43.3%;
          //&:hover + .text{
          //  display: block !important;
          //}
        }

        .text:hover{
          background: linear-gradient(86.5deg, #5433FF 8.33%, #20BDFF 73.44%, #A5FECB 100%);
        }
        .text {
          @media (min-width: 1025px) and (max-width: 1920px) {
            left: calc(385px + (820 - 385) * ((100vw - 1025px) / (1920 - 1025)));
            top: calc(190px + (390 - 190) * ((100vw - 1025px) / (1920 - 1025))) !important;
          }

          @media (min-width: 768px) and (max-width: 1024px) {
            left: calc(275px + (400 - 275) * ((100vw - 768px) / (1024 - 768)));
            top: calc(150px + (195 - 150) * ((100vw - 768px) / (1024 - 768))) !important;
            font-style: normal !important;
            font-weight: 700 !important;
            font-size: 14px !important;
            line-height: 105% !important;
            letter-spacing: 0.04em !important;
          }

          @media (min-width: 320px) and (max-width: 767px) {
            top: calc(99px + (300 - 100) * ((100vw - 320px) / (767 - 320))) !important;
            font-size: 12px !important;
            line-height: 105% !important;
            letter-spacing: 0.04em !important;
          }

          position: absolute;
          left: 385px; //385
          top: 390px; // 195
          font-family: 'Oxygen',
          sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #1F2941;
        }
      }

      .cyprus {
        .circle {
          position: absolute;
          right: 46%;
          top: 45%;
        }

        .text:hover{
          background: linear-gradient(137.73deg, #0C7355 4.69%, #00FFFF 86.71%);
        }
        .text {
          @media (min-width: 1025px) and (max-width: 1920px) {
            right: calc(340px + (760 - 340) * ((100vw - 1025px) / (1920 - 1025))) !important;
            top: calc(195px + (395 - 195) * ((100vw - 1025px) / (1920 - 1025))) !important;
          }

          @media (min-width: 768px) and (max-width: 1024px) {
            right: calc(240px + (360 - 240) * ((100vw - 768px) / (1024 - 768))) !important;
            top: calc(150px + (195 - 150) * ((100vw - 768px) / (1024 - 768))) !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            line-height: 105% !important;
            letter-spacing: 0.04em !important;
            text-transform: uppercase !important;
          }

          @media (min-width: 320px) and (max-width: 767px) {
            //left: calc(275px + (400 - 275) * ((100vw - 768px) / (1024 - 768)));
            top: calc(93px + (300 - 100) * ((100vw - 320px) / (767 - 320))) !important;
            font-size: 12px !important;
          }

          //display: none;
          position: absolute;
          right: 760px; //340 // 360
          top: 41%;
          font-family: 'Oxygen',
          sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #1F2941;
        }
      }

      .cards {
        background-image: url('../assets/images/offices/card-bg.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top left;
        position: absolute;
        top: 0px;
        left: 0px;
        box-sizing: border-box;
        cursor: pointer;
        display: none;
        border-radius: 10px;
        padding: 50px 18px 50px 25px;
        z-index: 1000;

        .card {

          p {
            margin: 0 0 16px 0;
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
  }
}

@media screen and (min-width: 1201px) and (max-width: 1400px) {
  .mission {
    .content {
      p {
        font-size: 40px;
      }
    }
  }
}

@media screen and (min-width: 1201px) and (max-width: 1265px) {
  .mission {
    .content {
      p {
        font-size: 36px;
      }
    }
  }
}

.footer {
  background-color: #010C28;
  padding: 0 25px !important;
}

@media screen and (max-width: 450px) {
  .container .holding .slider-holding .items .item .content .date {

    padding-left: 0 !important;
  }

  .container .holding .slider-holding .items .item {
    width: 248px !important;
    background-size: contain !important;
    margin-right: 20px !important;
    min-height: 510px !important;
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .holding {
    padding-top: 115px !important;
  }

  .content {
    .content__item {
      div {
        svg {
          width: 14px !important;
          height: 14px !important;
        }
      }
    }
  }

  .slider .slide_part div img {
    width: 320px;
  }

  .footer {
    padding: 0 16px !important;
  }

  .partnership {
    padding-top: 80px !important;
  }
}

.centre {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  // justify-content: center;
}

.centre__cont {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.swiper-container{
  max-height: 30px;
  overflow: hidden;
}
.swiper-slide{
  line-height: 28px;
}

.TestCazino{
  width: 150px;
  height: 150px;
  border: 0.882353px solid #828FA1;
  border-radius: 116.883px;
  margin-right: 10px;
  margin-left: 10px;
  img{
    padding: 50px 45px 60px 44px;
    width: 61px;
    height: 40px;
  }
}

@media screen and (max-width: 1024px) {
  .TestCazino{
  width: 100px;
  height: 100px;
  border: 0.882353px solid #828FA1;
  border-radius: 116.883px;
  margin-right: 10px;
  margin-left: 10px;
}
  }

.TestCazino:hover{
  background: #828FA1;
  cursor: pointer;
}

.Nine{
  img{
    padding: 50px 45px 60px 44px;
    width: 61px;
    height: 40px;
  }
  @media screen and (max-width: 1024px) {
    img{
      padding: 40px 30px 40px 30px;
      width: 40px !important;
      height: 27px !important;
    }
  }
  @media screen and (max-width: 768px) {
    img{
      padding: 40px 30px 40px 30px;
      width: 40px !important;
      height: 27px !important;
    }
  }
}
.Pino{
  img{
    padding: 59px 51px 60px 50px;
    width: 49px;
    height: 31px;
  }
  @media screen and (max-width: 1024px) {
    img{
      padding: 43px 30px 40px 34px;
      width: 33px !important;
      height: 18px !important;
    }
  }
}

.DuxMar{
  img{
    padding: 61px 44px 57px 43px;
    width: 63px;
    height: 32px;
  }
  @media screen and (max-width: 1024px) {
    img{
      padding: 40px 24px 40px 30px;
      width: 42px !important;
      height: 22px !important;
    }
  }
}
.Octo{
  img{
    padding: 60px 44.5px 60px 44.5px;
    width: 61px;
    height: 30px;
  }

  @media screen and (max-width: 1024px) {
    img{
      padding: 42px 40.5px 60px 30.5px;
      width: 41px !important;
      height: 20px !important;
    }
  }
}

.Gets{
  img{
    padding: 57px 49.5px 56.05px 49.05px;
    width: 51.45px;
    height: 36.95px;
  }
  @media screen and (max-width: 1024px) {
    img{
      padding: 42px 38.5px 36px 34.5px;
      width: 34px !important;
      height: 24px !important;
    }
  }
}

.marqueeSecond{
  margin-top: 4px;
}

.arrows-news{
  display: none;
}

@media screen and (max-width: 1024px) {
  .arrows-news{
    display: flex;
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
</style>