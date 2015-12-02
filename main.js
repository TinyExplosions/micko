var marked = require('marked'),
    fs = require('fs');

fs.writeFile("./index.html", marked(fs.readFileSync('./index.md', 'utf8')), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("index.html created");
});
