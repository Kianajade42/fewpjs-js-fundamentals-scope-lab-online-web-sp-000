const animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below

  return animal
}
 const two = 2
function add2(n) {
  return n + two

  // Feel free to move things around!
  
}

 
function myAnimal () {
  const animal = "dog";
 
  function yourAnimal () {
    const otheranimal = "cat";
 
    return myAnimal = yourAnimal;
  }
 
