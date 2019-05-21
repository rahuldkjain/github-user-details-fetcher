function fetchAccount(){
    var username = document.getElementById('username').value;
    const url = 'https://api.github.com/users/'+username;
    //console.log(url);

    fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then(response => response.json())
    .then(data => {
        //console.log(data) 
        var userURL = data.avatar_url;
        var userName = data.name;

        //document.write("<h4> User: "+ userName+ "</h4");
        //document.write("<img src='"+ userURL + "'/>");

        //to display the result
        //document.getElementById("userName").innerHTML = userName;
        //document.getElementById("avatar").src = userURL;
        //console.log(data.avatar_url);

        // to save user data to local storage
        localStorage.setItem(userName, userURL);
        //localStorage.setItem("userAvatar", userURL);

        // to display delete button
        //document.getElementById("deleteUser").style.display = "block";

        var key = localStorage.key(0);
        key = '"' + key + '"';
        var MyTable =  document.getElementById("userTable"); 
        var len = localStorage.length;
        var NewRow = MyTable.insertRow(len);
        var Newcell1 = NewRow.insertCell(0); 
        var Newcell2 = NewRow.insertCell(1);
        var Newcell3 = NewRow.insertCell(2);
        Newcell1.innerHTML = localStorage.key(0);
        Newcell2.innerHTML = "<img src='"+ localStorage.getItem(localStorage.key(0)) + "' width='100px' height='80px'/>";
        Newcell3.innerHTML = "<button onclick='deleteUser(" + key + ")'> Delete </button>";
        })
    .catch(function() {
        console.log("ERROR occured");
    });
    
}

function showUser(){

}

function deleteUser(key){
    //document.getElementById("userName").innerHTML = "";
    //document.getElementById("avatar").src = "";

    //remove data from local storage

    var len = localStorage.length;
    var MyTable =  document.getElementById("userTable");
    for(var i = 0; i < len; i++){
        MyTable.deleteRow(1);
    }
    localStorage.removeItem(key);

    //console.log(localStorage)
    //localStorage.removeItem(key);
    //document.getElementById("myTable").deleteRow(0);
    

    myFunction();

    //document.getElementById("deleteUser").style.display = "none";
}