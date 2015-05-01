setValueR
=========
Sets the property value of the object.

INSTALL
-------
`nmp install setvaluer`

USAGE
-----
```js
var data = {};
var setvalue = require("setvaluer");
setvalue("application.cookies.key", data, 42);
// data is now: { application: { cookies: { key: 42 } } }
```

RELATED PROJECTS
----------------
https://github.com/jprichardson/node-field  
https://github.com/unlight/getValueR  