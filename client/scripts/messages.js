// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  createMessage: (username, text, roomname) => {
    let newMessage = {};
    newMessage.username = username;
    newMessage.text = text;
    newMessage.roomname = roomname;

    _data.append(newMessage);
  },

  retrieve: () => {
    // for (let i = 0; i < _data.length; i++) {
    //   Message.render(_data[i]);
    // }
  },

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};