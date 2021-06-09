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

// Reference button 
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers 
button.on("click", filterData);
form.on("submit", filterData);

// Create filter function and check for output
function filterData () {

    console.log("You clicked the filter")

    // Prevent page from refreshing 
    d3.event.preventDefault(); 

    // Select input element and raw HTML node
    var inputElement = d3.select("#datetime"); 

    // Get value of input element
    var inputValue = inputElement.property("value")

    // Filter data by date
    var filteredData = data.filter(date => date.datetime === inputValue);

    // Check to ensure data has been filtered
    console.log(filteredData); 

    // where to put this??? 
    tbody.html(""); 

    // Return filtered data onto website
    data.forEach(filteredData => {
        var row = tbody.append("tr"); 
        var kvps = Object.entries(filteredData).forEach(([key, value]) => {
            var td = row.append("td"); 
            td.text(value)
        });
    });

};