import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

export const Data = () => {
   
    const [info, setInfo] = useState();
    const [age, setAge] = useState();
   

    //   1 - useEffect as componentDidUpdate without a condition
    // useEffect(() => {
    //     console.log('useEffect...');
    //     setAge(25)
    //     setInfo("Zainab")
    // })


    //   2 -  useEffect as componentDidMount with a condition 
    // useEffect(() => {
    //     console.log('useEffect...');
    // },[info])


    //  3 -  useEffect as componentDidMount
    // useEffect(() => {
    //         console.log('useEffect...');
    //     },[]);
    

    return(
        <Div>
            <h1>Enter the following : </h1>
            
            <hr/>
            <div className="container">
          
            <input  placeholder= "Your Name" onChange ={(e)=>setInfo(e.target.value)} value={info || ''}/><br/><br/>
           
            <input placeholder= "Your Age" onChange ={(e)=>setAge(e.target.value)} value={age || ''}/><br/><br/>
          
            </div>
        
        </Div>
    );
};


const Div = styled.div`
margin-top:100px;
margin-left: auto;
margin-right: auto;
width: 40%;
padding: 10px;
border: 3px solid #808080a3;
border-radius:13px;
font-family: Roboto, Arial, sans-serif;
font-size: 15px;

hr{
    height: 2px;
    background-color: #808080a3;
}
input{
    border-radius: 5px;
    background-color: #6cab1878;
    width: 200px;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
    h1 {
        text-align: center;
    font-size:18;
    }
        .container {
          
            padding: 16px 0;
            text-align:center;
            }
`