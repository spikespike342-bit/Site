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
