import React, {useEffect,useRef, useState}from "react"

function App() {
    const allCharacters = ["0","1", "2","3","4","5","6","7","8","9","+","-","/","*","(",")"]
    const operators = ["/","*"]
    const [text, setText] = useState("")
    const [maths, setMaths] = useState("")
    const [solution, setSolution] = useState("0")
    const inputRef = useRef()

    const handleChange = e =>{
        setText(e.target.value)
    }

    const solve = (exp) => {
        try {
            setSolution(eval(exp))
        } catch (error) {
            setSolution("...")
        }
    
    }

    useEffect(() => {
        // checking if the last character type is valid
        if(maths.length < text.length){
            const lastChar = text[text.length-1]
        
            if(allCharacters.includes(lastChar)){
                if(!(text.length === 1 && operators.includes(lastChar))){
                    setMaths(text)
                    solve(text)
                } else{
                    setText(text.slice(0,-1))
                }
                
            } else {
                setText(text.slice(0,-1))
            }
        } else{
            setMaths(text)
            solve(text)
        }
    }, [text])

    useEffect(() => {
        if(inputRef.current){
                setTimeout(() => {
                   inputRef.current.focus() 
                }); 
            
        }
    }, [text])

    useEffect(() => {
        if(!text){
            setSolution("0")
        }
    }, [text])



    const reset = () => {
        setText("")
    }
    
    const removeChar = () => {
        setText(text.slice(0,-1))
    }
    
    const equalTo = () => {
        solve(maths)
        navigator.clipboard.writeText(solution)
    }

    const handleKeyClick = e => {
        setText(prevText => prevText + e.target.innerHTML)
    }
    
    return (
        <div className="outer-div">
            <div className="calc">
                <input ref={inputRef} id="display" onChange={handleChange} value={maths} type="string"/>
                <div className="answer">{solution} </div>
                <br/><br/>
                <div className="row first-row">
                    <div onClick={reset} className="keys reset">C</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">/</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">*</div>
                    <div onClick={removeChar} className="keys border delete">{"<"} </div>
                </div>
                <div className="row other-row">
                    <div onClick={handleKeyClick} className="num-keys keys">7</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">8</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">9</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">-</div>
                </div>
                <div className="row other-row">
                    <div onClick={handleKeyClick} className="num-keys keys">4</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">5</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">6</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">+</div>
                </div>
                <div className="row other-row">
                    <div onClick={handleKeyClick} className="num-keys keys">1</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">2</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">3</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">.</div>
                </div>
                <div className="row other-row">
                    <div onClick={handleKeyClick} className="num-keys keys">(</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">0</div>
                    <div onClick={handleKeyClick} className="num-keys keys border">)</div>
                    <div onClick={equalTo} className="keys border blue equal">=</div>
                </div>
            </div>
        </div>
    );
}

export default App;