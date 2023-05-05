function toggleMenu () {
    document.getElementById('nav-secondary').classList.toggle('active');
    document.getElementById('line-off').classList.toggle('openMenu');
    document.getElementById('line-up').classList.toggle('openMenu');
    document.getElementById('line-down').classList.toggle('openMenu');
    document.getElementById('close-menu').classList.toggle('active');
}

window.onscroll = function () {
    scrollFunction ();
}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("nav").style.padding = "15px 20px";
      document.getElementById("nav").style.transition = "1s";
      document.getElementById("logo").style.fontSize = "20px";
      document.getElementById("logo").style.transition = "1s";
      document.getElementById("nav-secondary").style.top = "52px";
      document.getElementById("close-menu").style.top = "57px";
    } else {
        document.getElementById("nav").style.padding = "30px";
        document.getElementById("logo").style.fontSize = "20px";
        document.getElementById("nav-secondary").style.top = "83px";
        document.getElementById("close-menu").style.top = "83px";
    }
  }

  function zoom (element) {
    element.classList.toggle('active');
  }