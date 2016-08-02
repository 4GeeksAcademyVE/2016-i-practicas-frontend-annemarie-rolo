$('#myModalForm .guardar').click(function () {
	nombre = $('#myModalForm #nombre').val();
	$('#nombre-persona').text("Gracias, " + nombre);
	$('#nombre-persona').removeClass('hide');
	$('#myModalForm').modal('hide');

})