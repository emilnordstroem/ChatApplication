
async function readUsers () {
    const response = await fetch('/users')
    const data = await response.json()
    return data
}

async function isUsernameAlreadyTaken (username) {
    const users = await readUsers()
    console.log(`Username: ${username} [${users}]`)
    const found = users.some(user => user.username == username)
    return found
}

function isUserLevelAllowed (userLevel) {
    return 0 < userLevel && userLevel <= 3
}

function isPasswordAllowed (password) {
    return 8 <= password.length()
}

async function signUpUser (username, userLevel, password) {
    let response;
    try {
        response = fetch ('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    username: username,
                    userLevel: userLevel,
                    password: password
                }
            )  
        })   
    } catch (error) {
        throw error('ERROR: signUpUser() -> POST [fetch()]: ', error.message)
    }
    return JSON.stringdata
}

const signUpUserButton = document.getElementById('signUpUserButton')

signUpUserButton.addEventListener('click', () => {
    const usernameInputElement = document.getElementById('signUpUsernameInput')
    const userLevelInputElement = document.getElementById('signUpUserLevelInput')   
    const passwordInputElement = document.getElementById('signUpPasswordInput')

    const username = usernameInputElement.value
    const userLevel = parseInt(userLevelInputElement.value)
    const password = passwordInputElement.value
    
    if (!username || !userLevel || !password) {
        throw new Error('All input fields must be filled out')
    }

    if (isUsernameAlreadyTaken(username)) {
        throw new Error('Username already exists')
    } else if (isUserLevelAllowed(userLevel)) {
        throw new Error('User level must be between 1-3')
    } else if (isPasswordAllowed(password)) {
        throw new Error('Password must be above 8 characters')
    }

    const user = signUpUser(username, userLevel, password)
    console.log(user)
})