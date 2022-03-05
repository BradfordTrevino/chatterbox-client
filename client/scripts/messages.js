// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  createMessage: (message) => {
    // let newMessage = {};
    // newMessage.username = username;
    // newMessage.text = text;
    // newMessage.roomname = roomname;

    // _data.append(newMessage);
    Messages._data.push(message);
  },

  retrieve: () => {
    return Messages._data;
  },

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};