const connection = require("./connection");

function getAllEvents(testDb) {
  const db = testDb || connection;
  return db("events").select();
}

function getEventsByUserId(userId, testDb) {
  const db = testDb || connection;
  return db("subscriptions")
    .join("events", "subscriptions.event_id", "events.id")
    .where("subscriptions.user_id", userId)
    .select(
      "events.name as name",
      "events.description as description",
      "events.location as location",
      "events.date as date"
    );
}

function getEventByCategory(category, testDb) {
  const db = testDb || connection;
  return db("events")
    .where("category", category)
    .select();
}

function getOneEvent(id, testDb) {
  const db = testDb || connection;
  return db("events")
    .where("id", id)
    .first();
}

function createEvent(newEvent, userId, testDb) {
  const db = testDb || connection;
  return db("events")
    .insert(newEvent)
    .then(result => {
      return db("subscriptions")
        .join("events", "subscriptions.event_id", "events.id")
        .where("subscriptions.user_id", userId)
        .select(
          "events.name as name",
          "events.description as description",
          "events.location as location",
          "events.date as date"
        );
    });
}

function editEvent(event, id, testDB) {
  const db = testDB || connection;
  return db("events")
    .where("id", id)
    .first()
    .update({
      name: event.name,
      location: event.location,
      description: event.description,
      category: event.category,
      date: event.date,
      is_open: event.is_open,
      type: event.type
    })
    .then(result => {
      return db("events").where("id", id);
    });
}

function deleteEvent(id, testDb) {
  const db = testDb || connection;
  return db("events")
    .where("id", id)
    .del()
    .then(data => {
      return db("events").select();
    });
}

module.exports = {
  getAllEvents,
  getEventsByUserId,
  getEventByCategory,
  getOneEvent,
  createEvent,
  deleteEvent,
  editEvent
};
