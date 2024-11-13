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
  const indexImage = ref(0)

  const options = [
    {
      id: 0,
      thumbnail: '/public/images/image-product-1-thumbnail.jpg',
      img: '/public/images/image-product-1.jpg',
    },
    {
      id: 1,
      thumbnail: '/public/images/image-product-2-thumbnail.jpg',
      img: '/public/images/image-product-2.jpg',
    },
    {
      id: 2,
      thumbnail: '/public/images/image-product-3-thumbnail.jpg',
      img: '/public/images/image-product-3.jpg',
    },
    {
      id: 3,
      thumbnail: '/public/images/image-product-4-thumbnail.jpg',
      img: '/public/images/image-product-4.jpg',
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
