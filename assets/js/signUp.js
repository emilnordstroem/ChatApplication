async function readUsers () {
    const response = await fetch('/users')
    console.log(response)
    return 0
}

async function createUser (username, userLevel, password) {

}

const signUpButton = document.getElementById("signUpButton")
signUpButton.addEventListener('click', async () => {
    const usernameInputElement = document.getElementById("signUpUsernameInput")
    const userLevelInputElement = document.getElementById("signUpUserLevelInput")
    const passwordInputElement = document.getElementById("signUpPasswordInput")

    const username = usernameInputElement.value
    const userLevel = parseInt(userLevelInputElement.value)
    const password = passwordInputElement.value

    const users = await readUsers()


})
