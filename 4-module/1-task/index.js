function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    for (let key of friends){
      let li = document.createElement('li');
      ul.innerHTML = friends.map((key) => `<li>${key.firstName} ${key.lastName}</li>`);
    }
    return ul;
  }
