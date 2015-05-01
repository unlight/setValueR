var test = require("tapef");
var lib = require("../");

var data = {
	"_id": "5543bbe430dba2938aa5600f"
};

test("set exists value", function (t) {
	lib("_id", data, 1);
	t.equal(data["_id"], 1);
	t.end();
});

test("set new value", function (t) {
	lib("name", data, "Cox");
	t.equal(data["name"], "Cox");
	t.end();
});

test("set new value 2", function (t) {
	lib("related.age", data, 32);
	t.equal(data["related"]["age"], 32);
	t.end();
});
