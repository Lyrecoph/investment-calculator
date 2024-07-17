import { useState } from "react";
import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {

  /** Lifting State Up: Léve le state se trouvant dans le composant 
      UserInput et le transmettre au composant App vu que nous devons passer
      l'entrée de l'utilisateur  au composant Results**/
  // gérer et stocker les valeurs fournies par l'utilisateur
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10  
  });

  const inputIsValid = userInput.duration >= 1;

  // Fonction qui doit être déclenché à chaque fois que nous modifions la valeur
  // des champs de saisies afin de pouvoir mettre jour l'etat 
  function handleChange(inputIdentifier, newValue){
      // mettre à jour l'état en fonction de la valeur de l'état précedent
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              // transforme la valeur qui est une chaîne de caractère en valeur numérique
              [inputIdentifier]: +newValue  
          }
      })
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
