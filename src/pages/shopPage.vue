<template>
  <div>
    <q-img src="~assets/background.webp" class="gt-sm">
      <div class="bg-transparent text-black absolute-center text-h1 text-bold">
        Watch Shop
      </div>
    </q-img>
    <q-img src="~assets/background.webp" height="150px" class="lt-md">
      <div class="bg-transparent text-black absolute-center text-h5 text-bold">
        Watch Shop
      </div>
    </q-img>

    <div class="container q-py-xl">
      <div class="row">
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
  </div>
</template>
<script>
export default {
  setup() {
    return {
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

<style  lang="scss">
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

</style>
