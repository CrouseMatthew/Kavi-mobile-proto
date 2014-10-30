
$(document).ready(function(){$('[data-toggle=offcanvas]').click(function() {
  $('.row-offcanvas').toggleClass('active');
});

$('.btn-toggle').click(function() {
  $(this).find('.btn').toggleClass('active').toggleClass('btn-default').toggleClass('btn-primary');
});

$(".op1").click(function(e){
	if(!$('#metadata2').hasClass("hide"))
		{$('#metadata2').toggleClass('hide');}
	if(!$('#metadata3').hasClass("hide"))
		{$('#metadata3').toggleClass('hide')};
	$('#metadata1').toggleClass('hide');

});

$(".op2").click(function(e){
	if(!$('#metadata1').hasClass("hide"))
		{$('#metadata1').toggleClass('hide')};
	if(!$('#metadata3').hasClass("hide"))
		{$('#metadata3').toggleClass('hide')};
	$('#metadata2').toggleClass('hide');

});

$(".op3").click(function(e){
	if(!$('#metadata2').hasClass("hide"))
		{$('#metadata2').toggleClass('hide')};
	if(!$('#metadata1').hasClass("hide"))
		{$('#metadata1').toggleClass('hide')};
	$('#metadata3').toggleClass('hide');

});

$(".rsvp").click(function(e){

	$('.hideme').toggleClass('hide');
	$('.alert').toggleClass('hide');

});

$(".votebutton").click(function(e){

	$('.hideme').toggleClass('hide');
	$('.alert').toggleClass('hide');

});

(function(){
	var date = Date();
	date = date.substr(0,date.length -23);
	date = date.slice(0,3)+', '+date.slice(4);
	if(document.getElementById("date")){
		document.getElementById("date").innerHTML = date;
	}
})();

});