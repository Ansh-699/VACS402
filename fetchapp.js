const getdata =  () => {
    const val = document.getElementById("input").value;

    fetch(`https://api.github.com/users/${val}`)
        .then((response) => {
           response.json()
                .then((data) => {
                    const myJSON = JSON.stringify(data, undefined, 2);
                    document.getElementById("display").innerHTML = myJSON;

                    //display specific property
                    if(data.login){
                        document.getElementById("login").innerHTML = data.login;
                    }
                    if(data.name){
                        document.getElementById("name").innerHTML = data.name;
                    }
                    if(data.avatar_url){
                        document.getElementById("avatar").src = data.avatar_url;
                    }
                                })
                                .catch((error) => {
                                    console.log("Error: ", error);
                                });
                        }); 
                }; 