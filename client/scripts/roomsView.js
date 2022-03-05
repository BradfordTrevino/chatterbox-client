// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function(data) {
    // TODO: Render out the list of rooms.
    for (let i = 0; i < data.length; i++) {
      if (data[i].roomname) {
        Rooms.add(data[i].roomname);
      }
    }
  },

  renderRoom: function(roomname) {
    // add method
    Rooms.add(roomname);
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    console.log(event);
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
