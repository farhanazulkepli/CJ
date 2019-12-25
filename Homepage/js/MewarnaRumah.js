function chooseColour(colourNumber, chosenColour) {

  	   	   //store selected colour in global variable for use in changeColor function.
  	   	   colour = chosenColour;

  	   	   //remove selected button styling.
           var removeSquareBorder = document.getElementsByClassName("heart-square");
           for(var x = 0; x < removeSquareBorder.length; x++) {
           	  removeSquareBorder[x].style.borderBottom = "solid rgb(158, 0, 93) 2px";
           	  removeSquareBorder[x].style.borderRight = "solid rgb(158, 0, 93) 2px";
           }

           var removeLeftCircleBorder = document.getElementsByClassName("left-heart-circle");
           for(var y = 0; y < removeLeftCircleBorder.length; y++) {
           	  removeLeftCircleBorder[y].style.border = "solid rgb(158, 0, 93) 2px";
           }

           var removeRightCircleBorder = document.getElementsByClassName("right-heart-circle");
           for(var z = 0; z < removeRightCircleBorder.length; z++) {
           	  removeRightCircleBorder[z].style.border= "solid rgb(158, 0, 93) 2px";
           }

           //style selected colour button

           var a = document.getElementsByClassName("heart-square");
           a[colourNumber].style.borderBottom = "dotted black 2px";
           a[colourNumber].style.borderRight = "dotted black 2px";

           var b = document.getElementsByClassName("left-heart-circle");
           b[colourNumber].style.border = "dotted black 2px";

           var c = document.getElementsByClassName("right-heart-circle");
           c[colourNumber].style.border = "dotted black 2px";

  	   }


  	   function changeColour(idee) {
  	   	
  	   	  //get id then get the class associated with the element with that id.
  	   	  var getClass = document.getElementById(idee).className;

          //get all elements with the same class name.
  	   	  var applyColour = document.getElementsByClassName(getClass);
          
          //apply chosen colour to all instances of the class selected.
  	   	  for(var a = 0; a < applyColour.length; a++) {
            applyColour[a].style.backgroundColor = colour;
  	  	  }

  	   }

       //refresh page to reset colouring page.
  	   function reset() {
  	   	  location.href = location.href;
  	   }