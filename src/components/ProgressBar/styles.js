import styled from 'styled-components'

export const ProgressBar = styled.div`
    background: linear-gradient(to left, #F2709C, #FF9472);
    border-radius: 20px;
    height: 15px;
    width: 70px;
    transition: all ease 0.5s;
`

export const ProgressDone = styled.div`
    background: linear-gradient(to left, #F2709C, #FF9472);
    border-radius: 20px;
    height: 100%;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.5s;
    color: #232323;
`