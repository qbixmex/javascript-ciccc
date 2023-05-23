const hotel = {
  name: 'Holiday Inn',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

console.log(hotel);

//* DOT NOTATION
/*
  hotel.name;
  hotel.rooms;
  hotel.rooms;
  hotel.booked;
  hotel.gym;
  hotel.roomTypes;
  hotel.checkAvailability();
*/

//* BRACKET NOTATION
/*
  hotel["name"];
  hotel["rooms"];
  hotel["rooms"];
  hotel["booked"];
  hotel["gym"];
  hotel["roomTypes"];
  hotel.checkAvailability();
*/