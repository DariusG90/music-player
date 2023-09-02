import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
`





export const VolumeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 1.3rem;
        height: 1.3rem;
    }
`

export const VolumeLine = styled.input`
    width: 6rem;
`