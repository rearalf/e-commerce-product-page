<template>
  <v-carousel class="d-md-none" hide-delimiters>
    <v-carousel-item src="/public/images/image-product-1.jpg" />
    <v-carousel-item src="/public/images/image-product-2.jpg" />
    <v-carousel-item src="/public/images/image-product-3.jpg" />
    <v-carousel-item src="/public/images/image-product-4.jpg" />
  </v-carousel>
  <div class="d-none d-md-flex flex-md-column ga-6 pa-md-8">
    <div class="">
      <v-img
        alt="image-product-1"
        class="rounded-xl"
        :src="options[indexImage].img"
      />
    </div>
    <div class="d-flex justify-space-around">
      <div
        v-for="item in options"
        :key="item.id"
        class="pa-0 cursor-pointer rounded-lg border-opacity-100 position-relative"
        :class="{
          'border-color-orange': indexImage === item.id,
        }"
        min-height="auto"
        min-width="auto"
        style="border: 3px solid; border-color: white"
        @click="() => (indexImage = item.id)"
      >
        <div
          v-if="indexImage === item.id"
          class="position-absolute bg-light-grayish-blue opacity-80 w-100 h-100 rounded"
          style="z-index: 1"
        />
        <v-img
          class="rounded"
          cover
          :height="60"
          :src="item.thumbnail"
          :width="60"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import thumbnail1 from '@/assets/image-product-1-thumbnail.jpg'
  import product1 from '@/assets/image-product-1.jpg'
  import thumbnail2 from '@/assets/image-product-2-thumbnail.jpg'
  import product2 from '@/assets/image-product-2.jpg'
  import thumbnail3 from '@/assets/image-product-3-thumbnail.jpg'
  import product3 from '@/assets/image-product-3.jpg'
  import thumbnail4 from '@/assets/image-product-4-thumbnail.jpg'
  import product4 from '@/assets/image-product-4.jpg'

  const indexImage = ref(0)

  const options = [
    {
      id: 0,
      thumbnail: thumbnail1,
      img: product1,
    },
    {
      id: 1,
      thumbnail: thumbnail2,
      img: product2,
    },
    {
      id: 2,
      thumbnail: thumbnail3,
      img: product3,
    },
    {
      id: 3,
      thumbnail: thumbnail4,
      img: product4,
    },
  ]
</script>

<style scoped lang="scss">
.v-carousel {
  height: auto !important;
}

.v-btn.v-btn--density-default {
  height: auto;
}

.border-color-orange {
  border-color: #ff7d1a !important;
}
</style>
