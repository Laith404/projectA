<template>
  <section class="v-home">
    <v-carousel
      cycle
      height="calc(100vh - 65px)"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides()"
        :key="i"
        :src="slide.img"
      />
    </v-carousel>
    <v-row class="mt-4 mx-3">
      <v-col
        cols="3"
      >
        <v-card class="v-sidebar rounded-lg px-5">
          <v-expansion-panels
            multiple
          >
            <v-sidebar-panel title="Цена">
              <v-row class="mt-1">
                <v-text-field
                  :value="minPrice"
                  class="sidebar__input py-1 px-1 rounded-lg"
                  hide-details
                  solo
                  type="number"
                  style="width: calc(100% / 2 - 0.5rem)"
                />
                <v-spacer />
                <v-text-field
                  :value="maxPrice"
                  class="sidebar__input py-1 px-1 rounded-lg"
                  hide-details
                  solo
                  type="number"
                  style="width: calc(100% / 2 - 0.5rem)"
                />
              </v-row>
              <v-range-slider
                :value="rangePrice"
                max="10000"
                min="0"
                hide-details
                class="align-center my-5"
                @change="UPDATE_RANGE($event)"
              />
            </v-sidebar-panel>
            <v-sidebar-panel title="категория товара">
              <v-select
                :items="options"
                item-text="text"
                label="Категория товара"
              />
            </v-sidebar-panel>
            <v-sidebar-panel title="Ингридиенты">
              <v-checkbox
                v-for="(value,key) in comp_product"
                :key="key"
                :value="value"
                :label="`${value}`"
              />
            </v-sidebar-panel>
          </v-expansion-panels>
          <v-btn
            color="secondary my-5"
            width="100%"
            large
            @click="TypeSelected()"
          >
            Применить
          </v-btn>
          <v-btn
            v-if="hiddenClearBtn"
            text
            @click="clearSelected()"
          >
            сбросить фильтр
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-row>
          <CardProduct
            v-for="(item, index) in product"
            :key="`card-project--${index}`"
            :title="item.title"
            :description="item.description"
            :rating="item.rating"
            :price="item.price"
            :img-product="item.imgProduct"
            class="mx-5 my-3"
          />
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import slides from '../entities/slides';
import CardProduct from '../components/cardProduct.vue';

export default {
  name: 'VHome',
  components: {
    CardProduct,
  },
  data: () => ({
    slides,
  }),
  computed: {
    ...mapState([
      'minPrice',
      'maxPrice',
      'product',
    ]),
    ...mapGetters([
      'rangePrice',
    ]),
  },
  methods: {
    ...mapMutations([
      'UPDATE_RANGE',
    ]),
  },
};
</script>

<style lang="sass" scoped>
.v-home
  &__carousel
    &__item
      padding-left: 200px
</style>
