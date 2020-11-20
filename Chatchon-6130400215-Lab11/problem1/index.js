var express = require('express');
var app = express()

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/info', function(req, res) {
    res.render('static_view', {
        name:'Chatchon Chanpetch',
        url:'https://chatchonch.github.io/chatchonprofile/profile',
        intern1:'Seagate',
        urlintern1:'https://www.seagate.com/as/en/',
        intern2:'Toyota Tsusho Electronics (Thailand) Co., Ltd.',
        urlintern2:'https://www.th.nexty-ele.com/home-th.php'
    });
});

app.listen(3000);