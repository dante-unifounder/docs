(function () {
  var path = window.location.pathname.replace(/^\//, "").replace(//$/, "");
  if (!path) return;
  fetch("/jsonld-manifest.json")
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (manifest) {
      if (!manifest) return;
      var data = manifest[path];
      if (!data) return;
      var el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
    })
    .catch(function () {});
})();
