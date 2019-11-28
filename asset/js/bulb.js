// viewBulbOn.style.display = "none";
// viewBulbOff.style.display = "block";
// function changeView(){
//     if (showingBulbOff === true){
//         viewBulbOn.style.display = "none";
//         viewBulbOff.style.display = "block";
//         showingBulbOff = false;
        
//     }else{
        
//         viewBulbOn.style.display = "block"
//         viewBulbOff.style.display = "none"
//         showingBulbOff = true
//     }
// }


document.getElementById("bulbOn").style.display ="none"
function changeBulbOn(){
    document.getElementById("bulbOff").style.display = "none"
    document.getElementById("bulbOn").style.display = "block"
}
function changeBulbOff(){
    document.getElementById("bulbOn").style.display ="none"
    document.getElementById("bulbOff").style.display ="block" 
}
