document.getElementById("hidden").addEventListener("change", logo)


function logo(){
  if (document.getElementById("hidden").checked) {
    document.getElementById("logo").style.transform = "rotate(360deg)";
    document.getElementById("logo").style.color = "#ffae01";
    document.getElementById("social-link").style.top = "60px";
    document.getElementById("menu").checked = false
    console.log("true");
    menuLogo()
} else {
    document.getElementById("social-link").style.top = "-300px";
    document.getElementById("logo").style.transform = "rotate(0deg)";
    document.getElementById("logo").style.color = "white";
    console.log("false");
  }
};

document.getElementById("menu").addEventListener("change", menuLogo);

function menuLogo(){
  if (document.getElementById("menu").checked) {
    document.getElementById("menu-logo").style.transform = "rotate(360deg)";
    document.getElementById("menu-logo").style.color = "#ffae01";
    document.getElementById("option2").style.top = "50px";
    document.getElementById("hidden").checked = false
    console.log("true");
    logo()
  } else {
    document.getElementById("menu-logo").style.transform = "rotate(0deg)";
    document.getElementById("menu-logo").style.color = "white";
    document.getElementById("option2").style.top = "-200px";
    console.log("false");
  }
};


//.....................................