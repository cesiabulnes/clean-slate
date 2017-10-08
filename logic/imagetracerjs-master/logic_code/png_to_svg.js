"use strict";

var fs = require('fs');

var ImageTracer = require( __dirname + '/../imagetracer_v1.2.1' );



//var filename = require(__dirname + '/current.png');

// This example uses https://github.com/arian/pngjs 
// , but other libraries can be used to load an image file to an ImageData object.
var PNGReader = require( __dirname + '/PNGReader' );

var http  = require('http');

var connect    = require('connect');
var port  = process.env.PORT || 9788;

var server = http.createServer(function(req, webres)
{
    var url = req.url;
	console.log(url);
	if(url == '/getShrek'){

	}

    if(url == '/convert')
    {
        fs.readFile(
			
		__dirname + url, // Input file path
		
		function( err, bytes ){
			if(err){ throw err; }
		
			var reader = new PNGReader(bytes);
		
			reader.parse( function( err, png ){
				if(err){ throw err; }
				
				// creating an ImageData object
				var myImageData = { width:png.width, height:png.height, data:png.pixels };
				
				// tracing to SVG string
				//var options = { ltres:1, rightangleenhance:false, colorquantcycles:1,blurradius:1.5, blurdelta:10, strokewidth:1, viewbox:true }; // optional
				//var options = { blurradius:2, blurdelta:30, viewbox:true};
				var svgstring = ImageTracer.imagedataToSVG( myImageData, 'Artistic2');
				
				// writing to file
				fs.writeFile(
					__dirname + '/test.svg', // Output file path
					svgstring,
					function(err){ if(err){ throw err; } console.log( __dirname + '/test.svg was saved!' ); }
				);
				
			});// End of reader.parse()
			
		}// End of readFile callback()
		
	);// End of fs.readFile()
    }
}).on('error', function(e)
{  
      console.log("Got error: " + e.message);   
});
server.listen(port);
console.log('Accepting connections on port ' + port + '...');


