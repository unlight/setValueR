setValueR
=========
Sets the property value of the object.

INSTALL
-------
`npm install setvaluer`

USAGE
-----
```js
var data = {};
var setvalue = require("setvaluer");
setvalue("application.cookies.key", data, 42);
// data is now: { application: { cookies: { key: 42 } } }
```

SIMILAR PROJECTS
----------------
https://github.com/jprichardson/node-field  
https://github.com/jonschlinkert/set-value  
  
