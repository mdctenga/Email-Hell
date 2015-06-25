var emailList = require('./email_log.json');

// verify that I'm getting the data from the .json file
console.log(emailList.emails[0].email);

var userEmails = [];
// loop through the array
for (var i = 0; i <= emailList.emails.length - 1; i += 1) {
  userEmails.push(emailList.emails[i].email);
}


// userEmails.indexOf()
