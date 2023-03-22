// https://WrathfulFortunateFiber.puldwee.repl.co?key=LVXI_eJtQffuwoZQSDlPbu7cXYzb9jIGozUkL&hwid=A8722232-8910-4565-AFC4-17EAD845B77B&userid=3578885125

var Keys = [
'LVXI_eJtQffuwoZQSDlPbu7cXYzb9jIGozUkL',
'',
'',
''

]

var Hwids = [
  'A8722232-8910-4565-AFC4-17EAD845B77B',
]

var Userids = [
  '3578885125',
]

require('dotenv').config()
var SecretNum = 22958488649667884291119592456876
var rayKey = 'lIllIlllIlIlIlIIIIIlllIIlllIlIII'
var rayKey2 = 'lIllIlllIIIIlIlIlIlllIIIlIIIlIlI'


var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
var key = req.query.key
var hwid = req.query.hwid
var userid = req.query.userid
var enc = key + 'LVXI' + rayKey + rayKey2 + SecretNum + rayKey2 + rayKey + 'LVXI' + key
if (Keys.includes(key)) { } else { res.send(`Invalid Key`); return }
if (Hwids.includes(hwid)) { } else { res.send(`Invalid Hwid`); return }
if (Userids.includes(userid)) { } else { res.send(`Invalid Userid`); return }

res.send(`${genstring() + '|' + Buffer.from(enc).toString('base64').slice(0, -2) + '|' + genstring()}`)
})

function genstring() {
return require("randomstring").generate({ length: 40, charset: 'alphabetic' });
};

app.listen(port, () => console.log(`dayuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmumumumumuumumummmummummmmummummummummmmummmumumummumummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm`));
