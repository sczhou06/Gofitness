import React from "react";
import { Container, Row } from "react-bootstrap";
import bannerbg from '../assets/img/banner-bg.png';

class TraineeBanner extends React.Component {

  render() {
    return(
      <div
        className="banner"
        style = {{ backgroundImage: `url(${ bannerbg })`,
          backgroundColor: "#fbfafa",
          backgroundRepeat: "repeat-x",
          height: "100px",
          backgroundPosition: "center",
          width: "100%",
      }}>
        <Container>
          <Row>
            <div className="col-sm-12">
              <h1 className="banner-title">Classes</h1>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TraineeBanner;
