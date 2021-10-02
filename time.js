const moment = require('moment');
moment.locale('pl');

const dateTime = moment().format('LL, HH:mm:ss');

console.log(dateTime);