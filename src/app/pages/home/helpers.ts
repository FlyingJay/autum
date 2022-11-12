
const decimalToHex = (d, padding) => {
  let hex = Number(d).toString(16);
  padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;
  while (hex.length < padding) {
    hex = '0' + hex;
  }
  return hex;
}

export const onItemMove = (element, x, y, r) => {
  const color = '';
  const abs = Math.abs(x);
  const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
  const hexCode = decimalToHex(min, 2);
  element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
}

