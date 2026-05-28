const fs=require('fs');
const s=fs.readFileSync('src/pages/HomePage.js','utf8');
console.log('mojibake', s.includes('LÃ©o'));
const m=s.match(/Image [^"\n]+/);
console.log('match', m?m[0]:'none');
