import { useState } from "react";

// recupérer les différents éléments entrée de l'utilisateur
export default function UserInput() {
    // gérer et stocker les valeurs fournies par l'utilisateur
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    // Fonction qui doit être déclenché à chaque fois que nous modifions la valeur
    // des champs de saisies afin de pouvoir mettre jour l'etat 
    function handleChange(inputIdentifier, newValue){
        // mettre à jour l'état en fonction de la valeur de l'état précedent
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.initialInvestment}
                        onChange={(event) => 
                            handleChange('initialInvestment', event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Annual investment</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => 
                            handleChange('annualInvestment', event.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                {/* Taux de rendement attendu chaque année */}
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.expectedReturn}
                        onChange={(event) => 
                            handleChange('expectedReturn', event.target.value)
                        }
                    />
                </p>
                {/* Durée pendant lequel l'utilisateur prévoit conserver cet investissement */}
                <p>
                    <label>Duration investment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.duration}
                        onChange={(event) => 
                            handleChange('duration', event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    )
}