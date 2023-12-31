function generateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8;
  let token = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}

function sendToken(user) {
  const token = generateToken();
  // Send the token to the user using your preferred method
  // (e.g., email, SMS, push notification)
  console.log(`Token sent to ${user}: ${token}`);
  return token;
}

function validateToken(user, enteredToken, storedToken) {
  // Compare the entered token with the stored token
  return enteredToken === storedToken;
}

const user = {};
const storedToken = sendToken(user);
const enteredToken = prompt('Enter the token you received:');

if (validateToken(user, enteredToken, storedToken)) {
  console.log('Authentication successful');
  // Proceed with the desired action after successful authentication
} else {
  console.log('Authentication failed');
  // Handle authentication failure (e.g., display an error message)
}
