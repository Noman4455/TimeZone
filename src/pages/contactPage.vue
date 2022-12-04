<template>
  <div>
    <q-img src="~assets/background.webp">
      <div class="bg-transparent text-black absolute-center text-h1 text-bold">
        Contacts
      </div>
    </q-img>
    <div class="container q-pt-xl">
      <p class="q-pt-xl">
        <iframe
          class="q-pt-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6753.367270735815!2d74.14273839525909!3d32.18580480834253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f293eb3c4b5e3%3A0x37752b418f80bc8b!2zMzLCsDExJzA4LjEiTiA3NMKwMDgnMzEuMCJF!5e0!3m2!1sen!2s!4v1669987699559!5m2!1sen!2s"
          width="100%"
          height="600"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </p>
    </div>

    <div class="text-h6 text-bold q-pt-xl container">Get In Touch</div>
    <div class="container row">
      <div class="col-9">
        <div class="q-py-md" style="width: 100%">
          <q-input filled type="textarea" />
        </div>
        <div class="row">
          <div class="col-6 q-pr-lg">
            <q-input outlined placeholder="Enter Your Name" />
          </div>
          <div class="col-6">
            <q-input outlined placeholder="Enter Your Email" />
          </div>
        </div>
        <q-input
          class="q-pt-md"
          outlined
          placeholder="Subject"
          style="width: 100%"
        />
      </div>
      <div class="col-3">
        <div class="row q-pa-md">
          <div class="col-2 text-grey-5 text-h4"><q-icon name="home" /></div>
          <div class="col-10 text-body1 q-pl-md">
            Gujranwala, Pakistan <br />
            <span class="text-grey-7">Ali Pur Chowk</span>
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-2 text-grey-5 text-h4">
            <q-icon name="contacts" />
          </div>
          <div class="col-10 text-body1 q-pl-md">
            +92-344-5587326 <br />
            <span class="text-grey-7">Mon to Fri 9am to 5pm</span>
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-2 text-grey-5 text-h4"><q-icon name="email" /></div>
          <div class="col-10 text-body1 q-pl-md">
            mughalnoman445@gmail.com<br />
            <span class="text-grey-7">Send us your query anytime!</span>
          </div>
        </div>
      </div>
      <q-btn class="q-mt-md q-mb-xl" size="20px" no-caps color="red" label="Send" />
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
