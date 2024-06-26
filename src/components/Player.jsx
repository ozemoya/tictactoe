import {useState} from 'react';
export const Player = ({initialName, symbol, isActive, onChangeName}) => {
   const [playerName, setPlayerName] = useState(initialName);
   const [isEditing, setIsEditing] = useState(false);

   const handleEdit = () => {
    setIsEditing((editing) => !editing);
    onChangeName(symbol, playerName);
   }
   if(isEditing) {
      onChangeName(symbol, playerName);
   }
   
   const handleChange = (event) => {
      setPlayerName(event.target.value);
   }
   let editablePlayerName = <span className = "player-name">{playerName}</span>
   if (isEditing) {
      editablePlayerName = <input type = "text" required value = {playerName} onChange = {handleChange}/>
   }
   return (
    <li className= {isActive ? 'active' : undefined}>
    <span className = "player">
      {editablePlayerName}
    <span className = 'player-symbol'>{symbol}</span>
    </span> 
    <button onClick = {handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>

   ) 
}