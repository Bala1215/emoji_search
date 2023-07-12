import React, { useState, useEffect } from 'react'
import emojiData from './emojiData.json' 
//this json file contains an array of objects which holds a data about "emoji"  

function App() {

  //to store and update value in the search bar
  const [search,setSearch] = useState('');
  //to store and update the value of array of <h1></h1> tag
  const [data, setData] = useState([]);

  /**
   * useEffect() => this hook is used here to update the state value whenever any changes in the search bar.
   * 
   * using "filter() , filter the data of the emoji which matches the data in the search bar"
   * store the value which returns by "filter() into "emojiDataVal"
   * and then pass the "emojiDataVal" in setData() to update the data (state variable)
   * 
   */

  useEffect(()=>{
     const emojiDataVal = emojiData.filter((emoji)=>{
      return emoji.title.toLowerCase().includes(search.toLocaleLowerCase())});
     setData(emojiDataVal);
     
  },[search]);

  
  return (
    <div className='container'>
       <div className='input_container'>
         <input type="text" 
         className='search_input' 
         value={search} 
         onChange={(e)=>{
            setSearch(e.target.value);
         }}/>
       </div>
       <div className='emoji_container'>
          {data.map((emoji)=>{
            return(
            <h1 key={emoji.title}>
              {emoji.title} {emoji.symbol}
            </h1>
            )
          })}
       </div>
    </div>
  )
}

export default App
