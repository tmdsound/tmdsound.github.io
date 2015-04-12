$(function () {
    // body...
var num1;
var x=0;
var y=0;
var plus;
var knopka;
var prov=1;
var entr = 1;

function newWas(was) {
    var vlad = was.replace(/[^\d\.]+/g, '');
        return vlad;
    }
function dred() {
	var was = $('#cal').val();
    var clwas = newWas(was);
    if (clwas.charAt(0)==="0"){
    	if (clwas.charAt(1)!=".") {console.log("tochka");return false;}
    }
    $('[name=cal]').val(clwas);
	num1 = parseFloat(was);
	return num1;
}

function button (argument) {
	if(knopka == 43)(plus ="+");
	if(knopka == 45)(plus ="-");
	if(knopka == 42)(plus ="*");
	if(knopka == 47)(plus ="/");

}
function summ (x,y) {
	 if(plus == "+")return x+y;
	 if(plus == "-")return x-y;
	 if(plus == "*")return x*y;
	 if(plus == "/")return x/y;
	// body...
}
 
$('#cal').keypress(function mb(event) {
	knopka = event.which;
	dred();
	if (knopka == 43 || knopka == 45 || knopka == 42 || knopka == 47){
			button();
			$('.arg').text(plus);
			if (!num1){return false;}
			if (prov == 1) {
			y=num1;x=y;
			$('.number').text(x);
			$('[name=cal]').val('');
			prov=2;
			
		}else{y=num1;
			x = summ(x,y,plus);
			$('#number').text(x);
			$('[name=cal]').val('');
		}
		entr = 1;
	}
	if (knopka == 13 || knopka == 61) {
			if (prov == 1){return false;}
			if (!num1){return false;}
			if (entr != 1) {return false;}
			y=num1;
	 		x = summ(x,y);
	 	$('.arg').text("");
	 	$('.number').text(x);
		$('[name=cal]').val('');
		entr = 2;
	}
	if (knopka == 99) {
		x=0;
		$('.arg').html('');
	 	$('.number').html(x);
		$('[name=cal]').val('');
	}

	if (knopka >= 48 && knopka <= 57){
		if(entr == 1 && x!==0){
		return;}
		else{	x=0;
	 	$('.number').html(x);
}
	
	
		
	}

console.log(x);
$('.number').html(x);

});

$('#cal').on('input',dred);





































});