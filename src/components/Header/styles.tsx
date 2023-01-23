import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 0 2.5rem;
    margin: 0 auto;
    background-color: ${ props => props.theme.white};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    `
export const SearchContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: start;
    gap: 0.5rem;
    color: ${ props => props.theme.darkBlue};
`
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
    color: ${ props => props.theme.darkBlue};
`