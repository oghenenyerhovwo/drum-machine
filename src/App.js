import {useState}from "react"
import {Col, Row, } from "react-bootstrap"
import {audio1} from "./audio_files"

function App() {
    const [togglePower, setTogglePower] = useState(true) 
    const [toggleBank, setToggleBank] = useState(false) 
    const [volume, setVolume] = useState(10)
    const [screenText, setScreenText] = useState()
    const [padBackground, setPadBackground] = useState("rgb(44, 56, 56)")

    const handleVolume = num => {
        setVolume(num)
        setScreenText(`Volume ${num} `)
    }

    const handleKeyPress = name => {
        setScreenText(name)
        setPadBackground("rgb(143, 146, 146)")
    }

    return (
        <div className="drum-machine">
            <div className="display">
                <div>
                <div  style={{background: padBackground}} onClick={() => handleKeyPress(audio1.q.name)} className="drum-pad">
                    <audio class="clip" src={audio1.q.soundUrl} > </audio>
                    Q
                </div>
                <div style={{background: padBackground}} onClick={() => handleKeyPress(audio1.w.name)} className="drum-pad">
                    <audio class="clip" src={audio1.w.soundUrl} > </audio>
                    W
                </div>
                <div style={{background: padBackground}} onClick={() => handleKeyPress(audio1.e.name)} className="drum-pad">
                    <audio class="clip" src={audio1.e.soundUrl} > </audio>
                    E
                </div> <br/>
                <div style={{background: padBackground}} onClick={() => handleKeyPress(audio1.a.name)} className="drum-pad">
                    <audio class="clip" src={audio1.a.soundUrl} > </audio>
                    A   
                </div>
                <div style={{background: padBackground}} onClick={() => handleKeyPress(audio1.s.name)} className="drum-pad">
                    <audio class="clip" src={audio1.s.soundUrl} > </audio>
                    S
                </div>
                <div style={{background: padBackground}} onClick={() => handleKeyPress(audio1.d.name)} className="drum-pad">
                    <audio class="clip" src={audio1.d.soundUrl} > </audio>
                    D
                </div><br/>
                <div style={{background: padBackground}} onClick={() => handleKeyPress(audio1.z.name)} className="drum-pad">
                    <audio class="clip" src={audio1.z.soundUrl} > </audio>
                    Z
                </div>
                <div style={{background: padBackground}} onClick={() => handleKeyPress(audio1.x.name)} className="drum-pad">
                    <audio class="clip" src={audio1.x.soundUrl} > </audio>
                    X
                </div>
                <div style={{background: padBackground}} onClick={() => handleKeyPress(audio1.c.name)} className="drum-pad">
                    <audio class="clip" src={audio1.c.soundUrl} > </audio>
                    C
                </div>
                </div>
                <br/>
                <br/>
                <Row>
                    <Col xs={12} sm={3}>
                        <div className="power">
                            <h6>Power</h6>
                            <div className="bar">
                                <div style={{opacity: togglePower ? 0: 1}} onClick={() => setTogglePower(prevToggle => !prevToggle)}></div>
                                <div style={{opacity: !togglePower ? 0: 1}} onClick={() => setTogglePower(prevToggle => !prevToggle)}></div>
                            </div>
                        </div>
                    </Col> 
                    
                    <Col xs={12} sm={6}>
                        <div className="screen">{screenText} </div>
                    </Col>
                    <Col xs={12} sm={3}>
                        <div className="bank">
                            <h6>Bank</h6>
                            <div className="bar">
                                <div style={{opacity: toggleBank ? 0: 1}} onClick={() => setToggleBank(prevToggle => !prevToggle)}></div>
                                <div style={{opacity: !toggleBank ? 0: 1}} onClick={() => setToggleBank(prevToggle => !prevToggle)}></div>
                            </div>
                        </div>
                    </Col> 
                </Row>
                <div className="volume">
                    <div onClick={() => handleVolume(1) } style={{background: volume === 1 ? "blue" : "none" }} className="bar">{volume !== 1 && <div></div>}</div>
                    <div onClick={() => handleVolume(2) } style={{background: volume === 2 ? "blue" : "none" }} className="bar">{volume !== 2 && <div></div>}</div>
                    <div onClick={() => handleVolume(3) } style={{background: volume === 3 ? "blue" : "none" }} className="bar">{volume !== 3 && <div></div>}</div>
                    <div onClick={() => handleVolume(4) } style={{background: volume === 4 ? "blue" : "none" }} className="bar">{volume !== 4 && <div></div>}</div>
                    <div onClick={() => handleVolume(5) } style={{background: volume === 5 ? "blue" : "none" }} className="bar">{volume !== 5 && <div></div>}</div>
                    <div onClick={() => handleVolume(6) } style={{background: volume === 6 ? "blue" : "none" }} className="bar">{volume !== 6 && <div></div>}</div>
                    <div onClick={() => handleVolume(7) } style={{background: volume === 7 ? "blue" : "none" }} className="bar">{volume !== 7 && <div></div>}</div>
                    <div onClick={() => handleVolume(8) } style={{background: volume === 8 ? "blue" : "none" }} className="bar">{volume !== 8 && <div></div>}</div>
                    <div onClick={() => handleVolume(9) } style={{background: volume === 9 ? "blue" : "none" }} className="bar">{volume !== 9 && <div></div>}</div>
                    <div onClick={() => handleVolume(10) } style={{background: volume === 10 ? "blue" : "none" }} className="bar">{volume !== 10 && <div></div>}</div>
                    <div onClick={() => handleVolume(11) } style={{background: volume === 11 ? "blue" : "none" }} className="bar">{volume !== 11 && <div></div>}</div>
                    <div onClick={() => handleVolume(12) } style={{background: volume === 12 ? "blue" : "none" }} className="bar">{volume !== 12 && <div></div>}</div>
                    <div onClick={() => handleVolume(13) } style={{background: volume === 13 ? "blue" : "none" }} className="bar">{volume !== 13 && <div></div>}</div>
                    <div onClick={() => handleVolume(14) } style={{background: volume === 14 ? "blue" : "none" }} className="bar">{volume !== 14 && <div></div>}</div>
                    <div onClick={() => handleVolume(15) } style={{background: volume === 15 ? "blue" : "none" }} className="bar">{volume !== 15 && <div></div>}</div>
                    <div onClick={() => handleVolume(16) } style={{background: volume === 16 ? "blue" : "none" }} className="bar">{volume !== 16 && <div></div>}</div>
                    <div onClick={() => handleVolume(17) } style={{background: volume === 17 ? "blue" : "none" }} className="bar">{volume !== 17 && <div></div>}</div>
                    <div onClick={() => handleVolume(18) } style={{background: volume === 18 ? "blue" : "none" }} className="bar">{volume !== 18 && <div></div>}</div>
                    <div onClick={() => handleVolume(19) } style={{background: volume === 19 ? "blue" : "none" }} className="bar">{volume !== 19 && <div></div>}</div>
                    <div onClick={() => handleVolume(20) } style={{background: volume === 20 ? "blue" : "none" }} className="bar">{volume !== 20 && <div></div>}</div>
                </div>
            </div>
        </div>
    );
}

export default App;