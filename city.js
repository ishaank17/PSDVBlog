function cityRoutes(){console.log("started");
 var nodes = new vis.DataSet([
    { id: 1, label: "New York", title: "Largest city in the US", color: '#f00', size: 25 },
    { id: 2, label: "Los Angeles", title: "Entertainment capital", color: '#0f0', size: 22 },
    { id: 3, label: "Chicago", title: "Windy City", color: 'lightblue', size: 20 },
    { id: 4, label: "Houston", title: "Energy capital", color: '#ff0', size: 18 },
    { id: 5, label: "Phoenix", title: "Valley of the Sun", color: '#f0f', size: 16 },
    { id: 6, label: "Philadelphia", title: "Historical city", color: '#0ff', size: 19 },
    { id: 7, label: "San Antonio", title: "Riverwalk city", color: 'lightgreen', size: 17 },
    { id: 8, label: "San Diego", title: "America's Finest City", color: 'orange', size: 15 },
    { id: 9, label: "Dallas", title: "Big D", color: 'green', size: 21 },
    { id: 10, label: "San Jose", title: "Silicon Valley", color: 'pink', size: 14 }
  ]);

  // Edges representing routes with attributes
  var edges = new vis.DataSet([
    { from: 1, to: 2, label: "5 hours", title: "Flight time: 5 hours, Cost: $300", arrows: 'to' },
    { from: 1, to: 3, label: "2 hours", title: "Flight time: 2 hours, Cost: $150", arrows: 'to' },
    { from: 2, to: 5, label: "1.5 hours", title: "Flight time: 1.5 hours, Cost: $120", arrows: 'to' },
    { from: 3, to: 4, label: "2.5 hours", title: "Flight time: 2.5 hours, Cost: $200", arrows: 'to' },
    { from: 4, to: 7, label: "1 hour", title: "Flight time: 1 hour, Cost: $80", arrows: 'to' },
    { from: 5, to: 8, label: "45 mins", title: "Flight time: 45 mins, Cost: $70", arrows: 'to' },
    { from: 6, to: 1, label: "1.8 hours", title: "Flight time: 1.8 hours, Cost: $140", arrows: 'to' },
    { from: 7, to: 9, label: "1 hour", title: "Flight time: 1 hour, Cost: $90", arrows: 'to' },
    { from: 8, to: 10, label: "2 hours", title: "Flight time: 2 hours, Cost: $180", arrows: 'to' },
    { from: 9, to: 3, label: "3 hours", title: "Flight time: 3 hours, Cost: $250", arrows: 'to' }
  ]);

  // Configuration options for the network
  var data = { nodes: nodes, edges: edges };
  var options = {
    nodes: {
      shape: 'circle',
      font: { size: 12, color: 'black' ,weight:'bold'},
      borderWidth: 2
    },
    edges: {
      width: 2,
      color: 'black',
      font: { align: 'top' }
    },
    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -2000,
        centralGravity: 0.3,
        springLength: 95,
        springConstant: 0.04
      }
    }
  };

  // Initialize the network
  var container = document.getElementById('cityRoutes');
new vis.Network(container, data, options);}