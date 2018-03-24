export function title(width) {

  const rem = (number) => {
    let tmp = number;
    tmp = (typeof (number) === 'string' && number.indexOf('px')) ? number.replace('px', '') : number;
    tmp = parseFloat(tmp) / 16;
    return `${tmp}rem`;
  };
  
  return `
    font-size: ${rem(width)};    
  `;
}