const debounce = (fn, wait) => {
  let timeout;
  return function debounced() {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(...wait), (wait || 1));
  };
};

export default debounce;
