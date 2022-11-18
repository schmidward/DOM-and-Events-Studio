// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoff = document.querySelector('#takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    //Add a window asking the user to confirm the shuttle is ready for takeoff
    takeoff.addEventListener('click', function(){
        let takeoffResponse = confirm("Confirm that the shuttle is ready for takeoff");
                

        if (takeoffResponse) {
            //Update flight status to shuttle in flight
            flightStatus.innerHTML ='Shuttle in flight.';
            //Make background color blue if launch selected
            shuttleBackground.style.backgroundColor = 'blue';
            //Update shuttle height to 10,000 miles
            spaceShuttleHeight.innerHTML = '10,000';
        }
    });
    console.dir(shuttleBackground);

});

