<template>
  <div class="app">
    <!-- Header DashBoard -->
    <AppHeader fixed />
    <div class="app-body">
      <Sidebar fixed />
      <div class="main">
        <Breadscrumb :list="list()" />
        <div class="container-fluid">
          <nuxt></nuxt>
        </div>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer';
import Sidebar from '~/components/Sidebar/Sidebar';
import Breadscrumb from '~/components/Breadscrumb';

export default {
  components: {
    AppHeader: Header,
    AppFooter: Footer,
    Sidebar,
    Breadscrumb
  },
  methods: {
    list() {
      return ['Home', 'Dashboard']
    }
  }
}
</script>
<style>
</style>
