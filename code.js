// Function to calculate z-values based on x and y
function custom(x, y) {
    return Math.sin(x / 50) * Math.cos(y / 50) * 50 + 50;
  }

  // Function to draw the 3D visualization
  function drawVisualization() {
    // Create and populate a data table
    var data = new vis.DataSet();
    var steps = 50; // Number of data points per axis
    var axisMax = 314; // Maximum value for x and y axes
    var axisStep = axisMax / steps;

    // Generate data points
    for (var x = 0; x < axisMax; x += axisStep) {
      for (var y = 0; y < axisMax; y += axisStep) {
        var value = custom(x, y);
        data.add({ x: x, y: y, z: value, style: value });
      }
    }

    // Define options for the graph
    var options = {
      width: "600px",
      height: "600px",
      style: "surface",
      showPerspective: true,
      showGrid: true,
      showShadow: false,
      keepAspectRatio: true,
      verticalRatio: 0.5,
    };

    // Create the graph in the specified container
    var container = document.getElementById("mygraph");
    new vis.Graph3d(container, data, options);
  }



