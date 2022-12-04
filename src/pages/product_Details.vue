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

    <div class="container q-pt-xl">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        control-color="white"
        navigation
        arrows
        height="100%"
        class="text- q-pt-xl"
      >
        <q-carousel-slide name="style" class="">
          <q-img src="~assets/gallery1.png" />
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="">
          <q-img src="~assets/gallery2.webp" />
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="">
          <q-img src="~assets/gallery3.png" />
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="container q-pt-xl gt-sm">
      <div class="text-h3 text-center text-grey-8">
        Foam filling cotton slow <br />
        rebound pillows
      </div>
      <div class="text-grey-7 q-pa-xl text-center text-h6">
        Seamlessly empower fully researched growth strategies and interoperable
        internal or “organic” sources. <br />
        Credibly innovate granular internal or “organic” sources whereas high
        standards in web-readiness. <br />
        Credibly innovate granular internal or organic sources whereas high
        standards in web-readiness. <br />
        Energistically scale future-proof core competencies vis-a-vis impactful
        experiences. <br />
        Dramatically synthesize integrated schemas. with optimal networks.
      </div>
      <div class="row counter_div">
        <div class="text-subtitle1 q-pr-xl">Quantity</div>
        <q-btn icon="remove" @click="(count-=1)" />
        <div class="counter text-h4 q-px-lg"> {{count}} </div>
        <q-btn icon="add" @click="(count+=1)" />
        <div class="text-subtitle1 q-pl-xl">$5</div>
      </div>
      <div class="text-center q-pa-xl q-ml-xl"><q-btn size="20px" icon="shopping_cart" label="Add to Cart" /></div>
    </div>
    <div class="container q-pt-md lt-md">
      <div class="text-h4 text-center text-grey-8">
        Foam filling cotton slow rebound
      </div>
      <div class="text-grey-7 q-pa-sm text-center text-subtitle1">
        Seamlessly empower fully researched growth strategies and interoperable
        internal or “organic” sources.
        Credibly innovate granular internal or “organic” sources whereas high
        standards in web-readiness.
      </div>
      <div class="row counter_div">
        <div class="text-subtitle1 q-pr-md">Quantity</div>
        <q-btn icon="remove" @click="(count-=1)" />
        <div class="counter text-h5 q-px-lg"> {{count}} </div>
        <q-btn icon="add" @click="(count+=1)" />
        <div class="text-subtitle1 q-pl-md">$5</div>
      </div>
      <div class="text-center q-pa-md q-ml-xl "><q-btn  icon="shopping_cart" label="Add to Cart" /></div>
    </div>

  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      count: 0
    }
  },
  setup() {
    return {
      slide: ref("style"),
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
.counter_div {
  justify-content: center;
}
</style>
