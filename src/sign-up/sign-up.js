import './style.css'
import { createUser } from '../firebase-config.js'

const inputElements = document.querySelector('#sign-up-form').querySelectorAll('input')
console.log(inputElements)
const formButton = document.getElementById('form-button')
formButton.addEventListener('click', (e)=> signUp(e))

function signUp(e) {
    e.preventDefault()

    const userInfo = {}

    inputElements.forEach((elem)=>{
        if(elem.files && elem.files[0]){
            userInfo[elem.name] = elem.files[0]
        } else if(elem.value && elem.value.length > 0){
            userInfo[elem.name] = elem.value
        } /*else {
            alert('No todos los valores estan diligenciados')
        }*/
    })

    console.log(userInfo)
    createUser(userInfo)
    /*else{
        alert('las contraseñas no coinciden')
    }*/
}

