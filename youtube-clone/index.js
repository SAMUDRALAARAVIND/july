// https://api.postalpincode.in/pincode/{PINCODE}

// 508206

/**
 * Mumba => Mumbai
 * REST API can do all the below tasks with database: 
 * 
 *  i. fetching the data from DB ( reading )
 *  ii. add the data into database ( writing )
 *  iii. deletion of data from the database ( deletion )
 *  iv. Updation of data in the database ( update )
 * 
 * 
 * REST Methods are standard request methods to a REST API which will give idea of what it is made for 
 * 
 * GET => reading the data
 * POST => add some data into database
 * PUT => updates the data in the database
 * DELETE => deletes the data in the database.
 * 
 * 3 ways to send data from client to server
 * 1. Using URL ( path parameters )
 *  Example: `https://api.postalpincode.in/pincode/${pincode}`
 * 2. Using URL ( Query parameters )
 *  Example: `https://api.postalpincode.in/pincode?pincode=${pincode}&town=${townName}`
 * 3. Using body (Body)
 *   used to send huge data | secured data 
 */

// async function fetchPincodeDetails(){
//     let pincode = 335701;
//     let url = `https://api.postalpincode.in/pincode/${pincode}`;
//     // GET request method
//     const response = await fetch(url, {method: "POST"});
//     const result = await response.json();
//     console.log(result);
// }

// fetchPincodeDetails();



