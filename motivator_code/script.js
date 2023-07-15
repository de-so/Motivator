let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let content = document.querySelector(".wrapper");
let btnq = document.querySelector("#btn");


const url = "https://type.fit/api/quotes";


let getQuote = function(){
    try {
        fetch(url)
            .then(function(response){
                if (response.status!=200) {
                    quote.innerText = "Something went wrong!";
                    author.innerText = "Try again later...";      
                } 
 
                else{
                    response.json().then(function(data){
                        content.style.setProperty("animation","fadeIn 2s ease-in");
                        let dataSize = data.length;       
                        let random = Math.floor(Math.random()*dataSize);
                        quote.innerText = "\""+data[random].text+"\"";
                        author.innerText = "- " + data[random].author;    
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
    
