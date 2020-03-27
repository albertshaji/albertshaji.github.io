var x = document.links;
for (var i = 3; i < x.length; i++) {
    if (x[i].hostname != window.location.hostname) {
        x[i].target = "_blank";
        x[i].rel = "noopener noreferrer";
  }
}
