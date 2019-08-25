var page = require('webpage').create();
page.open('https://www.google.com', function() {
    setTimeout(function() {
        page.render('google.png');
        phantom.exit();
    }, 200);
});