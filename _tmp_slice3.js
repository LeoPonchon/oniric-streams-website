const fs = require('fs');
const s = fs.readFileSync('src/i18n.js','utf8');
const start = s.indexOf('features: {', s.indexOf('fr: {'));
console.log(s.slice(start, start+900));
