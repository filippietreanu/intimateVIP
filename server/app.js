/* Copyright © 2021 Filip Pietreanu, intimatevip.com */
"use strict";

const express = require('express')();
const fs = require('fs');
const config = require('./config');
const options = {
		key: fs.readFileSync(config.keyPath),
		cert: fs.readFileSync(config.certPath)
	};
const https = require('https').Server(options, express);
const io = require('socket.io')(https);
const listner = https.listen(config.port, function() {
	console.log('Listening on ', listner.address().port);
});

//allow only the specified domain to connect
io.set('origins', config.domain + ':*');

require('./socket')(io);