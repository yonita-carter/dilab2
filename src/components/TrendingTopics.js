import React from "react";
import { Container, Row } from "react-bootstrap";
import { VideoPost } from "./VideoPost";
import styled from "styled-components";

const Styles = styled.div`
    .container {
        overflow-y: scroll
        position: absolute
        height: 100px
        justify-content: center;
    }
    `;

export const TrendingTopics = () => {
  return (
    <Styles>
      <div className="container">
        <h3>Trending Topics</h3>
        <Container
          style={{
            "overflow-y": "scroll",
            height: "500px",
            top: "0",
          }}
        >
          <Row>
            <VideoPost url="https://youtu.be/fn3KWM1kuAw" />
          </Row>
          <br />
          <Row>
            <VideoPost url="https://youtu.be/JE0eZKHgfyw" />
          </Row>
          <br />
          <Row>
            <VideoPost url="https://youtu.be/MLIKTBvgAGY" />
          </Row>
          <br />
          <Row>
            <VideoPost url="https://youtu.be/zIwLWfaAg-8" />
          </Row>
        </Container>
      </div>
    </Styles>
  );
};
