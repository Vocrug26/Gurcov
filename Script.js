function zz1(){ 
var str = 'hdfgv';
document.getElementById("z1").innerHTML = str[0];
document.getElementById("z11").innerHTML = str[1];
document.getElementById("z111").innerHTML = str[4];
}

function zz2(){
	document.getElementById("z2").innerHTML = 60*60;
}

function zz3(){
	var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert("Задание 3:"+num);
document.getElementById("z3").innerHTML = num;
}

function zz4(){
	var num = 3;
	alert("Задание 4:"+num);
}

function zz5(){
	var a = 10, b=2;
	alert(a+b,b-a);
	alert(a-b);
	alert(a*b);
	alert(a/b);

}

function zz6(){
	var c = 15, d = 2;
	result = c+d;
	alert("Задание 6:"+result);
}

function zz7(){
	var a = 10, b = 2, c = 5;
	
	alert(a+b+c);
}

function zz8(){
	var a = 17, b = 10;
	var c = a-b;
	var d = 7;
	result = c+d;
	alert("Задание 8:"+result);
}

function zz9(){
	document.getElementById("z9").innerHTML = 60*60;
	document.getElementById("z9").innerHTML = 60*60*24;
	document.getElementById("z9").innerHTML = 60*60*24*31;
}

function zz10(){
	
	var h,m,s;
	
	var date = new Date();
    h = date.getHours();
	m = date.getMinutes();
	s = date.getSeconds();
	document.getElementById("z10").innerHTML = h+":"+m+":"+s;
}

function zz11(){
	var a = 9;
	result = Math.pow(a,2);
	alert("Задание 11:"+result);
}

function zz12(){
	let arr = [1,2,3,4,5,6,7,8,9,10];
	alert(arr.reduce((sum, n) => sum + n * !(n & 1), 0));
}

function zz13(){
	var ap=1.15, or=2.30;
	document.getElementById("z13").innerHTML = ap+or;
}

function zz14(){
	let x = 5; 
	alert(x++); 
}

function zz15(){
	document.getElementById("z15").innerHTML = [ ] + false - null + true ;
}

function zz16(){
	let y = 1;
	let x = y = 2; 
	console.log(x); 
}


function zz17(){
	document.getElementById("z17").innerHTML = [ ] + 1 + 2;
}

function zz18(){
	var a6, a7, a8, a9, a10;
	a6 = 5 % 3;
	a7 = 3 % 5;
	a8 = 5 + '3';
	a9 = '5' - 3;
	a10 = 75 + 'кг';
	
document.getElementById("za").innerHTML = a6+', '+ a7+', '+ a8+', '+ a9+', '+ a10;
}

function zz19(){
	var hight=30, width=10, s;
	s=(1/2)*hight*width;
	alert("Задание 19:"+s);
}

function zz20(){
	var hightC=10, dC=4, pi=3.14, r,V;
	r=dC/2;
	V=pi*hightC*Math.pow(r,2);
	alert("Задание 20:"+V);
}


function zz21(){
	var S=2000000, p=10, years=5;
    perepl = S*((years+1)/20)*(p/100);  
    document.getElementById("z20").innerHTML = perepl + "руб." 
}

function zz22(){
	str="Привет";
	num=123;
	flag=true;
	txt="true";
	document.getElementById("z21").innerHTML = typeof str;
	document.getElementById("z211").innerHTML = typeof num;
	document.getElementById("z212").innerHTML = typeof flag;
	document.getElementById("z213").innerHTML = typeof txt;
}


function zz23(){
	var num = 2131; 
	var num2 = -num;
	document.getElementById("z22").innerHTML = num2;
}

function zzz1(){
	let a=String(prompt('Введите хромосому'));
	if (a=='XX') alert( "Поздравляем! У тебя будет дочь.");
	else if (a=='XY') alert("Поздравляем! У тебя будет сын.");
}

function zzz2(){
	let a=Number(prompt('Введите число'));
	if (a%2==0) alert(a*8);
	else if (a%2!==0) alert(a*9);
}

function zzz3(){
	let n=Number(prompt('Введите число:'));
	const nearest_sq = Math.pow(Math.round(Math.sqrt(n)), 2);
	alert(nearest_sq);
}

function zzz4(){
	let a=Number(prompt('Введите колличество разрезов:'));
	let n=Math.pow((a+1),2)*6;
	alert("Задание z1.4:"+n);
}

function zzz5(){
	
	
	function periodIsLate(last, today, cycleLength)
{
  let month = today.getMonth()- last.getMonth();
  if(month){
    month = month * new Date(today.getYear(), today.getMonth(), 0).getDate()
  }
  var z=today.getDate() - last.getDate() + month > cycleLength ? true : false
  alert(z);
 
}

	
}

function zzz6(){
	var s="    dwdwdw   wd   w     w 45 4edfeffe w   ";
	alert(s.replace(/ /g,''));
	
}
