import React from 'react'

const price='$50M';
//const Car = ({img,name}) => {
const Car = (props) =>{
const {img,name}=props.first;
const clickAlert=(e)=>{
  console.log(e);
  console.log(e.target)
  alert('hello bitches');
}; 
const complex=(name)=>{
  console.log(name);
};
  return (
  <article className="car" onMouseOver={()=>{
    console.log(price);
  }}>
    <h1 onClick={()=> console.log(name)}>{name}</h1>
    <img src={img} alt=""/>
    <h3>{price}</h3>
    <button type="button" onClick={clickAlert}>alert</button>
    <button type="button" onClick={()=>complex(name)}>name</button>
    
    <Like/>
  </article>
  );
};



const Like = ()=>(
  <h4 style={{ color:'black',fontsize:'1.5rem',marginTop:'2rem'}}>GOTCHA</h4>
);

export default Car
