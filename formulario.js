var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$primerPost = $('.item').first();
	$list = $('#contenido'),

if (localStorage.getItem('autosave'))
{
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));

}

function mostrarOcultarFormulario(){
	$form.slideToggle();
	$lita.slideToggle();
	return false;
}

function agregarPost(){
	var titulo = $titulo.val(),
		url = $url.val(),
		$clone = $primerPost.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone)
	$mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.fadeIn();
	return false;
}

// Eventos
$button.click( mostrarOcultarFormulario );
$form.on('submit', agregarPost );