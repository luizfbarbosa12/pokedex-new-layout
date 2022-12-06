import styled from "styled-components";

export const ProgressBar = styled.div`
  background-color: #232323;
  border-radius: 1.25rem;
  height: 0.938rem;
  width: 9.375rem;
`;

export const ProgressDone = styled.div`
  background: linear-gradient(to left, #f2709c, #ff9472);
  border-radius: 1.25rem;
  height: 100%;
  width: 4.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;
  color: #232323;
`;
