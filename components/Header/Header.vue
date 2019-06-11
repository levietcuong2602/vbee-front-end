<template>
  <header class="app-header navbar">
    <button
      class="navbar-toggler mobile-sidebar-toggler d-lg-none"
      type="button"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <b-link
      class="navbar-brand"
      to="#"
    />
    <button
      class="navbar-toggler sidebar-toggler d-md-down-none"
      type="button"
      @click="sidebarToggle"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <b-navbar-nav class="d-md-down-none">
      <b-nav-item class="px-3">Dashboard</b-nav-item>
      <b-nav-item class="px-3">Users</b-nav-item>
      <b-nav-item class="px-3">Settings</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item class="d-md-down-none">
        <i class="icon-bell" />
        <b-badge
          pill
          variant="danger"
        >
          5
        </b-badge>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-list" />
        <b-badge
          pill
          variant="warning"
        >
          5
        </b-badge>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-envelope-letter" />
        <b-badge
          pill
          variant="info"
        >
          5
        </b-badge>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-location-pin" />
      </b-nav-item>
      <HeaderDropdown />
    </b-navbar-nav>
    <button
      class="navbar-toggler aside-menu-toggler d-md-down-none"
      type="button"
    >
      <span class="navbar-toggler-icon" />
    </button>
  </header>
</template>
<script>
import HeaderDropdown from '~/components/Header/HeaderDropdown';

export default {
  name: 'Header',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  components: { HeaderDropdown },
  methods: {
    sidebarToggle(e) {
      e.preventDefault()
      console.log('document.body: ', document.body);
      document.body.classList.toggle('sidebar-hidden')
    },
    isFixed(fixed) {
      fixed
        ? document.body.classList.add('header-fixed')
        : document.body.classList.remove('header-fixed')
      return fixed
    },
  },
  mounted: function () {
    this.isFixed(this.fixed)
  },
}
</script>
