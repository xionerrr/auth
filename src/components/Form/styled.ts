import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 50px 30px;
    background-color: transparent;
    border: 2px solid #ECECEC;
    border-radius: 16px;
    gap: 20px;
    button {
        width: 50%;
        margin: 0 auto;
        border: none;
        font-size: 14px;
        padding: 10px 30px;
        cursor: pointer;
        background: #3183FF;
        border-radius: 24px;
        color: #fff;
    }
`
export const StyledInputs = styled.div`
    div {
        display: flex;
        flex-direction: column;
        span {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #212429;
            margin-bottom: 10px;
        }
        input {
            border: none;
            outline: none;
            padding: 10px 20px;
            background: #FFFFFF;
            border: 2px solid #ECECEC;
            box-sizing: border-box;
            border-radius: 16px;
            transition: .2s ease;
            margin-bottom: 10px;
            &:focus {
                &::placeholder {
                    color: #000;
                }
            }
        }
    }
`

export const StyledFirstInput = styled.div`
`

export const StyledSecondInput= styled.div`
`