import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col, Button, ToggleButton } from "react-bootstrap";
import styled from "styled-components";
import { ReusableButton } from "./ReusableButton";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const Styles = styled.div`
    .player-wrapper {
        position: relative;
        // padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
        
    }
    
    .react-player {
        position: relative;
        padding: 50px,
        top: 0;
        // left: 0;
    }

`;

function myFunction() {
  const x = document.getElementById("followBtn").innerHTML;

  document.getElementById("followBtn").innerHTML =
    x == "Follow" ? "Following" : "Follow";
}
export const VideoPost = (props) => {
  return (
    <Styles>
      <Container>
        <Row>
          <div className="player-wrapper">
            <ReactPlayer
              url={props.url}
              className="react-player"
              playing
              width="450px"
              height="253px"
              controls={false}
              muted={true}
            />
          </div>

          <Row>
            <Col>
              <Button
                id="followBtn"
                floating
                tag="a"
                size="sm"
                variant="info"
                onClick={myFunction}
                style={{width:'170px'}}
              >
                
                Follow
              </Button>{" "}
              <Button floating tag="a" size="sm" variant="light">
                <MDBIcon fas icon="heart" color="danger" size="lg" />
              </Button>{" "}
              <Button variant="warning" size="sm">
                <MDBIcon fas icon="comment-slash" />
              </Button>{" "}
              <Button variant="success" size="sm">
                <MDBIcon fas icon="share-alt" />
              </Button>{" "}
            </Col>
          </Row>
        </Row>
      </Container>
    </Styles>
  );
};
