import styled from "styled-components";


export const Container = styled.div`
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    width: calc(100vw - 400px - 2rem)
`


export const PlaylistOverview = styled.div`
    
    height: 35%;
    padding: 1rem 3rem;
    overflow: scroll;
    table {
        width: 100%
    }
    th, td{
        padding: 0.25rem 1rem;
        text-align: center;
    }
    .thumbnail img {
        width: 3rem;
        height: 3rem;
    }
`