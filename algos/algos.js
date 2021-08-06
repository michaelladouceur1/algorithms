function findObjectField(obj, field) {
  let contains = [];
  function findField(obj, field) {
    for (const objField in obj) {
      if (objField === field) {
        contains.push(obj[field]);
      } else {
        if (obj[objField] instanceof Object) {
          findField(obj[objField], field);
        }
      }
    }
    return contains;
  }
  return findField(obj, field);
}

module.exports = { findObjectField };
