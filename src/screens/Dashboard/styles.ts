import styled from 'styled-components/native';
import theme from '../../global/theme';



const Container = styled.View`

    flex:1;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.secondary};

`;

const Title = styled.Text`

    font-size: 24px;
    font-weight:bold;
    color: purple;

`
export { Container, Title };

