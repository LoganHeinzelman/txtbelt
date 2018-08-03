const textbelt = require("../index.js");

const sms = new textbelt('192.168.0.169:9090');

sms.text('Phone Number', 'test');

console.log(sms);
