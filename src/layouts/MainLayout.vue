<template>
  <q-layout>
    <q-header elevated class="bg-white gt-md">
      <q-toolbar class="q-pa-lg">
        <a href="#"> <q-img width="10rem" src="~assets/logo.png.webp" /></a>
        <q-space />
        <div class="text-body1 q-gutter-x-lg">
          <a class="link q-pa-md" @click="home">Home </a>
          <a class="link q-pa-md" @click="shop"> Shop </a>
          <a class="link q-pa-md" @click="about"> About </a>
          <a class="link q-pa-md" @click="blog"> Blog </a>
          <div class="dropdown">
            <button class="dropbtn link">Latest</button>
            <div class="dropdown-content">
              <a class="link" @click="shop">Product List</a>
              <a class="link" @click="details">Product Details</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn link">Pages</button>
            <div class="dropdown-content">
              <a class="link" @click="login">login</a>
              <a class="link" @click="cart">Cart</a>
              <a class="link" @click="confirm">Confirmation</a>
            </div>
          </div>
          <a @click="contact" class="link q-pa-md"> Contact </a>
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-md">
          <q-icon
            @click="dialog = true"
            class="icon"
            name="search"
            size="30px"
          />
          <q-icon @click="login" class="icon" name="person" size="30px" />
          <q-icon @click="cart" class="icon" name="shopping_cart" size="30px" />
        </div>
      </q-toolbar>
    </q-header>

    <q-header elevated class="bg-white lt-lg">
      <q-toolbar class="q-pa-lg">
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          color="black"
        />
        <img src="~assets/logo.png.webp" />
        <q-space />

        <div class="q-pl-sm q-gutter-md">
          <q-icon @click="dialog = true" class="icon" name="search" size="30px" />
          <q-icon @click="login" class="icon" name="person" size="30px" />
          <q-icon @click="cart" class="icon" name="shopping_cart" size="30px" />
        </div>
      </q-toolbar>
    </q-header>

    <q-footer class="q-pt-xl bg-white">
      <q-separator />
      <div class="container row q-py-xl">
        <div class="col-xs-12 col-md-6 col-lg-3">
          <a href="#"> <q-img src="~assets/logo.png.webp" width="8rem" /></a>
          <div class="text-grey-8 q-py-xl text-subtitle1">
            Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
            do eiusmod tem.
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="text-h5 text-bold text-black">Quick Links</div>
          <div class="text-body1 text-grey-8 q-pt-lg">
            <div><a class="footer_links" href="#">About</a></div>
            <div><a class="footer_links" href="#">Other Discounts</a></div>
            <div><a class="footer_links" href="#">Get Coupan</a></div>
            <div><a class="footer_links" href="#">Contact Us</a></div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="text-h5 text-bold text-black">New Products</div>
          <div class="text-body1 text-grey-8 q-pt-lg">
            <div><a class="footer_links" href="#">Clothes</a></div>
            <div><a class="footer_links" href="#">Fashion</a></div>
            <div><a class="footer_links" href="#">Toys</a></div>
            <div><a class="footer_links" href="#">Accessories </a></div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="text-h5 text-bold text-black">Support</div>
          <div class="text-body1 text-grey-8 q-pt-lg">
            <div>
              <a class="footer_links" href="#">Frequently Asked Questions</a>
            </div>
            <div><a class="footer_links" href="#">Terms & Conditions</a></div>
            <div><a class="footer_links" href="#"> Privicy Policy</a></div>
            <div>
              <a class="footer_links" href="#">Report a Payment Issue </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </q-footer>

    <q-dialog v-model="dialog" persistent :maximized="maximizedToggle">
      <q-card class="bg-dark text-white">
        <q-bar class="bg-dark">
          <q-space />
          <q-btn dense flat size="20px" icon="close" v-close-popup />
        </q-bar>

        <div class="col-xs-12 col-md-6 text-center text-white">
          <q-input
            color="grey-6"
            bg-color="grey-6"
            placeholder="Searching Key...."
            class="input"
          >
          </q-input>
        </div>
      </q-card>
    </q-dialog>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      behavior="mobile"
      bordered
    >
      <q-scroll-area class="fit">
        <a href="#"
          ><img class="q-mt-lg q-ml-lg" src="~assets/logo.png.webp"
        /></a>
        <q-list padding class="q-mt-md">
          <div class="full-width q-pl-lg q-py-sm link text-body1" @click="home">
            Home
          </div>
          <div class="full-width q-pl-lg q-py-sm link text-body1" @click="shop">
            Shop
          </div>
          <div
            class="full-width q-pl-lg q-py-sm link text-body1"
            @click="about"
          >
            About
          </div>
          <div class="full-width q-pl-lg q-py-sm link text-body1" @click="blog">
            Blog
          </div>
          <q-expansion-item
            class="q-ml-sm link"
            expand-separator
            label="Latest"
          >
            <q-card>
              <q-list>
                <q-item>
                  <q-item-section>
                    <a  class="link q-py-sm"
                      ><q-item-label @click="shop">Product List</q-item-label></a
                    >
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>
                    <a  class="link q-py-sm"
                      ><q-item-label @click="details">Product Details</q-item-label></a
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-expansion-item>
          <q-expansion-item class="q-ml-sm link" expand-separator label="Pages">
            <q-card>
              <q-list>
                <q-item>
                  <q-item-section>
                    <a class="link q-py-sm"
                      ><q-item-label @click="login">Login</q-item-label></a
                    >
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>
                    <a  class="link q-py-sm"
                      ><q-item-label @click="cart">Cart</q-item-label></a
                    >
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <a  class="link q-py-sm"
                      ><q-item-label @click="confirm">Confirmation</q-item-label></a
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "MainLayout",

  setup() {
    const $router = useRouter();
    function home() {
      $router.push("/");
    }
    function shop() {
      $router.push("/shop");
    }
    function about() {
      $router.push("/about");
    }
    function blog() {
      $router.push("/blog");
    }
    function details() {
      $router.push("/details");
    }
    function login() {
      $router.push("/login");
    }
    function cart() {
      $router.push("/cart");
    }
    function confirm() {
      $router.push("/confirm");
    }
    function contact() {
      $router.push("/contact");
    }

    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
      drawer: ref(false),
      shop,
      home,
      about,
      blog,
      details,
      login,
      cart,
      confirm,
      contact,
    };
  },
};
</script>

<style lang="scss">
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.img_zoom:hover img {
  transition: 0.7s;
  transform: scale(1.05);
}

.link {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.link:hover {
  color: red;
  background-color: rgb(255, 204, 204);
}
.icon {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.icon:hover {
  color: red;
}
.dropbtn {
  background-color: transparent;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  color: red;
  background-color: rgb(255, 204, 204);
}

.dropdown:hover .dropdown-content {
  display: block;
}

// Link Styles
.footer_links {
  background-image: linear-gradient(
    to right,
    #ff0000,
    #ff0000 50%,
    rgb(71, 71, 71) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

.footer_links:before {
  content: "";
  background: #ff0000;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

.footer_links:hover {
  background-position: 0;
}

.footer_links:hover::before {
  width: 100%;
}

// Link Styles

// top Button
.top {
  text-decoration: none;
  padding: 10px;
  font-family: sans-serif;
  color: #fff;
  background: #000;
  border-radius: 100px;
}
// top Button

.input {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 300px;
  padding-bottom: 300px;
}
</style>
