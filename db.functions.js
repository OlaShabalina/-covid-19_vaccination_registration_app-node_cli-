// connecting to db file
const db = require('./database');
const prompt = require('prompt-sync')();

// function to add a new user
function addUser() {

  // name and date
  let name 
  let date
  
  // ask user to input their name (till they input correct data)
  do {
    name = prompt('Please enter your name: ');
    isInputValid(name, isNameValid, "Name input shouldn't contain special characters!")
  } while (!isNameValid(name) || (name.length < 1));


  // only switch to the next questions once the name is correct
  if (isNameValid(name) && (name.length > 1)) {

    do {
      date = prompt('Please enter your check-in date: ');
      isInputValid(date, isDateValid, "You can not use the past date for your check-in!");
    } while (!isDateValid(date) || (date.length < 1));
    

    // only if both inputs are valid - we same the user to the db
    if (isDateValid(date) || (date.length > 1)) {
      
      db.none("INSERT INTO reg_users (users_name, entry_date) VALUES ($1, $2);", [name, date])
      .then(() => console.info('New User Added'))
      .catch((error) => console.error(error))
    
    }

  }
  
}


//  function to validate name input (no special characters)

function isNameValid(name) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return !specialChars.test(name); 
}

function isDateValid(date) {

  //  date can only be today or later
  let dateArray = date.trim().split('/');

  const dateCleared = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);
  const today = new Date();

  // checking if the date makes sense like 40/02/2022 won't pass even though the format looks correct
  console.log(!isNaN(dateCleared.getDate()))

  return dateCleared !== undefined && dateCleared >= today;
}

// generic validation function for the input values
function isInputValid(input, validateFunction, errorMessage) {
  
  const clearInput = input.trim();
  
  if (!clearInput) {
    console.error("Input cannot be blank.")
  } else if (!validateFunction(clearInput)) {
    console.error(errorMessage)
  } else {
    console.info("Correct input")
  } 
}

// fucntion to show a list of users from the db
const listUsers = () => {
  db.any("SELECT users_name, TO_CHAR(entry_date, 'DD/MM/YYYY') AS reg_date FROM reg_users ORDER BY entry_date;")
		.then(users => {


			console.info(`     Users checked-in: (${users.length} in total)`);
			// print out a list of users by looping through the data:
			users.forEach(user => {
				console.info(`Name: ${user.users_name}. Check-in date: ${user.reg_date}`);
			})
			
		})
		.catch((error) => console.error(error));
}

// Export All Methods
module.exports = {
  addUser,
  listUsers
}