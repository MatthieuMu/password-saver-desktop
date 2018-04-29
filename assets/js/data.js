const Datastore = require('nedb');
const db = new Datastore({ filename: '../../data/datastore', autoload: true });

function find_by_category(category_name) {
    // localStorage.clear();
    db.find({ category: category_name }, function (err, docs) {
        localStorage.setItem("result", JSON.stringify(docs));
    });
    var result = JSON.parse(localStorage.getItem("result"));
    return result;
}

function store_data(data) {
    db.insert(data, function (err, newDoc) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
        console.log(newDoc);
    });
}

db.find({ hello: 'world' }, function (err, docs) {
    console.log(docs);
});