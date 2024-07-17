
// recupérer les différents éléments entrée de l'utilisateur
export default function UserInput({onChangeInput, userInput}) {
    
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
                            onChangeInput('initialInvestment', event.target.value)
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
                            onChangeInput('annualInvestment', event.target.value)
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
                            onChangeInput('expectedReturn', event.target.value)
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
                            onChangeInput('duration', event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    )
}