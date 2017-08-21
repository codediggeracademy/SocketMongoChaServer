# SocketMongoChat Server (Websocket Chat Server)

This is experimental project for showcasing the power of Websockets in realtime communication with server.
This is a only server part of whole application . To learn the client interface of
this chat application pls refer [https://github.com/suwigyarathore/SocketMongoChat-Client-.git]

This project uses below technologies

* MongoDB (via mLAB - Cloud based Mongo DB on heroku)
* WebSockets (via Socket.io)
* NodeJS 
* Docker (using Docker Compose)

## About Socket.io

Socket.IO enables real-time bidirectional event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed.
[https://socket.io/]

### Real-time analytics :
Push data to clients that gets represented as real-time counters, charts or logs.

### Instant messaging and chat :
Socket.IO's "Hello world" is a chat app in just a few lines of code.

### Binary streaming : 
Starting in 1.0, it's possible to send any blob back and forth: image, audio, video.

### Document collaboration :
Allow users to concurrently edit a document and see each other's changes.

## Getting Started [Based on Docker]


### Prerequisites

You should have docker and docker-compose installed in your machine as the entire setup is based 
on docker. Pls follow below link for the same 
[https://docs.docker.com/engine/installation/]

Once done the above setup then you can move to next section. Pls user below
command to verify installation

```
$ docker -v
$ docker-compose -v
```

### Installing

Now lets start our ChatSocketServer app project 

```
git clone https://github.com/suwigyarathore/SocketMongoChat-Server-.git
cd <cloned directory name>
npm install
docker-compose up 
```

Pls check console to see your server must have started at 4000 port and print below
things in console

```
web_1  | [nodemon] starting `node server.js`
web_1  | MongoDB is Connected...
```
My chat server is also deployed on heroku if you are intrested on making your own
client you are free to use this [https://warm-hamlet-22369.herokuapp.com/ ] .Pls refer server.js to
sync your client events.

## License

This project is licensed under the MIT License 
