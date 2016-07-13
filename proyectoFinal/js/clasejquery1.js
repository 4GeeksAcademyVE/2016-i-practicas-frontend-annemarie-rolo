$(document).ready(function(){
	$('#ver-mas').click(function(){
	$('.ocultable').toggle();
	var text = $(this).text();
	if (text == 'Ver mas') {
		$(this).text('Ver menos');
	}else{
		&(this).text('Ver mas');
	}
	});

	$('h2').click(function(){
		$(this).next('p').toggle();
	});
});