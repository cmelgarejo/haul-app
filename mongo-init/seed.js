/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const { MongoClient } = require("mongodb"),
  fs = require("fs").promises,
  xml2js = require("xml2js");

// Connection URL
const url = process.env.MONGO_URL || "";
const client = new MongoClient(url);
const dbName = "haul-app";

async function seed(fileName) {
  await client.connect();
  const db = client.db(dbName);
  var parser = new xml2js.Parser({ mergeAttrs: true, explicitArray: false });
  const xmlFile = await fs.readFile(fileName);
  const result = await parser.parseStringPromise(xmlFile);
  console.info("Inserting inspections...");
  result.carrierData.inspections &&
    (await db.collection("inspections").insertMany(result.carrierData.inspections.inspection));
  console.info("Inserting crashes...");
  result.carrierData.crashes && (await db.collection("crashes").insertMany(result.carrierData.crashes.crash));
  console.info("Inserting serious_violations...");
  result.carrierData.serious_violations &&
    (await db.collection("serious_violations").insertMany(result.carrierData.serious_violations.serious_violation));
  console.info("Done!");
  client.close();
}

async function runSeeder() {
  // Either provide a specific file or just search the local directory for an xml file
  if (process.argv.length > 2) seed(process.argv[process.argv.length - 1]);
  else {
    const dir = await fs.readdir(__dirname);
    dir.find((file) => file.endsWith(".xml")) && seed(__dirname + "/" + dir.find((file) => file.endsWith(".xml")));
  }
}

runSeeder();
