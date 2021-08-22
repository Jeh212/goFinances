import React from 'react';
import { Amount, Container, Footer, Header, Icon, LastTransaction, Title } from './styles';


const HighlightCard: React.FC = () => {
  return( 
  
  <Container>

      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle"/>
      </Header>

        <Footer>
                <Amount>R$ 17.400,00</Amount>
                <LastTransaction>Ultima entrada dia 13 agosto</LastTransaction>
        </Footer>
  </Container>
  )
}

export default HighlightCard;