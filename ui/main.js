console.log('Loaded!');

//change the text of main-text div
var element = getElementById ('main-text');
element.innerHTML = "New Value";

//Move the Image
var img = document.getElementById ("madi");
img.onclick = function () {
    img.style.marginLeft ="100px";
};