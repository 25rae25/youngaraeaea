var mainNow = 0;
var mainSlide = $(".main-wrap > .banner");
var mainLast = mainSlide.length - 1;
var mainSubs = [
	"The best rated SPA in New <br> York",
	"Register now for our beauty <br> program"
];
var mainConts = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean<br> comor.", "Lorem ipsum dolor adipiscing elit. Aenean commodo ligula eget dolor."];
$(".main-wrap").find(".sub").html(mainSubs[mainNow]);
$(".main-wrap").find(".cont").html(mainConts[mainNow]);
mainInit();

function mainInit() {
	$(".main-wrap > banner").remove();
	$(mainSlide[mainNow]).appendTo(".main-wrap");
}

function mainAni() {
	var slide = $(mainSlide[mainNow]).appendTo(".main-wrap").css({"transform": "scale(1.3)", "opacity": 0});
	var leftValue = slide.data("pos");
	$(".main").css("left", leftValue);
	setTimeout(function(){
		slide.css({"transform": "scale(1)", "opacity": 1});
	}, 0);
	setTimeout(mainInit, 500);
	$(".main-wrap .main").find(".sub").css({"transform": "scale(0.8)", "opacity": 0});
	$(".main-wrap .main").find(".cont").css({"transform": "translateY(50px)", "opacity": 0});
	setTimeout(function(){
		$(".main-wrap").find(".sub").html(mainSubs[mainNow]);
		$(".main-wrap").find(".cont").html(mainConts[mainNow]);
		$(".main-wrap").find(".sub").css({"transform": "scale(1)", "opacity": 1});
		$(".main-wrap").find(".cont").css({"transform": "translateY(0)", "opacity": 1});
	}, 1000);
}


function onMainPrev() {
	mainNow = (mainNow == 0) ? mainLast : mainNow - 1;
	mainAni();
}
function onMainNext() {
	mainNow = (mainNow == mainLast) ? 0 : mainNow + 1;
	mainAni();
}

function onScroll() {
	var sct = $(this).scrollTop();
	if(sct > 100) {
		$(".title-wrapper").addClass("active");
		$(".title-wrapper img.black").css("opacity", 1);
	}
	else {
		$(".title-wrapper").removeClass("active");
		$(".title-wrapper img.black").css("opacity", 0);
	}
}





/******************** mark-wrap *********************/
$.get("../json/mark.json", onMarkLoad);
function onMarkLoad(r) {
	var html;
	for(var i in r.mark) {
	html  =  '<li class="mark">';
	html += '<div class="ma-pic"><img src="'+r.mark[i].src+'" class="img"></div>';
	html += '<div class="ma-tit">'+r.mark[i].title+'</div>';
	html += '<div class="ma-cont">'+r.mark[i].cont+'</div>';
	html += '<div class="ma-sub">'+r.mark[i].sub+'</div>';
	html += '</li>';
	$(".mark-wrap").append(html);
	}
}


/******************** last-wrap *********************/
var Now = 0

$(".last-wrap .bt-prev").click(onLastPrev);
$(".last-wrap .bt-next").click(onLastNext);

function onLastPrev() {
	now = now - 1;
	lastAni();
}

function onLastNext() {
	now = now + 1;
	lastAni();
}

function lastAni() {
	$(".bt").show();
}


/******************** 이벤트 설정 *********************/
$(".main-wrap .bt-prev").click(onMainPrev);
$(".main-wrap .bt-next").click(onMainNext);
$(window).scroll(onScroll);





