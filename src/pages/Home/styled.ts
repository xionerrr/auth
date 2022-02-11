import styled from "styled-components";
import { motion } from 'framer-motion'

export const StyledHome = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        color: #212429;
        margin-bottom: 10px;
    }
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        color: #212429;
        margin-bottom: 10px;
    }
    button {
        width: 320px;
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