<?php
session_start();

require_once '../../../ValenceGeneric/config.php';
require_once '../../../ValenceGeneric/lib/D2LAppContextFactory.php';
require_once '../../../ValenceGeneric/doValenceRequest.php';

$authenticated = isset( $_SESSION[ 'userId' ] ) && isset( $_SESSION[ 'userKey' ] );

require_once '../../../ValenceGeneric/authenticateUser.php';

?>

<!doctype html>
<html lang="en">

<head>
	
	<?php
	try {
		if ( $authenticated ) {
			$logoutLink = "<a id='valence_logout' href='http://www.cece-test.uco.edu/ValenceGeneric/index.php?authBtn=Deauthenticate'>logout</a>";


			$userData = doValenceRequest( 'GET', '/d2l/api/lp/' . $config[ 'LP_Version' ] . '/users/whoami' );

			echo "<script>var valenceUserData = " . json_encode( $userData ) . ";</script>";
			echo "<script> var userId = '". $_SESSION['userId'] . "'; var userKey = '".$_SESSION['userKey']."';</script>";
			$error = "";
		} else {
			exit;
		}
	} catch ( Exception $e ) {
		echo '<div class="bg-error">Error connecting to D2L ' . $e . '</div>';

		session_unset();

		exit;
	}

	require('config.php');
?>

<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Courtroom Simulator</title>
<link href="https://cece.uco.edu/idea/css/bootstrap-4.1.3.min.css"  rel="stylesheet">
<link href="../../css/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet"/>
<link href="../css/styles.css" rel="stylesheet"></style>

<body>
	<div id="overlay" class="hidden">
		<?php include('../partials/load.php') ?>
		<?php include('../partials/instructions.php') ?>
		<?php include('../partials/loader.php') ?>
	</div>
	
	<div class="container wrapper">
		<div class="row relative mb-4">
			<div class="col-12" id="heading">
				<h1>Courtroom Simulator</h1>
				<div id="heading__right-col">
					<i class="fa fa-volume-up icon-volume-control btn" aria-hidden="true"></i>
					<i class="fa fa-info-circle icon-instructions btn" aria-hidden="true"></i>
					<span><?php echo $userData['FirstName'].' '.$userData['LastName']; ?></span>
				</div>
			</div>
			<div class="col-12" id="game_info">
				<div id="title"></div>
				<div id="questionCount"></div>
			</div>
			<div class="col-12" id="play">
			</div>
			<div class="col-12 nav-buttons">
				<!--<i class="fa fa-chevron-left" id="prev" aria-hidden="true"></i>-->
				<i class="fa fa-chevron-right btn" id="next" aria-hidden="true"></i>
			</div>
			<div class="w-100">
				<button type="button" class="btn btn-warning float-right" id="save-progress">Save Progress</button>
			</div>
		</div>
	</div>

	<?php include('../partials/footer.php') ?>

<script src="../../js/jquery-3.4.1.min.js"></script>
<script src="../../js/bootstrap4.4.1.min.js"></script>
<script src="config.js"></script>
<script src="../js/audioFiles.js"></script>
<script src="../js/actionList.js"></script>
<script src="../js/actionListObjects.js"></script>
<script src="../js/overlayToggle.js"></script>
<script src="../js/model.js"></script>
<script src="../js/transcript.js"></script>
<script src="../../../Connections/REST/js/sha1.js"></script>
<script src="../../../Connections/REST/js/ADO_API.js"></script>
<script src="../js/messages.js"></script>
<script src="../js/load.js"></script>
<script src="../js/instructions.js"></script>
<script src="../js/datahandler.js"></script>
<script src="../js/slider.js"></script>
<script src="../js/main.js"></script>

<script>

getData('index');
$("body").on('click','.close',function(){
	$("#overlay").addClass('hidden');
});
</script>

</body>
</html>