$(document).ready(function(){
	// Mask
	$("#zip_code").inputmask("99.999-999");
	$("#document").inputmask("999.999.999-99");

	// Apply mask selecting type document
	$(".type").change(function() {
        if (jQuery('#cpf').is(':checked')){
            jQuery("#document").inputmask("999.999.999-99");
            jQuery("#document").attr('placeholder','Cpf *');
        } else {
            jQuery("#document").inputmask("99.999.999/9999-99");
            jQuery("#document").attr('placeholder','Cnpj *');
        }
    });

	// Date
	$('#date').datepicker({
		format: "dd/mm/yyyy",
		language: 'pt-BR'
	});

	$("#date").change(function() {
		var year = $('#date').datepicker('getDate').getFullYear();
		var current = new Date();
		var age = current.getFullYear() - year;
		$('.age').html(age).last();
	});

	// Zip Code
	$('#zip_code').cep(function(){
		// Set estate
    	$('#estate').val($("#data-cep-estado").val());

    	// Set city
    	$('#city > option:selected').text($("#data-cep-cidade").val());
    	$('#city option:selected').val($("#data-cep-cidade").val());
	});

	// Load JSON nationality
	$.getJSON("nationality.json", function(data){
		$.each(data, function(i, item){
			$("#nation").append('<option value="'+ data[i].pais +'">'+ data[i].pais +' - '+ data[i].nacionalidade +'</option>');
			$("#nationality").append('<option value="'+ data[i].pais +'">'+ data[i].pais +' - '+ data[i].nacionalidade +'</option>');
		});
	});

	// Set estate and city
    window.onload = function() {
        new dgCidadesEstados( 
            document.getElementById('estate'), 
            document.getElementById('city'), 
            true
        );
    }
    
	$("#email").blur(function(){
    	validade();
	});

	$("#first_name").blur(function(){
		validade();
	});

	$("#last_name").blur(function(){
		validade();
	});

	$("#sex").blur(function(){
		validade();
	});

	$("#type").blur(function(){
		validade();
	});

	$("#document").blur(function(){
		validade();
	});

	$("#zip_code").blur(function(){
		validade();
	});

	$("#nation").blur(function(){
		validade();
	});

	$("#logradouro").blur(function(){
		validade();
	});

	$("#estate").blur(function(){
		validade();
	});

	$("#city").blur(function(){
		validade();
	});

	$("#submit").click(function(){
		validade();
		var dados = $(".form-horizontal").serialize(); 
		jQuery.ajax({
			type: "POST",
			url: "mail.php",
			data: dados,
			success: function( data ) {
				console.log(data);
			}
		});
		return false;
	});

});

//function validate email
function is_email(email) {
	er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;	  
	if(er.exec(email)) {
	  	return true;
	} else {
		return false;
	}
}

//function validates input's
function validade() {
	if($("#email").val() == "") {
		$('#error_email').show();
      	return false;
    } else {
    	$('#error_email').hide();	
    }

    if (is_email($("#email").val()) == false) {
    	$('#error_email_valid').show();
      	return false;
    } else {
    	$('#error_email_valid').hide();	
    }
	
	if($("#first_name").val() == "") {
		$('#error_first_name').show();
      	return false;
    } else {
    	$('#error_first_name').hide();	
    }

	if($("#last_name").val() == "") {
		$('#error_last_name').show();
    	return false;
    } else {
    	$('#error_last_name').hide();	
    	$("#date").focus();
    }

    if($("#sex").is(":checked")){
		$('#error_sex').show();
    } else {
    	$('#error_sex').hide();	
	}

	if($("#type").is(":checked")){
		$('#error_type').show();
    	return false;
    } else {
    	$('#error_type').hide();	
    }

	if($("#document").val() == "") {
		$('#error_document').show();
      	return false;
    } else {
    	$('#error_document').hide();	
    }

	if($("#zip_code").val() == "") {
		$('#error_zip_code').show();
      	return false;
    } else {
    	$('#error_zip_code').hide();	
    }
	
	if($("#nation").val() == "") {
		$('#error_nation').show();
      	return false;
    } else {
    	$('#error_nation').hide();	
    }
	
	if($("#logradouro").val() == "") {
		$('#error_logradouro').show();
      	return false;
    } else {
    	$('#error_logradouro').hide();	
    }

	if($("#estate").val() == "") {
		$('#error_estate').show();
      	return false;
    } else {
    	$('#error_estate').hide();	
    }

	if($("#city").val() == "") {
		$('#error_city').show();
      	return false;
    } else {
    	$('#error_city').hide();	
    }
}