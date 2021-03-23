/*
There are two errors in the event handler code. Fix them and 
  then use this to add a pet into your pets table. 
*/


btnSubmit22.onclick=function(){
    let customerName = inptName1.value
    let street = inptType22.value
    let city = inptCity.value
    let state = inptState.value
    let zipcode = inptZip.value
    query = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('" + customerName + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
    // look at how the query is rendered
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=lsd81882&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMessage4.textContent = "You have successfully added the pet!"
        else
            lblMessage4.textContent = "There was a problem with adding the pet to the database."
    } else 
        // transit error
        lblMessage6.textContent = "Error: " + req.status
}
