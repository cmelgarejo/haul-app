conn = new Mongo();

db = conn.getDB("haul-app");

// initialize all the collections of the app
db.createCollection("inspections");
db.createCollection("crashes");
db.createCollection("serious_violations");
db.createCollection("decoded_vins");

db.inspections.createIndex({ "violations.violation.BASIC": 1 });
