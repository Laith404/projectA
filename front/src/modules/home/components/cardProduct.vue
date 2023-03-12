<template>
  <v-card
    :loading="loading"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      />
    </template>

    <v-img
      height="250"
      :src="imgProduct"
    />

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        />

        <div class="grey--text ms-4">
          {{ rating.toFixed(1) }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ price }} руб.
      </div>

      <div>
        {{ cutDescription }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="blue--text"
        text
        @click="reserve"
      >
        Добавить в корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardProduct',
  props: {
    price: {
      type: Number,
      default: () => (0),
    },
    rating: {
      type: Number,
      default: () => (0),
    },
    title: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    imgProduct: {
      type: String,
      default: () => '',
    },
  },
  data: () => ({
    loading: false,
  }),
  computed: {
    cutDescription() {
      return this.description.length > 200 ? `${this.description.slice(0, 200)}...` : this.description;
    },
  },
  methods: {
    reserve() {
      this.loading = true;

      // eslint-disable-next-line no-return-assign
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>

</style>
