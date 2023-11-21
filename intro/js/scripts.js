var bgImage = $(".bg");
    bgImage.each(function(a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
}); 
$(".lrt").on({
	mouseenter: function () {
		$(".dark-ver").addClass("vis-dark");
	} 
	}); 
$(".drt").on({
	mouseenter: function () {
		$(".dark-ver").removeClass("vis-dark");
	} 
});