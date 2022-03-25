// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return (Math.abs(location - 42))
}

function distanceFromHqInFeet(feetLocation){
    return (distanceFromHqInBlocks(feetLocation) * 264)

}

function distanceTravelledInFeet(start, end){
    return ((Math.abs(start - end) ) * 264)
}

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start, end) > 2500) {
        return ("cannot travel that far")
    }
        else if (distanceTravelledInFeet(start, end) > 2000) {
             return 25;
        }
        else if (distanceTravelledInFeet(start, end) > 400) {
            return (Math.abs(distanceTravelledInFeet(start, end) - 400) *.02);
       }
    
        else if (distanceTravelledInFeet(start, end) < 400) {
            return 0;
        }
    
} 

    
