import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.primary};
    margin: 30px;
    text-align: center;
  }

  .button {
    display: flex;
    color: #fff;
    background: rgba(29, 26, 26, 0);
    padding: 0.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    min-width: 12rem;
    border: 2px solid #fff;
    border-radius: 10px;
    outline-color: #fff;
    border-style: solid;
    text-decoration-line: none;
    justify-content: center;
    margin: 1rem;
  }

  .button:focus {
    outline: none;
  }

  .button:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.primary};
    transition: all 0.8s ease;
    border-radius: 20px;
  }
`
export const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  border-radius: 100%;
  border: solid 2px #fff;
  min-height: 200px;
  width: 200px;
  margin-bottom: 20px;
`
export const ClockTime = styled.span`
  color: ${props => props.theme.colors.text};
`
export const Button = styled.a`
  p {
    display: flex;
    color: #fff;
    background: rgba(29, 26, 26, 0);
    padding: 0.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    min-width: 6rem;
    border: 2px solid #fff;
    border-radius: 10px;
    outline-color: #fff;
    border-style: solid;
    text-decoration-line: none;
    justify-content: center;
    margin: 0 1rem;
  }

  p:focus {
    outline: none;
  }

  p:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.primary};
    transition: all 0.2s ease;
    border-radius: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ButtonPressed = styled.p`
  cursor: pointer;
  color: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.primary};
  transition: all 0.2s ease;
  border-radius: 20px;
  display: flex;
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  min-width: 6rem;
  border: 2px solid #fff;
  outline-color: #fff;
  border-style: solid;
  text-decoration-line: none;
  justify-content: center;
  margin: 0 1rem;
`
