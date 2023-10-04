function factorial(n) {
  let result = n || 1; // Если n = 0, то факториал будет 1
  let i = n - 1;
  while (i > 1) {
    result *= i; // Сначала умножаем
    i--; // а потом уменьшаем
  }

  return result;
}
