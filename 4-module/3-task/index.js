function highlight(table) {
  let trs = table.querySelectorAll("tr");
  for (let tr of trs){
    if (tr.dataset.available === "true"){
      tr.classList.add('available');
    } else if (tr.dataset.available === "false"){
      tr.classList.add('unavailable');
    } else{
      tr.hidden = true;
    }
  }

    let gender = tr.cells[2];
    if (gender.dataset.gender === "m"){
      tr.classList.add("male");
    } else {
      tr.classList.add("female");
    }

    let age = tr.cells[1];
    if (age < 18){
      tr.style.textDecoration = "line-through";
    } else {
      return tr.style.textDecoration = "none";
    }
}
