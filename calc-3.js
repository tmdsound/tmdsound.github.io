$(function () {
var log = console.log;
var nomer;
var x= '';
var y;
var num1;
var res;
        var plus;
    function newWas(was) {
        var vlad = was.replace(/[^\d\.]+/g, '');
        if (vlad== ' ') {
            return false;
        } else {
            return vlad;
        }
        // console.log(vald);

    }
var knopka ; 
$('#cal').keypress(function(asd) {
    // $('#res').text(asd.which);
    knopka = asd.which;

    return knopka;
    /* Act on the event */
});

function znac(){
    plus = "+";
    res = x + y;

}

    

    $('[name=cal]').on('input', function () {
        var was = $('[name=cal]').val();
         
      
        var clwas = newWas(was);
        $('[name=cal]').val(clwas);
        // var znac1 = was.charAt(was.length-1);
        // if (knopka == "42" || knopka == "43" || knopka == "45" || knopka == "47") {

        //         if (knopka == "45")plus = '-';
        //         if (knopka == "42")plus = '*';
        //         if (knopka == "47")plus = '/';
                
        if (knopka == "43"){
            num1 = was.slice(0,-1);
            plus = '+';
            $('#znak').text(plus);
            if (!num1)return false;
            $(this).val(num1);
            if(!x) {x = parseFloat(num1);
            }
            else{y = parseFloat(num1);

            

            x += y;}
            $(this).val('');
            $('#chislo').text(x);
        }        
                
        if (knopka == "45"){
            num1 = was.slice(0,-1);
            plus = '-';
            $('#znak').text(plus);
            if (!num1)return false;
            $(this).val(num1);
            if(!x) {x = parseFloat(num1);
            }
            else{y = parseFloat(num1);

            if(x === 0)y = -1*y;$('#schet').append(y);

            x =x - +y;}
            $(this).val('');
            $('#chislo').text(x);
        }        
                
        if (knopka == "42"){
            num1 = was.slice(0,-1);
            plus = '*';
            $('#znak').text(plus);
            if (!num1)return false;
            $(this).val(num1);
            if(!x) {x = parseFloat(num1);
            }
            else{y = parseFloat(num1);

            

            x *= y;}
            $(this).val('');
            $('#chislo').text(x);
        }        
                
        if (knopka == "47"){
            num1 = was.slice(0,-1);
            plus = '/';
            $('#znak').text(plus);
            if (!num1)return false;
            $(this).val(num1);
            if(!x) {x = parseFloat(num1);
            }
            else{y = parseFloat(num1);

            

            x /= y;}
            $(this).val('');
            $('#chislo').text(x);
        }        
        
            // console.log(knopka);}




if (knopka == '61' ) {
                
                $('#res').text("Моя кнопка " + plus);

             // $('#znak').text(plus);
            num1 = was.slice(0,-1);
            if (!num1)return false;
            $(this).val(num1);
            
            if(!x) {x = parseFloat(num1);}
            else{ y = parseFloat(num1);
                if (plus == "+") x += y;
                if (plus == "-") x =x - y;
                if (plus == "*") x *= y;
                if (plus == "/") x /= y;

            }
            $(this).val('');
           
            $('#chislo').text(x);
            plus = '=';
            $('#znak').html(plus);
                }
            // console.log(knopka);



       
    });













});
