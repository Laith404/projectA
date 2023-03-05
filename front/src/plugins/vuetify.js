import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#cd1b1b',
        secondary: '#a20115',
        accent: '#ffd8d8',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
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
  icons: {
    iconfont: 'fa',
  },
});
