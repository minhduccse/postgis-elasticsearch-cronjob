var pgClient = require('../db/pgConnection.js');

// --- DROP TABLE ---
async function dropTables(params) {
  await pgClient.query("DROP TABLE IF EXISTS vehicle;").then(() => console.log("Dropped table vehicle!"))
    .catch(err => console.error('Error executing query', err.stack));
  
  await pgClient.query("DROP TABLE IF EXISTS population_mapping_color;").then(() => console.log("Dropped table population_map_color!"))
    .catch(err => console.error('Error executing query', err.stack));
  
  await pgClient.query("DROP TABLE IF EXISTS income_mapping_color;").then(() => console.log("Dropped table income_map_color!"))
    .catch(err => console.error('Error executing query', err.stack));
  
  await pgClient.end().then(() => console.log('Pool has ended'));
}

dropTables();
