$(function() {
  
	$(".morph-content").hide();

	$(".watch-now-btn").click(function() {
		$(".morph-content").slideToggle();
	});


	$(".morph-content-2").hide();

	$(".message-btn").click(function() {
		$(".morph-content-2").slideToggle();
	});


	var items = $('.circle a');


	for(var i = 0, l = items.length; i < l; i++) {
	  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	 
	  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	}



	

	// nav/menu
	$(".nav.nav-pills li").on("click",function(){
	  $(".nav.nav-pills li").removeClass("active");
	  $(this).addClass("active");
	});





});



$(document).ready(function() {
    $('#dataTable').DataTable();
} );



