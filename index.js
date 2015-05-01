function varType(mixed) {
	if (mixed === null) return "null";
	var result = typeof mixed;
	return result;
}

module.exports = function (fields, object, value) {
	if (typeof fields !== "string") {
		throw new Error("Argument #1 expects a string, given " + varType(fields) + ".");
	}
	fields = fields.split(".");

	function levelUp(obj, field, value) {
		if (typeof obj[field] !== "undefined") {
			if (fields.length === 0) {
				// var oldVal = obj[field];
				obj[field] = value;
				return value;
			} else {
				if (typeof obj[field] !== "object") {
					obj[field] = {};
				}
				return levelUp(obj[field], fields.shift(), value);
			}
		} else {
			// keep going if necessary
			if (fields.length === 0) {
				obj[field] = value;
				return value;
			} else {
				// var newField = fields.shift()
				obj[field] = {}; // {newField: value}
				return levelUp(obj[field], fields.shift(), value);
			}
		}
	}

	return levelUp(object, fields.shift(), value);
};