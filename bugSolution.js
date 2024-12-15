```javascript
// Correct approach using $inc with $setOnInsert
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 }, $setOnInsert: { age: 0 } });
// Alternative approach using $set
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } }, {upsert: true});
```