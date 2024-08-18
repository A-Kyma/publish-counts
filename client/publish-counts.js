Counts = new Mongo.Collection('counts');

Counts.get = function countsGet (name) {
  var count = this.findOne(name);
  return count && count.count || 0;
};

Counts.has = function countsHas (name) {
  return !!this.findOne(name);
};
