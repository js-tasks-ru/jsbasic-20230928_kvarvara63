function camelize(str) {
  let deleteWindows = str.split('-');
  let ChangeCase = deleteWindows.map((item,index) => index == 0 ? item: item[0].toUpperCase() + item.slice(1));
  return ChangeCase.join('');
}
