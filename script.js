function tgl(){
    var t = document.getElementById("btn");
    if (t.value == "Light mode") {
      t.value = "Dark mode";
      document.body.style.background = "black";
      document.body.style.color = "white";
      document.getElementsByTagName(a).style.color = "white";
    } else if(t.value == "Dark mode") {
      t.value = "Light mode";
      document.body.style.background = "white";
      document.body.style.color = "black";
    
    }
  }
