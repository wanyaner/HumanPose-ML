var mongoose = require('mongoose');

var Schema = monggose.Schema;

var teachingSchema = new Schema(
    {
        position_x:{type: number},
        position_y:{type: number},
        confidence_score:{type: number},
    }
);

// Virtual for x
teachingSchema
.virtual('position_x')
.get(function () {
  return this._x;
});

// Virtual for y
teachingSchema
.virtual('position_y')
.get(function () {
  return this._y;
});

// Virtual for confidence score
teachingSchema
.virtual('confidence_score')
.get(function () {
  return this._cons;
});

// calculate DTW - preparing data

//Export model
module.exports = mongoose.model('teaching', teachingSchema);