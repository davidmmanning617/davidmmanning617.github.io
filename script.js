var ldclient = LDClient.initialize('5a710e426040390af06d0b14', user);
let d = new Date();
ldclient.on('ready', function() {
  var showFeature = ldclient.variation("your.flag.key", false);
  if (showFeature) {
    document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
  } else {
    document.body.innerHTML = "<h1>Not today, friend."</h1>"
  }
});
