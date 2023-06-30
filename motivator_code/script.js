let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let content = document.querySelector(".wrapper");
let btnq = document.querySelector("#btn");

// function setCookie(attribute,value,daysToLive){
//     const date = new Date();
//     date.setTime(date.getTime()+(daysToLive*24*60*60*1000));
//     let expires = "expires="+date.toUTCString();
//     document.cookie = `${attribute}=${value}; ${expires}; path=/`
// }


const url = "https://type.fit/api/quotes";


let getQuote = function(){
    try {
        fetch(url)
            .then(function(response){
                if (response.status!=200) {
                    quote.innerText = "Something went wrong!";
                    author.innerText = "Try again later...";      
                } 
                //else if(!document.cookie.quote.isEmpty()){

                // } 
                else{
                    response.json().then(function(data){
                        // let now = new Date();
                        content.style.setProperty("animation","fadeIn 2s ease-in");
                        let dataSize = data.length;       
                        let random = Math.floor(Math.random()*dataSize);
                        quote.innerText = "\""+data[random].text+"\"";
                        author.innerText = "- " + data[random].author;    
                        // setCookie("usedToday","yes",1);
                        btnq.style.setProperty("pointer-events","none");
                        btn.innerText="Visit Tomorrow";
                    })
                }
            }) 
        } catch (error) {
            console.log("Error: ", error);
        } 
    }

    
    btn.addEventListener("click", getQuote);
    