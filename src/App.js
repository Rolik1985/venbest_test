
import React, { useState, useEffect } from 'react';
import './App.css';
import recvest from './recvest';

export default function App() {
  const [rezalt, setRezalt]= useState([]);
  const indexx =Math.floor(Math.random()* 100);
  let wee =[];

useEffect(()=>{
  recvest("https://venbest-test.herokuapp.com/.").then((rez)=>{ 
    console.log(rez);
    setRezalt(rez)
}) 
},[])


 const filter1 = (event)=>{
   let fil1 = event.target.value.toLowerCase();
   rezalt.forEach(element => {
     if(element.name.toLowerCase().indexOf(fil1)> -1){
      wee.push(element)
      setRezalt(wee) 
    } if (fil1 === ''){return rezalt}
   });
  }
 
  const filter2 = (event)=>{
    let fil1 = event.target.value.toLowerCase();
    rezalt.forEach(element => {
      if(element.lastname.toLowerCase().indexOf(fil1)> -1){
       wee.push(element)
       setRezalt(wee)
     } 
    });
   }

   const filter3 = (event)=>{
    let fil1 = +event.target.value;
    rezalt.forEach(element => {
      if(element.age === fil1){
       wee.push(element)
       setRezalt(wee)
      }
    });
   }


   const filter4 =(event) =>{
     if(event.target.id === 'M'){
        rezalt.forEach(element => {
          if(element.sex === 'm'){
            wee.push(element)
            setRezalt(wee)
          }
        });
     }if(event.target.id === 'G'){
      rezalt.forEach(element => {
        if(element.sex === 'f'){
          wee.push(element)
          setRezalt(wee)
        }
      });
     }
   }


  return (
    <>
    <section className='filter'>
      <div><h2>Фильтры</h2></div>
      <div>
        <label><input type='text' onKeyUp={filter1} ></input>Имя</label>
      </div>
      <div>
        <label><input type='text' onKeyUp={filter2}></input>Фамилия</label>
      </div>
      <div>
        <label><input type='number' onKeyUp={filter3}></input>Возраст</label>
      </div>
      <div className='cketet-box'>
      <label><input type="checkbox" id='M' onChange={filter4}/>M</label>
      <label><input type="checkbox" id='G' onChange={filter4}/>G</label>
      </div>
    </section>
    <hr></hr>
   
    {rezalt.map((item,ind) => <div key={ind*indexx}>
      <p>{item.name + " " + item.lastname}</p>
      <p>Возраст: {item.age}</p>
      <p>Пол: {item.sex}</p>
      <hr></hr>

    </div>)}
   
    </>
  );
}


















