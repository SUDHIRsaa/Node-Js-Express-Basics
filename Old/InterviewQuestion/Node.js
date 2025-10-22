
console.log(age);
var age = 18;
console.log(age);
// undefined
// 18

// In JavaScript, variable declarations (using var) are hoisted to the top of their scope.
// However, the assignments are not hoisted. Therefore, when we try to log 'age' before its assignment, it results in 'undefined'.


for(var i=0; i<3; i++){

    setTimeout(function(){
        console.log(i);
    },1000);  
}
// 3
// 3
// 3 
// The variable 'i' is declared with 'var', which has function scope. By the time the setTimeout callbacks execute, the loop has completed and 'i' is 3. Hence, all three callbacks log 3.

for(let j=0; j<3; j++){     
    setTimeout(()=>{
        console.log(j);
    },0);
}

// 0
// 1
// 2
// The variable 'j' is declared with 'let', which has block scope. Each iteration of the loop creates a new binding for 'j', so the callbacks log 0, 1, and 2 respectively.