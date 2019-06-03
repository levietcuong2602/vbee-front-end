<template>
  <div class="app">
    <!-- Header DashBoard -->
    <AppHeader></AppHeader>
    <div class="app-body">
      <Sidebar fixed/>
      <div class="main">
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

export default {
  components: {
    AppHeader: Header,
    AppFooter: Footer,
    Sidebar,
  }
}
</script>
<style>
</style>
