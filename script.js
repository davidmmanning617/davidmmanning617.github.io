
ldclient.on('ready', function() {
  let d = new Date();
  var showFeature = ldclient.variation("know-todays-date", false);
  if (showFeature) {
    document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
  } else {
    document.body.innerHTML = "<h1>Not today, friend."</h1>"
  }
});
