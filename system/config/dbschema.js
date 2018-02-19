var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
ObjectId = Schema.ObjectId;

/*Schema for table "cities"*/
let citySchema = new mongoose.Schema({
	 	city		: { type: String, required: true,unique: true },
		enabled		: { type: Number, default:1},
		state       : { type: String},
		language    : { hi:String, eng:String},
	 	created_on	: { type: Date, default: Date.now },
	 	updated_on	: { type: Date, default: Date.now },
});
let City = mongoose.model('cities', citySchema);

module.exports = {City }
