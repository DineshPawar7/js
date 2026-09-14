import fs from "fs"

fs.rename("script.js", "app.js", function(err) {
    if(err) console.error(err);
    else console.log("done");
})