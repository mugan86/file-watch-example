const fs = require('fs');
require('log-timestamp');

const mockData = './mock_data.csv';

console.log(`Watching for file changes on ${mockData}`);

// Prueba ejecutando una API Externa
/*const request = require('request');
    request('https://ergast.com/api/f1/current.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body["MRData"]) // Show the HTML for the Google homepage. 
    }
});*/

fs.watchFile(mockData, (curr, prev) => {
    console.log(`${mockData} file Changed`);
    readCSV();
});

function readCSV() {
    const fs = require('fs'); 
    const csv = require('csv-parser');

    fs.createReadStream(mockData)
    .pipe(csv())
    .on('data', function(data){
        try {
            //perform the operation
            console.log('-------------------------');
            console.log(data.id);
            console.log(data.name);
            console.log(data.email);
        }
        catch(err) {
            //error handler
        }
    })
    .on('end',function(){
        //some final operation
    });  
}