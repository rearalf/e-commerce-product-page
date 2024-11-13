<template>
  <Navbar />
  <v-container class="pa-0 mt-md-14 container">
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="12">
        <product-galery />
      </v-col>
      <v-col class="pa-6">
        <article>
          <h3
            class="text-orange text-uppercase text-subtitle-1 font-weight-bold mb-3"
          >
            Sneaker Company
          </h3>
          <h1 class="font-weight-bold text-h4 mb-4 text-very-dark-blue">
            Fall Limited Edition Sneakers
          </h1>
          <p class="text-grayish-blue mb-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </article>
        <div class="d-flex justify-space-between flex-md-column ga-md-2">
          <div class="d-flex flex-1-1 ga-3 align-center">
            <p class="font-weight-bold text-h5 text-very-dark-blue">$125.00</p>
            <div
              class="position-relative px-2 py-1 top-0 d-flex justify-center"
            >
              <div
                class="bg-orange w-100 h-100 position-absolute opacity-40 rounded top-0"
                style="z-index: 1"
              />
              <span
                class="position-relative text-orange font-weight-bold text-body-2"
                style="z-index: 2"
              >50%</span>
            </div>
          </div>
          <p
            class="text-grayish-blue font-weight-medium text-decoration-line-through"
          >
            $250.00
          </p>
        </div>
        <div
          class="mt-6 d-flex flex-column ga-4 flex-md-row justify-space-between"
        >
          <div
            class="d-flex justify-space-between align-center bg-light-grayish-blue rounded-lg flex-1-1 position-relative"
          >
            <v-btn
              class="bg-transparent d-flex flex-1-1 px-6 py-5 h-100 w-auto justify-start align-center"
              :disabled="amount === 0 ? true : false"
              style="box-shadow: none"
              @click="() => amount > 0 && amount--"
            >
              <v-img src="/public/images/icon-minus.svg" :width="12" />
            </v-btn>
            <p
              class="text-very-dark-blue font-weight-bold position-absolute"
              style="left: 50%; transform: translateX(-50%)"
            >
              {{ amount }}
            </p>
            <v-btn
              class="bg-transparent d-flex flex-1-1 px-6 py-5 h-100 w-auto justify-end align-center"
              style="box-shadow: none"
              @click="() => amount++"
            >
              <v-img src="/public/images/icon-plus.svg" :width="12" />
            </v-btn>
          </div>
          <v-btn
            class="btn_add_cart bg-orange py-4 h-auto rounded-lg flex-1-1"
            @click="
              addToCart({
                amount,
                img: '/public/images/image-product-1-thumbnail.jpg',
                price: 125,
                title: 'Fall Limited Edition Sneakers',
                id: 0,
              })
            "
          >
            <v-img src="/public/images/icon-cart.svg" :width="16" />
            <p class="ml-2">Add to cart</p>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'

  const amount = ref(0)

  const { addToCart } = useAppStore()
</script>

<style lang="scss">
@media screen and (min-width: 960px) {
  .container {
    margin: 0 auto;
    max-width: 50rem !important;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    margin: 0 auto;
    max-width: 65rem !important;
  }
}

.btn_add_cart {
  box-shadow: none;
}

.btn_add_cart:hover {
  box-shadow: 6px 6px 6px 6px rgba(255, 125, 26, 20%) !important;
}
</style>
