let doorImage1=document.querySelector("#door1");
let botDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
let beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
let defaultURL="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let doorImages=[botDoorPath,beachDoorPath,spaceDoorPath];
let resultButton=document.querySelector(".start-row")
let numClosedDoors=3;
let flag=true;
let currentstreak=0;
let bestStreak=0;
let currentStreakBlock=document.querySelector("#beststreak");
let bestStreakBlock=document.querySelector("#currentstreak");
console.log(botDoorPath,beachDoorPath,spaceDoorPath);
randomChoreDoorGenerator=()=>{
  return Math.floor(Math.random()*numClosedDoors);
}
doorImage1.onclick=()=>{
  //doorImage1.style.backgroundColor=red;
  if(numClosedDoors>0 && flag){
    let doorNum=randomChoreDoorGenerator();
    let doorImage=doorImages[doorNum];
    if(doorImage===botDoorPath && numClosedDoors>1){
      flag=false;
      currentstreak=0;
      resultButton.innerHTML="Game Over! Play Again";
      currentStreakBlock.innerHTML=currentstreak;
    }
    doorImages.splice(doorNum,1);
    numClosedDoors--;
    doorImage1.src=doorImage;
    if(numClosedDoors==0){
      currentstreak++;
      bestStreak=Math.max(currentstreak,bestStreak);
      resultButton.innerHTML="You Win! Play again";
      bestStreakBlock.innerHTML=bestStreak;
      currentStreakBlock.innerHTML=currentstreak;
    }
    
  }
        
        
       
}

let doorImage2=document.querySelector("#door2");
doorImage2.onclick=()=>{
      if(numClosedDoors>0 && flag){
        let doorNum=randomChoreDoorGenerator();
        let doorImage=doorImages[doorNum];
        if(doorImage===botDoorPath && numClosedDoors>1){
          flag=false;
          currentstreak=0;
          resultButton.innerHTML="Game Over! Play Again";
          currentStreakBlock.innerHTML=currentstreak;
        }
        doorImages.splice(doorNum,1);
        numClosedDoors--;
        doorImage2.src=doorImage;
        if(numClosedDoors==0){
          currentstreak++;
          bestStreak=Math.max(currentstreak,bestStreak);
          resultButton.innerHTML="You Win! Play again";
          bestStreakBlock.innerHTML=bestStreak;
          currentStreakBlock.innerHTML=currentstreak;
        }
        
      }
        
    
}

let doorImage3=document.querySelector("#door3");
doorImage3.onclick=()=>{
  if(numClosedDoors>0 && flag){
    let doorNum=randomChoreDoorGenerator();
    let doorImage=doorImages[doorNum];
    if(doorImage===botDoorPath && numClosedDoors>1){
      flag=false;
      currentstreak=0;
      resultButton.innerHTML="Game Over! Play Again";
      currentStreakBlock.innerHTML=currentstreak;
    }
    doorImages.splice(doorNum,1);
    numClosedDoors--;
    doorImage3.src=doorImage;
    if(numClosedDoors==0){
      currentstreak++;
      bestStreak=Math.max(currentstreak,bestStreak);
      resultButton.innerHTML="You Win! Play again";
      bestStreakBlock.innerHTML=bestStreak;
      currentStreakBlock.innerHTML=currentstreak;
    }
    
  }
}
  resultButton.onclick=()=>{
    
      numClosedDoors=3;
      doorImages=[botDoorPath,beachDoorPath,spaceDoorPath];
      doorImage1.src=defaultURL;
      doorImage2.src=defaultURL;
      doorImage3.src=defaultURL;
      flag=true;
      resultButton.innerHTML="Good Luck!";
  }
  
        