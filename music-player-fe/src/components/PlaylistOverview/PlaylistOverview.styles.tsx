import styled from "styled-components"


export const PlaylistOverview = styled.div`
    height: 40%;
    padding: 1rem 3rem;
    overflow: scroll;
    display: flex;
    justify-content: center;
    
`

export const PlaylistTable = styled.table`
    table {
        width: 600px;
    }

    th, td {
        padding: 0.25rem 1rem;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: start;
        
        img {
            margin-right: 0.5rem;
            width: 3rem;
            height: 3rem;
        }
    }
`

export const PlaylistItemAttributes = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

export const PlaylistItemTitle = styled.span`
    font-size: 1rem;
    font-weight: 600;
`

export const PlaylistItemArtist = styled.span`
    font-size: 0.75rem;
    font-weight: 400;
`
