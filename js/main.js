(function () {
  var ICON_LIST = "<svg aria-hidden=\"true\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5\"/></svg>", ICON_X = "<svg aria-hidden=\"true\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/></svg>";
  var header = document.getElementById("header");
  var backtotop = document.querySelector(".back-to-top");
  function onScroll() {
    header.classList.toggle("header-scrolled", window.scrollY > 40);
    backtotop.classList.toggle("active", window.scrollY > 100);
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
  backtotop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0 });
  });

  // Mobile nav
  var navbar = document.getElementById("navbar");
  var toggle = document.querySelector(".mobile-nav-toggle");
  toggle.addEventListener("click", function () {
    var open = navbar.classList.toggle("navbar-mobile");
    toggle.classList.toggle("bi-list", !open);
    toggle.classList.toggle("bi-x", open);
    toggle.innerHTML = open ? ICON_X : ICON_LIST;
  });

  // Dropdowns open on click only (desktop and mobile)
  var dropdowns = document.querySelectorAll(".navbar .dropdown");
  dropdowns.forEach(function (dd) {
    var a = dd.querySelector(":scope > a");
    a.setAttribute("role", "button");
    a.setAttribute("aria-expanded", "false");
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var open = !dd.classList.contains("open");
      dropdowns.forEach(function (o) { o.classList.remove("open"); o.querySelector(":scope > a").setAttribute("aria-expanded", "false"); });
      dd.classList.toggle("open", open);
      a.setAttribute("aria-expanded", open);
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navbar .dropdown")) dropdowns.forEach(function (o) { o.classList.remove("open"); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") dropdowns.forEach(function (o) { o.classList.remove("open"); });
  });
})();
