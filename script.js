var ldclient = LDClient.initialize('5a710e426040390af06d0b14');
ldclient.on('ready', function() {
  var showFeature = ldclient.variation("know-todays-date", false);
  if (showFeature) {
    let d = new Date();
    document.body.innerHTML = "<h1>Today's date is " + d + "</h1>";
  } else {
    document.body.innerHTML = "<h1>nope</h1>";
  }
});
