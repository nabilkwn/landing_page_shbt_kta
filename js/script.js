// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

//  hamburger menu active di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// hamburger menu bisa di klik saat di scroll
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// search bisa di klik saat di scroll
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// searching di tombol search untuk product
const filter = document.getElementById("search-box");
const items = Array.from(document.querySelectorAll(".product-card"));

filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(search) {
  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.style.display = ""; // Tampilkan elemen
    } else {
      item.style.display = "none"; // Sembunyikan elemen
    }
  });
}

// form open to whatshapp

function gotowhatsapp() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("location").value;
  var menu = document.getElementById("menu").value;
  var sum = document.getElementById("sum").value;

  var url =
    "https://wa.me/6285764490600?text=" +
    "Nama: " +
    name +
    "%0a" +
    "Alamat: " +
    address +
    "%0a" +
    "Tipe Produk: " +
    menu +
    "%0a" +
    "Jumlah Produk: " +
    sum;

  window.open(url, "_blank").focus();
}
