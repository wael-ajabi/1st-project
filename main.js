
 $("#feedback").hide();
$("#contact").hide();
$("#gamestart").hide();
//$("#container").hide();
//$("#start").hide();

//$('body').append('<div id= "para-1" S><p id= "para-2" >Welcome to the c17 akinator game , Have fun</p></div>' );
//$("#para-2").hide(4000);
//$("#para-1").hide(5000);
//$("#container").show(6000);

//$("#para1").remove();
//$("#start").show(8000);
function feedback() {
 $("#home-page").hide();
  $("#contact").hide();
  $ ("#gamestart").hide();

 $("#feedback").show();
}
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
function refresh(){
location.reload();

}
////instructors
// halim
function yes1(){
   $(".questions").html("");
   $(".questions").append('<h1> Does the instructor always have problems?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes12()">Yes</button><button id="btn2" class="btn" onclick="no12()">No</button></div>')	
}
function yes12(){
$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
	   $(".questions").html("");
	 $(".questions").append('<h1><span>Its halim isnt ? </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02DN1GK21J-66c28687d1df-512"></div>');
	 }
	 //////////////////
function no12(){
	$("#thinking").attr('src','1_lTWsQr8phKRUVGMjL7SqGg.png');
   $(".questions").html("");
   $(".questions").append('<h1> is the instructor your father?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes13()">Yes</button><button id="btn2" class="btn" onclick="no13()">No</button>')	
}
function yes13(){
$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span>of course its dhia! </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02D92S51SA-af049a06c010-512"></div>')}

	function no13(){
	$("#thinking").attr('src','1_lTWsQr8phKRUVGMjL7SqGg.png');
   $(".questions").html("");
   $(".questions").append('<h1> is it someone who loves saying wakey wakey ?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes14()">Yes</button><button id="btn2" class="btn" onclick="no14()">No</button>')	}

   function yes14(){
$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span> it must be our beloved cyrine! </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02DFQMNYAX-852db1973bb8-512"></div>')}
   function no14(){
   	$("#thinking").attr('src','1_lTWsQr8phKRUVGMjL7SqGg.png');
   $(".questions").html("");
   $(".questions").append('<h1>is it someone who is always looking for his vape?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes15()">Yes</button><button id="btn2" class="btn" onclick="no15()">No</button>')	}
   function yes15(){
   	$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span> its achref , i knew it </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button></div>')}

     function no15(){
   	$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span>the best for last! it has to be wala!</h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02DCQ9DUCV-3d4aeeb3088c-512"></div>')}
   //////////////////////////////////////////////studentssssss ladies first!
   function no1(){
   	$("#thinking").attr('src','1_lTWsQr8phKRUVGMjL7SqGg.png');
   $(".questions").html("");
   $(".questions").append('<h1>is this person a girl ?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes2()">Yes</button><button id="btn2" class="btn" onclick="no2()">No</button>')	}
function yes2(){
		$("#thinking").attr('src','1_lTWsQr8phKRUVGMjL7SqGg.png');
   $(".questions").html("");
   $(".questions").append('<h1>does she have a curly hair  ?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes4()">Yes</button><button id="btn2" class="btn" onclick="no3()">No</button>')	}
function yes4(){
		$("#thinking").attr('src','1_lTWsQr8phKRUVGMjL7SqGg.png');
   $(".questions").html("");
   $(".questions").append('<h1>is she a boxer?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes5()">Yes</button><button id="btn2" class="btn" onclick="no6()">No</button>')	}
   
    function yes5(){
$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span> it has to be sarah! </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7GXGQ-f761f0901f57-512"></div>')}
    function no6(){
$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span> it has to be shaima! </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F78D6U-dcec32b49f0a-512"></div>')}
   function no3(){
		$("#thinking").attr('src','1_lTWsQr8phKRUVGMjL7SqGg.png');
   $(".questions").html("");
   $(".questions").append('<h1>is she a painter?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes7()">Yes</button><button id="btn2" class="btn" onclick="no4()">No</button>')}
   function yes7(){
   	$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span> it has to be sarah! </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E7NWDUJU-8839e434f2be-512"></div>')}
function no4(){
		$("#thinking").attr('src','1_lTWsQr8phKRUVGMjL7SqGg.png');
   $(".questions").html("");
   $(".questions").append('<h1>is she  married?</h1><br><br><div class="response"><button id="btn1" class="btn" onclick="yes8()">Yes</button><button id="btn2" class="btn" onclick="no5()">No</button>')}
function yes8(){
   	$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span> it has to be alia! </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7G532-61dfc4e03265-512"></div>')}
   function no5(){
   	$("#thinking").attr('src','EDLj6j0U8AADrIM.png');
 $(".questions").html("");
   $(".questions").append('<h1><span> it has to be sahar! </h1></span><div class="response"><button id="btn1" class="btn" onclick="refresh()">Restart</button><img class="images" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7A96U-3007546eb85d-512"></div>')}