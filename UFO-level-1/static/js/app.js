// From data.js
var tableData = data;

// Reference table body 
var tbody = d3.select("tbody");

// Log the data from data.js
console.log(data); 

// Loop through data to log each object
data.forEach(sighting => {
    console.log(sighting)

    // Create table
    var row = tbody.append('tr')

    // Input data into table 
    var kvps = Object.entries(sighting).forEach(([key, value]) => {
    var td = row.append('td')
    td.text(value)
    }) 
})

// Create filter
var button = d3.select()