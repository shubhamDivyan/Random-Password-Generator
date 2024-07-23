const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet="!@#$%^&*()_+?/";

const textbox=document.getElementById("text-pass")
const totalChar= document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput= document.getElementById("number");
const symbolInput= document.getElementById("symbol");

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}



const generatePassword = (password = "") => {
    if (upperInput && upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput && lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput && numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput && symbolInput.checked) {
        password += getRandomData(symbolSet)
    }

    
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    

    textbox.innerText = truncateString(password, totalChar.value);
}

generatePassword()

document.getElementById("btn").addEventListener(
    "click",
    function (){
        generatePassword();
    }
)

function truncateString(str,num) {
    if(str.length > num) {
        // let subStr = str.subString(0,num);
        let subStr = str.substring(0, num);
        return subStr;
    }else{
        return str;
    }
}

generatePassword();