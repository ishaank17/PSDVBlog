// Function to calculate z-values based on x and y
function custom(x, y) {
  return Math.sin(x / 50) * Math.cos(y / 50) * 50 + 50;
}

// Function to draw the 3D visualization
function drawVisualization() {
  var graphData = new vis.DataSet();
  var steps = 50;
  var axisMax = 314;
  var axisStep = axisMax / steps;

  for (var x = 0; x < axisMax; x += axisStep) {
    for (var y = 0; y < axisMax; y += axisStep) {
      var value = custom(x, y);
      graphData.add({ x: x, y: y, z: value, style: value });
    }
  }
  console.log("Data being passed:", graphData);
  var graphOptions = {
    width: "600px",
    height: "600px",
    style: "surface",
    showPerspective: true,
    showGrid: true,
    showShadow: false,
    keepAspectRatio: true,
    verticalRatio: 0.5,
  };

  var graphContainer = document.getElementById("mygraph");
  new vis.Graph3d(graphContainer, graphData, graphOptions);
}

// Function to draw the network graph
function drawNodeGraph() {
  console.log("node");
  var nodes = new vis.DataSet([
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
  ]);

  var edges = new vis.DataSet([{ from: 1, to: 2 }]);

  var networkData = { nodes: nodes, edges: edges };
  var networkOptions = {
    physics: {
      enabled: true,
    },
    interaction: {
      dragNodes: true,
    },
    edges: {
      arrows: "to",
    },
  };

  var networkContainer = document.getElementById("nodeGraph");
  new vis.Network(networkContainer, networkData, networkOptions);
}
function drawTimeline() {
  var items = new vis.DataSet([ 
    { id: 1, content: "Event 1", start: "2023-01-01", end: "2023-02-10" },      
    { id: 2, content: "Event 2", start: "2023-02-15" , end: "2023-03-9" }]); 
    var container = document.getElementById("timelineGraph"); 
    new vis.Timeline(container, items, {}); 
}
// Ensure both visualizations run after the page loads
document.addEventListener("DOMContentLoaded", function () {
  drawVisualization();
  drawNodeGraph();
  drawTimeline();
});
