// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoff = document.querySelector('#takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const landing = document.querySelector('#landing');
    const missionAbort = document.getElementById('missionAbort');
    const rocket = document.querySelector('#rocket');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const right = document.getElementById('right');
    const left = document.getElementById('left');
    let altitude = 0;


    //Add a window asking the user to confirm the shuttle is ready for takeoff
    takeoff.addEventListener('click', function(){
        let response = confirm("Confirm that the shuttle is ready for takeoff");
        if (response) {
            //Update flight status to shuttle in flight
            flightStatus.innerHTML ='Shuttle in flight.';
            //Make background color blue if launch selected
            shuttleBackground.style.backgroundColor = 'blue';
            //Update shuttle height to 10,000 miles
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });

    //Add an alert letting the user konw "The shuttle is landing. Landing gear engaged."
    landing.addEventListener('click', function(){
        alert('The shuttle is landing. Landing gear engaged');
        //Change flight status to the shuttle has landed
        flightStatus.innerHTML = "The shuttle has landed.";
        //Upadte the background color from blue to green
        shuttleBackground.style.backgroundColor = 'green';
        //The shuttle height goes down to zero 
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
    });

    //Add confirm for the abort mission button
    missionAbort.addEventListener('click', function(){
        let response = confirm("Confirm that you want to abort the mission");
        console.log(`Abort parameter is ${response}`);
        //change flight status to mission aborted
        flightStatus.innerHTML = "Misson aborted.";
        //Upadte the background color from blue to green
        shuttleBackground.style.backgroundColor = 'green';
        //The shuttle height goes down to zero 
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
    });

    //Add update events for button clicks on up, down, right and left
    
    //UP button click goes up by 10px
    up.addEventListener('click', function(){
        let newBottom = parseInt(rocket.style.bottom);
        newBottom += 10;
        rocket.style.bottom = newBottom + 'px';
        altitude += 10000;
        spaceShuttleHeight.innerHTML = altitude;
    });
    //down button click moves the rocket down by 10px
    down.addEventListener('click', function(){
        let newBottom = parseInt(rocket.style.bottom);
        newBottom -= 10;
        rocket.style.bottom = newBottom + 'px';
        altitude -= 10000;
        spaceShuttleHeight.innerHTML = altitude;
    });
    //right button click moves the rocket right by 10px
    right.addEventListener('click', function(){
        let newLeft = parseInt(rocket.style.left);
        newLeft += 10;
        rocket.style.left = newLeft + 'px';
    });
    //left button moves the rocket left by 10px
    left.addEventListener('click', function(){
        let newLeft = parseInt(rocket.style.left);
        newLeft -= 10;
        rocket.style.left = newLeft + 'px';
    });
});

