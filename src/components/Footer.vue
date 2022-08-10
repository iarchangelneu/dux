<template>
  <div>
    <div class="footer">
      <div class="logo">
        <img src="../assets/images/logo.svg">
      </div>
      <div class="menu">
        <router-link to="/">INSTAGRAM</router-link>
        <router-link to="/">FACEBOOK</router-link>
        <router-link to="/">LINKEDIN</router-link>
      </div>
      <div class="link">
        <router-link to="/contact">CONTACTS</router-link>
      </div>
    </div>
    <div class="border__mob" style="border-top: 1px solid #828FA1 !important;">
      <div class="footer__mob">

        <div style="display:flex; justify-content: space-between; align-items: center;margin-top: 16px;">
          <div class="logo">
            <img src="../assets/images/logo.svg">
          </div>
          <div class="link">
            <router-link to="/contact">CONTACTS</router-link>
          </div>
        </div>
        <div class="menu">
          <router-link to="/">INSTAGRAM</router-link>
          <router-link to="/">FACEBOOK</router-link>
          <router-link to="/">LINKEDIN</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer-part"
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .footer .link a {
    font-size: 12px !important;
    ;
  }

  .footer .menu a {

    font-size: 12px !important;

  }
}

@media screen and (min-width: 320px) and (max-width: 500px) {
  .border__mob {
    display: block !important;
  }

  .footer__mob {
    display: contents !important;
    padding: 35px 0;
  }

  .footer {
    display: none !important;

    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        margin: 26px 0px !important;
        text-align: center;
      }
    }

    .link {
      a {

        margin-left: 5px !important;
      }
    }
  }
}

.border__mob {
  display: none;
}

.footer__mob {
  display: none;
}

.footer {
  display: flex;
  align-items: center;
  border-top: 1px solid #828FA1;
  padding: 35px 0;
  justify-content: space-between;

  .menu {
    a {
      font-family: 'Oxygen', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 105%;
      text-decoration: none;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #828FA1;

      &:not(:last-child) {
        margin-right: 30px;
      }
    }
    a:hover{
      color: #00FFFF;
      border-bottom: 1px solid #00FFFF;
    }
  }

  .link {
    a {
      font-family: 'Oxygen', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 105%;
      list-style-type: none;
      text-decoration: none;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #F0F0F0;
    }
  }
}
</style>