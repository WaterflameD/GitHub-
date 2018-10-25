var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById('btn2');
var myList = document.getElementById("list");
var story = document.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.getElementsByClassName("close")[0];

console.log(btn1);
console.log(btn2);
console.log(myList);

function addItem() {
  var newLi = document.createElement("li");
  newLi.innerHTML = "Элемент";
  newLi.className = "item";
  myList.appendChild(newLi);
  popup.style.display = "none";
}

function delItem() {
  myList.removeChild(story[0]);
  if(story.length == 0) {
    popup.style.display = "block";
  }
}

function closePopup() {
  popup.style.display = "none"
}


btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);