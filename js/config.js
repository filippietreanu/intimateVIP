"use strict";

const stunUrl = 'stun:stun.l.google.com:19302', //STUN URL
    turnUrl = 'turn:live.intimatevip.com', //TURN URL
    turnUsername = 'intimatevip', //TURN username
    turnPassword = 'OagJHhs6lWM6b8qP', //TURN password
    timeLimit = 60, // in minutes
    appName = "IntimateVIP"; //your app name for copy link invitation text

var signalingURL = "";

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
	signalingURL = 'http://localhost:9000'; //local signaling server URL
} else {
	signalingURL = 'https://live.intimatevip.com:9000'; //production signaling server URL
}