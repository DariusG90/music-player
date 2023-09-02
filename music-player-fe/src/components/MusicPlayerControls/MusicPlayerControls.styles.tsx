import styled from "styled-components"

export const PlayerContainer = styled.div`

`

export const PlayerControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 1.3rem;
        height: 1.3rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .bigSVG {
        width: 2.2rem;
        height: 2.2rem;
    }
`

export const AudioTimeline = styled.input`
    width: 40rem;
    margin-top: 0.5rem;
`