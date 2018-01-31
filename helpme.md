Step 1: feel like at least I have this part right. Maybe?
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
    <link rel="stylesheet" href="davidmmanning617.github.io/style.css">
    <script crossorigin="anonymous" src="https://app.launchdarkly.com/snippet/ldclient.min.js"></script> // <-- added SDK script tag
</head>
```
    
Step 2:
not sure what I need to change in this line, or even where to put it. This is most confusing to me.
```
var ldclient = LDClient.initialize('5a710e426040390af06d0b14', {"key": "test@example.com"});
```

Step 3:
Can't seem to figureout how to incorporate the flag logic into the js I have.
```
let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
```
```
ldclient.on('ready', function() {
  var showFeature = ldclient.variation("know-todays-date", false);
  if (showFeature) {
    // application code to show the feature
  } else {
    // the code to run if the feature is off
  }
});
```
