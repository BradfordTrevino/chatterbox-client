// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // TODO: Render out the list of rooms.
    for (let i = 0; i < data.length; i++) {
      if (!data[i].roomname) {
        RoomsView.renderRoom(data[i].roomname);
      }
    }
  },

  renderRoom: function(roomname) {
    // createRoom method
    Rooms.createRoom(roomname);
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
