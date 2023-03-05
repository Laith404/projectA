<template>
  <section>
    <router-link
      :to="to"
      class="text--accent-1 link"
    >
      <slot />
    </router-link>
  </section>
</template>

<script>
import { useRoute } from 'vue-router/composables';
import { computed } from 'vue';

export default {
  name: 'VRouterLink',
  props: {
    to: {
      type: String,
      default: () => '',
    },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    // eslint-disable-next-line vue/no-unused-properties
    return { isActive };
  },
};
</script>
