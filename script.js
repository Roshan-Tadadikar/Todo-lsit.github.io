var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

function myfunction(){
    var create = document.createElement("li");
    var select = document.getElementById('all-list');
    var input = document.getElementById("input").value;
     if(input==""){
       window.alert("Please type something first");
     }
     else{
      var span = document.createElement('span');
      var push = select.appendChild(create);
     create.append(input);
     }

     input = "";

     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     create.appendChild(span);
   
     for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
}
    }
    }


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

