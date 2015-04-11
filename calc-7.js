$(function () {
    // body...
var num1;
var x=0;
var y=0;
var prov=1;
var knopka;


function newWas(was) {
    var vlad = was.replace(/[^\d\.]+/g, '');
    if (vlad== ' ') {
        return false;
    } else {
        return vlad;
    }
}
function dred() {
	var was = $('#cal').val();
    var clwas = newWas(was);
    $('[name=cal]').val(clwas);
	num1 = parseFloat(was);
	return num1;
}






 

$('#cal').on('input',dred);

$('#cal').keypress(function(event,num1) {
	knopka = event.which;
	if (knopka == 45) {x = dred();
	console.log(x);
$('#chislo').text(x);
$('[name=cal]').val('');
}
});



































});