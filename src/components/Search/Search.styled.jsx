import styled from 'styled-components';

export const BtnForm = styled.button`
  border: none;
  background: none;
  color: #8b8ba7;
`;

export const Form = styled.form`
  margin: 8px 0;
  --timing: 0.3s;
  --width-of-input: 200px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg, #fff);

  /* styling of animated border */
  &:before {
    content: '';
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }

  /* sizing svg icons */
  & svg {
    width: 17px;
    margin-top: 3px;
  }

  /* Hover on Input */
  &:focus-within {
    border-radius: var(--after-border-radius);
  }

  /* here is code of animated border */
  &:focus-within:before {
    transform: scale(1);
  }
`;



export const Input = styled.input`
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;

  &:focus {
    outline: none;
  }
`;