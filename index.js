// Creates 'index.html' by rendering "clm-manifesto.md" into "template.html"

var fs = require("fs");
var marky = require("marky-markdown");

var templ = fs.readFileSync("template.html", encoding="utf-8");
var manifesto = marky(fs.readFileSync("clm-manifesto.md", encoding="utf-8")).html();

templ = templ.replace("{{manifesto}}", manifesto);

fs.writeFileSync("index.html", templ, encoding="utf-8");
