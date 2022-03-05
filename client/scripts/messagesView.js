// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      MessagesView.renderMessage(data[i]);
    }
  },

  renderMessage: function(message) {
    let $messageHTML = MessageView.render(message);
    MessagesView.$chats.prepend($messageHTML);
    // message.username = _.escape(message.username);
    // message.text = _.escape(message.text);
    // message.roomname = _.escape(message.roomname);

    // MessagesView.$chats.append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};