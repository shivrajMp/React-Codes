import { useState } from "react";


function Code1(){
const [progress,setProgress] = useState(0);

  

  const strtProgress = ()=>{
    setInterval(()=>{
      
      const newValue = progress === 100 || progress >100? 0 : progress + 10
      setProgress(newValue)
    },1000)
  }
  


  return (
    <div className="App" >
      {strtProgress()}
     <div id='parent'><div style={{width:`${progress}%`, height:'100px',background:'red'}}></div> </div>
     {progress}
    </div>
  );
}
export default Code1;