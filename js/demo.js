var raNum;
$(function(){
	var i=0;
	$("#d2").click(function(){
		i++;
		if(i>3){
			alert("你只有三次抽奖机会");
			return;
		}
	   	raNum=Math.random()*360;
	   	if(135 <raNum && raNum <=180){
	   		raNum=Math.random()*45;
	   	}
	   	$(this).rotate({
	   		duration:3000,
	   		angle:0,
	   		animateTo:raNum+720,
	   		callback:function(){
	   			A();
	   		}
	   	})
	});
});
function A(){
	if(0 <raNum && raNum <=45){
	   				alert("恭喜您，中了三等奖");
	   				return;
	}else if(45 <raNum && raNum <=90){
	   				alert("再接再厉1");
	   				return;
	}else if(90 <raNum && raNum <=135){
	   				alert("再接再厉2");
	   				return;
	}else if(135 <raNum && raNum <=180){
	   				alert("恭喜您，中了一等奖");
	   				return;
	}else if(180 <raNum && raNum <=225){
	   				alert("再接再厉3");
	   				return;
	}else if(225 <raNum && raNum <=270){
	   				alert("恭喜你，中了二等奖");
	   				return;
	}else if(270 <raNum && raNum <=315){
	   				alert("再接再厉4");
	   				return;
	}else if(45 <raNum && raNum <=90){
	   				alert("再接再厉5");
	   				return;
	   			}
}
