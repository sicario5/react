import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';

/*import UniqueCar from './Car'
import {firstcar} from './firstcar'
import {greeting} from './testing/testing'*/
import App from './app'

//JSX rules
//return single element
//div/section/article or fragment
//use className instead of class
// img html close by use /
/*
function Greetin(){ //MUST BE CAPITAL
  return ( 
    //<React.Fragment>
  <>
    <div>
    <h3>kl</h3>
    <ul>
      <li>
        <a href="#">fucj</a>
      </li>
      <li>
        <img src="" alt=""/>
      </li>
      <li>
        <input/>
         
      </li>
    </ul>
  </div>
   <div></div> 
   </>
  );
}

 if i use h1 in place of div then f1 is h1*h1 times
const Greetin = () =>{
  return React.createElement('div',{},React.createElement('h1',{},'fuck'));
};

ReactDOM.render(<Greetin/>,document.getElementById('root')
);
*/
// nested components,react tools

/* function CarList() {
  //console.log(greeting);
  return (
    <section className="cars">
{firstcar.map((first,index) => { //<Car img={firtscar.img} name={firstcar.img} />
    return <UniqueCar key={first.id} first={first}></UniqueCar>;
    })}
    </section>
  );
  
*/


ReactDOM.render(
<React.StrictMode>
<App/>
</React.StrictMode>,document.getElementById('root'));
