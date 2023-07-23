function tgl(){
    var t = document.getElementById("btn");
    if (t.value == "Dark mode") {
      t.value = "Light mode";
      document.body.style.background = "#171717";
      document.body.style.color = "white";
      
    } else if(t.value == "Light mode") {
      t.value = `Dark mode`;
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  }
