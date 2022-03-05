// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  add: (roomname) => {
    var roomsTemplate = _.template(`
      <option><%= roomname %></option>
      `);
    // console.log(RoomsView.$select.children());
    RoomsView.$select.append(roomsTemplate({roomname: roomname}));
  },

  updateRooms: (roomname) => {
    if (!Rooms._data.includes(roomname)) {
      Rooms.createRoom(roomname);
      Rooms._data.push(roomname);
    }
  }
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};