use hotel_booking;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Andrew Hurley",
    email: "andrewhurley65@gmail.com",
    checked_in: false
  },
  {
    name: "Emily Fitzgerald",
    email: "emmschicka@yahoo.com",
    checked_in: true
  },
  {
    name: "Jonathan Shingle",
    email: "j.shingle@qsfinance.co.uk",
    checked_in: true
  },
  {
    name: "Fiona Mitchinson",
    email: "fionacampbell1985@gmail.com",
    checked_in: false
  }
]);
