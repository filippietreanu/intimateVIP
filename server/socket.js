/* Copyright © 2021 Filip Pietreanu, intimatevip.com */
//handle join event
function handleJoin (socket, data) {
	socket.room = data.room;
	socket.join(data.room);
	send(socket, data);
}

//handle disconnect event
function handleDisconnect (socket) {
	socket.leave(socket.room);
	send(socket, {type: 'leave'});
}

//check room length at the time of login
function handleCheckRoom (socket, data, io) {
	let result = !io.sockets.adapter.rooms[data.room] || io.sockets.adapter.rooms[data.room].length < 2;
	socket.emit('message', JSON.stringify({type: 'checkRoomResult', result: result}));
}

//send the message in particular room
function send (socket, data) {
	socket.broadcast.to(socket.room).emit('message', JSON.stringify(data));
}

module.exports = function (io) {
	//handle connection event
	io.sockets.on('connection', function (socket) {
		socket.on('message', function (data) {
			data = JSON.parse(data);

			switch (data.type) {
				case 'join':
					handleJoin(socket, data);
					break;
				case 'checkRoom':
					handleCheckRoom(socket, data, io);
					break;
				case 'offer':
				case 'answer':
				case 'candidate':
				case 'message':
				case 'screenShare':
				case 'expectScreenShare':
				case 'currentTime':
					send(socket, data);
					break;
			}
		});

		socket.on('disconnect', function () {
			handleDisconnect(socket);
		});
	});
}