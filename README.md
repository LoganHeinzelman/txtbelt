# txtbelt
### A simple api wrapper for interacting with a self hosted text belt server.

TextBelt is free open source API that allows people to send SMS messages. It works by send an email to the phone service end point where it is then delivered to the intended person.

#### Sending a text in the US
```js
sms.text('Phone Number', 'message');
```
