import React,{useState,useEffect} from 'react';
console.log('useState'+useState+'useEffect:'+useEffect);

export default function FunctionComponent(){
    const [date,setDate]=useState(new Date());
     useEffect(()=>{
         //相当于componentDidMount、componentDidUpdate、componentWillUnMount的集合
       const timer2=setInterval(()=>{
          setDate(new Date());
        },1000)
        return () => {clearInterval(timer2)};
    },[])  
    return(        
        <div>
          <h3>FunctionComponent</h3>   
          <p>{date.toLocaleTimeString()}</p>    
        </div>
    );
}