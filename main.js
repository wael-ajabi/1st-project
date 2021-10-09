
 $("#feedback").hide();
 $("#contact").hide();

//$("#container").hide();
//$("#start").hide();

//$('body').append('<div id= "para-1" S><p id= "para-2" >Welcome to the c17 akinator game , Have fun</p></div>' );
//$("#para-2").hide(4000);
//$("#para-1").hide(5000);
//$("#container").show(6000);

//$("#para1").remove();
//$("#start").show(8000);
/*function feedback() {
 $("#home-page").hide();
  $("#contact").hide();
 $("#feedback").show();
}*/
function home(){
 $("#feedback").hide();
  $("#contact").hide();
 $("#home-page").show();
}

function contact(){
 $("#feedback").hide();
 $("#home-page").hide();
 $("#contact").show();

}


 
function add(){
  var name = $("#name").val();
  var feedback= $("#a").val();
 var $body = $('#sub')
          var s = $('<div class="ss" ></div>'); 
          s.append('<h1>'+'@'+name+'</h1>'+'<hr>'+'<p>'+feedback+'</p>' );
          s.prependTo($body);};


function start(){
 $("#home-page").hide();
 $("#gamestart").show();

}


function yes1(){
   $(".questions").html("");
   $(".questions").append('<h1> Does the instructor always have problems?</h1><div class="response"><button id="btn1" class="btn" onclick="yes11()">Yes</button><button id="btn2" class="btn" onclick="no11()">No</button></div>')	
}
function yes11(){
	   $(".questions").html("");
	 $(".questions").append('<h1><span>Its halim isnt ? </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02DN1GK21J-66c28687d1df-512"></div>')}
	 $()
function no11(){
   $(".questions").html("");
   $(".questions").append('<h1> is the instructor our father?</h1><div class="response"><button id="btn1" class="btn" onclick="yes()">Yes</button><button id="btn2" class="btn" onclick="no11()">No</button>')	
}



	