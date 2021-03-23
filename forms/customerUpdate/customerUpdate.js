/*
Update pet name (assume pet names are unique)
  Algorithm
  1. get all the pets from the database
  2. get the name of the pet they want to update. 
  3. get the name they want to use for the new name
  3. see if there are any pets with the original name in the database
  4. if there are not any in the database, tell them so and done
  5. if there is a pet with the original name in the database, run query (ajax)
         -if transit works, see if .responseText is 500 - if it is, 
          Delete worked - tell them so
         -if .responseText is not 500, tell them delete didn't work
    > if transit didn't work, tell them transit error
*/

customerUpdate.onshow=function(){
  // populate the textarea with all the pet names
    txtaNames_contents.style.height = "150px"
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=lsd81882&query=" + query)
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtaNames.value = message
    }
}


btnSubmit4.onclick=function(){
    let newName = inptNewName.value
    let oldName = inptOldName.value
    query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=lsd81882&query=" + query)
    if (req.status == 200) {
        allPetData = JSON.parse(req.responseText)
        if (allPetData.length > 0) {
            query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=lsd81882&query=" + query)
            if (req.status ==  200)  // transit worked
                if (req.responseText == 500)   // update worked
                    lblMessage7.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage7.textContent = `There was a problem updating ${oldName} to ${newName}.`
            else   // transit error
                lblMessage7.textContent = `Error: ${req.status}`
        }
    } // if 200
}
    
/*  INSERT CODE Cleaned 

    let newName = inptNewName.value
    let oldName = inptOldName.value
    query = "SELECT * FROM pets WHERE `petName` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=clc90595&query=" + query)
    if (req.status == 200) {
        allPetData = JSON.parse(req.responseText)
        if (allPetData.length > 0) {
            query = "UPDATE pets SET `petName` ='" + newName + "' WHERE `petName` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=clc90595&query=" + query)
            if (req.status ==  200)  
                if (req.responseText == 500)   
                    lblMessage7.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage7.textContent = `There was a problem updating ${oldName} to ${newName}.`
            else   
                lblMessage7.textContent = `Error: ${req.status}`
        }
    } // if 200



*/
    
    

