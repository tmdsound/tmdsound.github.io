$(function () {
var nomer;
var x=0;
var y;
var num1;
var res;
var vsd = 1;
var plus;
var was;

    function newWas(was) {
        var vlad = was.replace(/[^\d\.]+/g, '');
        if (vlad== ' ') {
            return false;
        } else {
            return vlad;
        }
    }

    function num (num1) {
  
            $('.number').html(x + "&nbsp");
            $('.arg').html(plus);
            if (!num1)return false;
            $(this).val(num1);
            
    }

    function button (argument) {
        if (knopka == '43')plus = '+';
        if (knopka == '45')plus = '-';
        if (knopka == '42')plus = '*';
        if (knopka == '47')plus = '/';
        if (knopka == '61')plus = '=';
        if (knopka == '13')plus = '=';
    }
    function summ (x,y){
        if (plus == '+')return x+y;
        if (plus == '-')return x-y;
        if (plus == '*')return x*y;
        if (plus == '/')return x/y;

    }
    function prov (argument) {
            if(vsd == 1) {y = parseFloat(num1);
            x=y;vsd = 2;
            $('.number').html( + "&nbsp");
            $(this).val('');
            return;}
            else{
                y = parseFloat(num1);
                $('.number').html(x + "&nbsp");
           x= summ(x,y);}
    }


var knopka ; 
     
    
    //     dred();

    //     });
    $('#cal').keypress(function(key) {
        /* Act on the event */
            // knopka = asd.which;
     knopka  = key.which;
    $('#cal').on('input', function calcut() { 
        var  was = $('[name=cal]').val();

         var clwas = newWas(was);
         $('[name=cal]').val(clwas);
    
       
        if (knopka == "43" || knopka == "45" || knopka == "42" || knopka == "47" ){
            button();
            num1 = was.slice(0,-1);
             $('.number').html(x + "&nbsp");
            $('.arg').html(plus);
            if (!num1)return false;
            $(this).val(num1);
            prov();
            $(this).val('');
            $('.number').html(x + "&nbsp");

        }          

        if ( knopka == '61' ) {
            console.log(num1);
            num1 = was.slice(0,-1);
            if (!num1)return false;
                y = parseFloat(num1);
                $('.number').html(x + "&nbsp");
            x= summ(x,y);
            $(this).val('');
                $('.number').html(x + "&nbsp");
                plus = '';
                $('.arg').html(plus);

        }            


            if (knopka == 13 )  {
            console.log("kkkkkk");
                 num1 = was.slice(0,-1);                     
                 if (!num1)return false;
                y = parseFloat(num1);
                $('.number').html(x + "&nbsp");
                    x= summ(x,y);
                    $(this).val('');
                $('.number').html(x + "&nbsp");
                plus = '';
                $('.arg').html(plus);
        } 
    });

    });



});

