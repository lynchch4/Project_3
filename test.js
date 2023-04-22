// use the D3 library to read in samples.json from URL
const url = "https://unemployment-api4.onrender.com/industry"

//create console log for data to reference
const data = d3.json(url).then(function(data) {console.log(data)});

// start and drop down menu selection function
function start() {

    // pull Json data
    d3.json(url).then(function(data) {
        

        let selection = d3.select("#selDataset");
        console.log(data)
        
        function idSelect(ids) {
            return ids.industry == 'Construction'
        };
        // select drop down from html
        
        let filter = data.filter(idSelect)[0]
        
        console.log(filter)
        // map data and apply to drop down
        for (let i = 0; i < data.length; i++)
            data.industry.map(function(set) {
                return selection.append("option").text(set)
        });
     
        
    });
};

start()