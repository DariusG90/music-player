import styled from "styled-components"



export const InfoContainer = styled.div`
    display: flex;
    width: 300px;
`

export const InfoThumbnail = styled.div`
    margin-right: 0.75rem;
    display: flex;
    img {
        width: 4rem;
        height: 4rem;
        border-radius: 0.25rem;
    }
`

export const InfoAttributes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const InfoSongName = styled.span`
    font-weight: 600;
`

export const InfoArtistName = styled.span`
    font-weight: 400;
    font-size: 0.75rem;
`

export const InfoAction = styled.span`
    display: flex; 
    align-items: center;
    margin-left: 1.5rem;
    
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`