const upperset="QWERTYUIOPLKJHGFDSAZXCVBNM"
const lowerset="qwertyuioplkjhgfdsazxcvbnm"
const number="1234567890"
const symbol="#!@$%^&*()_"

const  getRandomData=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]

}

//selector
const passBox=document.getElementById('pass-box')
const toptalchar=document.getElementById('total-char')
const upperInput=document.getElementById('upper-case')
const lowerinput=document.getElementById('lower-case')
const numberinput=document.getElementById('numbers')
const symbolinput=document.getElementById('symbols')

const generatePass=(password="")=>{
    if(password==""){
        passBox.innerHTML="please enter one of the tik from below content";
    }
    if(upperInput.checked){
        password+=getRandomData(upperset);
        
    }
     if(lowerinput.checked){
        password+=getRandomData(lowerset);
        
    }
    if(numberinput.checked){
        password+=getRandomData(number);
       
    }
    if(symbolinput.checked){
        password+=getRandomData(symbol);
        
    }
   
    if (password.length<toptalchar.value){
        return generatePass(password);
    }
    passBox.innerHTML=(truncateString(password,toptalchar.value));

    

}
// document.toptalchar.innerHTML="";


function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  
  

document.getElementById('btn').addEventListener(
    "click",function(){
        generatePass();
    }
)

