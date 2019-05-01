// Compiled using marko@4.13.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/skygear-cloud$1.0.0/templates/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<script>\n  function onSumbit() {\n    var url = encodeURIComponent(document.querySelector('#url').value)\n    var selector = encodeURIComponent(document.querySelector('#selector').value)\n    var json = encodeURIComponent(document.querySelector('#json').checked || '')\n    var markdown = encodeURIComponent(document.querySelector('#markdown').checked || '')\n\n    document.location = './cheerio?url=' + url\n      + '&selector=' + selector\n      + (json ? '&json=' + json : '')\n      + (markdown ? '&markdown=' + markdown : '')\n  }\n</script><style>\n  label {\n    display: inline-block;\n    width: 5em;\n  }\n</style><div class=\"field\"><label>URL:</label><input id=\"url\"><br><label>Selector:</label><input id=\"selector\"><br><label>JSON:</label><input type=\"checkbox\" id=\"json\"><br><label>Markdown</label><input type=\"checkbox\" id=\"markdown\"><br></div><button onclick=\"onSumbit()\" class=\"example-button\">Scrape!</button>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/skygear-cloud$1.0.0/templates/index.marko"
  };
