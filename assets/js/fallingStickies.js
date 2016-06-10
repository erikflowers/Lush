/**
 * Edited by Bob, original author unknown
 */
var STICKYRUNNER; // needed to stop the stickies
var STICKYSTARTED = false;

function startStickies(){

	if(STICKYSTARTED === true){
		return;
	} else {
		STICKYSTARTED = true;
	}

	var speedC 			= 15,	//here you can define speed of stickies
	    rotation 		= 1,	//define rotation of stickies
	    rotationTrue 	= 1,	//whether stickies rotate (1) or not (0)
	    numberOfStickies= 24,	//define number of stickies
	    size 			= 40,	//general size of stickies, final size is calculated randomly (with this number as general parameter)
	    typeOfSticky 	= 0,	//type of leav, 0 - maple sticky, 1 - saw sticky, 2 - normal sticky, 3 all types together
	    colors			= ['E1E68B', '98CC03', 'C25A00', '3F6BA6', '6188C9', '743966', 'DF425F', '9E3226', '97631A', 'D80076'],
	    fps 			= 60,
		Ypos 			= new Array(),
		Xpos 			= new Array(),
		Speed  			= new Array(),
		startYPos 		= new Array(),
		CStrafe 		= new Array(),
		Strafe 			= new Array(),
		rotationAll 	= new Array(),
		height 			= new Array(),
		width 			= new Array(),
		opacitySticky 	= new Array(),
		counter 		= 0,
		WinWidth 		= $(window).width(),
		WinHeight 		= $(window).height(),
		onOff			= false;  // false = off

	for (i = 0 ;i < numberOfStickies;i++){

		width[i] = Math.round(Math.random()*size+20); //random width and height according to chosen parameter
	    height[i]= Math.round(Math.random()*size+20);
		 
		if (width[i] > height[i]*1.5 || height[i] > width[i]*1.5){
			width[i] = height[i];
		}
		
		Ypos[i] 		= -Math.random() * 500 - 40; //starting y position of stickies
		Xpos[i] 		= Math.round(Math.random()*(WinWidth)-width[i]*3);//randomization of x position of stickies
		opacitySticky[i]= 0.3;
		Speed[i] 		= Math.random() * speedC + 2; //speed of stickies
		rotationAll[i] 	= Math.round(Math.random()) * rotation + Speed[i]; //rotation of stickies
		CStrafe[i] 		= 0;
		Strafe[i] 		= Math.random()*0.06 + 0.05; //strength of right/left strafe
		
		$('body').append('<div class="stickies'+i+' sticky" style="background-color:#' + colors[Math.floor(Math.random()*colors.length)] + ';position:fixed;top:'+Ypos[i]+'px;left:'+Xpos[i]+'px;height:'+height[i]+'px;width:'+width[i]+'px;opacity:'+opacitySticky[i]+';"></div>');

	}

	STICKYRUNNER = setInterval(function(){

		for (i = 0 ;i < numberOfStickies;i++)
	    {
			strafey = Speed[i] * Math.sin(90 * Math.PI/180);//defining strafe
			strafex = Speed[i] * Math.cos(CStrafe[i]);
			rotationAll[i] += rotation + Speed[i];

			Ypos[i] += strafey;
			Xpos[i] += strafex; 
			if (Ypos[i] < 0){//setting opacity
				opacitySticky[i]=1;
				$(".stickies"+i)
					.css({
						opacity:opacitySticky[i]
					});			
			}
			if (Ypos[i] > WinHeight - height[i] * 4){//stickies slowly disappearing at the end of browser window
				opacitySticky[i]-=0.05;	
				$(".stickies"+i)
					.css({
						opacity:opacitySticky[i]
					});

			}
			if (Ypos[i] > WinHeight - (width[i] + height[i]/2)){//when stickies reach certain browser height they are transported back to the begining
				Ypos[i]	= -50;
				Xpos[i]	= Math.round(Math.random()*WinWidth-width[i]*4);
				Speed[i]= Math.random()*speedC + 2;
			}
			if (rotationTrue == 1){//decision whether rotation is applied or not
				$(".stickies"+i).css({top: Ypos[i], left: Xpos[i]});
				$(".stickies"+i).rotate3Di(rotationAll[i], 0);
			}
			else if (rotationTrue == 0){
				$(".stickies"+i).css({top: Ypos[i], left: Xpos[i]});
			}
			CStrafe[i]+=Strafe[i];
	    }
		
	} ,50);//function time out - fps of stickies

}

function stopStickies(){
	clearInterval(STICKYRUNNER);
	STICKYSTARTED = false;
	$('.sticky').css('opacity', 0).remove();
}
