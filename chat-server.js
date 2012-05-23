var net = require('net');
 
// list of client sockets
var clients = [];

net.createServer(function(socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    clients.push(socket);   
});

/* Mongo stuff!! */
var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;

var server = new Server('ds029817.mongolab.com', 29817, {auto_reconnect:true});
var db = Db('srwc_player', server);

db.open(function(err, db) {
    if (!err) {
        console.log("we are connected");
    }
    else {
        console.log("we are not connected");
    }

    db.collection('players', function(err, collection) {
        collection.find(function(err, cursor) {
            cursor.each(function(err, item) {
                if (item != null) console.dir(item);
            });
        });
    });
});
