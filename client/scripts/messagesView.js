// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('submit', MessagesView.render);
  },

  render: function(data) {
    let allMessages = Messages.retrieve();
    for (const message of allMessages) {
      if (message.roomname === Rooms.selected) {
        MessagesView.renderMessage(message);
      } else {
        MessagesView.renderMessage(message);
      }
    }
  },

  renderMessage: function(message) {
    message.username = _.escape(message.username);
    message.text = _.escape(message.text);
    message.roomname = _.escape(message.roomname);

    MessagesView.$chats.prepend(MessageView.render(message));
  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }

};