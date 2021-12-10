import styled from "styled-components";

export const PageWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
`
export const ContentWrap = styled.div`
    padding-top: 20px;
    width: 980px;
`

export const PageContentTop = styled.div`
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;

    .title {
        font-size: 20px;
    }
`

export const UserPerRowButton = styled.button<{isSelected?: boolean}>`
    width: 30px;
    margin-left: 5px;
    background-color: white;
    border: 1px solid transparent;

    :hover {
        border: 1px solid black;
        cursor: pointer;
    }

    ${props => props.isSelected && `
        border: 1px solid black;
        :hover {
            cursor: auto;
        }
    `}
`