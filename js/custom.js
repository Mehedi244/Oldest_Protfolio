$(document).ready(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() > 350){
				$(".menu").css({"background" :"linear-gradient(to bottom, #006666 17%, #000000 100%)"})
			}
			else{
				$(".menu").css({"background" : ""})

			}
		})
	})

	$(document).ready(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() > 350){
				$("li").css({"background" :"black"})
			}
			else{
				$("li").css({"background" : ""})

			}
		})
	})