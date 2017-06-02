const getScreenWidth = () => {
  const screenWidth = {
    xs: 375,
    sm: 768,
    md: 1024,
    lg: 1280,
  };

  if (window.matchMedia) {
    return {
      xxs: window.matchMedia(`(max-width: ${screenWidth.xs}px)`).matches,
      xs: window.matchMedia(`(min-width: ${screenWidth.xs}px) and (max-width: ${(screenWidth.sm - 1)}px)`).matches, // min-width: 375 and max-width 767
      sm: window.matchMedia(`(min-width: ${screenWidth.sm}px) and (max-width: ${(screenWidth.md - 1)}px)`).matches, // min-width: 768 and max-width 1023
      md: window.matchMedia(`(min-width: ${screenWidth.md}px) and (max-width: ${(screenWidth.lg - 1)}px)`).matches, // min-width: 1024 and max-width 1279
      lg: window.matchMedia(`(min-width: ${screenWidth.lg + 1}px)`).matches,
    };
  }

  return {
    xxs: false,
    xs: false,
    sm: false,
    md: false,
    lg: true,
  };
};

export default getScreenWidth;
