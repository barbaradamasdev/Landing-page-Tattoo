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
      document.getElementById("nav").style.padding = "0px 30px";
      document.getElementById("nav").style.transition = "1s";
      document.getElementById("logo").style.fontSize = "25px";
      document.getElementById("logo").style.transition = "1s";
      document.getElementById("nav-secondary").style.top = "52px";
      document.getElementById("close-menu").style.top = "57px";
    } else {
        document.getElementById("nav").style.padding = "15px 30px";
        document.getElementById("logo").style.fontSize = "clamp(25px, 6vw, 35px)";
        document.getElementById("nav-secondary").style.top = "83px";
        document.getElementById("close-menu").style.top = "83px";
    }
  }

  /* function zoom (element) {
    element.classList.toggle('active');
  } */

  function showMore() {
    document.getElementById('img01').classList.toggle('active');
    document.getElementById('img02').classList.toggle('active');
    document.getElementById('img03').classList.toggle('active');
    document.getElementById('img04').classList.toggle('active');
    document.getElementById('img05').classList.toggle('active');
    document.getElementById('img06').classList.toggle('active');
    document.getElementById('img07').classList.toggle('active');
    document.getElementById('img08').classList.toggle('active');
    document.getElementById('img09').classList.toggle('active');
    document.getElementById('img10').classList.toggle('active');
    document.getElementById('img11').classList.toggle('active');
    document.getElementById('img12').classList.toggle('active');
    document.getElementById('img13').classList.toggle('active');
    document.getElementById('showMore').style.display ='none';
  }

  function formsent() {
    document.getElementById('formenviado').classList.toggle('active');
  }