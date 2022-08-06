let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
input1.value= "";
input2.value= "";

//Grabbing all buttons

add = document.getElementById('add');

sub = document.getElementById('sub');

mult = document.getElementById('mult');

div = document.getElementById('div');

//This Function will display the values
function Display(display){
    document.getElementById('demo').innerHTML = display;
}

//Function for addition
add.addEventListener('click', ()=>{
   
    function Addition(num1, num2, add){
        sum = num1 + num2;
        add(sum);
    }  
    let inp1 = Number(input1.value);
    let inp2 = Number(input2.value);
    
    Addition(inp1, inp2, Display);
    

    if(inp1 ===0 && inp2===0){
        document.getElementById('blank').innerHTML = 'Enter Number Correctly';
        document.getElementById('demo').innerHTML = "";
        
    } 
    else{
        if(inp1 ===0 || inp2===0){
            document.getElementById('blank').innerHTML = 'Enter Number Correctly';
            document.getElementById('demo').innerHTML = "";
        }
        else{
        document.getElementById('blank').innerHTML = 'The Sum of two number is ';
        }
    }

    
})



//Function for Substraction
sub.addEventListener('click', ()=>{
    function Substraction(num1, num2, sub){
        min = num1 - num2;
        sub(min);    
    }
    
    let inp1 = Number(input1.value);
    let inp2 = Number(input2.value);
    
    Substraction(inp1, inp2, Display);
    

    if(inp1 ===0 && inp2===0){
        document.getElementById('blank').innerHTML = 'Enter Number Correctly';
        document.getElementById('demo').innerHTML = "";
        
    } 
    else{
        if(inp1 ===0 || inp2===0){
            document.getElementById('blank').innerHTML = 'Enter Number Correctly';
            document.getElementById('demo').innerHTML = "";
        }
        else{
        document.getElementById('blank').innerHTML = 'The Substraction of two number is ';
        }
    }

})

//Function for Multiplication
mult.addEventListener('click', ()=>{
    function Multiplication(num1, num2, mult){
        into = num1 * num2;
        mult(into);    
    }
      
    let inp1 = Number(input1.value);
    let inp2 = Number(input2.value);
    
    Multiplication(inp1, inp2, Display);
    

    if(inp1 ===0 && inp2===0){
        document.getElementById('blank').innerHTML = 'Enter Number Correctly';
        document.getElementById('demo').innerHTML = "";
        
    } 
    else{
        if(inp1 ===0 || inp2===0){
            document.getElementById('blank').innerHTML = 'Enter Number Correctly';
            document.getElementById('demo').innerHTML = "";
        }
        else{
        document.getElementById('blank').innerHTML = 'The Multiplication of two number is ';
        }
    }
    
})

//Function for Division
div.addEventListener('click', ()=>{
    function Division(num1, num2, div){
        upon = num1 / num2;
        div(upon);    
    }
      
    let inp1 = Number(input1.value);
    let inp2 = Number(input2.value);
    
    Division(inp1, inp2, Display);
    

    if(inp1 ===0 && inp2===0){
        document.getElementById('blank').innerHTML = 'Enter Number Correctly';
        document.getElementById('demo').innerHTML = "";
        
    } 
    else{
        if(inp1 ===0 || inp2===0){
            document.getElementById('blank').innerHTML = 'Enter Number Correctly';
            document.getElementById('demo').innerHTML = "";
        }
        else{
        document.getElementById('blank').innerHTML = 'The Division of two number is ';
        }
    }
})


