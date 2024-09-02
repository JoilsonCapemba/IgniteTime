import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secundary';

interface ButtonStyledProps {
    variant: ButtonVariant,
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    width: 100px;
    height: 48px;

    ${props => {
        return css`
            background-color: ${props.theme.primary};
        `
    }}
`