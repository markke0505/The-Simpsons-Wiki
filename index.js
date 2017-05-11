'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/ask-character', function(req, res) {
    var characterName = req.body.result.parameters.character
    var answer
    
    if (characterName == "homer simpson"){
        answer = "He is the man of the house"
    }
    else if (characterName == "marge simpson"){
        answer = "She is the woman of the house"
    }
    else if (characterName == "bart simpson"){
        answer = "He is the naughty boy of the house"         
    }
    else if (characterName == "lisa simpson"){
        answer = "She is the good girl of the house"
    }
    else if (characterName == "maggie simpson"){
        answer = "She if the clever baby of the house"
    }
    else{
        answer = "Whatever!"
    }
    return res.json({
        speech: answer,
        displayText: answer,
        source: 'ask-character-source'
    });
});

/*
restService.post('/google-action-test', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'google-action-test-source'
    });
});
*/

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
