import {characters} from "./characters.js"

const generateBtn = document.getElementById("generate-btn")
const passOne = document.getElementById("field-text-one");
const passTwo = document.getElementById("field-text-two");
const passwordLengthInput = document.getElementById("password-length")

function generateRandomIndex() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function generatePasswords() {
    let password = ""
    const passwordLength = passwordLengthInput.value
    for (let i = 0; i < passwordLength; i++) {
        password += generateRandomIndex()
    }
    return password
}

function getPasswords() {
    document.getElementById("field-text-one").textContent = generatePasswords()
    document.getElementById("field-text-two").textContent = generatePasswords()
}

function copyPassword(textContent, id) {
    const elem = document.createElement("textarea")
    elem.value = textContent
    document.body.appendChild(elem)
    elem.select()
    document.execCommand("copy")
    elem.remove()
    document.getElementById(id).classList.toggle("show")
}

document.addEventListener("click", (e) => {
    if (e.target.id === "generate-btn") {
        getPasswords()
    } else if (e.target.textContent && e.target.previousElementSibling.id) {
        copyPassword(e.target.textContent, e.target.previousElementSibling.id)
    }
})
