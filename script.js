ldclient.on('ready', function() {
  var showFeature = ldclient.variation("know-todays-date", false);
  if (showFeature) {
    let d = new Date();
    document.body.innerHTML = "<h1>Today's date is " + d + "</h1>";
  } else {
    document.body.innerHTML = "<h1>Not today, friend."</h1>";
  }
});
