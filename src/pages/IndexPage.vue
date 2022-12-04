<template>
  <q-page >
    <div class="bg-grey-3 gt-sm">
      <div class="row container">
        <div class="col-9" style="padding-top: 160px">
          <div class="text-h1 text-bold">Select Your New Perfect Style</div>
          <div class="text-h6 q-pt-lg text-grey8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima
            exercitationem voluptate architecto.
          </div>
          <div id="background" class="q-mt-xl">
            <a href="#">
              Shop Now
              <div><span>Shop Now</span></div>
            </a>
          </div>
        </div>
        <div class="col-3">
          <q-img src="~assets/watch1.webp" height="650px" width="300px" />
        </div>
      </div>
    </div>
    <div class="bg-grey-3 text-center lt-md">
      <div class="row container">
        <div class="col-12" style="padding-top: 80px">
          <div class="text-h3 text-bold">Select Your New Style</div>
          <div class="text-h6 q-pt-lg text-grey8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima
            exercitationem voluptate.
          </div>
          <div id="background" class="q-my-lg">
            <a href="#">
              Shop Now
              <div><span>Shop Now</span></div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container q-py-xl">
      <div class="text-h2 text-bold q-pt-xl gt-sm">New Arival</div>
      <div class="text-h4 text-bold q-pt-lg lt-md text-center">New Arival</div>
      <div class="row text-center q-pt-lg">
        <div
          v-for="images in New_Arival"
          :key="images"
          class="text-h6 text-bold col-xs-12 col-md-6 col-lg-3 q-py-lg"
        >
          <q-img
            class="img_zoom"
            :src="images.img"
            height="400px"
            width="250px"
          />
          <div class="q-pt-md">
            Thermo Ball Etip Gloves <br />
            <span class="text-negative">$ 45,743</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-lg q-py-xl">
      <div class="col-xs-12 col-md-6">
        <q-img class="img_zoom" src="~assets/download.webp" />
      </div>
      <div class="col-xs-12 col-md-3">
        <q-img class="img_zoom" src="~assets/download1.webp" />
      </div>
      <div class="col-xs-12 col-md-3">
        <div class="row q-col-gutter-lg">
          <div class="col-12">
            <q-img class="img_zoom" src="~assets/download3.png" />
          </div>
          <div class="col-12">
            <q-img class="img_zoom" src="~assets/download2.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="container q-py-xl">
      <div class="text-h2 text-bold text-center q-pt-xl gt-sm">
        Popular Item
      </div>
      <div class="text-h4 text-bold text-center q-pt-sm lt-md">
        Popular Item
      </div>
      <div class="text-center text-body1 text-grey-8 q-py-md gt-sm">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. <br />
        Quis ipsum suspendisse ultrices gravida.
      </div>
      <div class="text-center text-body1 text-grey-8 q-py-md lt-md">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </div>
      <div class="row q-pt-lg">
        <div
          v-for="item in items"
          :key="item"
          class="col-xs-12 col-md-6 col-lg-4 q-pa-lg text-center"
        >
          <q-card class="q-py-lg" flat>
            <div class="loop_slide">
              <q-img :src="item.img" alt="Avatar" class="loop_image" />
              <div class="loop_overlay">
                <div class="loop_text absolute-center text-white">
                  Add to Cart
                </div>
              </div>
            </div>
            <div class="text-h5 text-bold q-pt-lg">Thermo Ball Etip Gloves</div>
            <div class="text-subtitle2 text-negative">$ 45,743</div>
          </q-card>
        </div>
      </div>
      <div class="text-center">
        <div id="background" class="q-mt-xl">
          <a href="#">
            Shop Now
            <div><span>Shop Now</span></div>
          </a>
        </div>
      </div>
    </div>

    <div class="container row q-py-xl gt-sm" style="padding-top: 150px">
      <div class="col-6 q-pr-xl" style="padding-top: 150px">
        <div class="text-h2 text-bold">Watch of Choice</div>
        <div class="text-body1 q-pt-xl text-grey-8">
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </div>
        <div id="background" class="q-mt-xl">
          <a href="#">
            Shop Now
            <div><span>Shop Now</span></div>
          </a>
        </div>
      </div>
      <div class="col-6"><q-img src="~assets/choce_watch1.png.webp" /></div>
    </div>

    <div class="container row q-pt-lg lt-md" >
      <div class="col-12">
        <div class="text-h4 text-bold">Watch of Choice</div>
        <div class="text-body1 q-pt-lg text-grey-8">
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </div>
        <div id="background" class="q-my-lg">
          <a href="#">
            Shop Now
            <div><span>Shop Now</span></div>
          </a>
        </div>
      </div>
      <div class="col-12"><q-img src="~assets/choce_watch1.png.webp" /></div>
    </div>


    <div class="container row q-py-xl gt-sm" style="padding-top: 150px">
      <div class="col-6"><q-img src="~assets/choce_watch2.png.webp" /></div>
      <div class="col-6 q-pl-xl" style="padding-top: 150px">
        <div class="text-h2 text-bold">Watch of Choice</div>
        <div class="text-body1 q-pt-xl text-grey-8">
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </div>
        <div id="background" class="q-mt-xl">
          <a href="#">
            Shop Now
            <div><span>Shop Now</span></div>
          </a>
        </div>
      </div>
    </div>

    <div class="container row q-pt-lg  lt-md" >
      <div class="col-12"><q-img src="~assets/choce_watch2.png.webp" /></div>
      <div class="col-12">
        <div class="text-h4 text-bold">Watch of Choice</div>
        <div class="text-body1 q-pt-lg text-grey-8">
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </div>
        <div id="background" class="q-my-lg">
          <a href="#">
            Shop Now
            <div><span>Shop Now</span></div>
          </a>
        </div>
      </div>
    </div>

    <div class="container q-pa-xl q-my-xl q-gutter-y-lg row bg-negative text-white gt-sm">
      <div class="col-xs-12 col-md-4 q-px-xl">
        <q-icon name="local_shipping" size="45px" class="q-pb-lg" />
        <div class="text-h5 text-bold q-pb-md">Free Shipping Method</div>
        <div class="text-subtitle1 text-grey-4">
          aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
        </div>
      </div>
      <div class="col-xs-12 col-md-4 q-px-xl">
        <q-icon name="lock_open" size="45px" class="q-pb-lg" />
        <div class="text-h5 text-bold q-pb-md">Secure Payment System</div>
        <div class="text-subtitle1 text-grey-4">
          aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
        </div>
      </div>
      <div class="col-xs-12 col-md-4 q-px-xl">
        <q-icon name="published_with_changes" size="45px" class="q-pb-lg" />
        <div class="text-h5 text-bold q-pb-md">Secure Payment System</div>
        <div class="text-subtitle1 text-grey-4">
          aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
        </div>
      </div>
    </div>
    <div class="container q-pa-md q-my-md q-gutter-y-md row bg-negative text-white lt-md">
      <div class="col-xs-12 col-md-4 ">
        <div class="row">
          <q-icon name="local_shipping" size="45px" class="q-pb-lg" />
        <div class="text-h5 text-bold q-pt-sm q-pl-lg">Free Shipping Method</div>
        </div>
        <div class="text-subtitle1 text-grey-4">
          aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
        </div>
      </div>
      <div class="col-xs-12 col-md-4 ">
        <div class="row">
          <q-icon name="lock_open" size="45px" class="q-pb-lg" />
        <div class="text-h5 text-bold q-pt-sm q-pl-lg">Secure Payment</div>
        </div>
        <div class="text-subtitle1 text-grey-4">
          aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
        </div>
      </div>
      <div class="col-xs-12 col-md-4 ">
        <div class="row">
          <q-icon name="published_with_changes" size="45px" class="q-pb-lg" />
        <div class="text-h5 text-bold q-pt-sm q-pl-lg">Secure Payment</div>
        </div>
        <div class="text-subtitle1 text-grey-4">
          aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
        </div>
      </div>
    </div>
  </q-page>
</template>



<script>
export default {
  setup() {
    return {
      New_Arival: [
        {
          img: require("assets/new_product1.png.webp"),
        },
        {
          img: require("assets/new_product2.png.webp"),
        },
        {
          img: require("assets/new_product3.png.webp"),
        },
        {
          img: require("assets/download1.webp"),
        },
      ],
      items: [
        {
          img: require("assets/popular1.png.webp"),
        },
        {
          img: require("assets/popular2.png.webp"),
        },
        {
          img: require("assets/popular3.png.webp"),
        },
        {
          img: require("assets/popular4.png.webp"),
        },
        {
          img: require("assets/popular5.png.webp"),
        },
        {
          img: require("assets/popular6.png.webp"),
        },
      ],
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

// Sliding Button

#background {
  display: inline-block;
  background: #ff0000;
}

#background a {
  display: block;
  padding: 15px 30px;
  color: white;
  position: relative;
  z-index: 2;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
}

#background div {
  position: absolute;
  display: block;
  width: 0%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(70, 67, 67);
  z-index: 1;
  overflow: hidden;
  transition: 0.8s all ease;
}

#background:hover div {
  width: 100%;
}

#background span {
  position: absolute;
  color: #ffffff;
  width: 123px;
  top: 0;
  left: 0;
  display: block;
  text-align: center;
  height: 100%;
  padding: 15px 25px;
}

// Sliding Button

//  Sliding Loop Image
.loop_slide {
  position: relative;
}

.loop_image {
  display: block;

}

.loop_overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ff0a0a;
  font-weight: bold;
  font-size: 1rem;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.loop_slide:hover .loop_overlay {
  height: 15%;
}

</style>
