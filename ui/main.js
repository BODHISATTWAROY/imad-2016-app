//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    //Create a Request Object.
    var request = new XMLHttpRequest();
    
    //Capture the response and store in a variable.
    request.onreadystatechange = function() {
       if (request.readystate === XMLHttpRequest.DONE) {
           //Take Some Action
           if (request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
            }
       }
       //Not Done Yet.
    };
   
   //Make the Request.
   request.open('GET', 'http://bodhisattwaroy.imad.hasura-app.io/counter', true); 
   request.send(null);
};

//Submit Name
var nameInput = document.getElementById("name");
var name = nameInput.Value;
var submit = document.getElementById("submit_btn");
submit.onclick = function() {
    //Make a Request to the Server and send the Name.
    
    //Capture a list of names and render it as a list.
    var name = ["Name1", "Name2", "Name3", "Name4" ];
    var list = "";
    for (var i=0;i<names.length; i++) {
        list +=  "<li>" + names[i] + "</li>";
    }
    var ul = document.getElementById("NameList");
    ul.innerHTML = list;
    
};
