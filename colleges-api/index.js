// var express = require('express');
// var app = express();
// const {totalColleges, collegesSearch, collegeStates, collegesDistrict, allStates, allDistricts}=require('./controller/colleges')
// const cors=require('cors');
// const errorHandler = require('../errorHandler');
// const PORT = process.env.PORT || 3000;


// app.use(cors())

   
// app.get('/',function(req,res){

// 	res.send("Colleges API : SriGuru Institute of Technology, Coimbatore");

// });

// app.get('/colleges/total',totalColleges)
// app.get('/colleges',collegesSearch);
// app.get('/colleges/state',collegeStates);
// app.get('/colleges/district',collegesDistrict)
// app.get('/allstates',allStates)
// app.get('/districts',allDistricts)


// app.use(errorHandler)


// app.listen(PORT, function () {  

//   console.log("Example app listening at " + PORT);

// })

const express = require('express');
const cors = require('cors');
const { totalColleges, collegesSearch, collegeStates, collegesDistrict, allStates, allDistricts } = require('./controller/colleges');
const errorHandler = require('../errorHandler'); // Adjust the path based on your file structure

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', function (req, res) {
  res.send("Colleges API: SriGuru Institute of Technology, Coimbatore");
});

app.get('/colleges/total', totalColleges);
app.get('/colleges', collegesSearch);
app.get('/colleges/state', collegeStates);
app.get('/colleges/district', collegesDistrict);
app.get('/allstates', allStates);
app.get('/districts', allDistricts);

app.use(errorHandler); // Use the errorHandler middleware here

app.listen(PORT, function () {
  console.log("Example app listening at " + PORT);
});
