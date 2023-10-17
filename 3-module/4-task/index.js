function showSalary(users, age) {
  let filtered = users.filter((item) => (item <= age));
  let filteredStrings = filtered.map(user => `${user.name}, ${user.balance}`);
  return filteredStrings.join('\n');
  // return users.filter((item) => (item <= age))
  //   .map(user => `${user.name}, ${user.balance}`)
  //   .join('\n');
}
