var exec 	= require('child_process').exec
function puts(error, stdout, stderr) {
	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
	if (error !== null) 
		console.log('exec error: ' + error);
} 
exec(
	"java -cp scroll-pdf-3.4.5.jar "+
	"org.xhtmlrenderer.simple.PDFRenderer "+
	"export/CLEANED_32539763.xhtml "+
	"test.pdf", {
		cwd: process.cwd() + "/workingDir/"
	}, puts);
//