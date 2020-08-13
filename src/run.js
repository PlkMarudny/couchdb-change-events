// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

const CouchdbChangeEvents = require('./couchdb-change-events');

const couchdbEvents = new CouchdbChangeEvents({
  database: 'basharqbn_staging',
  host: '10.20.64.23',
  port: 5984,
  user: 'editor',
  password: 'editor',
  protocol: 'https',
  lastEventId: 'now',
  rejectUnauthorized: false,
});

couchdbEvents.on('data', (data) => {
    console.log('data', data);
  });
  
  couchdbEvents.on('couchdb_status', (status) => {
    console.log(`couchdb status: ${status}`);
  });
  
  couchdbEvents.on('couchdb_error', (error) => {
    console.log('error', error);
  });