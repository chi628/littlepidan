export const FetchMaxZIndex = () => {
  return Math.max(...Array.from(document.querySelectorAll('*')).map(el => getComputedStyle(el).zIndex).filter(v => !isNaN(parseInt(v))).map(o => parseInt(o)))
}