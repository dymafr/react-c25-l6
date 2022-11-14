const { atom } = require('recoil');

export const recipesState = atom({
  key: 'recipesState',
  default: [],
});

export const wishlistDisplayState = atom({
  key: 'wishlistDisplayState',
  default: false,
});
