<?php

/****************************************************************
Recibe los datos ingresados
****************************************************************/
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$casa = $_POST['casa'];
$comentario = $_POST['mensaje'];

if( empty($nombre) || empty($email) || empty($comentario)|| empty($casa)|| empty($telefono) ) {

	$error = true;

}


/****************************************************************
Aquí debes ingresar el asunto del mail
****************************************************************/
$subject = 'Contacto desde tu pagina de: ' . $nombre ;
$comentario = stripcslashes($comentario);



/****************************************************************
Aquí se genera el cuerpo del mensaje
****************************************************************/
$mensaje = "De: $nombre \n
E-mail: $email \n
Casa: $casa \n
Telefono: $telefono \n
Mensaje: $comentario \n
\n";

$from = "From: $email\r\n";



/****************************************************************
ingresa mail receptor
****************************************************************/

if( !$error ) {
	mail("jesusrojas.frontend@gmail.com", $subject, $mensaje, $from);
}
?>
	<section class="contenido">
		<article class="inform">
			<h1>Contacto</h1>
				<?php if( $error ) { ?>

					<div class="alerta">
						Hubo un error, por favor completa todos los campos.
					</div>

					<form action="enviar.php" method="post">
						<div class="col-md-6">
							<div class="form-group">
								<input type="text" placeholder="Ingresa tu nombre" class="form-control" required autofocus="" name="nombre" id="nombre" value="<?php echo $nombre; ?>">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<input type="email" placeholder="Ingresa tu email" class="form-control" required name="email" id="email" value="<?php echo $email; ?>">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<textarea cols="30" rows="8" placeholder="Ingresa tu comentario" class="form-control b" required name="mensaje" id="mensaje"><?php echo $comentario; ?></textarea>
							</div>
						</div>

						<button type="submit" class="btn">Enviar</button>

					</form>

				<?php } else { ?>

					<p>Gracias por contactarte conmigo, responderé lo más pronto que pueda :)</p>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>

				<?php } ?>

	</article>


</section>
