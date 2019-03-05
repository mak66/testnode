var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var inmess = 0;

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log('Received:-' + remote.address + ':' + remote.port +' - ' + message);
    inmess++;
    if (inmess > 4) {
        console.warn("too many messages");
        terminate();
    }

});
function terminate(){
      console.warn('terminating');
      server.close();
      client.close();
      if (timeout) clearTimeout(timeout);
}

var timeout = setTimeout(terminate,5000);
server.bind(PORT, HOST);

var client = dgram.createSocket('udp4');

function sendy(message){
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
});
}

sendy(Buffer.from('My KungFu is Good!'))
sendy(Buffer.from('My KungFu is Good2!'))
sendy(Buffer.from('My KungFu is Good3!'))
