var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content = {
    title: 'Article One | Bodhisattwa Roy',
    heading: 'Article One',
    date: 'Oct 26, 2016',
    content: '
           <p>
                 This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. 
          </p>
          <p>
                 This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article.
         </p>
          <p>
                 This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. 
         </p> '
    
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
