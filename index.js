var fs = require('fs');
var pdf = require('html-pdf');

var html = fs.readFileSync('resume.html', 'utf8');
var options = { 
	format: 'Letter',
	border: {
		"top": "39px",
		"bottom": "39px",
		"left": "20px",
		"right": "20px"	
	}
 };
console.log('Creating pdf based on html file...')
pdf.create(html, options).toFile('resume.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log('PDF created successfully!\n', res);
});

