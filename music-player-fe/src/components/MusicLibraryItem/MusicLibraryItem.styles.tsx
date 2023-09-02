import styled from "styled-components"

export const LibraryItem = styled.li`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.25rem;
`

export const LibraryItemThumbnail = styled.div`
    margin-right: 1rem;
    img {
        width: 3rem;
        border-radius: 0.25rem;
    }
`

export const LibraryItemAttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const LibraryItemTitle = styled.span`
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0.25rem;
`

export const LibraryItemAttributes = styled.span`
    font-size: 0.8rem;
`