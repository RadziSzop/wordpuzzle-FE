export const getIsTouchScreen = () => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};
