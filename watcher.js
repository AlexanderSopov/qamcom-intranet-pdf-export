var filename = "CLEANED_33359197.xhtml";



var exec 	= require('child_process').exec
function puts(error, stdout, stderr) {
	if (error)
		return console.log('exec error: ' + error);
	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
}
exec(
	"java -cp scroll-pdf-3.4.5.jar "+
	"org.xhtmlrenderer.simple.PDFRenderer "+
	"export/"+ filename +" "+
	"test.pdf", {
		cwd: process.cwd() + "/workingDir/"
	}, puts);
//
