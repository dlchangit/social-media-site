import { Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

interface SelectionButtonListProps {
    selection: any[],
    selectedOption: any,
    action: (data: any) => void,

  }

const SelectionListButton = styled.button<{isSelected?: boolean}>`
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

export function SelectionButtonList(props: SelectionButtonListProps) {
    const dispatch = useDispatch();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} textAlign="right" >
            <span>User per row: </span>
            {props.selection.map((it: number, idx: number) => 
                <SelectionListButton key={idx} onClick={() => dispatch(props.action(it))} isSelected={props.selectedOption === it}>
                    {it}
                </SelectionListButton>
            )}
        </Box>
    )
}