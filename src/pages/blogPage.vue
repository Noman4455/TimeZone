<template>
  <div>
    <q-img src="~assets/background.webp" class="gt-sm">
      <div class="bg-transparent text-black absolute-center text-h1 text-bold">
        Blog
      </div>
    </q-img>
    <q-img src="~assets/background.webp" height="150px" class="lt-md">
      <div class="bg-transparent text-black absolute-center text-h4 text-bold">
        Blog
      </div>
    </q-img>

    <div class="container row q-py-xl gt-sm">
      <div class="col-8 q-py-lg">
        <div v-for="images in blog" :key="images">
          <q-card class="">
            <q-img :src="images.img" class="q-mb-lg">
              <span
                class="
                  absolute-bottom-left
                  bg-red
                  text-h6 text-center text-bold text-white
                  q-pa-lg q-ml-xl
                  rounded-borders
                  gt-sm
                "
              >
                15 <br />Jan</span
              >
              <span
                class="
                  absolute-bottom-left
                  bg-red
                  text-subtitle1 text-center text-white
                  q-pa-sm q-ml-md
                  rounded-borders
                  lt-md
                "
              >
                15 Jan</span
              >
            </q-img>
            <div class="gt-sm">
              <div class="text-h6 red_hover q-px-lg">
                Google inks pact for new 35-storey office
              </div>
              <div class="text-body1 q-mb-xl q-pa-lg">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying
              </div>
            </div>
            <div class="lt-md">
              <div class="text-subtitle1 text-bold red_hover q-px-lg">
                Google inks pact for new 35-storey
              </div>
              <div class="text-body1 q-mb-xl q-pa-lg">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth.
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <div class="col-4 q-py-lg">
        <div class="bg-grey-3 q-pa-lg q-ml-xl q-mb-xl text-white">
          <q-input
            filled
            square
            bg-color="white"
            placeholder="Search Keywords..."
          />
          <q-btn
            color="red"
            label="Search"
            class="full-width text-h6 q-mt-lg"
            no-caps
          />
        </div>
        <div class="bg-grey-3 q-pa-lg q-ml-xl q-mb-xl">
          <div class="text-h6 q-pb-md">Category</div>
          <q-separator class="q-mb-lg" />
          <div class="text-subtitle1 red_hover q-py-md">Resturent Food(37)</div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">Travel News(10)</div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">
            Modern Technology(11)
          </div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">Products(1000+)</div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">Inspiration(21)</div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">Health Care(09)</div>
        </div>
        <div class="bg-grey-3 q-pa-lg q-ml-xl q-mb-xl">
          <div class="text-h6 q-pb-md">Tag Clouds</div>
          <q-separator class="q-mb-lg" />
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              v-for="size in sizes"
              :key="size"
              color="white"
              class="text-grey-7"
              :label="`${size}`"
            />
          </div>
        </div>
        <div class="bg-grey-3 q-pa-lg q-ml-xl q-mb-xl">
          <div class="text-h6 q-pb-md">Recent Post</div>
          <q-separator class="q-mb-lg" />
          <div class="row">
            <div class="col-3"><q-img src="~assets/post_1.png.webp" /></div>
            <div class="col-9 text-body1 red_hover q-pl-md q-mt-sm">
              From life was you fish... <br />
              <span class="text-grey-7">November, 19 2022</span>
            </div>
          </div>
          <q-separator class="q-my-lg" />
          <div class="row">
            <div class="col-3"><q-img src="~assets/post_2.png.webp" /></div>
            <div class="col-9 text-body1 red_hover q-pl-md q-mt-sm">
              From life was you fish... <br />
              <span class="text-grey-7">November, 19 2022</span>
            </div>
          </div>
          <q-separator class="q-my-lg" />
          <div class="row">
            <div class="col-3"><q-img src="~assets/post_3.png.webp" /></div>
            <div class="col-9 text-body1 red_hover q-pl-md q-mt-sm">
              From life was you fish... <br />
              <span class="text-grey-7">November, 19 2022</span>
            </div>
          </div>
          <q-separator class="q-my-lg" />
          <div class="row">
            <div class="col-3"><q-img src="~assets/post_4.png.webp" /></div>
            <div class="col-9 text-body1 red_hover q-pl-md q-mt-sm">
              From life was you fish... <br />
              <span class="text-grey-7">November, 19 2022</span>
            </div>
          </div>
        </div>
        <div class="bg-grey-3 q-pa-lg q-ml-xl q-mb-xl">
          <div class="text-h6 q-pb-md">Instagram Feed</div>
          <q-separator class="q-mb-lg" />
          <div class="row q-gutter-lg">
            <div class="col-3 q-gutter-y-lg">
              <q-img class="link" src="~assets/post_5.png.webp" />
              <q-img class="link" src="~assets/post_6.png.webp" />
            </div>
            <div class="col-3 q-gutter-y-lg">
              <q-img class="link" src="~assets/post_7.png.webp" />
              <q-img class="link" src="~assets/post_8.png.webp" />
            </div>
            <div class="col-3 q-gutter-y-lg">
              <q-img class="link" src="~assets/post_9.png.webp" />
              <q-img class="link" src="~assets/post_10.png.webp" />
            </div>
          </div>
        </div>
        <div class="bg-grey-3 q-pa-lg q-ml-xl q-mb-xl">
          <div class="text-h6 q-pb-md">News Letter</div>
          <q-separator class="q-mb-lg" />
          <q-input
            filled
            square
            bg-color="white"
            placeholder="Search Keywords..."
          />
          <q-btn
            color="red"
            label="Subscribe"
            class="full-width text-h6 q-mt-lg"
            no-caps
          />
        </div>
      </div>
    </div>
    <div class="container row q-py-xl lt-md">
      <div class="col-12 q-py-lg">
        <div v-for="images in blog" :key="images">
          <q-card class="">
            <q-img :src="images.img" class="q-mb-lg">
              <span
                class="
                  absolute-bottom-left
                  bg-red
                  text-h6 text-center text-bold text-white
                  q-pa-lg q-ml-xl
                  rounded-borders
                  gt-sm
                "
              >
                15 <br />Jan</span
              >
              <span
                class="
                  absolute-bottom-left
                  bg-red
                  text-subtitle1 text-center text-white
                  q-pa-sm q-ml-md
                  rounded-borders
                  lt-md
                "
              >
                15 Jan</span
              >
            </q-img>
            <div class="gt-sm">
              <div class="text-h6 red_hover q-px-lg">
                Google inks pact for new 35-storey office
              </div>
              <div class="text-body1 q-mb-xl q-pa-lg">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying
              </div>
            </div>
            <div class="lt-md">
              <div class="text-subtitle1 text-bold red_hover q-px-lg">
                Google inks pact for new 35-storey
              </div>
              <div class="text-body1 q-mb-xl q-pa-lg">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth.
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <div class="col-12">
        <div class="bg-grey-3 q-pa-lg q-mb-xl text-white">
          <q-input
            filled
            square
            bg-color="white"
            placeholder="Search Keywords..."
          />
          <q-btn
            color="red"
            label="Search"
            class="full-width text-h6 q-mt-lg"
            no-caps
          />
        </div>
        <div class="bg-grey-3 q-pa-lg q-mb-xl">
          <div class="text-h6 q-pb-md">Category</div>
          <q-separator class="q-mb-lg" />
          <div class="text-subtitle1 red_hover q-py-md">Resturent Food(37)</div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">Travel News(10)</div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">
            Modern Technology(11)
          </div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">Products(1000+)</div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">Inspiration(21)</div>
          <q-separator />
          <div class="text-subtitle1 red_hover q-py-md">Health Care(09)</div>
        </div>
        <div class="bg-grey-3 q-pa-lg q-mb-xl">
          <div class="text-h6 q-pb-md">Tag Clouds</div>
          <q-separator class="q-mb-lg" />
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              v-for="size in sizes"
              :key="size"
              color="white"
              class="text-grey-7"
              :label="`${size}`"
            />
          </div>
        </div>
        <div class="bg-grey-3 q-pa-lg q-mb-xl">
          <div class="text-h6 q-pb-md">Recent Post</div>
          <q-separator class="q-mb-lg" />
          <div class="row">
            <div class="col-3"><q-img src="~assets/post_1.png.webp" /></div>
            <div class="col-9 text-body1 red_hover q-pl-md q-mt-sm">
              From life was you fish... <br />
              <span class="text-grey-7">November, 19 2022</span>
            </div>
          </div>
          <q-separator class="q-my-lg" />
          <div class="row">
            <div class="col-3"><q-img src="~assets/post_2.png.webp" /></div>
            <div class="col-9 text-body1 red_hover q-pl-md q-mt-sm">
              From life was you fish... <br />
              <span class="text-grey-7">November, 19 2022</span>
            </div>
          </div>
          <q-separator class="q-my-lg" />
          <div class="row">
            <div class="col-3"><q-img src="~assets/post_3.png.webp" /></div>
            <div class="col-9 text-body1 red_hover q-pl-md q-mt-sm">
              From life was you fish... <br />
              <span class="text-grey-7">November, 19 2022</span>
            </div>
          </div>
          <q-separator class="q-my-lg" />
          <div class="row">
            <div class="col-3"><q-img src="~assets/post_4.png.webp" /></div>
            <div class="col-9 text-body1 red_hover q-pl-md q-mt-sm">
              From life was you fish... <br />
              <span class="text-grey-7">November, 19 2022</span>
            </div>
          </div>
        </div>
        <div class="bg-grey-3 q-pa-lg q-mb-xl">
          <div class="text-h6 q-pb-md">Instagram Feed</div>
          <q-separator class="q-mb-lg" />
          <div class="row q-gutter-lg">
            <div class="col-3 q-gutter-y-lg">
              <q-img class="link" src="~assets/post_5.png.webp" />
              <q-img class="link" src="~assets/post_6.png.webp" />
            </div>
            <div class="col-3 q-gutter-y-lg">
              <q-img class="link" src="~assets/post_7.png.webp" />
              <q-img class="link" src="~assets/post_8.png.webp" />
            </div>
            <div class="col-3 q-gutter-y-lg">
              <q-img class="link" src="~assets/post_9.png.webp" />
              <q-img class="link" src="~assets/post_10.png.webp" />
            </div>
          </div>
        </div>
        <div class="bg-grey-3 q-pa-lg">
          <div class="text-h6 q-pb-md">News Letter</div>
          <q-separator class="q-mb-lg" />
          <q-input
            filled
            square
            bg-color="white"
            placeholder="Search Keywords..."
          />
          <q-btn
            color="red"
            label="Subscribe"
            class="full-width text-h6 q-mt-lg"
            no-caps
          />
        </div>
      </div>
    </div>





  </div>
</template>

<script>
export default {
  setup() {
    return {
      sizes: [
        "Project",
        "Love",
        "Technology",
        "Travel",
        "Resturent",
        "Life Style",
        "Design",
        "illustration",
      ],
      blog: [
        {
          img: require("assets/single_blog_1.png.webp"),
        },
        {
          img: require("assets/single_blog_2.png.webp"),
        },
        {
          img: require("assets/single_blog_3.png.webp"),
        },
        {
          img: require("assets/single_blog_4.png.webp"),
        },
        {
          img: require("assets/single_blog_5.png.webp"),
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
.red_hover {
  cursor: pointer;
}
.red_hover:hover {
  color: red;
}
</style>
