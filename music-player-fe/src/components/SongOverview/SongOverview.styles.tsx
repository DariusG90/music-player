import styled from "styled-components"

export const SongOverview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100% - 50%);
`

export const SongOverviewCover = styled.div`
    display: flex;
    width: 20rem;
    height: 20rem;
    justify-content: center;
    img {
        width: 20rem;
        height: 20rem;
        border-radius: 0.5rem;
    }
`

export const SongOverviewAttributes = styled.div`
    margin-top: 1rem;
`

export const SongTitle = styled.div`
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
`

export const SongArtist = styled.div`
    font-size: 1rem;
    text-align: center;
`