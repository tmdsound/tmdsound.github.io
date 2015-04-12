$(function () {

    // body...
function log (vl) { console.log(vl);
    // body...
}
var x= 0;
var y = 0;
var knopka;
var plus;
var znac;
var vsd =1;
/*---------------------Function-------------------------*/
    function summ (x,y){
        if (plus == '+')return x+y;
        if (plus == '-')return x-y;
        if (plus == '*')return x*y;
        if (plus == '/')return x/y;

    }

        function button (argument) {
        if (knopka == '43')plus = '+';
        if (knopka == '45')plus = '-';
        if (knopka == '42')plus = '*';
        if (knopka == '47')plus = '/';
        
    }
        function zn (argument) {


        }

    function newWas(was) {
        var vlad = was.replace(/[^\d\.]+/g, '');
        if (vlad== ' ') {
            return false;
        } else {
            return vlad;
        }
    }
/*----------------------------------------------------*/
$('#cal').keypress(function(event) {
knopka = event.which;

if (knopka == 13 || knopka == 61)x=summ(x,y);
if (knopka == 43){
    plus="+";
    $('.arg').text(plus);
    if ($(this).val())return;

}

$('.number').html(x + "&nbsp");
});

$('#cal').on('input',function(x,y) {
         var  was = $('[name=cal]').val();
         var clwas = newWas(was);
         $('[name=cal]').val(clwas);
         if (knopka == 43 || knopka == 42 || knopka == 45 || knopka == 47 ){
             num1 = was.slice(0,-1);
             if(vsd == 1) {y = parseFloat(num1);
            x=y;vsd = 2;


            
            return ;}
            else{
                y = parseFloat(num1);
            }
            return y;
         }
});

$('#chislo').html(x);
$('#res').html(y);
$('#znak').html(plus);






















});
