// npm install got
// mkdir data

const fs = require('fs');
const got = require('got');


//Complete 10 times for each file of data
(async () => {
	try {
		//recieve the site
		const response = await got('https://parsons.nyc/aa/m01.html');
		console.log(response.body);
		//write to a local file
		fs.writeFileSync('/home/ec2-user/environment/data/file1.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m02.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file2.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m03.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file3.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m04.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file4.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m05.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file5.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m06.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file6.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m07.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file7.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m08.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file8.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m09.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file9.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m10.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/file10.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();