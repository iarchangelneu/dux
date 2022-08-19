<template>
  <div class="back">
    <div class="header">
      <div class="operation-banner">
        <div class="full__anim">
          <img src="../assets/animation/oper1.svg" class="oper__anim1" alt="">
          <img src="../assets/animation/oper2.svg" class="oper__anim2" alt="">
          <img src="../assets/animation/oper3.svg" class="oper__anim3" alt="">
          <img src="../assets/animation/oper4.svg" class="oper__anim4" alt="">
          <img src="../assets/animation/oper5.svg" class="oper__anim5" alt="">
          <img src="../assets/animation/oper6.svg" class="oper__anim6" alt="">
          <img src="../assets/animation/oper7.svg" class="oper__anim7" alt="">
          <img src="../assets/animation/oper8.svg" class="oper__anim8" alt="">
          <img src="../assets/animation/oper9.svg" class="oper__anim9" alt="">
          <img src="../assets/animation/oper10.svg" class="oper__anim10" alt="">
          <img src="../assets/animation/oper11.svg" class="oper__anim11" alt="">
          <img src="../assets/animation/oper12.svg" class="oper__anim12" alt="">
          <img src="../assets/animation/oper13.svg" class="oper__anim13" alt="">
          <img src="../assets/animation/oper14.svg" class="oper__anim14" alt="">
          <img src="../assets/animation/oper15.svg" class="oper__anim15" alt="">
          <img src="../assets/animation/oper16.svg" class="oper__anim16" alt="">
        </div>

        <div class="menu">
          <Header />
        </div>
        <h1 class="operation-banner__title" data-aos="fade-up" id="p">
          <p class="operation-us"><img class="span-svg" src="../assets/images/contact/Ellipse1.svg"
              alt="elipse">DUXGroup
            Operation</p>
          <!-- a Team of real <br> <span class="color-blue ndk"> professionals</span> -->
        </h1>
      </div>
    </div>
    <div class="first-devider">
      <!-- <img src="../assets/images/operation/departament.svg"/> -->
      <BlockTitle title="our departments"></BlockTitle>
    </div>
    <div class="department">
      <h2 class="department__title" data-aos="fade-up" data-aos-duration="1500">
        At DUXGroup, more than <span class="color-blue">350 experts </span>working in different departments <span
          class="color-blue">around the world</span> ensure the operational activities of the
        <span class="color-blue">holding</span> and its <span class="color-blue">brands.</span>
      </h2>
      <div class="mechanism-container" data-aos="fade-up" data-aos-duration="1500">
        <div class="mechanism mechanism-support" @click="$modal.show('support-modal');">
          <img alt="shestiryonka" class='small-shestiryonka transparent'
            src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text">
            Support
          </p>
        </div>
        <div class="mechanism mechanism-vip" @click="$modal.show('vip-modal');">
          <img alt="shestiryonka" class='medium-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text medium-circle">
            VIP Support
          </p>

        </div>
        <div class="mechanism mechanism-hr" @click="$modal.show('hr-modal');">
          <img alt="shestiryonka" class='small-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text">
            HR
          </p>
        </div>
        <div class="mechanism mechanism-legal" @click="$modal.show('legal-modal');">
          <img alt="shestiryonka" class='big-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text big-circle">
            Legal & Finance
          </p>
        </div>
        <div class="mechanism mechanism-antifraud" @click="$modal.show('antifraud-modal');">
          <img alt="shestiryonka" class='medium-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text medium-circle">
            Antifraud
          </p>
        </div>
        <div class="mechanism mechanism-design" @click="$modal.show('design-modal');">
          <img alt="shestiryonka" class='small-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text">
            Design
          </p>
        </div>
        <div class="mechanism mechanism-bi" @click="$modal.show('bi-modal');">
          <img alt="shestiryonka" class='medium-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text medium-circle">
            BI <br> Analytics
          </p>
        </div>
        <div class="mechanism mechanism-crm" @click="$modal.show('crm-modal');">
          <img alt="shestiryonka" class='small-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text">
            CRM
          </p>
        </div>
        <div class="mechanism mechanism-development" @click="$modal.show('development-modal');">
          <img alt="shestiryonka" class='big-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text big-circle">
            Development
          </p>
        </div>
        <div class="mechanism mechanism-team" @click="$modal.show('team-modal');">
          <img alt="shestiryonka" class='medium-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text medium-circle">
            Product <br> Team
          </p>
        </div>
        <div class="mechanism mechanism-pr" @click="$modal.show('pr-modal');">
          <img alt="shestiryonka" class='big-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text big-circle">
            PR & Marketing
          </p>
        </div>
        <div class="mechanism mechanism-psp" @click="$modal.show('psp-modal');">
          <img alt="shestiryonka" class='big-shestiryonka' src="../assets/images/operation/shestiryonka.svg" />
          <p class="mechanism-text big-circle">
            Integration & PSP
          </p>
        </div>
      </div>
      <div class="modals">
        <modal name="psp-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; Integration & PSP</p>
              <p>Working on connecting the main payment and game providers necessary to provide an optimal level of
                service and fun to players from different countries.</p>
            </div>
          </div>
        </modal>
        <modal name="crm-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; CRM</p>
              <p>Develop and implement promotions and contests for users of the product.</p>
            </div>
          </div>
        </modal>
        <modal name="pr-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; PR & Marketing</p>
              <p>Promote the brands of the holding, follow the latest trends in the sphere, and implement them into
                life, taking care of the brand name.</p>
            </div>
          </div>
        </modal>
        <modal name="team-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; Product Team</p>
              <p>Help in collaboration, systematic planning, and organization of the work on all types of products.</p>
            </div>
          </div>
        </modal>
        <modal name="development-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; Development</p>
              <p>Create advanced frontend and backend solutions for all products of the company.</p>
            </div>
          </div>
        </modal>
        <modal name="bi-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; BI Analytics</p>
              <p>Calculating and analyzing the main indicators of user gaming activity in real-time, based on data
                obtained by neural networks on the platform.</p>
            </div>
          </div>
        </modal>
        <modal name="design-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; Design</p>
              <p>Create modern visual depictions of all the projects we have.</p>
            </div>
          </div>
        </modal>
        <modal name="antifraud-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; Antifraud</p>
              <p>Continuously monitor and analyze the activity of players to identify suspicious activity.</p>
            </div>
          </div>
        </modal>
        <modal name="legal-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; Legal & Finance</p>
              <p>Take care of all legal and financial issues, including issues of obtaining various local licenses and
                all the accounting.</p>
            </div>
          </div>
        </modal>
        <modal name="hr-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; HR</p>
              <p>Look for and find the best market experts, maintain a friendly atmosphere in all offices and take care
                of the corporate culture of the holding.</p>
            </div>
          </div>
        </modal>
        <modal name="vip-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; & VIP Support</p>
              <p>Respond to the requests of players and VIP players, as well as provide round-the-clock support for each
                product and monitor the activity of users.</p>
            </div>
          </div>
        </modal>
        <modal name="support-modal" class="modal-container" :max-width="667" :width="667"
          styles="background-color:transparent; text-align:center; box-shadow:none" :height="'auto'" :adaptive="true">
          <div class="container">
            <img src="../assets/images/operation/shestyorinka-grey.png" />
            <div class="text">
              <p>&#x2022; Support</p>
              <p>Respond to the requests of players and VIP players, as well as provide round-the-clock support for each
                product and monitor the activity of users.</p>
            </div>
          </div>
        </modal>
      </div>
      <div class="divider what__devider">
        <!-- <img alt="header" src="../assets/images/operation/Header.svg"/> -->
        <BlockTitle title="What makes us unique?" v-if="version == 1"></BlockTitle>
        <BlockTitle title="About our team" v-else></BlockTitle>
      </div>
      <div class="unique">
        <div class="unique-container" data-aos="fade-up" data-aos-duration="1500">
          <div class="unique-container-left-side">
            <div class="unique-container-left-side-dote">
              <img src="../assets/images/careers/dote16.svg" alt="dote16" />
            </div>
            <div class="unique-container-left-side-text">
              <h3 class="unique-container-left-side-title">Years of Experience</h3>
            </div>
          </div>
          <div class="unique-container-right-side">
            <p class="unique-container-right-side-text">
              DUXGroup has come a long way since its inception, starting small but eventually growing into a supremely
              reputable developer and a major competitor, offering nothing but the best in iGaming solutions. With
              considerable experience under our belt, DUXGroup offers the essential services needed for creating,
              growing, and maintaining a successful online casino business.
            </p>
          </div>
        </div>
        <div class="unique-container" data-aos="fade-up" data-aos-duration="1500">
          <div class="unique-container-left-side">
            <div class="unique-container-left-side-dote">
              <img src="../assets/images/careers/dote16.svg" alt="dote16" />
            </div>
            <div class="unique-container-left-side-text">
              <h3 class="unique-container-left-side-title">Vast Portfolio</h3>
            </div>
          </div>
          <div class="unique-container-right-side">
            <p class="unique-container-right-side-text">
              DUXGroup boasts a comprehensive portfolio, handling billions of transactions every year. By becoming one
              of the many casino operators in our ranks, you’ll have access to the best gaming content and products in
              the industry from a range of hundreds of gaming providers. You’ll also be able to add your players to an
              arsenal of millions of already registered players.
            </p>
          </div>
        </div>
        <div class="unique-container" data-aos="fade-up" data-aos-duration="1500">
          <div class="unique-container-left-side">
            <div class="unique-container-left-side-dote">
              <img src="../assets/images/careers/dote16.svg" alt="dote16" />
            </div>
            <div class="unique-container-left-side-text">
              <h3 class="unique-container-left-side-title third-title">Innovation, design, and technology</h3>
            </div>
          </div>
          <div class="unique-container-right-side">
            <p class="unique-container-right-side-text">
              Innovation is crucial for success in the iGaming world. Our
              experienced team is full of pioneers and we firmly believe in adopting cutting edge technology. It is this
              cutting edge technology coupled with great design that carves the way to becoming a world class iGaming
              company. Since DUXGroup began, our top tier developers have been renowned for creating the ultimate
              customisable website layouts for our clients. We aspire to consistently deliver nothing but the best
              products to our casino operators and an unbelievable gaming experience to our players all over the world.
            </p>
          </div>
        </div>
        <div class="unique-container" data-aos="fade-up" data-aos-duration="1500">
          <div class="unique-container-left-side">
            <div class="unique-container-left-side-dote">
              <img src="../assets/images/careers/dote16.svg" alt="dote16" />
            </div>
            <div class="unique-container-left-side-text">
              <h3 class="unique-container-left-side-title">Special approach </h3>
            </div>
          </div>
          <div class="unique-container-right-side">
            <p class="unique-container-right-side-text">
              The name DUXGroup was not chosen by mistake. Dux is a leader,
              who gathers the best of the best around him to conquer the igaming industry. There are several projects
              within the holding and each is unique, headed by a leader pushing the “tribe” forward.
            </p>
          </div>
        </div>
      </div>
      <div class="divider div-brands">
        <!-- <img src="../assets/images/operation/brands.svg"/> -->
        <BlockTitle title="our brands"></BlockTitle>
      </div>
      <div class="brands">
        <div class="brands-container " data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0"
          data-aos-offset="0">

          <img src="../assets/images/operation/Getslots.svg" alt="brands">

        </div>
        <div class="brands-container " data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2000"
          data-aos-offset="0">
          <img src="../assets/images/operation/Octo.svg" alt="brands">
        </div>
        <div class="brands-container" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1000"
          data-aos-offset="0">
          <img src="../assets/images/operation/Pino.svg" alt="brands">
        </div>
        <div class="brands-container " data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="3000"
          data-aos-offset="0">
          <img src="../assets/images/operation/Dux.svg" alt="brands">
        </div>
      </div>
      <div class="brands-title-container">
        <h2 class="brands-title" data-aos="fade-up" data-aos-duration="1500">
          On our brands we have<span class="color-blue"> the best </span>game and payment providers necessary to provide
          an <span class="color-blue">optimal level of service</span> and
          fun to players from <span class="color-blue">different countries.</span>
        </h2>
      </div>
      <div class="game-provider">
        <h3 class="game-provider-title" data-aos="fade-up" data-aos-duration="1000">
          <span class="color-blue"> game </span>providers
        </h3>
        <div class="provider-row">
          <div class="provider-row-columns">
            <img src="../assets/images/operation/gameproviders/Pragmatic.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Playn'Go.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Evolution.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Playson.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Pushgaming.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Booongo.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/PragmaticLive.svg" alt="game-providers"
              class="provider-img" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0"
              data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Bgaming.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Spinomenal.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Nolimitcity.svg" alt="game-providers"
              class="provider-img" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500"
              data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Microgaming.svg" alt="game-providers"
              class="provider-img" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0"
              data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Redtiger.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Thunderkick.svg" alt="game-providers"
              class="provider-img" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500"
              data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/wazdan.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/booming.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Isoftbet.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Netent.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/Yggdrasil.svg" alt="game-providers" class="provider-img"
              data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/EGT.svg" alt="game-providers"
              class="provider-img provider-imgMH" data-aos="zoom-in" data-aos-easing="ease-in-back"
              data-aos-duration="500" data-aos-offset="0">
            <img src="../assets/images/operation/gameproviders/belatra.svg" alt="game-providers"
              class="provider-img provider-imgMH" data-aos="zoom-in" data-aos-easing="ease-in-back"
              data-aos-duration="0" data-aos-offset="0">

          </div>

          <div class="d-flex">
            <img src="../assets/images/operation/gameproviders/EGT.svg" alt="game-providers"
              class="provider-img provider-imgPH">
            <img src="../assets/images/operation/gameproviders/belatra.svg" alt="game-providers"
              class="provider-img provider-imgPH">
          </div>

        </div>
      </div>
      <div class="payment-provider">
        <h3 class="payment-provider-title" data-aos="fade-up" data-aos-duration="1000">
          <span class="color-blue"> payment </span>providers
        </h3>
        <div class="payment-provider-row">
          <div class="payment-provider-row-columns">
            <div><img src="../assets/images/operation/payment/visa.svg" class="provider-img" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/mastercard.svg" class="provider-img" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/interac.svg" class="provider-img" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/better.svg" class="provider-img" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/neteller.svg" class="provider-img neteller" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0">
            </div>
            <div><img src="../assets/images/operation/payment/jeton.svg" class="provider-img" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="2000" data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/rappid.svg" class="provider-img" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/ezwallet.svg" class="provider-img" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="2000" data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/mifinity.svg" class="provider-img" alt="payment"
                data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="0" data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/dimoco.svg" class="provider-img provider-imgMarR"
                alt="payment" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="2000"
                data-aos-offset="0"></div>
            <div><img src="../assets/images/operation/payment/skrill.svg" class="provider-img provider-imgMarL"
                alt="payment" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000"
                data-aos-offset="0"></div>
          </div>
        </div>
      </div>
      <div class="footer">
        <FooterPart />

      </div>
    </div>

  </div>
</template>


<script>
import Header from '../components/Header';
import FooterPart from "@/components/Footer";
import BlockTitle from '../components/BlockTitle.vue';

export default {

  name: "Operation-page",
  data() {
    return {
      mainTitle: 'a Team of real professionals',
      version: 1,
    }
  },
  components: { Header, FooterPart, BlockTitle },
  methods: {
    show() {
      this.$modal.show('my-first-modal');
    }
  },
  mounted() {

    setTimeout(function () {
      $('.oper__anim5').addClass('opacity');
    }, 500);
    setTimeout(function () {
      $('.oper__anim3').addClass('opacity');
    }, 700);
    setTimeout(function () {
      $('.oper__anim6').addClass('opacity');
    }, 900);
    setTimeout(function () {
      $('.oper__anim4').addClass('opacity');
    }, 1100);
    setTimeout(function () {
      $('.oper__anim1').addClass('opacity');
    }, 1300);
    setTimeout(function () {
      $('.oper__anim2').addClass('opacity');
    }, 1500);
    setTimeout(function () {
      $('.oper__anim8').addClass('opacity');
    }, 1700);
    setTimeout(function () {
      $('.oper__anim7').addClass('opacity');
    }, 1900);


    this.show()
    let width = window.innerWidth
    if (width > 480) {
      this.version = 1
    }
    else {
      this.version = 0
    }


    //TEXT

    let firstSplit = this.mainTitle.split(' ')

    let block = document.getElementById('p')
    console.log(firstSplit);
    let timer = 0;
    if (window.innerWidth < 450) {
      for (let i = 0; i < 4; i++) {
        let spanBsp = document.createElement('span');
        spanBsp.innerText = 'A';
        spanBsp.classList.add('spanBsp')
        block.appendChild(spanBsp)
      }
    }
    firstSplit.forEach((word, ind) => {

      let span = document.createElement('span');
      span.id = 'word' + ind;
      if (ind > 3) {
        span.classList.add('blue')
      }
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
      spanBsp.innerText = '.';
      spanBsp.classList.add('spanBsp')
      block.appendChild(spanBsp)
    })
  }
}
</script>

<style scoped lang="scss">
@keyframes full {
  0% {
    transform: rotate(0deg) translate(0, 0);
    animation-timing-function: ease-out;
  }

  // 50% {
  //   transform: rotate(15deg) translate(-424px, 0);

  // }

  25% {
    transform: rotate(15deg) translate(-424px, 0);
    // animation-timing-function: ease-in-out;
    animation-timing-function: cubic-bezier(0, 0, 0.69, 0.87);
  }

  75% {
    transform: rotate(-15deg) translate(284px, 0);
    animation-timing-function: ease-in;
  }

  100% {
    transform: rotate(0deg) translate(0, 0);
    animation-timing-function: linear;
  }
}

@media screen and (max-width: 450px) {
  @keyframes full {
    0% {
      transform: rotate(0);
      transform: translate(0, 0);
    }

    50% {
      transform: rotate(15deg) translate(-100px, 0);

    }

    100% {
      transform: rotate(0) translate(0, 0);
    }
  }
}

.full__anim {
  animation: full 7s infinite;
  animation-delay: 2s;
  padding-top: -30px;
}

.opacity {
  opacity: 1 !important;
  transition: all .3s;
}

@keyframes oper1 {

  100% {
    opacity: 0;
  }
}




.oper__anim1,
.oper__anim2,
.oper__anim3,
.oper__anim4,
.oper__anim5,
.oper__anim6,
.oper__anim7,
.oper__anim8 {
  position: absolute;
  z-index: 1;
  opacity: 0;
}

.oper__anim9,
.oper__anim10,
.oper__anim11,
.oper__anim12,
.oper__anim13,
.oper__anim14,
.oper__anim15,
.oper__anim16 {
  position: absolute;
  z-index: 1;
  opacity: 1;
}

.oper__anim1 {
  right: 872px;
  top: -105px;
  // animation: oper1 2s;
  // animation-delay: 0.9s;

}

.oper__anim2 {
  right: 574px;
  top: -135px;
}

.oper__anim3 {
  right: 257px;
  top: -163px;
  // animation: oper1 2s;
  // animation-delay: 0.3s;
}

.oper__anim4 {
  right: -37px;
  top: -190px;
}

.oper__anim5 {
  right: 675px;
  top: 210px;
  // animation: oper1 2s;
}

.oper__anim6 {
  right: 547px;
  top: 185px;
  // animation: oper1 2s;
  // animation-delay: 0.6s;
}

.oper__anim7 {
  right: 297px;
  top: 162px;
}

.oper__anim8 {
  right: 45px;
  top: 140px;
}

.oper__anim9 {
  right: 920px;
  top: -420px;
}

.oper__anim10 {
  right: 595px;
  top: -450px;
}

.oper__anim11 {
  right: 260px;
  top: -470px;
}

.oper__anim12 {
  right: -30px;
  top: -490px;
}

.oper__anim13 {
  right: 780px;
  top: -730px;
}

.oper__anim14 {
  right: 620px;
  top: -730px;
}

.oper__anim15 {
  right: 335px;
  top: -730px;
}

.oper__anim16 {
  right: 90px;
  top: -750px;
}

.unique-container-left-side-dote {
  margin-right: 105px !important;
}

@media screen and (max-width: 1024px) {
  .unique-container-left-side-dote {
    margin-right: 65px !important;
  }

  .full__anim {
    // animation: dayn;
    // margin-top: 300px;
  }

  .oper__anim1 {
    width: 170px;
    top: -70px;
    right: 740px;
  }

  .oper__anim2 {
    width: 180px;
    top: -97px;
    right: 543px;
  }

  .oper__anim3 {
    width: 170px;
    top: -120px;
    right: 335px;
  }

  .oper__anim4 {
    width: 145px;
    top: -125px;
    right: 135px;
  }

  .oper__anim5 {
    width: 220px;
    right: 620px;
    top: 130px;
  }

  .oper__anim6 {
    width: 155px;
    right: 525px;
    top: 113px;
  }

  .oper__anim7 {
    top: 95px;
    right: 350px;
    width: 140px;
  }

  .oper__anim8 {
    top: 85px;
    right: 180px;
    width: 200px;
  }

  .oper__anim9 {
    width: 140px;
    top: -260px;
    right: 0;
    left: 65px;
  }

  .oper__anim10 {
    width: 165px;
    top: -290px;
    right: 0;
    left: 250px;
  }

  .oper__anim11 {
    width: 180px;
    top: -310px;
    right: 340px;
  }

  .oper__anim12 {
    width: 170px;
    top: -320px;
    right: 140px;
  }

  .oper__anim13 {}

  .oper__anim14 {}

  .oper__anim15 {}

  .oper__anim16 {}
}

@media screen and (max-width: 768px) {
  .full__anim {
    // animation: dayn;
    // margin-top: 300px;
    // margin-right: -70px !important;
  }

  .oper__anim1 {
    width: 110px;
    top: -40px;
    right: 493px;
  }

  .oper__anim2 {
    width: 105px;
    top: -47px;
    right: 365px;
  }

  .oper__anim3 {
    width: 100px;
    top: -63px;
    right: 240px;
  }

  .oper__anim4 {
    width: 110px;
    top: -95px;
    right: 100px;
  }

  .oper__anim5 {
    width: 150px;
    right: 410px;
    top: 85px;
  }

  .oper__anim6 {
    width: 90px;
    right: 355px;
    top: 75px;
  }

  .oper__anim7 {
    top: 65px;
    right: 250px;
    width: 80px;
  }

  .oper__anim8 {
    top: 55px;
    right: 135px;
    width: 140px;
  }

  .oper__anim9 {
    width: 95px;
    top: -170px;
    right: 0;
    left: 143px;
  }

  .oper__anim10 {
    width: 100px;
    top: -170px;
    right: 0;
    left: 275px;
  }

  .oper__anim11 {
    width: 100px;
    top: -170px;
    right: 250px;
  }

  .oper__anim12 {
    width: 125px;
    top: -210px;
    right: 105px;
  }

  .unique-container-left-side-dote {
    margin-right: 10% !important;
  }
}

.modal-container {
  z-index: 99999999;

  .container {
    position: relative;

    img {

      width: 100%;
    }

    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;

      p:first-child {
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #FFFFFF;
      }

      p:nth-child(2) {
        margin-top: 10px;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        opacity: 0.9;
      }
    }
  }
}

@keyframes rotating-min {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -ms-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes rotating-big {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  padding: 0 25px !important;
}

@media screen and (max-width: 450px) {
  .full__anim {
    // animation: dayn;
    // margin-top: 300px;
    // margin-right: -70px !important;
  }

  .oper__anim1 {
    width: 80px;
    top: -10px;
    right: 310px;
  }

  .oper__anim2 {
    width: 70px;
    top: -10px;
    right: 225px;
  }

  .oper__anim3 {
    width: 60px;
    top: -17px;
    right: 145px;
  }

  .oper__anim4 {
    width: 65px;
    top: -35px;
    right: 55px;
  }

  .oper__anim5 {
    width: 105px;
    right: 250px;
    top: 78px;
  }

  .oper__anim6 {
    width: 55px;
    right: 220px;
    top: 70px;
  }

  .oper__anim7 {
    top: 63px;
    right: 150px;
    width: 50px;
  }

  .oper__anim8 {
    top: 55px;
    right: 70px;
    width: 90px;
  }

  .oper__anim9 {
    width: 65px;
    top: -100px;
    right: 0;
    left: 30px;
  }

  .oper__anim10 {
    width: 65px;
    top: -95px;
    right: 0;
    left: 120px;
  }

  .oper__anim11 {
    width: 65px;
    top: -95px;
    right: 150px;
  }

  .oper__anim12 {
    width: 75px;
    top: -115px;
    right: 55px;
  }
}

@media screen and (max-width: 375px) {
  .full__anim {
    margin-right: -100px !important;
  }

  .oper__anim9 {
    width: 65px;
    top: -100px;
    right: 0;
    left: 50px;
  }

  .oper__anim10 {
    width: 65px;
    top: -95px;
    right: 0;
    left: 145px;
  }

  .oper__anim11 {
    width: 65px;
    top: -95px;
    right: 150px;
  }

  .oper__anim12 {
    width: 75px;
    top: -115px;
    right: 55px;
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .footer {
    padding: 0 16px !important;
  }

  .operation-banner__title {
    font-size: 34px !important;
    line-height: 110% !important;
  }

  .operation-us {
    margin: 0 240px 0 0 !important;
    max-width: 280px;
    font-size: 16px !important;
    line-height: 20px !important;

    &>img {
      width: 10px;
    }
  }

}

.menu {
  padding: 25px 0;
}

.department {
  background: #010C28;
  display: flex;
  justify-content: center;
  padding-top: 96px;
  flex-direction: column;
}

.department__title {
  text-align: center;
  font-size: 48px;
  color: white;
  padding: 0 25px;
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
}

.color-blue {
  color: #2F5BD8;
}

.header {
  background: #010C28 url('../assets/images/gradient.png') center;
  background-size: cover;
}

@media (min-width: 769px) and (max-width: 1023px) {
  .operation-banner {
    padding: 8px 8px 0 8px !important;
  }

  .operation-us {
    font-size: 20px !important;
    line-height: 25px !important;
    max-width: 137px !important;

  }

  .operation-banner__title {
    font-size: 68px !important;
    line-height: 105% !important;
  }
}

.operation-banner {
  position: relative;
  // background: url("../assets/images/operation/operation-bg.svg") no-repeat right top;
  min-height: 702px;
  padding: 0 25px;


  &__title {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    line-height: 95%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
    margin-top: 420px;
    flex-wrap: wrap;
    display: flex;

    & .operation-us {
      font-family: "Oxygen", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 110%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
      margin: 15px 20px 0 0;
      vertical-align: top;
      max-width: 230px;
      display: flex;
      align-items: baseline;

      & .span-svg {
        margin-right: 11px;
        vertical-align: baseline;
      }

    }
  }
}

@media screen and (max-width: 1440px) {
  .operation-banner__title .operation-us .span-svg {
    min-width: 14px;
  }
}

@media (max-width: 1439px) and (min-width: 1024px) {

  .operation-banner {
    min-height: 417px !important;
  }

  .first-devider {
    padding: 105px 32px 0 32px !important;
  }

  .span-svg {

    width: 10px;
    padding-bottom: 3px;
  }
}

@media (max-width: 1023px) and (min-width: 769px) {
  .operation-banner {

    min-height: 300px !important;
  }

  .operation-banner__title {
    margin-top: 122px !important;
  }

  .first-devider {
    padding: 72px 8px 0 8px !important;
  }

  .operation-us {
    align-items: center !important;
    margin: 0 20px 0 0 !important;
  }

  .span-svg {
    vertical-align: initial !important;
    width: 10px;
    padding-bottom: 26px;
  }
}

@media (max-width: 768px) and (min-width: 320px) {

  .operation-banner {


    min-height: 265px !important;
  }

  .operation-banner__title {
    margin-top: 220px !important;
  }

  .first-devider {
    padding: 72px 8px 0 8px !important;
  }

}

@media (max-width: 767px) and (min-width: 320px) {

  .unique-container {
    padding: 10px 0px 42px 0px;
  }

  .operation-banner {

    min-height: 265px !important;
  }
}

@media (min-width: 1024px) and (max-width: 1025px) {

  .operation-banner__title {
    margin-top: 400px;
    font-size: 84px !important;
    line-height: 105% !important;

  }

  .operation-us {
    font-size: 22px !important;
    line-height: 28px !important;
    max-width: 190px !important;
  }

}

@media (min-width: 768px) and (max-width: 1023px) {
  .operation-banner__title {
    font-size: 68px !important;
    line-height: 105% !important;
  }
}

.first-devider {
  padding: 150px 10px 0 10px;
  display: flex;
  width: 100%;
  // background-color: #010C28;
  align-items: flex-end;

  img {
    width: 100%;
  }
}

.divider {
  padding: 200px 10px 0 10px;
  display: flex;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;

  img {
    width: 100%;
  }
}

.mechanism-container {
  min-height: 860px;
  position: relative;
  margin-top: -40px;
}

//.mechanism:first-child:hover .mechanism:nth-child(1) img{
//  animation-play-state: paused;
//}
//.mechanism:hover > img{
//  -webkit-animation-play-state:paused;
//  -moz-animation-play-state: paused;
//  -o-animation-play-state: paused;
//  animation-play-state:paused;
//}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}


.mechanism:hover>p {
  // transform: scale(1.1);
  // font-size: 13.5px;
  border: none;
  border: none;
}

.mechanism:hover {
  z-index: 99999;
}


.mechanism-support,
.mechanism-hr,
.mechanism-design,
.mechanism-crm {
  width: 114px;
  height: 114px;
}

.mechanism-vip,
.mechanism-team,
.mechanism-antifraud,
.mechanism-bi {
  width: 156px;
  height: 156px;
}

.mechanism-legal,
.mechanism-pr,
.mechanism-psp,
.mechanism-development {
  width: 217px;
  height: 217px;
}


//.mechanism-legal img, .mechanism-team img, .mechanism-design img, .mechanism-development img, .mechanism-bi img, .mechanism-development img{
//  animation: rotating-big 4s linear infinite ;
//}
//.mechanism-pr img, .mechanism-psp img, .mechanism-vip img, .mechanism-antifraud img, .mechanism-crm img, .mechanism-support img , .mechanism-hr img {
//  animation: rotating-min 2s linear infinite;
//}

.mechanism-support img,
.mechanism-design img,
.mechanism-hr img,
.mechanism-crm img,
.mechanism-pr img,
.mechanism-psp img,
.mechanism-hr img,
.mechanism-crm img {
  animation: rotating-min 7s linear infinite;
}

.mechanism-antifraud img,
.mechanism-bi img,
.mechanism-pr img,
.mechanism-psp img {
  animation: rotating-min 7s linear infinite;
}

.mechanism-team img,
.mechanism-vip img,
.mechanism-vip img {
  animation: rotating-big 7s linear infinite;
}

.mechanism-legal img,
.mechanism-development img,
.mechanism-pr img,
.mechanism-psp img {
  animation: rotating-big 7s linear infinite;
}

.mechanism-antifraud:hover,
.mechanism-support:hover {
  background: linear-gradient(86.5deg, #5433FF 8.33%, #20BDFF 73.44%, #A5FECB 100%);
  // transform: scale(1.2);
  border-radius: 50%;
  border: none;
  font-size: 14px !important;
  font-family: 'Oxygen', sans-serif;
}

.mechanism-vip:hover,
.mechanism-team:hover {
  background: linear-gradient(286.9deg, #E52D27 29.52%, #A50C10 100%);
  // transform: scale(1.2);
  border-radius: 50%;
  border: none;
  font-size: 18px;
  font-family: 'Oxygen', sans-serif;
}

.mechanism-legal:hover,
.mechanism-crm:hover {
  background: linear-gradient(105.97deg, #4B0082 27.44%, #9400D3 100%);
  // transform: scale(1.2);
  border-radius: 50%;
  border: none;
  font-size: 18px;
  font-family: 'Oxygen', sans-serif;
}

.mechanism-hr:hover,
.mechanism-bi:hover {
  background: linear-gradient(95.7deg, #000428 7.7%, #004E92 90.93%);
  // transform: scale(1.2);
  border-radius: 50%;
  border: none;
  font-size: 18px;
  font-family: 'Oxygen', sans-serif;
}

.mechanism-pr:hover,
.mechanism-psp:hover {
  background: linear-gradient(135deg, #003D4D 0%, #00C996 100%);
  // transform: scale(1.2);
  border-radius: 50%;
  border: none;
  font-size: 18px;
  font-family: 'Oxygen', sans-serif;
}

.mechanism-development:hover {
  background: linear-gradient(294.31deg, #FE8C00 0%, #F83600 100%);
  // transform: scale(1.2);
  border-radius: 50%;
  border: none;
  font-size: 18px;
  font-family: 'Oxygen', sans-serif;
}

.mechanism-design:hover {
  background: linear-gradient(75.06deg, #42275A 10.32%, #734B6D 84.99%);
  // transform: scale(1.2);
  border-radius: 50%;
  border: none;
  font-size: 18px;
  font-family: 'Oxygen', sans-serif;
}


.mechanism {
  background-size: cover;
  display: flex;
  align-items: center;
  transition-timing-function: ease-in-out;
  justify-content: center;
  position: absolute;

  &>.small-shestiryonka {
    width: 174px;
    height: 174px;
  }

  &>.medium-shestiryonka {
    width: 232px;
    height: 232px;
  }

  &>.big-shestiryonka {
    width: 330px;
    height: 330px;
  }

  &:nth-child(1) {
    top: 16%;
    left: 12%;
  }

  &:nth-child(2) {


    top: 17%;
    left: 27%;
  }

  &:nth-child(3) {
    left: 30%;
    top: 46%;
  }

  &:nth-child(4) {


    left: 7%;
    top: 42%;
  }

  &:nth-child(5) {
    top: 30%;
    left: 48%;
  }

  &:nth-child(6) {
    top: 56%;
    left: 61%;
  }

  &:nth-child(7) {

    top: 82%;
    left: 59%;

  }

  &:nth-child(8) {
    top: 89%;
    left: 76%;
  }

  &:nth-child(9) {

    top: 16%;
    left: 67%;
  }

  &:nth-child(10) {

    left: 21%;
    top: 75%;
  }

  &:nth-child(11) {
    left: 40%;
    top: 60%;

  }

  &:nth-child(12) {

    top: 53%;
    right: 9%;

  }

  &-text {
    width: 114px;
    height: 114px;
    color: white;
    position: absolute;
    border: 1px solid #032B96;
    font-family: 'Oxygen', sans-serif;
    border-radius: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
}

.big-circle {
  width: 217px;
  height: 217px;
}

.medium-circle {
  width: 156px;
  height: 156px;
}

.unique {
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

    // padding: 10px 25px 80px 25px;
    padding: 10px 0px 80px 0px;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 50px);
    border-top: 1px solid #828FA1;

    &:nth-child(1) {
      padding-top: 0;
      margin-top: 96px;
      border: none;
    }

    &-left-side {
      display: flex;
      height: fit-content;
      align-items: flex-start;

      &-dote {
        margin-right: 10%;
        padding-top: 10px;
      }

      &-title {
        min-width: 500px;
        max-width: 500px;
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

.brands {
  display: flex;
  justify-content: space-around;
  padding-top: 97px;

  &-container {
    border: 50px solid;
    border-image-source: url("../assets/images/operation/shape.svg");
    border-image-slice: 80 80;
    transition: all .7s !important;

    background: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 323px;
    height: 197px;

    &:hover {
      border: 20px solid;
      border-image-source: url("../assets/images/operation/test.svg");
      border-image-slice: 20 22;
      transition: all .7s;
      cursor: pointer;
    }
  }

}

@keyframes opacity {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.brand0 {
  animation: opacity 1s;
}


.brands-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 91px;
}

.brands-title {
  font-size: 48px;
  color: white;
  max-width: 978px;
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 105%;
  text-align: center;
  text-transform: uppercase;
}

.game-provider {
  &-title {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: white;
    margin-top: 88px;
  }

  .provider-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 59px;


    &-columns {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
    }
  }
}

.payment-provider {
  &-title {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: white;
    margin-top: 88px;
  }

  &-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 59px;
    padding-bottom: 150px;

    &-columns {
      display: grid;
      grid-template-columns: auto auto auto auto auto auto;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
    }
  }
}

@media only screen and (max-width: 1406px) {

  .mechanism {
    &:nth-child(1) {
      top: 17%;
      left: 9%;
    }

    &:nth-child(2) {
      top: 19%;
      left: 25%;
    }

    &:nth-child(3) {
      left: 29%;
    }

    &:nth-child(4) {
      left: 6%;

    }

    &:nth-child(5) {
      top: 30%;
      left: 46%;
    }

    &:nth-child(6) {
      left: 58%;
    }

    &:nth-child(7) {
      top: 88%;
      left: 57%;
    }

    &:nth-child(9) {
      top: 13%;
    }

    &:nth-child(10) {
      left: 16%;
      top: 77%;
    }

    &:nth-child(11) {
      left: 35%;
      top: 66%;

    }
  }

}

@media only screen and (max-width: 1306px) {
  .mechanism {

    &:nth-child(1) {
      left: 6%;
    }

    &:nth-child(2) {
      left: 22%;
      top: 13%;
    }

    &:nth-child(3) {
      top: 38%;
    }

    &:nth-child(4) {
      left: 6%;
    }

    &:nth-child(5) {
      top: 22%;
      left: 46%;
    }

    &:nth-child(6) {
      top: 44%;
      left: 61%;
    }

    &:nth-child(7) {
      top: 85%;
      left: 54%;
    }


    &:nth-child(9) {
      top: 13%;
      left: 68%;
    }

    &:nth-child(10) {
      top: 75%;
      left: 19%;
    }

    &:nth-child(11) {
      left: 38%;
      top: 55%;

    }

  }

  .brands-container {
    width: 226px;
    height: 136px;

    &>img {
      width: 150px;
    }
  }

}

@media only screen and (max-width: 1236px) {
  .mechanism {
    &:nth-child(1) {
      left: 3%;
    }

    &:nth-child(2) {
      left: 21%;
      top: 19%;
    }

    &:nth-child(3) {
      left: 35%;
      top: 45%;
    }

    &:nth-child(4) {
      top: 46%;
      left: 6%;
    }

    &:nth-child(5) {
      left: 43%;
    }

    &:nth-child(6) {
      top: 13%;
      left: 63%;
    }

    &:nth-child(7) {
      top: 27%;
      right: 10%;
      left: auto;
    }

    &:nth-child(8) {

      top: 66%;
      left: 81%;

    }

    &:nth-child(9) {
      top: 75%;
      left: 28%;
    }

    &:nth-child(10) {
      top: 96%;
      left: 6%;
    }

    &:nth-child(11) {
      top: 49%;
      left: 54%;
    }

    &:nth-child(12) {
      top: 85%;
      right: 17%;
    }
  }

}




.payment-provider-row-columns {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &>div {
    flex: 16%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 0 auto;
    }
  }
}

@media screen and (min-width: 1160px) and (max-width: 1439px) {
  .payment-provider-row-columns {
    &>div {
      flex: 15% !important;
    }
  }
}

@media screen and (min-width: 1024px) and (max-width: 1160px) {
  .payment-provider-row-columns {
    &>div {
      flex: 11% !important;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .payment-provider-row-columns {
    &>div {
      flex: 25% !important;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .payment-provider-row-columns {
    &>div {
      flex: 33% !important;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .unique-container-left-side-title {
    max-width: 307px !important;
    min-width: 300px !important;
    font-size: 28px !important;
  }

  .unique-container-right-side-text {
    max-width: 480px;
    font-size: 18px !important;
  }

  .title-container {
    padding: 110px 32px;
  }

  .mechanism-container {
    min-height: 980px;
  }


}

@media only screen and (max-width: 1024px) {
  .unique-container {
    padding: 10px 32px 56px 32px;

    &:nth-child(1) {
      margin-top: 72px;
    }

    &:nth-child(4) {
      padding-bottom: 0;
    }
  }

  .mechanism {
    &:nth-child(1) {
      left: 3%;
      top: 16%;

    }

    &:nth-child(2) {
      left: 22%;
      top: 19%;
    }

    &:nth-child(3) {
      left: 36%;
      top: 39%;
    }

    &:nth-child(4) {

      top: 42%;

    }

    &:nth-child(5) {
      left: 49%;
    }

    &:nth-child(6) {
      top: 13%;
      left: 68%;
    }

    &:nth-child(7) {
      top: 30%;
      right: 8%;
      left: auto;

    }

    &:nth-child(8) {
      top: 66%;
      right: 7%;
      left: auto;

    }

    &:nth-child(9) {
      top: 75%;
      left: 27%;


    }

    &:nth-child(10) {
      top: 94%;
      left: 5%;

    }

    &:nth-child(11) {
      top: 50%;
      left: 51%;
    }

    &:nth-child(12) {
      top: 83%;
      right: 17%;
    }
  }

  .divider {
    padding-top: 150px !important;
  }
}

@media only screen and (max-width: 960px) {
  .provider-row-columns {
    grid-template-columns: auto auto auto auto !important;
    ;
  }

  .brands-container {
    width: 186px;
    height: 116px;
  }


  .mechanism {
    &>.small-shestiryonka {
      width: 136px;
      height: 136px;
    }

    &>.medium-shestiryonka {
      width: 182px;
      height: 182px;
    }

    &>.big-shestiryonka {
      width: 258px;
      height: 258px;
    }

    &:nth-child(1) {
      left: 3%;
    }

    &:nth-child(2) {
      left: 20%;
      top: 19%;
    }

    &:nth-child(3) {
      left: 36%;
      top: 39%;
    }

    &:nth-child(4) {
      left: 3%;
      top: 37%;

    }

    &:nth-child(5) {
      left: 46%;
    }

    &:nth-child(6) {
      top: 15%;
      left: 69%;
    }

    &:nth-child(7) {
      top: 29%;
      right: 7%;
      left: auto;

    }

    &:nth-child(8) {
      top: 70%;
      right: 7%;
      left: auto;

    }

    &:nth-child(9) {
      top: 61%;
      left: 19%;
    }

    &:nth-child(10) {
      top: 84%;
      left: 4%;
    }

    &:nth-child(11) {
      top: 47%;
      left: 52%;
    }

    &:nth-child(12) {
      top: 78%;
      right: 23%;
    }

    &-text {
      width: 89px;
      height: 89px;
    }
  }

  .big-circle {

    width: 171px;
    height: 171px;

  }

  .medium-circle {
    width: 116px;
    height: 116px;
  }

  .unique-title {
    max-width: 591px !important;
    font-size: 38px !important;
  }

  .unique-container-left-side-title {
    max-width: 268px !important;
    min-width: 268px !important;
    font-size: 22px !important;
  }

  .unique-container-right-side-text {
    max-width: 376px !important;
    font-size: 16px !important;
  }

}

@media only screen and (max-width: 768px) {
  .unique-container {
    padding: 10px 8px 42px 8px;

    &:nth-child(1) {
      margin-top: 56px;
    }

    &:nth-child(4) {
      padding-bottom: 0;
    }
  }

  .department__title {
    font-size: 38px !important;
  }

  .brands-title {
    font-size: 58px !important;
    max-width: 752px !important;
  }

  .brands-container {
    width: 164px;
    height: 107px;

    &>img {
      width: 127px;
    }
  }

  .divider {
    padding-top: 100px !important;
  }

  .unique-container-left-side-title {
    max-width: 178px !important;
    min-width: 228px !important;
    font-size: 22px !important;
  }
}

@media only screen and (max-width: 744px) {
  .provider-row-columns {
    grid-template-columns: auto auto auto !important;
    ;
  }

  .mechanism {
    &:nth-child(1) {
      top: 12%;
      left: 2%;
    }

    &:nth-child(2) {
      left: 19%;
      top: 19%;
    }

    &:nth-child(3) {
      left: 36%;
      top: 39%;
    }

    &:nth-child(4) {
      left: 0;
      top: 37%;
    }

    &:nth-child(5) {
      left: 45%;
      ;
    }

    &:nth-child(6) {
      top: 15%;
      left: 71%;
    }

    &:nth-child(7) {
      top: 29%;
      right: 8%;
      left: auto;

    }

    &:nth-child(8) {
      top: 70%;
      right: 8%;

      left: auto;

    }

    &:nth-child(9) {
      top: 61%;
      left: 19%;
    }

    &:nth-child(10) {
      top: 83%;
      left: 2%;
    }

    &:nth-child(11) {
      top: 47%;
      left: 52%;
    }

    &:nth-child(12) {
      top: 81%;
      right: 21%;

    }
  }
}

@media only screen and (max-width: 684px) {
  .divider {
    padding-top: 100px !important
  }

  .mechanism {
    &:nth-child(1) {
      top: 18%;
      left: 4%;

    }

    &:nth-child(2) {
      left: 24%;
      top: 9%;
    }

    &:nth-child(3) {
      left: 39%;
      top: 40%;
    }

    &:nth-child(4) {

      left: 3%;
      top: 32.1%;

    }

    &:nth-child(5) {
      left: 43%;
    }

    &:nth-child(6) {

      top: 14%;
      left: auto;
      right: 9%;

    }

    &:nth-child(7) {
      top: 29%;
      right: 8%;
      left: auto;

    }

    &:nth-child(8) {
      top: 74%;
      right: 7%;
      left: auto;

    }

    &:nth-child(9) {
      top: 61%;
      left: 19%;
    }

    &:nth-child(10) {
      top: 83%;
      left: 3%;
    }

    &:nth-child(11) {
      top: 49%;
      left: auto;
      right: 10%;
    }

    &:nth-child(12) {

      top: 83%;
      right: 22%;


    }
  }

  .brands-container {
    // width: 134px;
    width: 42.50vw;
    height: 26.25vw;
    margin-top: 16px;
    // height: 82px;

    &>img {
      width: 99px;
    }
  }
}

@media only screen and (max-width: 663px) {
  .unique-container {
    // padding: 15px 16px 24px 16px;

    &:nth-child(1) {
      margin-top: 32px;
    }

    &:nth-child(4) {
      padding-bottom: 0;
    }
  }

  .unique-container {
    flex-direction: column;
  }

  .unique-container-right-side-text {
    margin-top: 10px;
  }

  .unique-container-left-side {
    align-items: flex-start;
  }

  .unique-container-left-side-dote {
    // margin: 10px;
    margin-right: 8px !important;
    padding-top: 3px;

    img {
      width: 10px;
      height: 10px;
    }
  }

  .unique-container-left-side-title {
    max-width: 100% !important;
    font-size: 20px !important;
    line-height: 25px;
    letter-spacing: 0.03em;
  }

  .unique-container-right-side-text {
    max-width: 100% !important;
    font-size: 14px !important;
    line-height: 18px;
    letter-spacing: 0.04em;
  }
}

@media only screen and (max-width: 647px) {

  .provider-img {
    width: 100px;
  }

  .neteller {
    width: 70px !important;
  }

  .divider {
    padding-top: 25px !important;
  }

  .div-brands {
    padding-top: 72px !important;
  }

  .operation-banner__title {
    margin-top: 165px !important;
    letter-spacing: 0.03em;

  }

  .operation-banner {
    padding: 0 16px;
  }

  .operation-us {
    width: 100%;
    font-size: 16px !important;
  }

  .department__title {
    font-size: 22px !important;
  }

  .mechanism-container {
    min-height: 747px;
  }

  .brands {
    flex-wrap: wrap;
  }

  .mechanism-container {
    min-height: 747px !important;
  }

  .mechanism {
    &>.small-shestiryonka {
      width: 78px;
      height: 78px;
    }

    &>.medium-shestiryonka {
      width: 104px;
      height: 104px;
    }

    &>.big-shestiryonka {
      width: 146px;
      height: 146px;
    }


    &:nth-child(1) {
      // left: 0;
      // top: 13%;
      top: 14.69vw;
      left: 10vw;
    }

    &:nth-child(2) {
      // left: 25%;
      // top: 8%;
      left: 38.33vw;
      top: 14.69vw;
    }

    &:nth-child(3) {
      left: unset;
      // right: 5%;
      // top: 16%;
      top: 36.88vw;
      right: 6.25vw;
    }

    &:nth-child(4) {
      // top: 21%;
      // right: 39%;
      top: 39.69vw;
      left: 6.25vw;
    }

    &:nth-child(5) {
      left: unset;
      // right: 8%;
      // top: 26%;
      top: 60.63vw;
      right: 15.63vw;
    }

    &:nth-child(6) {
      // top: 43%;
      top: 86.88vw;
      left: 5.31vw;
      right: unset;
    }

    &:nth-child(7) {
      // top: 40%;
      // left: 25%;
      top: 88.75vw;
      left: 30.63vw;
    }

    &:nth-child(8) {
      // top: 41%;
      // right: 3%;
      top: 92.50vw;
      right: 6vw;
    }

    &:nth-child(9) {
      // top: 52%;
      // left: auto;
      // right: 43%;
      left: 4.69vw;
      top: 117.81vw;
      right: unset;
    }

    &:nth-child(10) {
      left: auto;
      // right: 3%;
      // top: 52%;
      right: 15.31vw;
      top: 115.63vw;
    }

    &:nth-child(11) {
      // top: 72%;
      // left: auto;
      // right: 43%;
      top: 165.63vw;
      left: 3.75vw;
      right: unset;
    }

    &:nth-child(12) {
      // top: 65%;
      // right: 0;
      top: 149.06vw;
      right: 4.38vw;
    }

    &-text {
      width: 51px;
      height: 51px;
      font-size: 8px !important;
    }
  }

  .big-circle {
    width: 97px;
    height: 97px;
  }

  .medium-circle {
    width: 69px;
    height: 69px;
  }

  .brands-title {
    font-size: 22px !important;
  }

  .brands {
    padding-top: 36px;
    justify-content: space-evenly;
  }

  .game-provider-title {
    font-size: 20px !important;
  }

  .payment-provider-title {
    font-size: 20px !important;
  }
}

@media only screen and (max-width: 536px) {
  .brands-container:nth-child(4) {
    // margin-top: 17px;
  }
}

@media only screen and (max-width: 500px) {
  .unique-container {
    padding: 10px 0px 42px 0px;
  }

  .operation-us {
    margin: 0 !important;
    margin-bottom: 10px !important;
  }
}

@media only screen and (max-width: 402px) {
  .brands-container:nth-child(3) {
    margin-top: 17px;
  }

  .department__title {
    padding: 0 16px;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.03em;
  }

  .department {
    padding-top: 32px;
  }

  .mechanism-vip,
  .mechanism-antifraud,
  .mechanism-bi,
  .mechanism-team {
    // width: 104px;
    // height: 104px;
    width: 32.50vw;
    height: 32.50vw;
  }

  .mechanism-support,
  .mechanism-hr,
  .mechanism-design,
  .mechanism-crm {
    // width: 78.74px;
    // height: 78.74px;
    width: 24.6vw;
    height: 24.6vw;
  }

  .mechanism-legal,
  .mechanism-development,
  .mechanism-pr,
  .mechanism-psp {
    // width: 149px;
    // height: 149px;
    width: 46.56vw;
    height: 46.56vw;
  }

  .mechanism-text {
    line-height: 10px;
  }
}

@media screen and (max-width: 480px) {

  .mechanism-vip:hover,
  .mechanism-team:hover,
  .mechanism-antifraud:hover,
  .mechanism-support:hover,
  .mechanism-legal:hover,
  .mechanism-crm:hover,
  .mechanism-hr:hover,
  .mechanism-bi:hover,
  .mechanism-pr:hover,
  .mechanism-psp:hover,
  .mechanism-development:hover,
  .mechanism-design:hover {
    background: unset
  }

  .mechanism-vip p:hover,
  .mechanism-team p:hover {
    background: linear-gradient(286.9deg, #E52D27 29.52%, #A50C10 100%);
    // transform: scale(1.2);
    border-radius: 50%;
    border: none;
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
  }

  .mechanism-antifraud p:hover,
  .mechanism-support p:hover {
    background: linear-gradient(86.5deg, #5433FF 8.33%, #20BDFF 73.44%, #A5FECB 100%);
    border-radius: 50%;
    border: none;
    font-size: 12px !important;
    font-family: 'Oxygen', sans-serif;
  }

  .mechanism-legal p:hover,
  .mechanism-crm p:hover {
    background: linear-gradient(105.97deg, #4B0082 27.44%, #9400D3 100%);
    border-radius: 50%;
    border: none;
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
  }

  .mechanism-hr p:hover,
  .mechanism-bi p:hover {
    background: linear-gradient(95.7deg, #000428 7.7%, #004E92 90.93%);
    border-radius: 50%;
    border: none;
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
  }

  .mechanism-pr p:hover,
  .mechanism-psp p:hover {
    background: linear-gradient(135deg, #003D4D 0%, #00C996 100%);
    border-radius: 50%;
    border: none;
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
  }

  .mechanism-development p:hover {
    background: linear-gradient(294.31deg, #FE8C00 0%, #F83600 100%);
    border-radius: 50%;
    border: none;
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
  }

  .mechanism-design p:hover {
    background: linear-gradient(75.06deg, #42275A 10.32%, #734B6D 84.99%);
    border-radius: 50%;
    border: none;
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
  }

  .department__title {
    padding: 0 16px;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.03em;
  }

  .department {
    padding-top: 32px;
  }

  .mechanism-vip,
  .mechanism-antifraud,
  .mechanism-bi,
  .mechanism-team {
    // width: 104px;
    // height: 104px;
    width: 32.50vw;
    height: 32.50vw;
  }

  .mechanism-support,
  .mechanism-hr,
  .mechanism-design,
  .mechanism-crm {
    // width: 78.74px;
    // height: 78.74px;
    width: 24.6vw;
    height: 24.6vw;

  }

  .mechanism-legal,
  .mechanism-development,
  .mechanism-pr,
  .mechanism-psp {
    // width: 149px;
    // height: 149px;
    width: 46.56vw;
    height: 46.56vw;
  }

  .mechanism-text {
    line-height: 10px;
    width: 15.94vw;
    height: 15.94vw;
  }

  .medium-circle {
    width: 21.56vw;
    height: 21.56vw;
  }

  .big-circle {
    width: 30.31vw;
    height: 30.31vw;
  }

  .mechanism img {
    width: 100% !important;
    height: 100% !important;
  }

  .unique-container {
    width: calc(100% - 32px);
  }

  .brands-title-container {
    padding-top: 16px;
    padding-right: 16px;
    padding-left: 16px;
  }

  .payment-provider-title {
    margin-top: 36px;
  }

  .game-provider .provider-row,
  .payment-provider-row {
    padding-top: 24px;
  }

  .payment-provider-row {
    padding-bottom: 72px;
  }

  .provider-imgMH {
    display: none;
  }

  .provider-imgMarR {
    margin-right: 15px;
  }

  .provider-imgMarL {
    margin-left: 10px !important;
  }

  .operation-banner__title {
    letter-spacing: 0.03em !important;
  }
}

@media screen and (min-width: 400px) and (max-width: 428px) {
  .operation-us {
    font-size: 20px !important;
    max-width: 270px !important;
  }

  .operation-banner__title {
    font-size: 40px !important;
  }

  .mechanism-text {
    font-size: 10px !important;
  }

  .unique-container-left-side-title {
    font-size: 20px !important;
    line-height: 26px;
    letter-spacing: 0.05em;
  }

  .unique-container-right-side-text {
    font-size: 16px !important;
    line-height: 20px;
  }

  .department__title {
    font-size: 26px !important;
    padding: 0 32px;
  }

  .divider {
    padding-top: 72px !important;
  }

  .brands-title {
    font-size: 27px !important;
    letter-spacing: 0.08em;
  }

  .game-provider-title {
    font-size: 26px !important;
  }

  .provider-img {
    width: 130px;
  }

  .brands-title-container {
    padding-top: 22px;
  }

  .payment-provider-title {
    font-size: 26px !important;
  }

  .brands-title {
    line-height: 32px;
  }

  .what__devider {
    padding-top: 212px !important;
  }

  .unique-container-right-side-text {
    margin-top: 20px !important;
  }

  .unique-container {
    padding-top: 20px !important;
  }
}

@media screen and (min-width: 375px) and (max-width: 413px) {
  .unique-container-right-side-text {
    margin-top: 16px !important;
  }

  .brands-title {
    line-height: 32px;
  }

  .what__devider {
    padding-top: 72px !important;
  }

  .operation-us {
    font-size: 20px !important;
    max-width: 270px !important;
  }

  .operation-banner__title {
    font-size: 36px !important;
  }

  .mechanism-text {
    font-size: 10px !important;
  }

  .unique-container-left-side-title {
    font-size: 26px !important;
    line-height: 26px;
    letter-spacing: 0.05em;
  }

  .unique-container-right-side-text {
    font-size: 18px !important;
    line-height: 20px;
  }

  .department__title {
    font-size: 26px !important;
    padding: 0 27px;
  }

  .divider {
    padding-top: 145px !important;
  }

  .brands-title {
    font-size: 26px !important;
    letter-spacing: 0.08em;
  }

  .game-provider-title {
    font-size: 26px !important;
  }

  .provider-img {
    width: 120px;
  }

  .brands-title-container {
    padding-top: 22px;
  }

  .payment-provider-title {
    font-size: 26px !important;
  }
}

@media screen and (max-width: 320px) {
  .brands-container:nth-child(1) img {
    width: 66px;
  }

  .operation-banner {
    padding: 0 13px;
  }
}

@media screen and (min-width: 1024px) {
  .payment-provider-row {
    padding-bottom: 110px;
  }
}

@media screen and (min-width: 480px) {
  .provider-imgPH {
    display: none;
  }
}

// @media only screen and (max-width: 338px) {
//   .ndk {
//     position: absolute;
//     top: 210px;
//   }
// }
@media screen and (max-width:1024px) and (min-width: 1000px) {
  .divider {
    padding-left: 25px;
    padding-right: 25px;
  }
}

.back {
  background-color: #010C28;
}


@media (max-width: 768px) and (min-width: 600px) {
  .payment-provider-row {
    padding-bottom: 72px;
  }

  .brands-title {
    font-size: 38px !important;
  }

  .operation-banner {

    min-height: 265px !important;

    align-items: center;

    padding-left: 8px;
    padding-right: 8px;
  }

  .operation-us {
    margin: 0px !important;
    max-width: 160px !important;
    // align-items: center !important;
    font-size: 20px !important;
    margin-top: 8px !important;

  }

  .unique-container-left-side-dote {
    padding-top: 6px !important;
  }

  .unique-container-left-side-dote img {
    width: 12px !important;
  }

  .unique-container-left-side-title {
    line-height: 28px !important;
    max-width: 276px !important;
  }

  .unique-container {
    width: calc(100% - 16px) !important;
  }

  .payment-provider-row-columns>div[data-v-51e2911d] {
    flex: 20% !important;
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