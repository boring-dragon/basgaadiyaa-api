var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

var quotes = [

    'މިނެދޭ ނާޅިން މިނެދޭށެ',
    'އަޑިގަނޑަކަށްފަހު އުސްގަނޑެއް އަންނާނެއެ',
    'ކަންޔާ ކުޑަކާށްޓެއް ނުކާށެ',
    'ބަސްނުވިކޭ އޮޑީގެ ދިރުނބާކޮޅަށް ނާރާށެ',
    'ނަވަށް ކުރާ ބާރު އެނގޭނީ ކެނބަށެ',
    'ހަލާދަނޑީގެ ދެ ކޮޅު ބަލާށެ',
    'އިށީންނާނެ ގަލެއް ނުބަލައި އުދުއްސައި ނުގަންނާށެ',
    'ކުކުޅަށްވުރެ ބިސްދޮށި ނުވާށެ',
    'ކަންވެ ނަންނުވިޔަސް ކަންނުވެ ނަންނުވާށެ',
    'ނުފިރުކެވެނީސް ދުވަން ނޫޅޭށެ',
    'ހިޔަންޏަށް މުޑި ނުނަގާށެ',
    'އިހަށް ނުވި ރައްކަލެއް ފަހަކުން ނުވެވޭނެއެ',
    'ކާންދޭ އަތުގައި ދައިނުގަންނާށެ',
    'ކުޅަނދުރު ހަތަޔަށް އޮށްގާ ނުލާށެ',
    'ނުރުހުމުގެ ލޮލަކަށް އައިބެއް ނުފެންނާނެއެ',
    'ނާރެއްހާ ތަން  ދޫކޮށްލިއްޔާ ކެނބެއްހާ ތަން ދަމައިގަންނާނެއެ',
    'އުޅޭން ނޭނގުނު މީހަކަށް މިޔާންވެސް ނޭނގޭނެއެ',
    'ކައްޗަށް އެޅި ބިންގަލެއް ކެއްޗާ ހަމަޔަށް ނެންގަސް އޮންނާނީ ކައްޗެށެ',
    'ރައްކާވެ ތިބިއްޔާ ދަތުރު',
    'ނުފޯރާ ފޮތިން ފޫނުގަޅާށެ',
    'ނުރޯ ދަރިއަކަށް ކިރެއް ނުލިބޭނެ',
    'ހިކިފަސްތާ ބަކަނާޅާށެ'
];
var images = [
'http://jinas.me/images/49140104_350837899062850_1758018186852171776_n.jpg',
'http://jinas.me/images/67601547_476829579797014_4830378013608640512_n.jpg',
'http://jinas.me/images/68484688_485811528898819_4027315147545509888_n.jpg',
'http://jinas.me/images/67495457_482988625847776_1947158474869702656_n.jpg',
'http://jinas.me/images/68892296_482758752537430_8998479182639923200_n.jpg',
'http://jinas.me/images/67113527_473452246801414_3189146898137088000_n.jpg',
'http://jinas.me/images/66735774_467777877368851_5966704645052039168_n.png',
'http://jinas.me/images/66515655_465874157559223_7328730283186847744_n.jpg',
'http://jinas.me/images/65650845_457928838353755_1495492872139440128_n.jpg',
'http://jinas.me/images/52609105_377664503046856_7827101761180532736_n.jpg',
'http://jinas.me/images/49793768_354267732053200_9026882527217844224_n.jpg',
'http://jinas.me/images/49723821_355128575300449_1238405007498280960_n.jpg',
'http://jinas.me/images/47427709_334046137408693_874540897214136320_n.jpg',
'http://jinas.me/images/46800540_328371881309452_147990618671415296_n.jpg',
'http://jinas.me/images/45088665_315500909263216_2983714880042827776_n.jpg',
'http://jinas.me/images/44834597_312761889537118_7658456554588340224_n.jpg',
'http://jinas.me/images/44395293_309602019853105_8647847497227567104_n.jpg',
'http://jinas.me/images/43655133_304634267016547_3107544967644446720_n.jpg'

];

 app.get('/quote/random', function (req, res) {
    var RandomNumber = Math.floor(Math.random() * (quotes.length));

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    return res.send([quotes[RandomNumber]]);
});

app.get('/image/random', function(req,res) {
    var RandomNumber = Math.floor(Math.random() * (images.length));

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    return res.send([images[RandomNumber]]);
});

app.listen(5000, function () {
    console.log('Node app is running on port 5000');
});