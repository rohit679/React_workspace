// var React = require('react');
// import React from 'react';
// var ReactDOM = require('react-dom');
// import ReactDOM from 'react-dom';
// import './index.css'
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';
// import App from './App';
import * as cal from './Cal';



// JSX -> Java Script XML
//syntax ==> render(kya dikhana h, kahan dikhana h, call back function);
// 1. we can use div for packing multiple Jsx element.
// 2. we can also use [] for the same separating by comma(,).
// 3. we can also use <React.Fragment></React.Fragment>
// 4. we can also use only <> </> for the same.

// ReactDOM.render(
//   <><h1>Hello World</h1>
//   <p>this is it.</p></>,
//   document.getElementById('root')
//   );

// or simple js
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello world!!!";
// document.getElementById("root").appendChild(h1);

//@@@challenge@@@ Create a react app for adding heading, para and 5 
//    elements in ordered list.

// ReactDOM.render(
//   <>
//   <h1>Hello World</h1>
//   <p>Hii my name is Akash</p>
//   <ol>
//     <li>Rohit</li>
//     <li>Akash</li>
//     <li>Sunny</li>
//     <li>Rajat</li>
//     <li>Ritvik</li>
//   </ol>
//   </>  
//   ,
//   document.getElementById('root')
//   );

// JSX expression in React ({})

// const name = "Rohit Prasad";
// ReactDOM.render(
//   <>
//   <h1>My name is {name}.</h1>
//   <p>My age is {16 + 5}.</p>
//   <h3>My lucky number is : {Math.random()}</h3>
//   </>,
//   document.getElementById("root"));

// NB - We only can use expression inside the {}, 
// not the stateements like if else statements etc.

// we can have multiple template literals within a single 
// {} expression by concating them as below - 
// <h1>My name is {firstname + " " + lastname}.</h1>

// we can use back tick(`) for using template literals like below - 
// console.log(`My name is ${name}.`)
// <h1>My name is {`${firstname} ${lastname}`}.</h1>

// @@@Challenge@@@ create a react app for adding name, current date
// & current time in the website.

// const date = new Date();
// const current_date = date.toLocaleDateString();
// const current_time = date.toLocaleTimeString();
// ReactDOM.render(
//   <>
//   <h1>My name is Rohit Prasad</h1>
//   <p>Currnt Date is : {current_date}</p>
//   <p>Currnt Time is : {current_time}</p>
//   </>  
//   ,
//   document.getElementById('root')
//   );

// JSX attributes

// const image1 = "https://picsum.photos/200/300";
// const image2 = "https://picsum.photos/250/300";
// const image3 = "https://picsum.photos/300/300";
// const link1 = "https://www.youtube.com/";
// const link2 = "https://www.google.com/";
// const link3 = "https://www.amazon.com/";

// ReactDOM.render(
//   <>
//   <h1 contentEditable="true">Hello World</h1>
//   <a href = {link1} target = "_."><img src={image1} alt = "myimage1"/></a>
//   <a href = {link2} target = "_."><img src={image2} alt = "myimage2"/></a>
//   <a href = {link3} target = "_."><img src={image3} alt = "myimage3"/></a>
//   </>  
//   ,
//   document.getElementById('root')
//   );


// styling technique 

// ReactDOM.render(
//   <>
//   <h1 className ="heading">My name is Rohit.</h1>
//   </>,
//   document.getElementById("root"));

// inline styling

// const heading = {
//   color: "yellow",
//   textAlign: "center",
//   textTransform: "capitalize",
//   fontWeight: "bold",
//   textShadow: "0px 2px 4px #ffe9c5",
//   margin: "50px 0px"
// }

// ReactDOM.render(
//   <>
//   <h1 style = {heading}>My name is Rohit.</h1>
//   </>,
//   document.getElementById("root"));

//@@@challenge@@@ Create an react app to show user good morning
// or goodnight according to the time.

// const heading = {
//   color: "#fa9191",
//   textAlign: "center",
//   textTransform: "capitalize",
//   fontWeight: "bold",
//   textShadow: "0px 2px 4px #ffe9c5",
//   margin: "50px 0px"
// }

// var date = new Date();
// var current_time = date.getHours();
// var greeting = '';
// const cssStyle = {};

// if(current_time > 0 && current_time < 12)
// {
//   greeting = 'Good Morning';
//   cssStyle.color = 'green';
// }
// else if(current_time < 17 && current_time >= 12){
//   greeting = 'Good Afternoon';
//   cssStyle.color = 'red';
// }
// else{
//   greeting = 'Good Night';
//   cssStyle.color = 'black';
// }
// ReactDOM.render(
//   <>
//   <div>
//   <h1>Hello Sir, <span style = {cssStyle}>{greeting}</span></h1>
//   </div>
//   </>,
//   document.getElementById("root"));


// ReactDOM.render(
//     <>
//         <Heading></Heading>
//         <Para></Para>
//         <List></List>
//     </>,
//     document.getElementById("root")
// );

// ReactDOM.render(<App />,document.getElementById("root"))


// Video #21

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <>
        <ul>
            <li>{cal.add(10, 10)}</li>
            <li>{cal.sub(10, 10)}</li>
            <li>{cal.mul(10, 5)}</li>
            <li>{cal.div(10, 5)}</li>
        </ul>
    </>,
    document.getElementById("root")
);

// video #22

// ReactDOM.render(
//    <>
//         <div className="cards">
//              <div className="card">
//                 <img src="" alt="mypic" className="card_img" />
//                 <div className="card_info">
//                     <span className="card_catagory">A Netflix Original Series</span>
//                     <h3 className="card_title">Dark</h3>
//                     <a href="" target="_blank">
//                         <button>Watch Now</button>
//                     </a>
//                 </div>
//              </div>
//         </div>
//    </>,
//    document.getElementById("root")
// );

