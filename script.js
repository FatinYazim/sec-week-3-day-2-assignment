let bodykeydownDOM = document.querySelector("#bodykeydown");
let introDOM = document.querySelector("#intro");
let eventKeyDOM = document.querySelector("#eventKey");
let eventLocationDOM = document.querySelector("#eventLocation");
let eventWhichDOM = document.querySelector("#eventWhich");
let eventCodeDOM = document.querySelector("#eventCode");
let showDOM = document.querySelector("#show");



bodykeydownDOM.addEventListener("keydown", function(event) {
    
    introDOM.style.visibility = "hidden";
    showDOM.style.visibility = "visible";

    if (event.key === event.key) {
        eventKeyDOM.innerText =event.key;
        }
 
        if (event.location === event.location ) {
            eventLocationDOM.innerText =event.location;
            }

            if (event.which === event.which ) {
                eventWhichDOM.innerText =event.which;
                }

                
                if (event.code === event.code ) {
                    eventCodeDOM.innerText =event.code;
                    }
    

});


