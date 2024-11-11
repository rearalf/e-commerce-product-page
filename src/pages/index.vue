<template>
  <Navbar :cart="cart" />
  <v-img
    alt="image-product-1"
    class="w-100 d-flex d-sm-none"
    min-height="436"
    src="/public/images/image-product-1.jpg"
  />
</template>

<script lang="ts" setup>
  const cart = [
    {
      id: 1,
      img: '/images/image-product-1-thumbnail.jpg',
      title: 'Fall Limited Edition Sneakers',
      price: 125.0,
      amount: 3,
    },
  ]
</script>
