#Week 2 - Data Structures

In this assignment, I parse through a local file, /DataStructures/data2/file7.txt (this is actually the 8th file, corresponding with my ID#) using readFileSync. I take the elements from the DOM using cheerio and load them into a variable names "content".

After loading the content, I use REGEX functions to trim through the information until it is simply address lines.

I convert this object into an array to make it easier for me to manipulate.

I use the mapping function to create a new array with more defined constraints to delete the unecessary information. Such as, floor numbers, basement tags, etc.

I realize after cleaning up the array, there are null values left behind. I push the non null values into a new array in order for the information to be more concise.

Finally, I pop the last element, as it isn't an address and write the array to a file called addressArray.txt
