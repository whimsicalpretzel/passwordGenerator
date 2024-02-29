const generatePassword = document.querySelector(".generateBtn")
const firstOutput = document.getElementById("output1")
const secondOutput = document.getElementById("output2")

const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];



generatePassword.addEventListener("click", () => {
    const pwLength = document.querySelector("#pw-length").value
    firstOutput.innerText = ""
    secondOutput.innerText = ""
        if(pwLength >= 8 && pwLength  <= 30) {
            for(let i = 0; i < pwLength; i++) {
                const character1 = characters[Math.floor(Math.random() * characters.length)]
                const character2 = characters[Math.floor(Math.random() * characters.length)]
                firstOutput.innerText += character1
                secondOutput.innerText += character2
        }
    } else {
        alert("Number must be between 8 and 30.") 
    }
})