import styled from "styled-components";
import { motion } from 'framer-motion'

export const StyledRegister = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledRegisterQuestion = styled.div`
    display: flex;
    gap: 10px;
    * {
        font-size: 14px;
        color: #000;
        margin-top: 16px;
    }
`