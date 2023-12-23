
// SERVICE
let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");

}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");

}
// SEARCH

let search = document.querySelector(".search");
document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.querySelector('.search input');
    var searchIcon = document.getElementById('search');
    searchIcon.addEventListener('click', function () {
        searchInput.classList.toggle('show-search');
        if (searchInput.classList.contains('show-search')) {
            searchInput.focus();
        }
    });
});

  



