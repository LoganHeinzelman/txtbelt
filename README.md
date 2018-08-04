# txtbelt
[![npm version](https://badge.fury.io/js/txtbelt.svg)](https://badge.fury.io/js/txtbelt)

TextBelt is free open source API that allows people to send SMS messages. It works by send an email to the phone service end point where it is then delivered to the intended person.

### Requirements
* Working [TextBelt](https://github.com/typpo/textbelt) server
* Knowledge of how to setup that server right.
* Side note: you might have to setup postfix with an SMTP relay if you cant send emails from your server

### Sending a text in the US
```js
const txtbelt = require("txtbelt");
const sms = new txtbelt("SERVER IP"); // IE: 192.168.0.169:9090
sms.text('Phone Number', 'message');
```
