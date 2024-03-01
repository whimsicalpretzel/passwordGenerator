const generatePassword = document.querySelector(".generateBtn")
const firstOutput = document.getElementById("output1")
const secondOutput = document.getElementById("output2")
let lightMode = localStorage.getItem('lightMode')
const modeToggleBtn = document.querySelector("#mode-toggle")
const headline = document.querySelector(".headline")
const copyPassword = document.querySelector(".copy-password")



const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const enableLightMode = () => {
    document.body.classList.add('lightMode')
    headline.classList.add('lightModeHeadline')
    localStorage.setItem('lightMode', 'enabled')
    modeToggleBtn.innerText = `Enable Dark Mode`
}

const disableLightMode = () => {
    document.body.classList.remove('lightMode')
    headline.classList.remove('lightModeHeadline')
    localStorage.setItem('lightMode', null)
    modeToggleBtn.innerText = `Enable Light Mode`
}

if (lightMode === 'enabled') {
    enableLightMode()
}

modeToggleBtn.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode')

    if (lightMode !== 'enabled') {
        enableLightMode()
    } else {
        disableLightMode()
    }
})



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
    if(pwLength) {
        copyPassword.innerText = "Click a password to copy to clipboard."
    }
})



firstOutput.addEventListener("click", async () => {
    console.log("click")
    let text1 = firstOutput.innerText
    try {
        await navigator.clipboard.writeText(text1);
        console.log(text1)
        passwordClipped()
        console.log('Copied text1 to clipboard')
        console.log("here")
    } catch (err) {
        console.error('failed to copy: ', err)
    }
})

secondOutput.addEventListener("click", async () => {
    let text2 = secondOutput.innerText
    try {
        await navigator.clipboard.writeText(text2);
        passwordClipped()
        console.log(text2)
        console.log('Copied text2 to clipboard')
    } catch (err) {
        console.error('failed to copy2: ', err)
    }
})

function passwordClipped() {
    copyPassword.innerHTML = "Password was copied!"
    setTimeout(() => {
        copyPassword.innerHTML = "Click a password to copy to clipboard."
    }, 1500)
}