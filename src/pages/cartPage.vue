<template>
  <div>
    <q-img src="~assets/background.webp" class="gt-sm">
      <div class="bg-transparent text-black absolute-center text-h1 text-bold">
        Cart List
      </div>
    </q-img>
    <q-img src="~assets/background.webp" height="150px" class="lt-md">
      <div class="bg-transparent text-black absolute-center text-h5 text-bold">
        Cart List
      </div>
    </q-img>

    <div class="container q-pt-xl gt-sm">
      <div class="row q-py-md">
        <div class="col-6 text-subtitle1 text-bold">Product</div>
        <div class="col-2 text-subtitle1 text-bold">Price</div>
        <div class="col-2 text-subtitle1 text-bold">Quantity</div>
        <div class="col-2 text-subtitle1 text-bold">Total</div>
      </div>
      <q-separator />
      <div class="row q-py-md">
        <div class="col-6 row">
          <div class="col-3">
            <q-img src="~assets/card1.png.webp" />
          </div>
          <div class="col-9 text-subtitle1 text-grey-8" style="padding: 55px 40px">
            Minimalistic shop for multipurpose use
          </div>
        </div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 55px 0px">Rs. 1000</div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 55px 30px">1</div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 55px 0px">Rs. 1000</div>
      </div>
      <q-separator />
      <div class="row q-py-md">
        <div class="col-6 row">
          <div class="col-3">
            <q-img src="~assets/card2.png.webp" />
          </div>
          <div class="col-9 text-subtitle1 text-grey-8" style="padding: 55px 40px">
            Minimalistic shop for multipurpose use
          </div>
        </div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 55px 0px">Rs. 1000</div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 55px 30px">1</div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 55px 0px">Rs. 1000</div>
      </div>
      <q-separator />
    </div>
    <div class="container q-pt-xl lt-md">
      <div class="row q-py-md">
        <div class="col-6 text-subtitle1 text-bold">Product</div>
        <div class="col-2 text-subtitle1 text-bold">Price</div>
        <div class="col-2 text-subtitle1 text-bold">Quantity</div>
        <div class="col-2 text-subtitle1 text-bold q-pl-md">Total</div>
      </div>
      <q-separator />
      <div class="row q-py-md">
        <div class="col-6 row">
          <div class="col-xs-12 col-md-3">
            <q-img height="170px" width="170px" src="~assets/card1.png.webp" />
          </div>
          <div class="col-xs-12 col-md-9 text-subtitle1 text-grey-8" style="padding: 30px 10px">
            Minimalistic shop for multipurpose
          </div>
        </div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 60px 10px"> 1000</div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 60px 10px">1</div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 60px 10px"> 1000</div>
      </div>
      <q-separator />
      <div class="row q-py-md">
        <div class="col-6 row">
          <div class="col-xs-12 col-md-3">
            <q-img height="170px" width="170px" src="~assets/card2.png.webp" />
          </div>
          <div class="col-xs-12 col-md-9 text-subtitle1 text-grey-8" style="padding: 30px 10px">
            Minimalistic shop for multipurpose
          </div>
        </div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 60px 10px"> 1000</div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 60px 10px">1</div>
        <div class="col-2 text-subtitle1 text-grey-8" style="padding: 60px 10px"> 1000</div>
      </div>
      <q-separator />
    </div>

  </div>
</template>



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
