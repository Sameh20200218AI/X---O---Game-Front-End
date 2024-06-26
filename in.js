let turn='Player x';
let x=turn;
x='Player o';
let squares=[];
var cnt=0;
let title=document.querySelector(".title");
function iswinner()
{
   for(let i =1;i<10 ;i++)
   {
    squares[i] =document.getElementById(i).innerHTML;
   }
   if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[1]!='')
   {
       title.innerHTML = x+' is winner';
       document.getElementById(1).style.background="yellow";
       document.getElementById(2).style.background="yellow";
       document.getElementById(3).style.background="yellow";
       setInterval(function(){title.innerHTML+=' .'},1000);
       setTimeout(function(){location.reload()},3000);
       return true;
   }
   else  if(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[6]!='')
   {
    title.innerHTML = x+' is winner';
    document.getElementById(4).style.background="yellow";
    document.getElementById(5).style.background="yellow";
    document.getElementById(6).style.background="yellow";
    setInterval(function(){title.innerHTML+=' .'},1000);
    setTimeout(function(){location.reload()},3000);
    return true;
   }
   else if(squares[7]==squares[8]&&squares[8]==squares[9]&&squares[7]!='')
   {
    title.innerHTML = x+' is winner';
    document.getElementById(7).style.background="yellow";
    document.getElementById(8).style.background="yellow";
    document.getElementById(9).style.background="yellow";
    setInterval(function(){title.innerHTML+=' .'},1000);
    setTimeout(function(){location.reload()},3000);
    return true;
   }
   else  if(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[1]!='')
   {
    title.innerHTML = x+' is winner';
    document.getElementById(1).style.background="yellow";
    document.getElementById(4).style.background="yellow";
    document.getElementById(7).style.background="yellow";
    setInterval(function(){title.innerHTML+=' .'},1000);
    setTimeout(function(){location.reload()},3000);
    return true;
   }
   else  if(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[8]!='')
   {
    title.innerHTML = x+' is winner';
    document.getElementById(2).style.background="yellow";
    document.getElementById(5).style.background="yellow";
    document.getElementById(8).style.background="yellow";
    setInterval(function(){title.innerHTML+=' .'},1000);
    setTimeout(function(){location.reload()},3000);
    return true;
   }
   else  if(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[9]!='')
   {
    title.innerHTML = x+' is winner';
    document.getElementById(3).style.background="yellow";
    document.getElementById(6).style.background="yellow";
    document.getElementById(9).style.background="yellow";
    setInterval(function(){title.innerHTML+=' .'},1000);
    setTimeout(function(){location.reload()},3000);
    return true;
   }
   else  if(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[9]!='')
   {
    title.innerHTML = x+' is winner';
    document.getElementById(1).style.background="yellow";
    document.getElementById(5).style.background="yellow";
    document.getElementById(9).style.background="yellow";
    setInterval(function(){title.innerHTML+=' .'},1000);
    setTimeout(function(){location.reload()},3000);
    return true;
   }
   else  if(squares[3]==squares[5]&&squares[5]==squares[7]&&squares[7]!='')
   {
    title.innerHTML = x+' is winner';
    document.getElementById(3).style.background="yellow";
    document.getElementById(5).style.background="yellow";
    document.getElementById(7).style.background="yellow";
    setInterval(function(){title.innerHTML+=' .'},1000);
    setTimeout(function(){location.reload()},3000);
    return true;
   }
   return false;
   
}
function game(id)
{
    let element=document.getElementById(id);
    if(turn==='Player x' && element.innerHTML=='')
    {
        element.innerHTML='x';
        turn='Player o';
         x='Player x';
        title.innerHTML='Player o';
       
    }
    else if(turn==='Player o' && element.innerHTML=='')
    {
        element.innerHTML='o';
        turn='Player x'; 
        x='Player o';
        title.innerHTML='Player x';
       
    }
    iswinner();
    cnt++;
    if(cnt==9&&iswinner()==false)
{
    title.innerHTML='Draw game';
    setInterval(function(){title.innerHTML+=' .'},1000);
    setTimeout(function(){location.reload()},3000)
}
}

