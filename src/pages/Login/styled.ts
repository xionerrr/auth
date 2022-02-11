import styled from "styled-components"
import { motion } from 'framer-motion'

export const StyledLogin = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        color: #FFD215;
        font-size: 24px;
    }
    a {
        color: #000;
        font-size: 14px;
        margin-top: 16px;
    }
`