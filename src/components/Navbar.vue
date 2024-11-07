<template>
  <v-app-bar app class="bg-white app_bar px-3 border-b">
    <v-app-bar-nav-icon
      class="bg-transparent p-2 d-sm-none d-flex"
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

    <v-list class="inline-menu d-none d-sm-flex pa-0" nav>
      <v-list-item v-for="(item, index) in links" :key="index" link>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-btn icon>
      <v-img cover src="/public/images/icon-cart.svg" :width="22" />
    </v-btn>

    <v-btn icon>
      <v-img cover src="/public/images/image-avatar.png" :width="40" />
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
  const state = ref(false)
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

@media screen and (min-width: 768px) {
  .v-app-bar.v-toolbar.app_bar {
    position: relative !important;
    margin: 0 auto;
    max-width: 64rem !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .v-toolbar__content {
    height: auto !important;
  }

  .v-toolbar-title {
    flex: 0.8 !important;
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

  .v-list-item:hover > .v-list-item__overlay{
    opacity: 0;
  }

  .v-list .v-list-item--nav::after {
    border: 0;
  }

  .v-list .v-list-item--nav:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    border: 0;
    border-radius: 0;
    opacity: 10;
    height: 3px;
    background-color: hsl(26, 100%, 55%);
  }

}

.inline-menu {
  background: transparent !important;
  color: #b6bcc8 !important;
  flex: 3;
  gap: 50px;

  &.v-sheet.v-list {
    display: inline-flex !important;
    align-items: baseline !important;
  }
}
</style>
