// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // _data: []
  _rooms: [],

  _selected: '',

  // items: () => {
  //   return _.chain([...Rooms.data]);
  // },

  // isSelected: () => {
  //   return roomname === Rooms.isSelected || !roomname && Rooms.selected === 'lobby';
  // },

  // add: function(room, callback = ()=>{}) {
  //   Rooms._data.add(room);
  //   Rooms.selected = room;
  //   callback(Rooms.items());
  // },

  // update: function(messages, callback = ()=>{}) {
  //   var length = Rooms._data.size;

  //   _.chain(messages)
  //     .pluck('roomname')
  //     .uniq()
  //     .each(room => Rooms._data.add(room));

  //   if (Rooms.selected === null) {
  //     Rooms.selected = Rooms._data.values().next().value;
  //   }

  //   if (Rooms._data.size !== length) {
  //     callback(Rooms.items());
  //   }
  // },






  add: (roomname) => {
    // Event handler for add room to the room data structure
    if (!Rooms._rooms.includes(roomname)) {
      Rooms._rooms.push(roomname);
    }
  },

  updateRoom: (roomname) => {
    // Update the selected room
    Rooms.selected = roomname;
    console.log(Rooms.selected);
  },

  getSelectedRoom: () => {
    return Rooms._selected;
  },

  setSelectedRoom: (roomname) => {
    Rooms._selected = roomname;
  }
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};