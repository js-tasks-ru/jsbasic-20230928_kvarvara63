function checkSpam(str) {
  let newStr = str.toUpperCase();
  // if (newStr.includes("XXX")){
  //   return true;
  // } else if (newStr.includes("1XBET")){
  //   return true;
  // } else {
  //   return false;
  // }

  if (newStr.includes("XXX") || newStr.includes("1XBET")){
    return true;
  } else{
    return false;
  }
}
