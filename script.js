const minnum=1;
const maxnum=100;
let numoftries=0;
const secretnumber=Math.floor(Math.random()*100)+1;
const s=document.getElementById("checkbutton");
s.addEventListener("click",function(){
   
    const userguess=parseInt(document.getElementById("userguess").value);
    if(userguess<minnum||userguess>maxnum){
        var m=document.getElementById("message").textContent="please enter number between 1 and 100";
    }else{
        numoftries++;
        if(userguess==secretnumber){
            document.getElementById("message").textContent="Congratulations! You guessed the number in " +numoftries+" tries";
            document.getElementById("checkbutton").ariaDisabled=true;
        } 
        else if(userguess<secretnumber){
            document.getElementById("message").textContent="try an higher number than "+userguess;
        }
        else{
            document.getElementById("message").textContent="try an lower number than "+userguess;
    }
}
})