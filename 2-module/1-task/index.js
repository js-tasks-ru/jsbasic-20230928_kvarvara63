function sumSalary(salaries) {
  let allSum = 0;
  for (let key in salaries){
    let isSalary = typeof salaries[key] === 'number' && Number.isFinite(salaries[key]);

    if (isSalary){
      allSum += salaries[key];
    }
  }
  return allSum;
}
