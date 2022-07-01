const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const switchElement = document.querySelector('.switch')
const img = document.getElementById("myImage");
const darkOrLite = false;

function toggleButton() {

    navList.classList.toggle('show')
}

function changeImage(darkOrLite) {
      if(img.src !="./images/logo-white.png" && darkOrLite === true)
      {
        img.src = "./images/logo-white.png";
      }
      else{
        img.src = "./images/tt-logo.png";
      };
}

hamburgerButton.addEventListener('click', toggleButton)

switchElement.addEventListener('click', () => {
    const darkOrLite = document.body.classList.toggle('dark')
  changeImage(darkOrLite)
})