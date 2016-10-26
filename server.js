var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
      'article-One': { 
        title: 'Article One | Bodhisattwa Roy',
        heading: 'Article One',
        date: 'Oct 26, 2016',
        content: `  
                 <p>
                     This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. 
                 </p>
                 <p>
                     This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article.
                 </p>
                 <p>
                     This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. This is the content of my first Article. 
                 </p>
          `
    },
      'article-Two':{
        title: 'Article Two | Bodhisattwa Roy',
        heading: 'Article Two',
        date: 'Oct 27, 2016',
        content: `  
                 <p>
                     This is the content of my second Article. 
                 </p>`
    },
      'article-Three': {
        title: 'Article Three | Bodhisattwa Roy',
        heading: 'Article Three',
        date: 'Oct 28, 2016',
        content: `  
                 <p>
                     This is the content of my third Article. 
                 </p>`
    },
};      
function createTemplate (data) {
    var title =data.title;
    var heading =data.heading;
    var date =data.date;
    var content =data.content;
    
var htmlTemplate = `
<html>
       <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
           <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
          <div>
            <a href="/">Home</a>
          </div>
          <hr/>
          <h3>
            ${heading}
          </h3>
          <div>
            ${date}
          </div>
          <div>
            ${content}
          </div>
        </div>
    </body>     
</html>
`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req, res) {
    //articleName == article-One
    //articles[articleName] == {} content object for article-One
    var articleName =req.parans.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/article-two',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
