var teller=0;
var afteller=1;

function change2() {
      var paragraaf = document.getElementById("image2")[0];
      var afb4 = "cp1.png";
      var afb5 = "cp2.png";
      var afb6 = "cp7.jpg";
      document.getElementById("image2").onclick=function(){
        teller++;
        if (afteller === 1){
          this.setAttribute("src",afb5);
          afteller++;
        }
        else if (afteller===2){
          this.setAttribute("src",afb6);
          afteller++;
        }
        else {
          this.setAttribute("src",afb4);
          afteller=1}
      }
    }

function change3() {
      var paragraaf = document.getElementById("image3")[0];
      var afb7 = "cp6.jpg";
      var afb8 = "cp4.png";
      var afb9 = "cp8.jpg";
      document.getElementById("image3").onclick=function(){
        teller++;
        if (afteller === 1){
          this.setAttribute("src",afb8);
          afteller++;
        }
        else if (afteller===2){
          this.setAttribute("src",afb9);
          afteller++;
        }
        else {
          this.setAttribute("src",afb7);
          afteller=1}
      }
    }
window.onload = function() {
              change2();
              change3();
}
