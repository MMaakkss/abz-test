export const scrollToBlock = (selector) => {
  const block = document.querySelector("." + selector);

  window.scroll({
    left: 0,
    top: block.offsetTop,
    behavior: "smooth",
  });
};
