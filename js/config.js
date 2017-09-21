var CONFIG = {
  // your website's title
  document_title: "江斌的官方博客",

  // index page
  index: "markdown.md",

  // sidebar file
  sidebar_file: "sidebar.md",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/atanx/atanx.github.io/articles/master",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

