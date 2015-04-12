$(function () {
var log = console.log;
var nomer;
var x;
var y;
var num1;
    function newWas(was) {
        var vlad = was.replace(/[^\d\.\+\*\/-=]+/g, '');
        if (vlad== ' ') {
            return false;
        } else {
            return vlad;
        }
        // console.log(vald);

    }
$('#cal').keypress(function(event) {
    /* Act on the event */
});






    

    $('[name=cal]').on('input', function () {
        var was = $('[name=cal]').val();
        var clwas = newWas(was);
        $('[name=cal]').val(clwas);
        var znac1 = was.charAt(was.length-1);

        
        if ( znac1 == '+' ){
            $('#znak').text(znac1);
             num1 = was.slice(0,-1);
             $(this).val(num1);
             if (!num1)return false;
             
             if(!x) {x = parseFloat(num1);}

             else{ y = paeFloat(num1);
             x += y ;
                        }

                        
           $(this).val('');
           
             $('#chislo').text(x);
           console.log(x);

        }
          if ( znac1 == '-' ){
            $('#znak').text(znac1);
             num1 = was.slice(0,-1);
             $(this).val(num1);
             if (!num1)return false;
             
             if(!x) {x = parseFloat(num1);}

             else{ y = parseFloat(num1);
             x -= y ;
                        }

                        
           $(this).val('');
           
             $('#chislo').text(x);
           console.log(x);

        }
          if ( znac1 == '*' ){
            $('#znak').text(znac1);
             num1 = was.slice(0,-1);
             $(this).val(num1);
             if (!num1)return false;
             
             if(!x) {x = parseFloat(num1);}

             else{ y = parseFloat(num1);
             x *= y ;
                        }

                        
           $(this).val('');
           
             $('#chislo').text(x);
           console.log(x);

        }
          if ( znac1 == '/' ){
            $('#znak').text(znac1);
             num1 = was.slice(0,-1);
             $(this).val(num1);
             if (!num1)return false;
             
             if(!x) {x = parseFloat(num1);}

             else{ y = parseFloat(num1);
             x /= y ;
                        }

                        
           $(this).val('');
           
             $('#chislo').text(x);
           console.log(x);

        }
         
            
        
    		
        
    
       
    });













});
