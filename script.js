function scrollToBuild(){
document.getElementById("builder").scrollIntoView({behavior:"smooth"});
}

function showBuild(){

let cpu=document.getElementById("cpu").value
let gpu=document.getElementById("gpu").value
let ram=document.getElementById("ram").value

document.getElementById("result").innerText=
"Ваша сборка: "+cpu+" + "+gpu+" + "+ram

}
function addComponent(){

document.getElementById("popup").style.display="flex"

}

function closePopup(){

document.getElementById("popup").style.display="none"

}
let total = 0

function addComponent(name, price){

let list = document.getElementById("cartItems")

let item = document.createElement("div")
item.innerHTML = name + " — " + price + " ₽"

list.appendChild(item)

total += price

document.getElementById("totalPrice").innerText = total

document.getElementById("cartPopup").style.display = "flex"
}

function closeCart(){
document.getElementById("cartPopup").style.display = "none"
}
