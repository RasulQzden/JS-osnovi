/*
alert ("Задание 1. ");
let n = +prompt("Введите целое число N больше 0:");
 
let d=0;
if(n>0){
for(i=2;i<=n;i++){
	d=d+1/Math.sqrt(i);}
	alert("Ответ по формуле равен: " + d);
	}
	else alert("Вы ввели что то не то ");
*/
/*
alert ("Задание 2. ");
let n = +prompt("Введите целое число N больше 0:");
 //let r = [n];
 let d=0, r=0, j=0;
if(n>0){
for(i=0;i<n;i++){
	j=i+1;
	 r = +prompt("Введите " + j  + " значениe ");
	 
	if(r>0){d++;}
	 }
	alert("Количество положительных чисел равно: " + d);
	}
	else alert("Вы ввели что то не то ");
*/
/*
alert ("Задание 3. ");
let n = +prompt("Введите целое число N больше 0:");
 //let r = [n];
 let d=0, r=0, j=0;
if(n>0){
for(i=0;i<n;i++){
	j=i+1;
	 r = +prompt("Введите " + j  + " значениe ");
	 
	if(r<5){d++;}
	 }
	alert("Количество чисел меньше 5 равно: " + d);
	}
	else alert("Вы ввели что то не то ");
*/
/*
alert ("Задание 4. ");
let n = +prompt("Введите целое число N больше 0:");
 //let r = [n];
 let d=0, r=0, j=0, b=0;
 
  
if(n>0){
for(i=0;i<n;i++){
	j=i+1;
	 r = +prompt("Введите " + j  + " значениe ");
	 if(i==0){b=r; }
	if(r>b){b=r;}
	 }
	alert("Наибольшее число равно: " + b);
	}
	else alert("Вы ввели что то не то ");
*/
/*
alert ("Задание 5. ");
let n = +prompt("Введите целое число N больше 0:");
 //let r = [n];
 let d=0, r=0, j=0, b=0;
 
  
if(n>0){
for(i=0;i<n;i++){
	j=i+1;
	 r = +prompt("Введите " + j  + " значениe ");
	 if(i==0){b=r; }
	if(r<b){b=r;}
	 }
	alert("Наименьшее число равно: " + b);
	}
	else alert("Вы ввели что то не то ");
*/

/*
alert ("Задание 6. ");
let n = +prompt("Введите целое число N больше 0:");
let a = +prompt("Введите целое число A :");
 let d=1;
 
if(n>0){
for(i=1;i<=n;i++){
	d=d+a**i; }
	alert("Ответ по формуле равен: " + d);
	}
	else alert("Вы ввели что то не то ");
*/

alert ("Задание 7. ");
let a = +prompt("Введите число A > B:");
let b = +prompt("Введите число B < A:");

 
if(a>b){
for(i=b+1;i<a;i++){

	alert("Ответ  равен: " + i);
}}
	else alert("Вы ввели что то не то ");
