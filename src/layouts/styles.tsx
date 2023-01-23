import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    padding: 0 3rem;
    margin: 0 auto;
    background-color: ${ props => props.theme.white};
    display: flex;
    flex-direction: column;
`