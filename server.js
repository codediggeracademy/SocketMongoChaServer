var mongo = require('mongodb').MongoClient;
var client = require('socket.io').listen(4000).sockets;

//connect to mongo
mongo.connect('mongodb://db/mongochat', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('MongoDB is Connected...');

  //Creating connection with Socket.io
  client.on('connection', (socket) => {
    var chat = db.collection('chats');

    //Creating Send Status Function
    sendStatus = (s) => {
      socket.emit('status', s);
    };

    //Creating Send Output Function
    sendOutput = (s) => {
      socket.emit('output', s);
    };

    //Creating Clear Function
    sendClear = () => {
      socket.emit('cleared');
    };

    //Get Chats from mongo collection
    chat.find().limit(100).sort({_id: 1}).toArray((error, res) => {
      if (error) {
        throw error;
      }

      //Send output
      sendOutput(res);
    });

    //Handle input from Client
    socket.on('input', (data) => {
      if (!data.name || !data.message) {
        sendStatus('Please enter name & message');
      }
      else {
        chat.insert({name: data.name, message: data.message}, () => {
          sendOutput([data]);

          //Send Status Object
          sendStatus({
            message: 'Message Sent',
            clear: true
          })
        });
      }
    });

    // Handle clear input
    socket.on('clear', (data) => {
      chat.remove({}, () => {
        sendClear();
      })
    })
  })
});
