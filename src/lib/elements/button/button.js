import styled from "styled-components"
import { text } from '../../common/text'

export function SubmitButton(props) {

    return (
        <Button>
            {text(props.text)}
        </Button>
    )
}

const Button = styled.button`
    background: #ddd;
    border-radius: 15px;
`;