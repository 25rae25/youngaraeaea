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
