# MongoDB $inc Operator Bug

This repository demonstrates an uncommon bug related to the `$inc` operator in MongoDB when used with negative values and missing fields.  The issue arises when attempting to decrement a field that doesn't yet exist in a document.  Instead of creating the field and setting it to the negative value, the update operation fails.

The `bug.js` file contains the problematic code, while `bugSolution.js` shows the correct way to handle this scenario.  This example highlights the importance of checking for field existence before using `$inc` with negative values or employing alternative approaches like `$set` for creating new fields.