//= require_tree './vendor'
//= require_tree './modules'

var elements = document.querySelectorAll('[data-name]');


for(var i = 0; i < elements.length; i++) {
  (function(element) {
    new Waypoint.Inview({
      element: element,
      enter: function() {
        updateFooter(element.dataset.name);
        updateInfo(element.dataset.info);
      }
    });
  })(elements[i]);
}

function updateFooter(url) {
  var title = document.querySelector(".footer .title");
  document.querySelector(".footer .title a").href = url;
  document.querySelector(".footer .title h1").innerHTML = url;
}

function updateInfo(info) {
  document.querySelector(".info h6").innerHTML = info;
}
