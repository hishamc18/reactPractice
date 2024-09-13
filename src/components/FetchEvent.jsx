import React from 'react'

//method 1
// function FetchEvent() {

//     function clickHandler(ev){
//         console.log(ev);
        
//     }


//   return (
//     <div>
//       <button onClick={clickHandler}>Click here 1</button>
//       <button onClick={clickHandler}>Click here 2</button>
//       <button onClick={clickHandler}>Click here 3</button>
//     </div>
//   )
// }


//methid 2
// function FetchEvent() {

//     function clickHandler(evt){
//         console.log("iam being clicked", evt.target);
        
//     }


//   return (
//     <div>
//       <button onClick={() => clickHandler(event, "btn 1" )}>Click here 1</button>
//       <button onClick={clickHandler}>Click here 2</button>
//       <button onClick={clickHandler}>Click here 3</button>
//     </div>
//   )
// }


//method 3 from fetching events
// function FetchEvent() {

//     function clickHandler(evt){
//         console.log("iam being clicked", evt.target);
        
//     }

//   return (
//     <div>
//       <button onClick={() => clickHandler(event, "btn 1" )}>Click here 1</button>
//       <button onClick={clickHandler}>Click here 2</button>
//       <button onClick={clickHandler.bind(this)}>Click here 3</button>
//     </div>
//   )
// }


// example for a link, prevents the default behaviour of given link
function FetchEvent() {

    function clickHandler(evt){
        evt.preventDefault();
        console.log("iam being clicked", evt.target);
        
    }

  return (
    <div>
        <a href='https://www.google.com' target='blank' onClick={clickHandler}>Google "preventDefault()"</a>
    </div>
  )
}

export default FetchEvent
