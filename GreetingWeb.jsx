 import React from 'react'

 const GreetingWeb = () => {

    let Time = new Date();
     Time = Time.getHours();

    let greeting = ''

    const style ={}

    if(Time>=3 && Time<11){
        greeting = 'Good Morning'
        style.color='yellow';
    }else if(Time>=11 && Time<17){
        greeting = 'Good AfterNoon'
        style.color='orange';
    }else{
        greeting = 'Good Night'
        style.color='green';

    }

  return (
    <div className="grid text-center">
        <h3>Hope you are good ☺</h3>

      <h1 className="g-col-4" style={{"width":"18 rem"}}>Hey 🙋🏻‍♀️!!<span style={style}>{greeting}</span></h1>
    </div>
  )
 }

 export default GreetingWeb;
