<template>
  <div id="app">
    <!-- <b-row class="contact pt-2 pl-4">
      <b-col class="text-left" cols="8">
        <a href="" class="text-dark">
          <v-icon name="phone-alt"></v-icon> Call Center 2710-0000
        </a>
        <a href="" class="pl-3 text-dark">
          <v-icon name="brands/whatsapp"></v-icon> 8888-2222
        </a>
         <a href="" class="pl-3 text-dark">
          <v-icon name="envelope"></v-icon> info@techstorecr.com
        </a>
        <a href="" class="pl-3 text-dark">
          <v-icon name="brands/telegram-plane"></v-icon> t.me/techstorecr
        </a>
      </b-col>
    </b-row> -->
    <b-navbar id="nav" toggleable="lg" type="dark" variant="primary" sticky >
      <b-navbar-brand to="/" class="text-dark">
        TECHSTORE
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="nav-links">
          <b-nav-item to="/tech" active-class="active">LAPTOP</b-nav-item>
          <b-nav-item to="/gamer" active-class="active">CELULARES</b-nav-item>
          <!-- <b-nav-item to="/a-v" active-class="active">AUDIO / VIDEO</b-nav-item> -->
          <b-nav-item to="/home" active-class="active">HOGAR</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Busqueda"></b-form-input>
            <b-button variant="secondary" size="sm" class="my-2 my-sm-0" type="submit"  @click.prevent="">Buscar</b-button>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item>
            <a class="bg-primary text-white mr-2" href="" @click.prevent="">Registrarme</a>
            <a class="bg-primary text-white mr-4" href="" @click.prevent="">Ingresar</a>
          </b-nav-item>

          <b-nav-form>
            <b-row class="pr-2">
              <b-col>
                <a href="" @click.prevent="$router.push('/carshopping')">
                  <v-icon name="shopping-cart"></v-icon> <b>{{products.length}}</b>
                </a>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <a href="">
                  <v-icon name="heart"></v-icon> <b>0</b>
                </a>
              </b-col>
            </b-row>
          </b-nav-form>

          <!-- <b-nav-item-dropdown id="nav-perfil" right>
            <template v-slot:button-content>
              <v-icon name="user-alt"></v-icon>
            </template>
            <b-dropdown-item class="perfil" href="#">Perfil</b-dropdown-item>
            <b-dropdown-item class="perfil" href="#">Cerrar sesión</b-dropdown-item>
          </b-nav-item-dropdown> -->

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from '@/components/home/Footer.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('shoppingCarStore')

export default {
  computed: {
    ...mapState(['products'])
  },
  components: {
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
  /* margin-top: 10px; */
}
#app .contact {
  font-size: 12px;
}
#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  /* color: #2c3e04bb; */
  color: #ffffff;
}
#nav-links a{
  color: #c6e4ff;
}

#nav-perfil li.perfil>a{
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  font-size: 18px;
}
</style>
