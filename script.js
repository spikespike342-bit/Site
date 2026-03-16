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
<script>
  // 1. Фильтр вкладок
  function filterProducts(category) {
    const products = document.querySelectorAll(".product");
    const buttons = document.querySelectorAll(".tabs button");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    products.forEach(product => {
      if (category === "all" || product.classList.contains(category)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // 2. Добавление в "корзину"
  const cartItems = [];

  function addComponent(name, price) {
    cartItems.push({ name, price });
    showPopup();
    updateCart();
  }

  function updateCart() {
    const cartDiv = document.getElementById("cartItems");
    const totalPriceSpan = document.getElementById("totalPrice");

    if (!cartDiv || !totalPriceSpan) return;

    cartDiv.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - ${item.price} ₽`;
      cartDiv.appendChild(div);
      total += item.price;
    });

    totalPriceSpan.textContent = total;
  }

  // 3. Popup окно
  function showPopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "block";
  }

  function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "none";
  }

  function closeCart() {
    const popup = document.getElementById("cartPopup");
    if (popup) popup.style.display = "none";
  }

  // 4. Поиск компонентов
  const searchInput = document.querySelector(".search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const products = document.querySelectorAll(".product");

      products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = name.includes(query) ? "block" : "none";
      });
    });
  }

  // 5. Подключение кнопок добавления (если ещё не добавлено inline)
  document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", (e) => {
      const product = e.target.closest(".product");
      const name = product.querySelector("h3").textContent;
      const price = parseInt(product.querySelector(".price").textContent.replace(/\D/g,''));
      addComponent(name, price);
    });
  });
</script>
