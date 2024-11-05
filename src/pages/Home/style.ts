import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex: 1;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }


`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props)=> props.theme["gray-100"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
    -webkit-font-smoothing: antialiased;

`
export const CountdownContainer = styled.div`
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props)=> props.theme["gray-100"]};
    display: flex;
    gap: 1rem;

    span {
        background-color: ${(props)=> props.theme["gray-700"]};
        border-radius: 8;
        padding: 2rem 1rem;
    }
`

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props)=> props.theme["green-500"]};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center; 
` 

export const BtnCountDown = styled.button`
    width: 100%;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5 rem;
    cursor: pointer;

    background-color: ${(props)=> props.theme["green-500"]};
    color: ${(props)=> props.theme["gray-100"]};
    border: none;

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${(props)=> props.theme["green-700"]};
    }
`



export const BtnStart = styled(BtnCountDown)`

    background-color: ${(props)=> props.theme["green-500"]};
    color: ${(props)=> props.theme["gray-100"]};

    &:not(:disabled):hover{
        background-color: ${(props)=> props.theme["green-700"]};
    }
`

export const BtnStop = styled(BtnCountDown)`

    background-color: ${(props)=> props.theme["red-500"]};
    color: ${(props)=> props.theme["gray-100"]};

    &:not(:disabled):hover{
        background-color: ${(props)=> props.theme["red-700"]};
    }
`

const BaseInput = styled.input`
    background-color: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props)=> props.theme["gray-500"]};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props)=> props.theme["gray-100"]};

    &::placeholder{
        color: ${(props)=> props.theme["gray-5 00"]};
    }

    &:focus{
        box-shadow: none;
        border-color: ${(props)=> props.theme["green-500"]};
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }

    
`

export const MinutesAmountInput = styled(BaseInput)`

`

