import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import ru from 'vuetify/lib/locale/ru';

const vuetifyConfig = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        black: {
          base: '#1A1A1A',
        },
        gray: {
          base: '#BABABA',
          lighten5: '#E8E8E8',
          lighten4: '#D1D1D1',
          lighten3: '#BABABA',
          lighten2: '#A3A3A3',
          lighten1: '#8D8D8D',
          darken1: '#767676',
          darken2: '#5F5F5F',
          darken3: '#484848',
          darken4: '#313131',
        },
        orange: {
          base: '#F3AA3C',
        },
        blue: {
          base: '#092E63',
          lighten1: '#1473D3',
          lighten2: '#5B9DE1',
          lighten3: '#89B8E8',
          lighten4: '#A1C7ED',
          lighten5: '#B9D5F2',
          lighten6: '#E1EDF9',
          lighten7: '#F1F7FD',
          darken1: '#092E63',
          darken2: '#3A5882',
          darken3: '#6B82A1',
          darken4: '#8396B0',
          darken5: '#9DABC1',
          darken6: '#B5C0D0',
          darken7: '#CED5E0',
          darken8: '#E7EBF0',
          darken9: '#F2F4F7',
          darken10: '#F7F8FA',
        },
        red: {
          base: '#D82B55',
        },
        yellow: {
          base: '#F5C415',
        },
        green: {
          base: '#00BB40',
        },
      },
    },
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
  breakpoint: {
    thresholds: {
      xs: 480,
      sm: 720,
      md: 1024 + 16,
      lg: 2048 + 16,
    },
    mobileBreakpoint: 'xs',
  },
};

Vue.use(Vuetify);
export default new Vuetify(vuetifyConfig);
