var inputs=document.querySelector('.pass');
var checks=document.querySelector('.check');
var predict=document.querySelector('.strength');
inputs.addEventListener('focus',function(){
	inputs.style.backgroundColor='black';
	inputs.style.backgorund='transparent';
	inputs.style.color='white';
});
 checks.addEventListener('click',function(){
if(checks.checked==true){
		
		inputs.type='text';
	}
	else{
		inputs.type='password';
	}
 });
	
inputs.addEventListener('input',function(){
	var val=inputs.value;

	strength_checker(val);
	console.log(val);
	
});


function strength_checker(pval){
	var special_char=0;
	
	
	var num=0;
	var len=pval.length;
   if(len!=0){

    


 var arr=[];
   	if(len<8){

   			predict.classList.add('less_digit');
   	predict.innerHTML="Your Password should have atleast 8 digits";
   }
   else if(len>8 & len<=16){

   	predict.classList.add('adder');
   	predict.classList.remove('less_digit');
    for(var x=0;x<len;x++){
    	arr.push(pval[x]);
    }
    for(var x=0;x<len;x++){
    	var k=pval[x];
           if(k=='1' ||k=='2' || k=='3' || k=='4' || k=='5' ||  k=='6' || k=='7' || k=='8' || k=='9' || k=='0' ){
           	num++;
           }
           else if(k=='@' || k=='&' || k=='#' || k=='*' || k=='~' || k=='\'' ){
           	special_char++;
           }
    }
    if(num>=1 & special_char==0 || num==0 & special_char>0 ){
       predict.innerHTML="Weak Password ( Password )";
    }
    else if(num>=1 & special_char>=1){
    	predict.innerHTML="Strong Password";
    }
    else{
    	predict.innerHTML=" Very Weak Password it should contain atleast number and a special Character";
    }


    





















   }
   else if(len>16){
   	predict.innerHTML="Your Password is too long";
   }
   }
   else{
   	predict.innerHTML="";
   	predict.classList.remove('less_digit');
   		predict.classList.remove('adder');
   }
}