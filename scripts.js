// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoff = document.querySelector('#takeoff');
    const flightStatus = document.getElementById('flightStatus');

    //Add a window asking the user to confirm the shuttle is ready for takeoff
    takeoff.addEventListener('click', function(){
        let takeoffResponse = confirm("Confirm that the shuttle is ready for takeoff");
        console.log(`The user selected: ${takeoffResponse}`);
        
        //Update flight status to shuttle in flight
        if (takeoffResponse) {
            flightStatus.innerHTML ='Shuttle in flight.';
        }
    });
    

});

