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
?>

<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Courtroom Simulator | Instructor View</title>
<link href="https://cece.uco.edu/idea/css/bootstrap-4.1.3.min.css"  rel="stylesheet">
<link href="../../css/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet"/>
<link href="../css/styles.css" rel="stylesheet"></style>
<style>

html,body{
	height: 100%;
	margin: 0;
}
.wrapper{
	min-height: 100%;
	margin: 0 auto;
	padding-top: 5rem;
}
body{
	background: #f4f7f6;
}
.mt_neg_2{
	margin-top: -2rem;
}
#heading{
	margin-bottom: 50px;
    border-bottom: 1px solid #222;
}
.download_icon{
	font-size: 2rem;
}
.download_icon > i{
	color: #28a745;
	transition: all 250ms ease-in-out;
}
.download_icon > i:hover{
	cursor: pointer;
	color: #43cc62;
}
.btn-transcript{
	color: #17a2b8;
    background-color: transparent;
    background-image: none;
	border-color: #17a2b8;
	transition: all 250ms ease-in-out;
}
.btn-transcript:hover{
	cursor: pointer;
	color: #fff;
	background-color: #17a2b8;
}
</style>
<body>
	<!-- Div used to make pdf -->
	<div id="printer" style="position:absolute; top: 0; left:0; display:none;"></div>

	<!-- Modal HTML -->
	<div class="modal fade mx-auto" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title" id="exampleModalLongTitle"></h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		</div>
		</div>
	</div>
	</div>
	<!------>

	<div class="container wrapper">
		<div class="row">
			<div class="col-12" id="heading">
				<h1>Courtroom Simulation Transcripts</h1>
				<p class="float-right mt-4">Instructor View</p> 
			</div>

			<div class="col-12" id="allTranscripts">
			</div>

		</div>
	</div>

	<?php include('../partials/footer.php'); ?>

<script src="../../js/jquery-3.4.1.min.js"></script>
<script src="../../js/bootstrap4.4.1.min.js"></script>
<script src="config.js"></script>
<script src="../js/overlayToggle.js"></script>
<script src="../js/model.js"></script>
<script src="../../../Connections/REST/js/sha1.js"></script>
<script src="../../../Connections/REST/js/ADO_API.js"></script>
<script src="../js/datahandler.js"></script>
<script src="../js/libs/jspdf.min.js"></script>
<script src="../js/PDFmaker.js"></script>
<script src="../js/instructorView.js"></script>
<script>
	getData('instructorView');
</script>
</body>
</html>