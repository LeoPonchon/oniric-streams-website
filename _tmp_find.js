const fs = require('fs');
const s = fs.readFileSync('src/i18n.js','utf8');
const needle = 'aria: "T';
const i = s.indexOf(needle);
console.log('idx', i);
console.log(s.slice(i, i+240));
