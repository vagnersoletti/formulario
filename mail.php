<?php
 	$emailsender='vagnersoletti@gmail.com';
	
	if(PATH_SEPARATOR == ";") $quebra_linha = "\r\n";
	else $quebra_linha = "\n";
 
	$nomeremetente     = $_POST['first_name'].' '.$_POST['last_name'];
	$emailremetente    = $_POST['email'];
	$emaildestinatario = 'vagnersoletti@gmail.com';
	$assunto           = 'O cliente '.$_POST['first_name']. ' se cadastrou em nossa base de dados.';
 
 	$mensagemHTML = 'O cliente '.$_POST['first_name']. ' nascido em: '.$_POST['date']. ', nacionalidade '.$_POST['nationality']. ', seu estado civil é '.$_POST['civil_status']. ' portador do '.strtoupper(['type']). ' número '.$_POST['document']. ' morador de  '.$_POST['city']. ' estado de '.$_POST['estate']. ' - ' .$_POST[['nation']. ' se cadastrou em nossa base de dados.';
	 
	$headers = "MIME-Version: 1.1" .$quebra_linha;
	$headers .= "Content-type: text/html; charset=iso-8859-1" .$quebra_linha;
	$headers .= "From: " . $emailsender.$quebra_linha;
	$headers .= "Reply-To: " . $emailremetente . $quebra_linha;
	if(!mail($emaildestinatario, $assunto, $mensagemHTML, $headers ,"-r".$emailsender)){
	    $headers .= "Return-Path: " . $emailsender . $quebra_linha;
	    mail($emaildestinatario, $assunto, $mensagemHTML, $headers );
	}
