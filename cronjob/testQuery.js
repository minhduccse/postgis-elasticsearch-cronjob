const pgPool = require('../db/pgConnection')

async function testQuery() {
    await pgPool.query("CREATE TABLE income_density AS SELECT vnm_3.gid, vnm_3.gid_1, vnm_3.geom, COUNT(vehicle2.geom) AS total FROM vnm_3 LEFT JOIN vehicle2 ON st_contains(vnm_3.geom, vehicle2.geom) GROUP BY vnm_3.gid;")
        .then(() => console.log("Query done!"))
        .catch(err => console.error('Error executing query', err.stack));
    await pgPool.end().then(() => console.log('Pool has ended'));
}

// async function getRows() {
//     let rows = [];
//     await pgPool.query("select * from vnm_3 where gid_1 = 'VNM.25_1';").then(res => {
//         wards = res.rows;
//     }).catch(err => console.error('Error executing query', err.stack));
//     return rows;
// }

// async function queryData(rows) {
//     var promises = [];

//     rows.map(function (row) {
//         promises.push(pgPool.query("").then(() => console.log('Query row', row)).catch(err => console.error('Error executing query', err.stack)));
//     });

//     await Promise.all(promises).then(() => console.log('All done!')).catch(err => console.error('Error executing query', err.stack));
//     await pgPool.end().then(() => console.log('Pool-import-wards has ended'));
// }

async function run() {
    console.time("query");
    await testQuery();
    console.timeEnd("query");
}

run().catch(err => console.error(err));