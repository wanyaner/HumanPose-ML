var mongoose = require('mongoose');

var Schema = monggose.Schema;

var realtimeSchema = new Schema(
    {
        position_x:{type: number},
        position_y:{type: number},
        confidence_score:{type: number},
    }
);

// Virtual for x
realtimeSchema
.virtual('position_x')
.get(function () {
  return this._x;
});

// Virtual for y
realtimeSchema
.virtual('position_y')
.get(function () {
  return this._y;
});

// Virtual for confidence score
realtimeSchema
.virtual('confidence_score')
.get(function () {
  return this._cons;
});

// calculate DTW - preparing data

//Export model
module.exports = mongoose.model('real-time', realtimeSchema);