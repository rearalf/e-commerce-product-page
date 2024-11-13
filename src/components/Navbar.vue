<template>
  <v-app-bar app class="bg-white app_bar px-3 border-b position-relative">
    <v-app-bar-nav-icon
      class="bg-transparent p-2 d-md-none d-flex"
      icon
      style="box-shadow: none"
      variant="plain"
      @click="state = true"
    >
      <v-img cover src="/public/images/icon-menu.svg" :width="14" />
    </v-app-bar-nav-icon>

    <v-app-bar-title class="ma-0">
      <v-img cover src="/public/images/logo.svg" width="150" />
    </v-app-bar-title>

    <v-list class="inline-menu d-none d-md-flex pa-0" nav>
      <v-list-item v-for="(item, index) in links" :key="index" link>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-menu
      v-model="menu"
      class="position-relative"
      :close-on-content-click="false"
    >
      <template #activator="{ props }">
        <v-btn icon v-bind="props">
          <v-img cover src="/public/images/icon-cart.svg" :width="16" />
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-title class="font-weight-bold">
              Cart
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list
          v-if="store.cart.length > 0"
          class="cart_list px-4 py-5 d-flex flex-column ga-4"
        >
          <v-list-item
            v-for="item in store.cart"
            :key="item.id"
            class="w-100 pa-0 d-flex justify-space-between"
          >
            <v-img
              class="rounded-lg"
              cover
              :height="50"
              :src="item.img"
              :width="35"
            />
            <div class="article_cart d-flex flex-column justify-center ga-1">
              <h3 class="text-body-2 text-grayish-blue">
                {{ item.title }}
              </h3>
              <p class="text-body-2 text-grayish-blue">
                ${{ item.price }} x {{ item.amount }}
                <span class="text-black font-weight-bold">${{ (item.amount * item.price).toFixed(2) }}</span>
              </p>
            </div>
            <v-btn
              icon
              style="box-shadow: none"
              @click="store.removeFromCart(item.id)"
            >
              <v-img src="/public/images/icon-delete.svg" :width="12" />
            </v-btn>
          </v-list-item>
        </v-list>
        <div v-else class="empty_cart">
          <h3 class="font-weight-bold">Your cart is empty.</h3>
        </div>

        <v-card-actions v-if="store.cart.length > 0" class="px-4 pb-8">
          <v-list-item class="w-100 pa-0">
            <v-btn
              class="bg-orange-darken-4 text-capitalize w-100 py-4 rounded-lg"
              @click="() => console.log(store.cart)"
            >
              Checkout
            </v-btn>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-menu>

    <v-btn class="btn-avatar" icon>
      <v-img cover src="/public/images/image-avatar.png" :width="36" />
    </v-btn>
  </v-app-bar>

  <div
    class="background_sidebar"
    :class="{ active_sidebar: state }"
    @click="state = false"
  />

  <v-navigation-drawer
    v-model="state"
    class="bg-white top-0 pt-2 pl-2"
    style="z-index: 908; height: 100vh"
    temporary
  >
    <v-btn
      class="bg-transparent p-2"
      icon
      style="box-shadow: none"
      variant="plain"
      @click="state = false"
    >
      <v-img cover src="/public/images/icon-close.svg" :width="12" />
    </v-btn>

    <v-list>
      <v-list-item v-for="(item, index) in links" :key="index" link>
        <v-list-item-title class="font-weight-bold">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()

  const state = ref(false)
  const menu = ref(false)
  const links = [
    { title: 'Collections', to: '/' },
    { title: 'Fieles', to: '/' },
    { title: 'Mentirosas', to: '/' },
    { title: 'About', to: '/' },
    { title: 'Contact', to: '/' },
  ]
</script>

<style lang="scss">
.app_bar {
  box-shadow: none !important;
}

.background_sidebar {
  background-color: hsla(0, 0%, 0%, 75%);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 907;
  transform: translateX(-100%);
}

.active_sidebar {
  transform: translateX(0);
}

.v-overlay__content {
  left: 0.5rem !important;
  top: -52rem !important;
  max-width: none !important;
  width: 96% !important;
}

.cart_list {
  overflow-y: auto !important;
  max-height: 20rem;
  min-height: 8rem;
}

.v-overlay__content .empty_cart {
  min-height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-overlay__content .empty_cart h3 {
  color: #b6bcc8;
  font-size: 16px !important;
}

.v-btn.v-btn--density-default.bg-orange-darken-4 {
  height: auto !important;
}

.v-list-item div.v-list-item__content {
  display: flex;
  gap: 14px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.v-btn.btn-avatar:hover {
  border: 2px solid #ff7d1a;
}

.v-list-item .article_cart {
  flex: 11;
}

@media screen and (min-width: 768px) {
  .v-overlay__content {
    top: -71rem !important;
  }

  .v-list .v-list-item--nav {
    margin-bottom: 0 !important;
    min-height: 0 !important;
    padding: 36px 0 !important;
    border-radius: 0;
    position: relative;
  }

  .v-list .v-list-item--nav:hover {
    color: #000;
    background-color: transparent;
  }

  .v-list-item:hover > .v-list-item__overlay {
    opacity: 0 !important;
  }

  .v-list .v-list-item--nav::after {
    border: 0;
    top: inherit;
  }

  .v-list .v-list-item--nav:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    border: 0;
    border-radius: 0;
    opacity: 10;
    height: 3px;
    background-color: hsl(26, 100%, 55%);
  }
}

@media screen and (min-width: 1024px) {
  .v-app-bar.v-toolbar.app_bar {
    position: relative !important;
    margin: 0 auto;
    max-width: 50rem !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .v-toolbar__content {
    height: auto !important;
  }

  .v-toolbar-title {
    flex: 1.2 !important;
  }

  .v-overlay__content {
    left: 50rem !important;
    transform: translateX(-50%);
    top: -49rem !important;
    max-width: none !important;
    min-width: 22rem !important;
    width: auto !important;
  }
}

@media screen and (min-width: 1440px) {
  .v-app-bar.v-toolbar.app_bar {
    max-width: 64rem !important;
  }

  .v-overlay__content {
    left: 70rem !important;
    top: -55rem !important;
    min-width: 22rem !important;
  }

  .v-toolbar-title {
    flex: 0.8 !important;
  }
}

.inline-menu {
  background: transparent !important;
  color: #b6bcc8 !important;
  flex: 3;
  gap: 44px;

  &.v-sheet.v-list {
    display: inline-flex !important;
    align-items: baseline !important;
  }
}
</style>
