$(function () {
var log = console.log;
var nomer;
var x='';
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
                
        if (knopka == "43"){
            num1 = was.slice(0,-1);
            plus = '+';
            if (!num1)return false;
            $(this).val(num1);
            if(!res) {x = parseFloat(num1);
                res=x;$('#otwet').text(x);
            }
            else{x = res;
                y = parseFloat(num1);
                $('#otwet').text(x + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + plus);

            

            res = x+ y;}
            $(this).val('');
            $('#otwet').html(res + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + plus);
                



        }        
                
        if (knopka == "45"){
            num1 = was.slice(0,-1);
            plus = '-';
            if (!num1)return false;
            $(this).val(num1);
            if(!res) {x = parseFloat(num1);
                res=x;$('#otwet').text(x);
            }
            else{x = res;
                y = parseFloat(num1);
                $('#otwet').text(x + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + plus);
            res = x - y;}
            $(this).val('');
            $('#otwet').html(res + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + plus);
        }

        if (knopka == "42"){
            num1 = was.slice(0,-1);
            plus = '*';
            if (!num1)return false;
            $(this).val(num1);
            if(!res) {x = parseFloat(num1);
                res=x;$('#otwet').text(x);
            }
            else{x = res;
                y = parseFloat(num1);
                $('#otwet').text(x + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + plus);
            res = x*y;}
            $(this).val('');
            $('#otwet').html(res + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + plus);
        }


        if (knopka == "47"){
            num1 = was.slice(0,-1);
            plus = '/';
            if (!num1)return false;
            $(this).val(num1);
            if(!res) {x = parseFloat(num1);
                res=x;$('#otwet').text(x);
            }
            else{x = res;
                y = parseFloat(num1);
                $('#otwet').text(x + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + plus);
            res = x / y;}
            $(this).val('');
            $('#otwet').html(res + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + plus);
        }        
        
            // console.log(knopka);}




if (knopka == '61' ) {
                
              
             // $('#znak').text(plus);
            num1 = was.slice(0,-1);
            if (!num1)return false;
            $(this).val(num1);
            
            if(!res) {x = parseFloat(num1);res = x;}
            else{x= res; y = parseFloat(num1);
                if (plus == "+") res = x + y;
                if (plus == "-") x =x - y;
                if (plus == "*") x *= y;
                if (plus == "/") x /= y;

            }
            $(this).val('');
           plus = '=';
            $('#chislo').text('');
            $('#otwet').html(plus +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + res);
                }
            // console.log(knopka);



       
    });













});
