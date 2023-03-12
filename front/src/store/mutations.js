export default {
  UPDATE_DATA(state, { state: stateName, content, key }) {
    state[stateName] = key ? { ...state[stateName], key: content } : content;
  },

  UPDATE_RANGE(state, [min, max]) {
    state.minPrice = min;
    state.maxPrice = max;
  },
};
