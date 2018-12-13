class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled(){
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    
    let vDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    let hDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    return vDistance + hDistance;
  }
  
	estimatedTime (peak = false) {
		if (peak) {
			return (this.blocksTravelled() / 2);
		} else {
			return (this.blocksTravelled() / 3);
		}
	}
}