import {useState}from "react"
import {Row, Col} from "react-bootstrap"


function App() {
  return (
    <div className="drum-machine">

        <Row className="display">
            <Col lg={6} className="">
              <div className="drum-pad">
                  Q
              </div>
              <div className="drum-pad">
                  W
              </div>
              <div className="drum-pad">
                  E
              </div> <br/>
              <div className="drum-pad">
                  A   
              </div>
              <div className="drum-pad">
                  S
              </div>
              <div className="drum-pad">
                  D
              </div><br/>
              <div className="drum-pad">
                  Z
              </div>
              <div className="drum-pad">
                  X
              </div>
              <div className="drum-pad">
                  C
              </div>
            </Col>
            <Col>
                <div className="power">
                  <h4>Power</h4>
                  <div></div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </Col>
        </Row>
    </div>
  );
}

export default App;