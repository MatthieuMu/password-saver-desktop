const Datastore = require('nedb');
const db = new Datastore({ filename: '../../data/datastore.json', autoload: true });

db.find({ hello: 'world' }, function (err, docs) {
    console.log(docs);
});