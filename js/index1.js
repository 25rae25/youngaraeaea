$(".header .bars").click(onBarClick);

function onBarClick() {
	if($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).find(".bar1").css("animation-name", "bar1-rev");
		$(this).find(".bar2").css("animation-name", "bar2-rev");
		$(this).find(".bar3").css("animation-name", "bar3-rev");
	}
	else {
		$(this).addClass("active");
		$(this).find(".bar1").css("animation-name", "bar1");
		$(this).find(".bar2").css("animation-name", "bar2");
		$(this).find(".bar3").css("animation-name", "bar3");
	}
}




var slide = new Slide(".main-wrap", ".banner", "scale", onComplete);


function onComplete(prevSlide, nextSlide, container) {
	$(prevSlide).find(".slogan").css({"opacity": 0, "transform": "scale(0.5)"});
	$(prevSlide).find(".writer").css({"opacity": 0, "transform": "translateY(5vw)"});
	$(nextSlide).find(".slogan").css({"opacity": 1, "transform": "scale(1)"});
	$(nextSlide).find(".writer").css({"opacity": 1, "transform": "translateY(0)"});
}
