
document.getElementById("button").onclick = () => (setBackgroundColorById("paragraph", "blue"))
document.getElementById("alert").onclick = () => (alert(document.getElementById("popup-input").value))
document.getElementById("hover-this").onmouseover = () => (setBackgroundColorById("body", "red"))
document.getElementById("hover-this").onmouseout = () => {setBackgroundColorById("body", "red")}

const getValueFromId = (id) =>(document.getElementById(id).value)
const setBackgroundColorById = (id, color) => (document.getElementById(id).style = "background-color: " + color + ";")
const mouseOverFunction = (element) => (element.style = "background-color: black;")

document.getElementById("change-color-paragraph").onclick = () => {
    const color = getValueFromId("color-input")
    setBackgroundColorById("paragraph", color)
}

document.getElementById("change-color-paragraph").onmouseover = () => {
    mouseOverFunction(document.getElementById("change-color-paragraph"))
}

document.getElementById("change-color-paragraph").onmouseout = () => {
    document.getElementById("change-color-paragraph").style.backgroundColor = "white"
}

// document.getElementById("button").onclick = function () {
//     setBackgroundColorById("paragraph", "blue");
// }
//
// document.getElementById("alert").onclick = function () {
//     alert(document.getElementById("popup-input").value);
// }
//
// document.getElementById("hover-this").onmouseover = function () {
//     setBackgroundColorById("body", "red");
// }
//
// document.getElementById("hover-this").onmouseout = function () {
//     setBackgroundColorById("body", "white");
// }
//
// function getValueFromId(id) {
//     return document.getElementById(id).value;
// }
//
// function setBackgroundColorById(id, color) {
//     document.getElementById(id).style = "background-color: " + color;
// }
//
// function mouseOverFunction(el) {
//     el.style = "background-color: black";
// }
//

