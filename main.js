function printChar(text) {
  for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}
// printChar(prompt("enter a word"));
function getIndexString(text) {
  var newstring = "";
  for (var i = 0; i < text.length; i++) {
    newstring += text[i] + i;
  }
  return newstring;
}
// console.log(getIndexString("hello"));
function changeEvenChar(text) {
  var newstring = "";
  for (var i = 0; i < text.length; i++) {
    if (i % 2 == 1) {
      newstring += "2";
    } else {
      newstring += text[i];
    }
  }
  return newstring;
}
// console.log(changeEvenChar("supppppp"));
function firstNameCheck(firstname) {
  if (firstname[0] == "A") {
    console.log("hello");
  } else {
    console.log("bye");
  }
}
// firstNameCheck(prompt("name please"));
function lastNameCheck(lastname) {
  if (lastname[lastname.length - 1] == "E") {
    return "yes";
  }
  return "no";
}
// console.log(lastNameCheck(prompt("last name please")));
