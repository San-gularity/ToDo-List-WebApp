var myNodeList = document.getElementsByClassName("item");
var theArray = []; //Use to store data into localStorage
var dataStore; //To get data from localStorage
var isChecked;
var checkedArray = []; //Used to keep track of which elements are checked
var checkedStore;
//Checking data on loading the page--------------------------------------
function checkData() {
if (document.URL.includes("add_do.html")) {
dataStore = JSON.parse(localStorage.getItem("doList"));
checkedStore = JSON.parse(localStorage.getItem("doChecked"));
} else if (document.URL.includes("add_decide.html")) {
dataStore = JSON.parse(localStorage.getItem("decideList"));
checkedStore = JSON.parse(localStorage.getItem("decideChecked"));
} else if (document.URL.includes("add_delegate.html")) {
dataStore = JSON.parse(localStorage.getItem("delegateList"));
checkedStore = JSON.parse(localStorage.getItem("delegateChecked"));
} else if (document.URL.includes("add_delete.html")) {
dataStore = JSON.parse(localStorage.getItem("deleteList"));
checkedStore = JSON.parse(localStorage.getItem("deleteChecked"));
}
if (dataStore == undefined || dataStore == null || dataStore.length === 0) {
//Add example list element if local storage is empty or undefined
checkedStore = [];
dataStore = [];
var inputValue = "Example of a Task Item";
isChecked = "0";
checkedStore.push(isChecked);
localStorage.setItem("exItem", inputValue);
dataStore.push(localStorage.getItem("exItem"));
retrieveList();
} else {
// console.log(dataStore);
retrieveList();
}
}
// Function to create a "close" button and append it to each list item-------
for (let i = 0; i < myNodeList.length; i++) {
var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.classList.add("close");
span.appendChild(txt);
myNodeList[i].appendChild(span);
}
// // Click on a close button to hide the current list item
var eleClose = document.getElementsByClassName("close");
function deleteElement() {
for (let i = 0; i < eleClose.length; i++) {
eleClose[i].onclick = function () {
var div = this.parentElement;
//Removing the Element from the array
var str = div.textContent;
var arrRemove = str.slice(0, str.length - 1);
for (let j = 0; j < theArray.length; j++) {
if (theArray[j] == arrRemove) {
theArray.splice(j, 1);
checkedArray.splice(j, 1);
{
break;
}
}
}
div.style.display = "none";
storeData();
//console
console.log(checkedArray);
console.log(theArray);
};
}
}
deleteElement();
//Function to add elements to list------------------------------
function newElement() {
var inputValue = document.getElementById("myInput").value.trim();
for (let i = 0; i < theArray.length; i++) {
if (theArray[i] == inputValue) {
alert(`${inputValue} Item already exits!`);
document.getElementById("myInput").value = "";
return;
}
}
var li = document.createElement("li");
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === "") {
alert("You must write something!");
} else {
document.getElementById("itemList").appendChild(li);
}
document.getElementById("myInput").value = "";
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.classList.add("close");
span.appendChild(txt);
li.appendChild(span);
li.classList.add("item");
deleteElement();
//Adding Elements to the Array
var arrAdd = t;
if (arrAdd.innerText === "" || arrAdd.textContent === "") {
console.log("qwerty");
} else {
theArray.push(arrAdd.innerText || arrAdd.textContent);
isChecked = "0";
checkedArray.push(isChecked);
console.log(checkedArray);
console.log(theArray);
}
storeData();
}
// Add a "checked" symbol when clicking on a list item--------
var list = document.getElementById("itemList");
list.addEventListener(
"click",
function (ev) {
if (ev.target.tagName === "LI") {
ev.target.classList.toggle("checked");
var str = ev.target.textContent;
var itemName = str.slice(0, str.length - 1);
for (let i = 0; i < theArray.length; i++) {
if (theArray[i] == itemName) {
if (checkedArray[i] == "0") {
checkedArray[i] = "1";
storeData();
{
break;
}
} else if (checkedArray[i] == "1") {
checkedArray[i] = "0";
storeData();
{
break;
}
}
}
}
console.log(checkedArray);
console.log(theArray);
// console.log(itemName);
}
},
false
);
// //Storing data with localstorage-------------------------------
function storeData() {
if (document.URL.includes("add_do.html")) {
localStorage.setItem("doList", JSON.stringify(theArray));
localStorage.setItem("doChecked", JSON.stringify(checkedArray));
} else if (document.URL.includes("add_decide.html")) {
localStorage.setItem("decideList", JSON.stringify(theArray));
localStorage.setItem("decideChecked", JSON.stringify(checkedArray));
} else if (document.URL.includes("add_delegate.html")) {
localStorage.setItem("delegateList", JSON.stringify(theArray));
localStorage.setItem("delegateChecked", JSON.stringify(checkedArray));
} else if (document.URL.includes("add_delete.html")) {
localStorage.setItem("deleteList", JSON.stringify(theArray));
localStorage.setItem("deleteChecked", JSON.stringify(checkedArray));
}
}
//Retrieving the list back on reload---------------------------------
function retrieveList() {
for (let i = 0; i < dataStore.length; i++) {
var li = document.createElement("li");
var inputValue = dataStore[i].trim();
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === "") {
alert("You must write something!");
} else {
document.getElementById("itemList").appendChild(li);
}
document.getElementById("myInput").value = "";
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.classList.add("close");
span.appendChild(txt);
li.appendChild(span);
li.classList.add("item");
deleteElement();
//Adding Elements to the Array
var arrAdd = t;
if (arrAdd.innerText === "" || arrAdd.textContent === "") {
console.log("qwerty");
} else {
theArray.push(arrAdd.innerText || arrAdd.textContent);
console.log(theArray);
}
checkedArray.push(checkedStore[i]);
if (checkedArray[i] == "1") {
li.classList.toggle("checked");
}
}
}
//SIDEBAR TRANSITION-------------------------------------------------
function openSidebar() {
document.getElementById("myMain").style.left = "280px";
}
function closeSidebar() {
document.getElementById("myMain").style.left = "0px";
}
function openSidebarMobile() {
document.getElementById("myWrapper").style.width = "100vw";
// document.getElementById("myMain").style.right = "150vw";
document.getElementById("myMain").style.left = "150vw";
}
function closeSidebarMobile() {
document.getElementById("myMain").style.left = "0px";
}