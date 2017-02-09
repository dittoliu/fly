

window.onload = function (){
	var img = new Image();
	img.src = "pano/ag.jpg";
	$("#audio")[0].play();
	$('iframe').attr("src","pano/index.html");
	function init(){
		$(".panoMask").hide();
		$("#stage>div").addClass("container");
		$(".Planet").addClass("PlanetMove");
		setTimeout(function(){		
			$('iframe')[0].contentWindow.addParam(img.src);
		},3000);
		setTimeout(function(){
			$('#stage').css({"display":"none"});
			$('iframe').show();
		},3500);
	}
	$('body').on("touchstart",function(){
		init();
		//setTimeout(function(){
			//$('iframe')[0].contentWindow.changeContent();
		//},4000)
	});
	$('.startBtn').on("click",function(){
		init();

	})


	function randomValue (type,h) {
		var maxValue =0;
		switch(type){
			case 'w':maxValue= $(document).width()-h;break;

			case 'h':maxValue= $(document).height()-h;break;
		}
		return (Math.random()*maxValue);
	}
	function fRandomBy(under, over){
		switch(arguments.length){
			case 1: return parseInt(Math.random()*under+1);
			case 2: return parseInt(Math.random()*(over-under+1) + under);
			default: return 0;
		}
	}
	var flyImages = $('.imageBox img');
	$(flyImages).each(function(i,v){
		$(this).css({
			"width":$(v).width()*0.5+"px",
			"left":fRandomBy(-200,300)+"px",
			"top":fRandomBy(-50,200)+"px",
			"transform":"translateZ("+500*(i+1)+"px) rotateY(10deg)"
		})
	});

	$('.panoLoading').hide();
	document.body.addEventListener('touchmove', function (event) {
       	event.preventDefault();
    }, false);
}
