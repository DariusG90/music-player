import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

`

export const PlayerContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 6rem;
    display: flex;
`

export const MusicLibraryContainer = styled.div`
    width: 400px;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    height: calc(100vh - 7rem);
`

export const OutletContainer = styled.div`
    margin-top: 3rem;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    width: 60vw; //calc(100vw - 400px - 2rem)
`