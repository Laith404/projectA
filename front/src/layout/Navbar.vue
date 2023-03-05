<template>
  <v-app-bar
    app
  >
    <v-container class="py-2 fill-height">
      <v-router-link
        v-for="(item, index) in menu()"
        :key="`link-${index}`"
        :to="item.to"
        class="d-flex px-4"
      >
        {{ item.name }}
      </v-router-link>
      <v-spacer />
      <v-responsive max-width="260">
        <v-text-field
          v-model="updateSearch"
          dense
          flat
          hide-details
          rounded
          solo-inverted
          placeholder="поиск..."
        />
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script>
// import vNavbarLink from './vNavbarLink';
// import {mapActions, mapGetters, mapState} from 'vuex';
import VRouterLink from '../components/VRouterLink.vue';

import menu from '../entitites/menu';

export default {
  name: 'VNavbar',
  components: { VRouterLink },
  data: () => ({
    updateSearch: null,
    menu,
  }),
  computed: {
    // ...mapGetters([
    //   "carts",
    //   "carts_length"
    // ]),
    // ...mapState([
    //   "searchValue"
    // ]),
    // updateSearch: {
    //   get() {
    //     return this.searchValue;
    //   },
    //   set(value) {
    //     this.set_search_product(value)
    //   }
    // }
  },
  methods: {
    // ...mapActions([
    //   'set_search_product'
    // ])
  },
};
</script>
