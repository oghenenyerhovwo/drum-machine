import React, {useEffect, useState}from "react"
import {Col, Row, } from "react-bootstrap"
import {audio1} from "./audio_files"

function App() {
    const [togglePower, setTogglePower] = useState(true) 
    const [toggleBank, setToggleBank] = useState(false) 
    const [volume, setVolume] = useState(10)
    const [screenText, setScreenText] = useState()
    const [toggleBackgrounds, setToggleBackgrounds] = useState({
        q: false,
        w: false,
        e: false,
        a: false,
        s: false,
        d: false,
        z: false,
        x: false,
        c: false,
    })
    const myRefQ = React.createRef();
    const myRefW = React.createRef();
    const myRefE = React.createRef();
    const myRefA = React.createRef();
    const myRefS = React.createRef();
    const myRefD = React.createRef();
    const myRefZ = React.createRef();
    const myRefX = React.createRef();
    const myRefC = React.createRef();

    const handleKeyPress = (event) => {
        if(event.key === "q"){
            myRefQ.current.play()
            setScreenText(myRefQ.current.attributes.name.value)
            console.log("letter1")
            changeBackground(myRefQ.current.attributes.id.value.toLowerCase())
            console.log("letter2")

        }
        if(event.key === "w"){
            myRefW.current.play()
            setScreenText(myRefW.current.attributes.name.value)
            changeBackground(myRefW.current.attributes.id.value.toLowerCase())
        }
        if(event.key === "e"){
            myRefE.current.play()
            setScreenText(myRefE.current.attributes.name.value)
            changeBackground(myRefE.current.attributes.id.value.toLowerCase())
        }
        if(event.key === "a"){
            myRefA.current.play()
            setScreenText(myRefA.current.attributes.name.value)
            changeBackground(myRefA.current.attributes.id.value.toLowerCase())
        }
        if(event.key === "s"){
            myRefS.current.play()
            setScreenText(myRefS.current.attributes.name.value)
            changeBackground(myRefS.current.attributes.id.value.toLowerCase())
        }
        if(event.key === "d"){
            myRefD.current.play()
            setScreenText(myRefD.current.attributes.name.value)
            changeBackground(myRefD.current.attributes.id.value.toLowerCase())
        }
        if(event.key === "z"){
            myRefZ.current.play()
            setScreenText(myRefZ.current.attributes.name.value)
            changeBackground(myRefZ.current.attributes.id.value.toLowerCase())
        }
        if(event.key === "x"){
            myRefX.current.play()
            setScreenText(myRefX.current.attributes.name.value)
            changeBackground(myRefX.current.attributes.id.value.toLowerCase())
        }
        if(event.key === "c"){
            myRefC.current.play()
            setScreenText(myRefC.current.attributes.name.value)
            changeBackground(myRefC.current.attributes.id.value.toLowerCase())
        }
    };
    

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
    })


    const handleVolume = num => {
        setVolume(num)
        setScreenText(`Volume ${num} `)
    }

    const handlePadClick = (name, ref,e) => {
        ref.current.play();
        setScreenText(name)
        changeBackground(e.target.children[0].id.toLowerCase())
    }

    const changeBackground = (letter) => {
        console.log(letter)
        setToggleBackgrounds({
            ...toggleBackgrounds,
            [letter]: true
        })
        setTimeout(() => {
            setToggleBackgrounds({
                ...toggleBackgrounds,
                [letter]: false,
            })
        }, 200);
    }

    return (
        <div className="drum-machine">
            <div className="display">
                <div>
                <div style={{background: !toggleBackgrounds.q ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.q.name,myRefQ,e)} className="drum-pad">
                    <audio id="Q" name={audio1.q.name} type="audio/mpeg" ref={myRefQ} className="clip" src={audio1.q.soundUrl} > </audio>
                    Q
                </div>
                <div style={{background: !toggleBackgrounds.w ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.w.name,myRefW,e)} className="drum-pad">
                    <audio id="W" name={audio1.w.name} type="audio/mpeg" ref={myRefW} className="clip" src={audio1.w.soundUrl} > </audio>
                    W
                </div>
                <div style={{background: !toggleBackgrounds.e ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.e.name,myRefE,e)} className="drum-pad">
                    <audio id="E" name={audio1.e.name} type="audio/mpeg" ref={myRefE} className="clip" src={audio1.e.soundUrl} > </audio>
                    E
                </div> <br/>
                <div style={{background: !toggleBackgrounds.a ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.a.name,myRefA,e)} className="drum-pad">
                    <audio id="A" name={audio1.a.name} type="audio/mpeg" ref={myRefA} className="clip" src={audio1.a.soundUrl} > </audio>
                    A   
                </div>
                <div style={{background: !toggleBackgrounds.s ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.s.name,myRefS,e)} className="drum-pad">
                    <audio id="S" name={audio1.s.name} type="audio/mpeg" ref={myRefS} className="clip" src={audio1.s.soundUrl} > </audio>
                    S
                </div>
                <div style={{background: !toggleBackgrounds.d ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.d.name,myRefD,e)} className="drum-pad">
                    <audio id="D" name={audio1.d.name} type="audio/mpeg" ref={myRefD} className="clip" src={audio1.d.soundUrl} > </audio>
                    D
                </div><br/>
                <div style={{background: !toggleBackgrounds.z ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.z.name,myRefZ,e)} className="drum-pad">
                    <audio id="Z" name={audio1.z.name} type="audio/mpeg" ref={myRefZ} className="clip" src={audio1.z.soundUrl} > </audio>
                    Z
                </div>
                <div style={{background: !toggleBackgrounds.x ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.x.name,myRefX,e)} className="drum-pad">
                    <audio id="X" name={audio1.x.name} type="audio/mpeg" ref={myRefX} className="clip" src={audio1.x.soundUrl} > </audio>
                    X
                </div>
                <div style={{background: !toggleBackgrounds.c ? "rgb(44, 56, 56)" : "rgb(151, 151, 151)" }} onClick={(e) => handlePadClick(audio1.c.name,myRefC,e)} className="drum-pad">
                    <audio id="C" name={audio1.c.name} type="audio/mpeg" ref={myRefC} className="clip" src={audio1.c.soundUrl} > </audio>
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