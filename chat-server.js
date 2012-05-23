var net = require('net');
 
// list of client sockets
var clients = [];

net.createServer(function(socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    clients.push(socket);   
});

/* Mongo stuff!! */
/*var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect:true});
var db = Db('players', server);

db.open(function(err, db) {
    if (!err) {
        console.log("we are connected");
    }

    db.collection('players', function(err, collection) {
        collection.find(function(err, cursor) {
            cursor.each(function(err, item) {
                if (item != null) console.dir(item);
            });
        });
    });
});*/
