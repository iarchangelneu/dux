<template>
  <div class="container" :class="{ 'fixed-menu': this.opened }">
    <div class="menu">
      <div class="logo" @click="$router.push('/')">
        <img src="../assets/images/logo.svg">
      </div>
      <div class="mobile-version">
        <input id="toggle" type="checkbox" @change="checkbox" />
        <label for="toggle" class="hamburger">
          <div class="top-bun"></div>
          <div class="meat"></div>
          <div class="bottom-bun"></div>
        </label>
        <div class="nav">
          <div class="nav-wrapper">
            <nav>
              <router-link to="/">About us</router-link>
              <router-link to="/ventures">Ventures</router-link>
              <router-link to="/operation">Operation</router-link>
              <router-link to="/careers">Careers</router-link>
              <router-link to="/contact">Contact us</router-link>
              <router-link to="/gaming">Gaming</router-link>
            </nav>
          </div>
        </div>
      </div>
      <!--      <div class="hamburger-menu-items">-->
      <!--        <router-link to="/">About us</router-link>-->
      <!--        <router-link to="/ventures">Ventures</router-link>-->
      <!--        <router-link to="/">Operation</router-link>-->
      <!--        <router-link to="/">DUXPlatform</router-link>-->
      <!--        <router-link to="/careers">Careers</router-link>-->
      <!--        <router-link to="/contact">Contact us</router-link>-->
      <!--      </div>-->
      <div class="menu-items">
        <router-link to="/">About us</router-link>
        <router-link to="/ventures">Ventures</router-link>
        <router-link to="/operation">Operation</router-link>
        <router-link to="/careers">Careers</router-link>
        <router-link to="/contact">Contact us</router-link>
        <router-link to="/gaming">Gaming</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-part',
  data() {
    return {
      opened: false
    }
  },
  components: {


  },
  methods: {
    checkbox(e) {
      this.opened = !this.opened
      if (this.opened) {
        document.documentElement.style.overflow = "hidden"
      } else {
        document.documentElement.style.overflow = "auto"

      }
      this.$emit('opened', this.opened)
    }
  }
}
</script>

<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  -moz-appearance: textfield;
}

.fixed-menu {
  z-index: 1000;
  position: fixed;
  width: calc(100vw - 50px);
}

.mobile-version {
  display: none;

  #toggle {
    display: none;
  }

  /**
    Hamburger
  **/
  .hamburger {
    //position: absolute;
    //top: 1.2em;
    //right: 2%;
    ////margin-left: -2em;
    ////margin-top: -45px;
    width: 2em;
    height: 45px;
    z-index: 59859;
  }

  .hamburger div {
    position: relative;
    width: 30px;
    height: 2px;
    z-index: 9999;
    border-radius: 3px;
    background-color: #FFFFFF;
    margin-top: 8px;
    transition: all 0.3s ease-in-out;
  }

  /**
  Nav Styles
  **/
  .nav {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #010C28;
    top: -100%;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    transform: scale(0);
  }

  .nav-wrapper {
    position: relative;
    overflow: hidden;
    overflow-y: auto;
    height: 100%;
  }

  nav {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  nav a {
    position: relative;
    text-decoration: none;
    color: #FFFFFF;
    font-size: 14px;
    display: inline-block;
    margin-top: 30px;
    transition: color 0.2s ease-in-out;
    letter-spacing: 1px;
    font-family: 'Oxygen';
  }

  nav a:before {
    content: '';
    height: 0;
    position: absolute;
    width: 0.25em;
    background-color: white;
    left: -0.5em;
    transition: all 0.2s ease-in-out;
  }

  nav a:hover {
    color: white;
  }

  nav a:hover:before {
    height: 100%;
  }

  /**
  Animations
  **/
  #toggle:checked+.hamburger .top-bun {
    transform: rotate(-45deg);
    margin-top: 20px;
    width: 2em;
  }

  #toggle:checked+.hamburger .bottom-bun {
    opacity: 0;
    transform: rotate(45deg);
  }

  #toggle:checked+.hamburger .meat {
    transform: rotate(45deg);
    margin-top: -3px;
    width: 2em;
  }

  #toggle:checked+.hamburger+.nav {
    top: 0 !important;
    transform: scale(1) !important;
    overflow: visible !important;
  }

}

@media screen and (max-width: 1024px) {
  .menu {
    //padding: 25px 8px !important;
    //padding: 0;
    overflow: hidden;

    .logo {
      width: 110px !important;

      img {
        width: 100% !important;
      }
    }

    .menu-items {
      font-size: 12px !important;
      letter-spacing: 0.04em !important;

      a:not(:last-child) {
        margin-right: 30px !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .menu-items {
    display: none;
    overflow: hidden;
  }

  .mobile-version {
    display: block;
  }
}

.menu {
  //background-color: grey;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  //padding: 25px;
  .logo {
    cursor: pointer;
    z-index: 999;
  }

  .hamburger-menu-items {
    //display: none;
    //overflow: hidden;

  }

  .menu-items {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 105%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #F0F0F0;

    a {
      color: #F0F0F0;
      text-decoration: none;
      list-style-type: none;
    }

    a:not(:last-child) {
      margin-right: 50px;
    }
  }
}
</style>