$(".header .bars").click(onBarClick)

function onBarClick() {
	if($(this).hasClass("default")) {
		$(this).removeClass("default").addClass("active");
		fixShow(true);
	}
	else if($(this).hasClass("active")) {
		$(this).removeClass("active").addClass("default");
		fixShow(false);
	}
	else {
		$(this).addClass("active");
		fixShow(true);
	}
}