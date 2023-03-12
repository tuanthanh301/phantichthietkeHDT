
let x = document.querySelector('.list-menu')
document.querySelector('.btn-menu').onclick = function(){
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}
