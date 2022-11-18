// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoff = document.querySelector('#takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const landing = document.querySelector('#landing');

    //Add a window asking the user to confirm the shuttle is ready for takeoff
    takeoff.addEventListener('click', function(){
        let response = confirm("Confirm that the shuttle is ready for takeoff");
        if (response) {
            //Update flight status to shuttle in flight
            flightStatus.innerHTML ='Shuttle in flight.';
            //Make background color blue if launch selected
            shuttleBackground.style.backgroundColor = 'blue';
            //Update shuttle height to 10,000 miles
            spaceShuttleHeight.innerHTML = '10,000';
        }
    });

    //Add an alert letting the user konw "The shuttle is landing. Landing gear engaged."
    landing.addEventListener('click', function(){
        alert('The shuttle is landing. Landing gear engaged');
        //Change flight status to the shuttle has landed
        flightStatus.innerHTML = "The shuttle has landed.";
        //Upadte the background color from blue to green
        shuttleBackground.style.backgroundColor = 'green';
    });



});

