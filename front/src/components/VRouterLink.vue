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
export default {
  name: 'VRouterLink',
  props: {
    to: {
      type: String,
      default: () => '',
    },
  },
};
</script>
