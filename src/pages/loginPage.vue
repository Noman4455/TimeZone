<template>
  <div>
    <q-img src="~assets/background.webp" class="gt-sm">
      <div class="bg-transparent text-black absolute-center text-h1 text-bold">
        Login
      </div>
    </q-img>
    <q-img src="~assets/background.webp" height="150px" class="lt-md">
      <div class="bg-transparent text-black absolute-center text-h4 text-bold">
        Login
      </div>
    </q-img>

    <div class="container row q-py-xl gt-sm">
      <div
        class="col-6 text-center text-white q-mt-auto q-mb-auto"
        style="background-image: linear-gradient(90deg, #b187a6, #6c4862); padding: 100px 0px;"
      >
        <div class="text-h5 text-bold q-pt-xl">New to Our Shop</div>
        <div class="text-body1 q-pt-md">
          There are advances being made in science and technology <br />
          everyday, and a good example of this
        </div>
        <q-btn
          class="q-py-md q-px-xl q-my-xl"
          outline
          color="white"
          label="Outline"
        />
      </div>
      <div class="col-6 q-py-xl q-pl-xl">
        <div class="text-h6 q-pb-xl">
          Welcome Back ! <br />
          Please Sign in now
        </div>
        <q-input class="q-py-md" placeholder="Username" />
        <q-input class="q-py-md" placeholder="Password" />
        <div class="row">
          <q-checkbox v-model="check" label="Remember Me" /> <q-space />
          <a href="" class="text-black q-pt-sm">Forget Password</a>
        </div>
        <div class="text-center">
          <q-btn
            class="q-py-md q-px-xl q-my-lg"
            outline
            color="purple"
            label="login"
          />
        </div>
      </div>
    </div>
    <div class="container row q-pt-xl lt-md">
      <div
        class="col-12 text-center text-white q-mt-auto q-mb-auto"
        style="background-image: linear-gradient(90deg, #b187a6, #6c4862); padding: 100px 0px;"
      >
        <div class="text-h5 text-bold q-pt-xl">New to Our Shop</div>
        <div class="text-body1 q-pt-md">
          There are advances being made in science and technology <br />
          everyday, and a good example of this
        </div>
        <q-btn
          class="q-py-md q-px-xl q-my-xl"
          outline
          color="white"
          label="Outline"
        />
      </div>
      <div class="col-12 q-pt-lg">
        <div class="text-h6">
          Welcome Back ! <br />
          Please Sign in now
        </div>
        <q-input class="q-py-md" placeholder="Username" />
        <q-input class="q-py-md" placeholder="Password" />
        <div class="row">
          <q-checkbox v-model="check" label="Remember Me" /> <q-space />
          <a href="" class="text-black q-pt-sm">Forget Password</a>
        </div>
        <div class="text-center">
          <q-btn
            class="q-py-md q-px-xl q-my-lg"
            outline
            color="purple"
            label="login"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      check: ref(false),
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
</style>
