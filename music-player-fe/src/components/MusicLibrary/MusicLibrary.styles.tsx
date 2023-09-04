import styled from "styled-components";

export const Header = styled.span`
    display: flex;
    padding: 1rem;
    align-items: center;
    font-size: 1.5rem;
    justify-content: space-between;
`

export const Title = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;

    svg {
        margin-right: 0.25rem;
        width: 2.2rem;
        height: 2.2rem;
    }
`

export const Actions = styled.span`
    display: flex;
    align-items: center;

    svg {
        cursor: pointer;
    }
`

export const LibraryList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0.5rem;
`


