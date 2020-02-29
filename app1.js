var str;

var start;
var interval;
let s;
var result =0;

var arr = ["enter the first two characters","enter the middle two characters","enter the third digit from the last","enter the last and first two digits","enter alternate characters stating from first",
"enter the alternate characters starting from second position"];


/// choose level function ,it selects which level you want and display that html page
function chooselevel()
{
    var beginner=document.getElementById('beginner');
    var intermediate=document.getElementById('intermediate');
    var advanced=document.getElementById('advanced');
    if(beginner.checked==true)
    {
        s=3;
        console.log(s);
    window.location.href="index2.html";
    

    }
    else if(intermediate.checked==true)
    {
    window.location.href="index2.html";
    s=5;
    }
    else if(advanced.checked==true)
    {
    window.location.href="index2.html";
    s=7;
    }
    else
    alert("please select you level");
}



/// It generates random string based on the level selected
function random(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
 }


 //It generates random question from the array 
 function random_2()
 {
    var arr = ["enter the first two characters","enter the middle two characters","enter the third digit from the last","enter the last and first two digits","enter alternate characters stating from first",
    "enter the alternate characters starting from second position"];
     var arrlength=arr.length;
     var result;
     result=arr[Math.floor(Math.random() * arrlength)];
     return result;

 }
 // adding action listener
 

 //// by clicking any level button, it comes to hear
 function start(sec)
   {
       
       document.getElementById('para').innerHTML=random(4);
       document.getElementById('ques').innerHTML=random_2();
       start=sec/1000;
       ID=window.setTimeout(answer,sec);
       interval=setInterval(timer,1000);
       
        
}
function timer()
{
    if(start>0)
    {
        document.getElementById('p').innerHTML=start;
        start -=1;
    }
    else
    {
        clearInterval(interval);
    }
}
 function answer()
 {
    
     var para =document.getElementById('para').textContent;
     var question=document.getElementById('question').textContent;
     para.innerHTML=result;
     
     setTimeout(start,5000);

}
 
 