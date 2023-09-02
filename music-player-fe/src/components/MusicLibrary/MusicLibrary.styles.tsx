import styled from "styled-components";

export const Container = styled.div`
    // border: 1px solid #000;
    width: 400px;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    height: calc(100vh - 7rem);
`

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


