"use strict";

module.exports = {
	keyPath: '/etc/letsencrypt/live/live.intimatevip.com/privkey.pem', //key path
	certPath: '/etc/letsencrypt/live/live.intimatevip.com/fullchain.pem', //certificate path
	domain: 'https://intimatevip.com', //replace with your domain for security (not needed in localhost)
	port: 9000 //port to run the signaling server
};