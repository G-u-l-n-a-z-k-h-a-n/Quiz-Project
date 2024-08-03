import React from'react'
import './quiz.css'
import {useState} from 'react'
import {data} from '../../data';

export default function Quiz()
{
  const[index,setIndex]=useState(0);
  const[question,setQuestion]=useState(data[index])

  const [score,setScore]=useState(0)
  const [option,setSelectedOption]=useState(null)

  const correctAnswers=[
    'option1',
    'option1',
    'option1',
    'option1',
    'option1',
    'option1',
  ];

  const handleNext=()=>{
   if(correctAnswers[index]===option)
   {
    setScore(score+1)

   }
   else{
   setSelectedOption(null);
   }

    if(index<data.length-1){
    setIndex(index+1)
    setQuestion(data[index+1])
    }
    else{
        setIndex(index+1)
    }
 }
 const handleSelectedOption=(option)=>{
    setSelectedOption(option)
 }


    return(
       
        <div  className='quiz'>
            <h1> Quiz App</h1>

            {index<data.length? (
                 <>
            <h3>{question.question}</h3>

            <ul>
                <li  className={option==='option1'?'selected':''}
                onClick={()=>handleSelectedOption('option1')}>{question.option1}</li>
                <li  className= { option==='option2'?'selected':''}
                
                onClick={()=>handleSelectedOption('option2')}>{question.option2}</li>
                <li  className= { option==='option3'?'selected':''}
                
                onClick={()=>handleSelectedOption ('option3')}>{question.option3}</li>
                <li  className= { option==='option4'?'selected':''}
                
                onClick={()=>handleSelectedOption ('option4')}>{question.option4}</li>
                
            </ul>
            <button onClick={handleNext}>Next</button>
            <div>question {index+1} of {data.length}</div>
            </>
            ):(
            <div>
                <h3>Quiz Finished....!!</h3>
                <p>Your {score} is  out of{data.length}</p>
            </div>
            )}
        </div>
        
    )
}