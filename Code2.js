var nodes = null;
var edges = null;
var network = null;

function draw() {
  console.log("Ran");
  nodes = [];
  edges = [];
  // randomly create some nodes and edges
  var data = getScaleFreeNetwork(60);

  // create a network
  var container = document.getElementById("mynetwork");

  var options = {
    physics: {
      stabilization: false,
      wind: { x: 0, y: 0 },
    },
    configure: {
      filter: function (option, path) {
        if (path.indexOf("physics") !== -1) {
          return true;
        }
        if (path.indexOf("smooth") !== -1 || option === "smooth") {
          return true;
        }
        return false;
      },
      container: document.getElementById("config"),
    },
  };
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});
