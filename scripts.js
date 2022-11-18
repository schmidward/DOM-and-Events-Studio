// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoff = document.querySelector('#takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');

    //Add a window asking the user to confirm the shuttle is ready for takeoff
    takeoff.addEventListener('click', function(){
        let takeoffResponse = confirm("Confirm that the shuttle is ready for takeoff");
                

        if (takeoffResponse) {
            //Update flight status to shuttle in flight
            flightStatus.innerHTML ='Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue'; 
        }
    });
    console.dir(shuttleBackground);

});

