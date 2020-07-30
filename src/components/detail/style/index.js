import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
  float: left;
  top: calc(-50vh + 10px);
  left: calc(-50vw - 75px);
  width: 200%;
  height: 200%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`