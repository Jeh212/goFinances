import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/theme';


const Container = styled.View`

    flex:1;

    background-color: ${theme.colors.background};

`;

const Header = styled.View`

    width: 100%;
    height: ${RFPercentage(42)}px;

    background-color:${theme.colors.primary};

    justify-content: center;
    align-items: center;
    flex-direction: row;

`;


const UserWrapper = styled.View`

    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

const UserInfo = styled.View`


    flex-direction: row;
    align-items: center;

`;
const User = styled.View`

    margin-left: 17px;


`;
const UserGreetings = styled.Text`

    color: ${theme.colors.shape};
    font-size: ${RFValue(18)}px;

    font-family: ${theme.fonts.regular};

`;
const UserName = styled.Text`


color: ${theme.colors.shape};
    font-size: ${RFValue(18)}px;

    font-family: ${theme.fonts.bold};

`;
const Photo = styled.Image`

    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;


    border-radius: 10px;



`;


const Icon = styled(Feather)`

    color: ${theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;



export { Container, Header, Photo, UserName, UserGreetings, User, Icon, UserInfo, UserWrapper };

