import  {Player}  from "./components/Player"
import {GameBoard} from "./components/GameBoard" 
function App() {
  

  return (
    <main> 
      <div id="game-container">
          <ol id = "players">
           <Player initialName = "player1" symbol = "X"/>
           <Player initialName = "player2" symbol = "O"/>
          

          </ol>
          <GameBoard/>
      </div>
      </main>
  )
}

export default App
