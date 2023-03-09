
let Num = parseInt(prompt("Якщо змінна 'a' дорівнює 10, то буде виведено 'Вірно', в інших випадках буде 'Ви ввели невірне значення ('"));
if (10 === Num){
    document.write("!!!Вірно!!!")
}else{
    document.write("Ви ввели невірне значення (")
}
document.write("<br>");
document.write("<br>");
/*------------------------------- 1-ше завдання--------------------*/

let min = parseInt(prompt("Введіть число від 0 до 59:"));

if (min > 0 && min <=15){
    document.write("<br>Ваше число входить в ПЕРШУ чергу");
}
else if (min <= 30){
    document.write("<br>Ваше число входить в ДРУГУ чергу");
}
else if (min <= 45){
    document.write("<br>Ваше число входить в ТРЕТЮ чергу");
}
else if (min <= 59){
    document.write("<br>Ваше число входить в ЧЕТВЕРТУ чергу");
}else{
    document.write("<br>Ваше число не входить в діапазон від '0' до '59'");
}

document.write("<br>");
document.write("<br>");
/*------------------------------- 2-ге завдання--------------------*/


const num = parseInt(prompt("Введіть значення від 1-го до 4-ох, під кожним номером пора року"));
let result;
 switch(num){
    case 1 : result ="Літо";
    break;
    case 2 : result ="Осінь";
    break;
    case 3 : result ="Зима";
    break;
    case 4 : result ="Весна";
    break;
    default: document.write("<br>", "ERROR 404");
 }
 if(result){
    document.write("<br>", result);
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
/*------------------------------- 3-тє завдання--------------------*/

let counter = 0;
while(counter < 3){
    for (let counter = 0; counter < 10; counter++){
        for (let i = (0 + 1 + counter); i < 10; i++){
            document.write("&nbsp;");
        }
        for (let y = 0 + 1 + counter; y > 0; y--){
            document.write("*")
        }
        document.write("<br>");
    }
    counter++;
}
document.write("<br>");
document.write("<br>");
/*------------------------------- 4-те завдання--------------------*/

//Прямокутний трикутник
for (let tria = 0; tria < 10; tria++){
    for (let i = 0; i < 10; i++){
        document.write("&nbsp;");
    }
    for (let y = 0 + 1 + tria; y > 0; y--){
        document.write("*")
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
//рівнобедренний трикутник
for (let antria = 0; antria < 8; antria++){
    for (let i = 0 + 1 + antria; i < 10; i++){
        document.write("&nbsp;");
    }
    for (let y = 0 + 1 + antria; y > 0; y--){
        document.write("*")
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
//прямокутник
let sido = parseFloat(prompt("Ширина прямокутника:"));
let sidt = parseFloat(prompt("Довжина прямокутника:"));
for (let circ = 0; circ < sidt; circ++){
    for (let i = sidt; i < 10; i++){

    }
    for (let y = sido; y > 0; y--){
        document.write("◼️")
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
// // Ромб
for (let antria = 0; antria < 15; antria++){
    for (let i = 0 + 1 + antria; i < 15; i++){
        document.write("&nbsp;");
    }
    for (let y = antria; y > 0; y--){
        document.write("*")
    }
    document.write("<br>");
}
for(let antria = 0; antria < 14; antria++){
    for(i = (14 - antria); i < 14; i++ ) {
        document.write("&nbsp");
    }
    for(i = (0 + antria); i < 14; i++) {
        document.write("*");
    }
    document.write("<br>")
}
document.write("<br>");
document.write("<br>");

// Використовуючи умовні конструкції перевірте вік користувача, якщо користувачеві буде від 18 до 35 років переведіть його на сайт google.com через 2 секунди, якщо вік користувача буде від 35 до 60 років, переведіть його на сайт
https://www.uz.gov.ua/, якщо користувачеві буде до 18 років покажіть йому першу серію лунтика з ютубу
var age = parseInt(prompt("Введіть ваший вік: "));

if( age <= 35 && age > 18){
        window.location.href = 'https://www.google.com/'; ( 2 * 1000);
}else if( age < 18 && age > 0){
    window.location.href = 'https://www.youtube.com/watch?v=3Hz3kHRRISU&list=PL2XYfshKKJa-Fc8wcE5IkwYO1OwW07RQj'; ( 2 * 1000);
}else if(age > 35 && age <= 60){
    window.location.href = 'https://www.uz.gov.ua/'; ( 2 * 1000);
}else if(age < 0){
    document.write("Дочекайтесь поки ви заспавнетесь)");
}else{
    document.write("Ваш вік більший 60 років");
}