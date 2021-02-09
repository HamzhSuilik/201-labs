var name =prompt("What is your name ?");

alert("welcome "+ name);
var score =0;

// question_1 ***********************************************
var question_1 =prompt("Am I mechanical engineer ? (Yes/No)or(Y/N)");

question_1=question_1.toLocaleLowerCase();

if (question_1=='n' || question_1=='no'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

// question_2 ***********************************************
var question_2 =prompt("Am I 73 years old ? (Yes/No)or(Y/N)");

question_2=question_2.toLocaleLowerCase();

if (question_2=='n' || question_2=='no'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

// question_3 ***********************************************
var question_3 =prompt("I live in Amman (Yes/No)or(Y/N)");

question_3=question_3.toLocaleLowerCase();

if (question_3=='y' || question_3=='yes'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

// question_4 ***********************************************
var question_4 =prompt("I love programming (Yes/No)or(Y/N)");

question_4=question_4.toLocaleLowerCase();

if (question_4=='y' || question_4=='yes'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

// question_5 ***********************************************
var question_5 =prompt("I studied at the University of Jordan (Yes/No)or(Y/N)");

question_5=question_5.toLocaleLowerCase();

if (question_5=='n' || question_5=='no'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

let num=5;
while(num){
    alert("-->"+num);
    num-=1;
    alert("*****");
}

alert("Yore score is :"+score +" Out of 5");

document.getElementById("welcome").innerText="welcome "+ name;
document.getElementById("score").innerText="Yore score is :"+score +" Out of 5";


// https://www.w3schools.com/cssref/pr_font_font-size.asp
// https://www.w3schools.com/howto/howto_css_image_center.asp

