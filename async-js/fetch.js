/*
feature requirements: 
1. load all the cities from REST API.
2. Show all the data in the format table

city name | state | pincode | country

build the UI with dummy data 
do wiring(API Integration)
*/
const table = document.getElementById("table");
const button = document.getElementById("load-data");

button.addEventListener("click", () => {
    clearData();
    fetchCities();
})
// Response
async function fetchCities() {
    // fetch all the cities 
    // IP Address of the server => bus-booking-accio.onrender.com
    // Endpoint of the REST API => all/cities
    let url = "https://bus-booking-accio.onrender.com/all/cities"; 
    let response = await fetch(url)
    // response is an Object of Built in Response
    let data = await response.json();
    appendCities(data.cities_list); // undefined
}

function clearData(){
    // [][0] = undefined
    let tBody = table.getElementsByTagName("tbody")[0] ;
    if(tBody === undefined) {
        // if there's no tbody tag inside the table
        return ;
    }
    tBody.remove();
}

function appendCities(citiesList){ 
    // builds the UI of tbody and does DOM manipulation
   // here everything is DOM related
   /*
        <tbody>
            <tr>
                <td>Hyderabad</td>
                <td>Telangana</td>
                <td>506163</td>
                <td>India</td>
            </tr>
            <tr>
                <td>Mumbai</td>
                <td>Maharashtra</td>
                <td>3899220</td>
                <td>India</td>
            </tr>
        </tbody>

        <tbody></tbody>

        <tr>
            <td>Mumbai</td>
            <td>Maharashtra</td>
            <td>3899220</td>
            <td>India</td>
        </tr>


        cityObject {
            "_id": "644f7f4c571001cf2ecc1376",
            "city_name": "Mumbai",
            "state": "Maharashtra",
            "pincode": "400001",
            "country": "India",
            "__v": 0
        }
*/
     let tBody = document.createElement("tbody");
     for(let i = 0; i < citiesList.length; i++){ 
        // create a tr 
        // create 4 tds with that data
        // append 4 td elements inside the tr
        // append the entire tr inside tbody
        let tr = document.createElement("tr");
        let city = document.createElement("td");
        city.innerText = citiesList[i].city_name;

        let state = document.createElement("td");
        state.innerText = citiesList[i].state;

        let pincode = document.createElement("td");
        pincode.innerText = citiesList[i].pincode;

        let country = document.createElement("td");
        country.innerText = citiesList[i].country;

        // tr.appendChild(city)
        // tr.appendChild(state)
        // tr.appendChild(pincode)
        // tr.appendChild(country)
        tr.append(city, state, pincode, country);
        tBody.appendChild(tr);
     }
     table.appendChild(tBody);
}


// promise => settled 
// fullfilled<data>


// function myFetch() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(new Response())
//         }, 2000)
//     })
// }

// let prom = myFetch()
// json method inside Response class is used to extract the data part of a server response 
// it will give us the data directly instead gives promise that promise will get fullfilled /  resolved with the actual data .