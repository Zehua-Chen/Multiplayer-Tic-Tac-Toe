const child = require('child_process');

child.spawn("node", ["build-server.js"]).stdout.on("data", function(data) {
    console.log(data.toString());
});

child.spawn("node", ["build-client.js"]).stdout.on("data", function(data) {
    console.log(data.toString());
});