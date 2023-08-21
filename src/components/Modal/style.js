import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
  }
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 120;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const ToClose = styled.p`
  top: -6px;
  right: 11px;
  position: absolute;
  color: #ff0000;
  font-size: 30px;
  cursor: pointer;
`;
