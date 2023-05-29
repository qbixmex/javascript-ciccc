/*
  Create an object called facebookProfile. The object should have 3 properties:

  your name
  the number of friends you have, and
  an array of messages you've posted (as strings)
  The object should also have 4 methods:

  postMessage(message) - adds a new message string to the array
  deleteMessage(index) - removes the message corresponding to the index provided
  addFriend() - increases the friend count by 1
  removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  fullName: "Daniel Gonzalez",
  friendsCount: 148,
  messages: [
    "I want to eat some tacos",
    "My favorite movie is coming",
    "I'll be late for the party my friends"
  ],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function() {
    this.friendsCount += 1;
  },
  removeFriend: function() {
    this.friendsCount -= 1;
  }
};
