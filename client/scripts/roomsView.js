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
    let uniqueRooms = [];
    for (const element of data) {
      if (uniqueRooms.indexOf(element.roomname) === -1) {
        uniqueRooms.push(element.roomname);
      }
    }
    for (const room of uniqueRooms) {
      RoomsView.renderRoom(room);
    }
    // RoomsView.$select.html('');
    // Rooms
    //   .items()
    //   .each(RoomsView.renderRoom);
    // RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var roomsTemplate = _.template(`
      <option><%= roomname %></option>
      `);
    RoomsView.$select.append(roomsTemplate({roomname: roomname}));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function(event) {
    console.log(event);
    // window.prompt(message).val();
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }
};
