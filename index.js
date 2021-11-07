let screen = document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>
    {
        buttontext=e.target.innerText;
        if(buttontext=='=')
        {
            screen.value=eval(screenValue);
        }
        else if(buttontext=='C')
        {
            screenValue="";
            screen.value=screenValue;

        }
        else 
        {
            screenValue += buttontext;
            screen.value=screenValue;
        }

    })
}
