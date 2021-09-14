// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('/home/ec2-user/environment/DataStructures/data2/file7.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

//create a variable to store the td elements in
var tdElem = "";

//prints the td element into var tdElem 
//uses REGEX to delete large blank spaces and trims information
$('td').each(function(i, elem) {
    tdElem += ($(elem).text()).split("\n")[3] + '\n';            //regex found at https://futurestud.io/tutorials/remove-extra-spaces-from-a-string-in-javascript-or-node-js
    
});

//splits the information at new lines
var address = tdElem.split(/[;,—]+/);

//converts object to array
var addressArry = Object.values(address);

//clean up the address lines
//removes tabs
addressArry = addressArry.map(row =>
    row.replace(/\t/g, '')
)
//removes undefined
addressArry = addressArry.map(row =>
    row.replace(/undefined/g, '')
)
//removes extra new lines
addressArry = addressArry.map(row =>
    row.replace(/ \n \n/g, '\n')
)
addressArry = addressArry.map(row =>
    row.replace(/\n\n/g, '\n')
)
//removes the word basement
addressArry = addressArry.map(row =>
    row.replace(/ Basement/g, '')
)
//accounts for a spelling error
addressArry = addressArry.map(row =>
    row.replace(/ Basment/g, '')
)
//removes Home
addressArry = addressArry.map(row =>
    row.replace(/ Home/g, '').trim()
)
//removing unecssary deatils
addressArry = addressArry.map(row =>
    row.replace(/Downstairs in the Gym/g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/1st floor in the rear/g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/3rd Floor/g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/1st Floor/g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/Cafeteria/g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/Room #3101/g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/@ The Cloisters Club Room/g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/ in the rear./g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/4th Floor/g, '')
)
addressArry = addressArry.map(row =>
    row.replace(/Room 414/g, '')
)
//console.log(addressArry);     //this array contains null values and needs further cleaning

//creates a new array without null values
const newArr = [];
//pushes the values that exist into an array called newArry
for (let i = 0; i < addressArry.length; i++) {
  if (addressArry[i]) {
    newArr.push(addressArry[i]);
  }
}

//removes last element from array
newArr.pop();

//prints the final, cleaned array of addresses to the console
console.log(newArr);

//write the array of addresses to a file called
fs.writeFileSync('/home/ec2-user/environment/DataStructures/Week2/addressArray.txt', newArr);
