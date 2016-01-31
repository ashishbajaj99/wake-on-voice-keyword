var fs = require('fs');
var ps = require('pocketsphinx').ps;
var microphone = require('mic');
var env = require('node-env-file');

env('.env');

if(!process.env.MODEL_DIR || !process.env.DICT_TO_USE || !process.env.KEYPHRASE_FILE || !process.env.POCKETSPHINX_LOG) {
    console.log("Error: Missing one of the environment variables. Check your .env file!");
    process.exit(1);
}

var config = new ps.Decoder.defaultConfig();
config.setString("-hmm", process.env.MODEL_DIR);
config.setString("-dict", process.env.DICT_TO_USE);
config.setString("-kws", process.env.KEYPHRASE_FILE);
config.setString("-logfn", process.env.POCKETSPHINX_LOG);
var decoder = new ps.Decoder(config);
decoder.startUtt();
var micFileStream = microphone.audioStream;
var micInfoStream = microphone.infoStream;

var processMic = function() {
    var chunkCounter = 0;
    return (function(chunk) {
	    var output = null;
	    
	    decoder.processRaw(chunk, false, false);
	    output = decoder.hyp();
	    console.log("On chunk: " + chunkCounter++)
		console.log(output);
	    
	    if(output != null) {
			foundKeyword();
			decoder.endUtt();
			decoder.startUtt();
	    }
	});
}
    
var foundKeyword = function() {
	console.log("Found Keyword: ASHIYA");
}
	
console.log("\n/***********************************************\n\
 * This is Ashiya, your Personal Home Assitant *\n\
 * I start listening to you once you speak     *\n\
 * my name. So simply say:                     *\n\
 * \"ASHIYA\" <wait for beep> Wassup girl?       *\n\
************************************************/");
microphone.startCapture();
micFileStream.on('data', processMic());
micFileStream.on('end', function() {
	console.log("file stream completed");
});
//micInfoStream.on('error', function(err) {
//    console.log('Error: ' + err);
//});
//micInfoStream.on('data', function(data) {
//   console.log('Data: '+data);
//});
