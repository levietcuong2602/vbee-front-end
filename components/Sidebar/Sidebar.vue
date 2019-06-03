<template>
  <div class="sidebar">
    <SidebarHeader />
    <SidebarForm />
    <nav class="sidebar-nav">
      <div slot="header"></div>
      <ul class="nav">
        <template v-for="item in navItems">
          <template v-if="item.title">
            <SidebarNavTitle
              :name="item.name"
              :classes="item.class"
              :wrapper="item.wrapper"
              :key="item.key"
            />
          </template>
          <template v-else-if="item.divider">
            <!-- SidebarNavDivider -->
            <SidebarNavDivider
              :classes="item.class"
              :key="item.key"
            />
          </template>
          <template v-else-if="item.label">
            <!-- SidebarNavLabel -->
            <SidebarNavLabel
              :name="item.name"
              :url="item.url"
              :icon="item.icon"
              :label="item.label"
              :classes="item.class"
              :key="item.key"
            />
          </template>
          <template v-else>
            <template v-if="item.children">
              <!-- First level dropdown -->
              <SidebarNavDropdown
                :name="item.name"
                :url="item.url"
                :icon="item.icon"
                :key="item.key"
              >
                <template v-for="child1 in item.children">
                  <template v-if="child1.children">
                    <SidebarNavDropdown
                      :name="child1.name"
                      :url="child1.url"
                      :icon="child1.icon"
                      :key="child1.key"
                    >
                      <li
                        v-for="(childL2) in child1.children"
                        :key="childL2.key"
                        class="nav-item"
                      >
                        <SidebarNavLink
                          :name="childL2.name"
                          :url="childL2.url"
                          :icon="childL2.icon"
                          :badge="childL2.badge"
                          :variant="item.variant"
                        />
                      </li>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <SidebarNavItem
                      :classes="item.class"
                      :key="child1.key"
                    >
                      <SidebarNavLink
                        :name="child1.name"
                        :url="child1.url"
                        :icon="child1.icon"
                        :badge="child1.badge"
                        :variant="item.variant"
                        :key="child1.key"
                      />
                    </SidebarNavItem>
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>
              <SidebarNavItem
                :classes="item.class"
                :key="item.key"
              >
                <SidebarNavLink
                  :name="item.name"
                  :url="item.url"
                  :icon="item.icon"
                  :badge="item.badge"
                  :variant="item.variant"
                />
              </SidebarNavItem>
            </template>
          </template>
        </template>
      </ul>
    </nav>
    <SidebarFooter />
    <SidebarMinimizer />
  </div>
</template>
<script>
import SidebarHeader from '~/components/Sidebar/SidebarHeader';
import SidebarForm from '~/components/Sidebar/SidebarForm';
import SidebarFooter from '~/components/Sidebar/SidebarFooter';
import SidebarMinimizer from '~/components/Sidebar/SidebarMinimizer';
import SidebarNavTitle from '~/components/Sidebar/SidebarNavTitle';
import SidebarNavDivider from '~/components/Sidebar/SidebarNavDivider';
import SidebarNavLabel from '~/components/Sidebar/SidebarNavLabel';
import SidebarNavDropdown from '~/components/Sidebar/SidebarNavDropdown';
import SidebarNavLink from '~/components/Sidebar/SidebarNavLink';
import SidebarNavItem from '~/components/Sidebar/SidebarNavItem';
import { menu } from '~/components/Sidebar/menu';

export default {
  name: 'Sidebar',
  components: {
    SidebarHeader,
    SidebarForm,
    SidebarFooter,
    SidebarMinimizer,
    SidebarNavTitle,
    SidebarNavDivider,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavItem,
  },
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navItems: null
    }
  },
  methods: {
    isFixed() {
      this.fixed
        ? document.body.classList.add('sidebar-fixed')
        : document.body.classList.remove('sidebar-fixed')
      return this.fixed
    },
  },
  mounted: function () {
    this.isFixed(this.fixed)
  },
  created() {
    this.navItems = menu.items;
  }
}
</script>
<style lang="css">
.nav-link {
  cursor: pointer;
}
</style>
