$(function () {

var nomer;
var x;
var y;

    function newWas(was) {
        var vlad = was.replace(/[^\d\.\+\*\/-=]+/g, '');
        if (vlad== ' ') {
            return false;
        } else {
            return vlad;
        }
        // console.log(vald);

    }

     function result (x,y,znac1){
                if (znac1 == '43') {x += y; nomer = '+';}
                if (znac1 == '45') {x -= y; nomer = '-';}
                if (znac1 == '42') {x *= y; nomer = '*';}
                if (znac1 == '47') {x /= y; nomer = '/';}
                // if (znac1 == '61') {summ = x/y; nomer = '=';}
                	$('#znak').text(nomer);



               return x;
            }










    $('[name=cal]').on('input', function () {
        var was = $('[name=cal]').val();
        var clwas = newWas(was);
        $('[name=cal]').val(clwas);
        
    $('#cal').keypress(function(eventObject){
    	var znac1 = eventObject.which;
    	if ( znac1 == '42' || znac1 == '43' || znac1 == '45' || znac1 == '47' ) {
    	var num1=+was.slice(0,-1); 
    	if (!x){x = parseFloat(num1);}
    	else{ y = parseFloat(num1);
    		result(x,y,znac1);
    	}
    	
            
        
    		
        $('#chislo').text(x);
    }


    });
       
    });













});
