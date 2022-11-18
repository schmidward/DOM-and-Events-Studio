// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    //Add a window asking the user to confirm the shuttle is ready for takeoff
    const takeoff = document.querySelector('#takeoff');

    takeoff.addEventListener('click', function(){
        let takeoffResponse = confirm("Confirm that the shuttle is ready for takeoff");
        console.log(`The user selected: ${takeoffResponse}`);
    });
});

