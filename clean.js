const rimraf = require("rimraf");

const status = rimraf.rimrafSync(["./.next", "./node_modules"]);

if (status) console.log("deleted");
