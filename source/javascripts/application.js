//= require_tree './vendor'
//= require_tree './modules'

var elements = document.querySelectorAll('[data-name]');

for(var i = 0; i < elements.length; i++) {
  (function(element) {
    new Waypoint({
      element: element,
      handler: function(direction) {
        if (direction === 'down') {
          console.log('triggered down');
          update(element);
        }
      },
      offset: function() {
        console.log('down', Waypoint.viewportHeight());
        return Waypoint.viewportHeight() - 1;
      }
    });
    new Waypoint({
      element: element,
      handler: function(direction) {
        if (direction === 'up') {
          console.log('triggered up');
          update(element);
        }
      },
      offset: function() {
        return -element.clientHeight + Waypoint.viewportHeight();
      }
    });    
  })(elements[i]);
}

function update(element) {
  updateFooter(element.dataset.name, element.dataset.url);
  updateInfo(element.dataset.info);  
}

function updateFooter(name, url) {
  var visibility = name === "" ? "hidden" : "visible";
  document.querySelector(".footer").style.visibility = visibility;
  var title = document.querySelector(".footer .title");
  document.querySelector(".footer .title a").href = url;
  document.querySelector(".footer .title h1").innerHTML = name;
}

function updateInfo(info) {
  document.querySelector(".info h6").innerHTML = info;
}

document.addEventListener('scroll', function(e) {
  if (window.scrollY === 0) {
    updateFooter("", "");
  }
});