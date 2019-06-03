<template>
  <button
    class="sidebar-minimizer"
    @click="sidebarMinimize();brandMinimize()"
    type="button"
  />
</template>
<script>
export default {
  name: 'SidebarMinimizer',
  methods: {
    sidebarMinimize() {
      document.body.classList.toggle('sidebar-minimized')
    },
    brandMinimize() {
      document.body.classList.toggle('brand-minimized')
    }
  }
}
</script>
<style>
@media (min-width: 992px) {
  .sidebar-minimized .sidebar .sidebar-minimizer {
    position: fixed;
    bottom: 0;
    width: 50px;
    height: 50px;
    background-color: #24282c;
  }
}
</style>
