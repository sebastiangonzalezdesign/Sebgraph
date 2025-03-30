// Example file - Create a copy named hash-password.js with your actual password
const bcrypt = require('bcrypt')

async function hashPassword(password) {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

async function main() {
    // Replace this with your real password when using
    const password = 'your_password_here'
    const hashedPassword = await hashPassword(password)
    console.log('Hashed password:', hashedPassword)
}

main()
