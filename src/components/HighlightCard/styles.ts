import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/theme';
 
    
const Container = styled.View`

    background-color:${theme.colors.background};
    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(45)}px;

`;
const  Header = styled.View`

    flex-direction: row;

    justify-content: space-between;
    


`;
const Title = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color:${theme.colors.text_dark};
    
`;
const Icon = styled(Feather)`

    font-size: ${RFValue(40)}px;


`;
const Footer = styled.View`

`;
const Amount = styled.Text`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    color:${theme.colors.text_dark};
    margin-top: 38px;


`;
const LastTransaction = styled.Text`

    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.regular};

    color: ${theme.colors.text}
`;



export {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction
};

