$( document ).ready(function() {
$("#one").hide();
$("#two").hide();
$("#three").hide();
$("#four").hide();
$("#five").hide();
$("#six").hide();
$("#stage1").hide();
$("#stage2").hide();
$("#seven").hide();
$("#eight").hide();
$("#nine").hide();
$("#ten").hide();
$("#eleven").hide();
$("#twelve").hide();
$("#stage3").hide();
$("#thirteen").hide();
$("#fourteen").hide();
$("#fifteen").hide();
$("#sixteen").hide();
 $("#seventeen").hide();
$("#eighteen").hide();
$("#nineteen").hide();
$("#twenty").hide();
$("#twentyone").hide();
$("#twentytwo").hide();
$("#twentythree").hide();
$("#twentyfour").hide();
$("#twentyfive").hide();
$("#twentysix").hide();
$("#twentyseven").hide();
$("#twentyeight").hide();
$("#twentynine").hide();
$("#thirty").hide();
$("#bomb").hide();
$("#bomb2").hide();
$("#bomb3").hide();
$("#bomb4").hide();
$("#bomb5").hide();
$("#bomb6").hide();
$("#bomb7").hide();
$("#bomb8").hide();
$("#bomb9").hide();
$("#bomb10").hide();
$("#bomb11").hide();
$("#bomb12").hide();
$("#bomb13").hide();
$("#bomb14").hide();
$("#bomb15").hide();
$("#bomb16").hide();
$("#bomb17").hide();
$("#bomb18").hide();
$("#bomb19").hide();
$("#bomb20").hide();
$("#bomb21").hide();
$("#bomb22").hide();
$("#bomb23").hide();
$("#bomb24").hide();
$("#stage4").hide();
$("#laststage").hide();
$("#gameover").hide();
$("#end").hide();

$("#start").click(function(){
  $("#start").hide();
  $("#one").show();
  $("#one").fadeOut(2500);
  $("#stage1").show();
  $("#stage1").fadeOut(2500);
});
$("#one").click(function(){
  $("#three").show();
   $("#three").fadeOut(2500);
  $("#one").hide();
});
$("#three").click(function(){
  $("#three").hide();
  $("#two").show();
    $("#two").fadeOut(2500);
});
$("#two").click(function(){
  $("#four").show();
    $("#four").fadeOut(2500);
  $("#two").hide();
});
$("#four").click(function(){
  $("#five").show();
    $("#five").fadeOut(2500);
  $("#four").hide();
});
$("#five").click(function(){
  $("#five").hide();
  $("#six").show();
    $("#six").fadeOut(2500);
});
$("#six").click(function(){
  $("#stage2").show();
  $("#stage2").fadeOut(2500);
  $("#seven").show();
  $("#seven").fadeOut(2000);
  $("#six").hide();
});
$("#seven").click(function(){
  $("#seven").hide();
  $("#eight").show();
  $("#eight").fadeOut(2000);
})
$("#eight").click(function(){
  $("#eight").hide();
  $("#nine").show();
  $("#nine").fadeOut(2000);
});
$("#nine").click(function(){
  $("#nine").hide();
  $("#ten").show();
  $("#ten").fadeOut(2000);
});
$("#ten").click(function(){
$("#ten").hide();  
$("#eleven").show();
$("#eleven").fadeOut(2000);
});
$("#eleven").click(function(){
  $("#eleven").hide();
  $("#twelve").show();
  $("#twelve").fadeOut(2000);
});
$("#twelve").click(function(){
  $("#twelve").hide();
  $("#stage3").show();
  $("#stage3").fadeOut(2500);
  $("#bomb").show();
  $("#bomb").fadeOut(2000);
  $("#thirteen").show();
  $("#thirteen").fadeOut(1000);
});

$("#thirteen").click(function(){
$("#thirteen").hide();
$("#bomb2").show();
$("#bomb2").fadeOut(1000);
$("#fourteen").show();
$("#fourteen").fadeOut(1500);
 });

$("#fourteen").click(function(){
$("#fourteen").hide();
$("#bomb3").show();
$("#bomb3").fadeOut(1000);
$("#fifteen").show();
$("#fifteen").fadeOut(1500);
 });


$("#fifteen").click(function(){
$("#fifteen").hide();
$("#bomb4").show();
$("#bomb4").fadeOut(1000);
$("#sixteen").show();
$("#sixteen").fadeOut(1500);
 });

$("#sixteen").click(function(){
$("#sixteen").hide();
$("#bomb5").show();
$("#bomb5").fadeOut(1000);
$("#seventeen").show();
$("#seventeen").fadeOut(1500);
 });

$("#seventeen").click(function(){
$("#seventeen").hide();
$("#bomb6").show();
$("#bomb6").fadeOut(500);
$("#eighteen").show();
$("#eighteen").fadeOut(500);
$("#stagefour").show();
$("#stagefour").fadeOut(2500);
 });

$("#eighteen").click(function(){
$("#eighteen").hide();
$("#bomb7").show();
$("#bomb7").fadeOut(500);
$("#nineteen").show();
$("#nineteen").fadeOut(1000);
 });

$("#nineteen").click(function(){
$("#nineteen").hide();
$("#bomb8").show();
$("#bomb8").fadeOut(500);
$("#twenty").show();
$("#twenty").fadeOut(1000);
 });

$("#twenty").click(function(){
$("#twenty").hide();
$("#bomb9").show();
$("#bomb9").fadeOut(500);
$("#twentyone").show();
$("#twentyone").fadeOut(1000);
 });

$("#twentyone").click(function(){
$("#twentyone").hide();
$("#bomb10").show();
$("#bomb10").fadeOut(500);
$("#twentytwo").show();
$("#twentytwo").fadeOut(1000);
 });

$("#twentytwo").click(function(){
$("#twentytwo").hide();
$("#bomb11").show();
$("#bomb11").fadeOut(500);
$("#twentythree").show();
$("#twentythree").fadeOut(1000);
 });

$("#twentythree").click(function(){
$("#twentythree").hide();
$("#bomb12").show();
$("#bomb12").fadeOut(300);
$("#bomb13").show();
$("#bomb13").fadeOut(300);
$("#laststage").show();
$("#laststage").fadeOut(1500);
$("#twentyfour").show();
$("#twentyfour").fadeOut(500);
 });

$("#twentyfour").click(function(){
$("#twentyfour").hide();
$("#bomb14").show();
$("#bomb14").fadeOut(300);
$("#bomb15").show();
$("#bomb15").fadeOut(300);
$("#twentyfive").show();
$("#twentyfive").fadeOut(500);
 });

$("#twentyfive").click(function(){
$("#twentyfive").hide();
$("#bomb16").show();
$("#bomb16").fadeOut(300);
$("#bomb17").show();
$("#bomb17").fadeOut(300);
$("#twentysix").show();
$("#twentysix").fadeOut(500);
 });

$("#twentysix").click(function(){
$("#twentysix").hide();
$("#bomb18").show();
$("#bomb18").fadeOut(300);
$("#bomb19").show();
$("#bomb19").fadeOut(300);
$("#twentyseven").show();
$("#twentyseven").fadeOut(500);
 });

$("#twentyfour").click(function(){
$("#twentyfour").hide();
$("#bomb20").show();
$("#bomb20").fadeOut(300);
$("#bomb21").show();
$("#bomb21").fadeOut(300);
$("#twentyfive").show();
$("#twentyfive").fadeOut(500);
 });

$("#twentysix").click(function(){
$("#twentysix").hide();
$("#bomb22").show();
$("#bomb22").fadeOut(300);
$("#bomb23").show();
$("#bomb23").fadeOut(300);
$("#twentyseven").show();
$("#twentyseven").fadeOut(400);
 });

$("#twentyseven").click(function(){
$("#twentyseven").hide();
$("#bomb24").show();
$("#bomb24").fadeOut(300);
$("#twentyeight").show();
$("#twentyeight").fadeOut(400);
 });

$("#twentyeight").click(function(){
$("#twentyeight").hide();
$("#end").show();
 });
$("#bomb").click(function(){
  $("#gameover").show();
});
$("#bomb1").click(function(){
  $("#gameover").show();
});
$("#bomb2").click(function(){
  $("#gameover").show();
});
$("#bomb3").click(function(){
  $("#gameover").show();
});
$("#bomb4").click(function(){
  $("#gameover").show();
});
$("#bomb5").click(function(){
  $("#gameover").show();
});
$("#bomb6").click(function(){
  $("#gameover").show();
});
$("#bomb7").click(function(){
  $("#gameover").show();
});
$("#bomb8").click(function(){
  $("#gameover").show();
});
$("#bomb9").click(function(){
  $("#gameover").show();
});
$("#bomb10").click(function(){
  $("#gameover").show();
});
$("#bomb11").click(function(){
  $("#gameover").show();
});
$("#bomb12").click(function(){
  $("#gameover").show();
});
$("#bomb13").click(function(){
  $("#gameover").show();
});
$("#bomb14").click(function(){
  $("#gameover").show();
});
$("#bomb15").click(function(){
  $("#gameover").show();
});
$("#bomb16").click(function(){
  $("#gameover").show();
});
$("#bomb17").click(function(){
  $("#gameover").show();
});
$("#bomb18").click(function(){
  $("#gameover").show();
});
$("#bomb19").click(function(){
  $("#gameover").show();
});
$("#bomb20").click(function(){
  $("#gameover").show();
});
$("#bomb21").click(function(){
  $("#gameover").show();
});
$("#bomb22").click(function(){
  $("#gameover").show();
});
$("#bomb23").click(function(){
  $("#gameover").show();
});
$("#bomb24").click(function(){
  $("#gameover").show();
});
$("#pagerefresh").click(function(){
location.reload();
});

});