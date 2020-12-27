import React, {UseState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Switch} from 'react-native';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CadrDescription,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';
import {useState} from 'react';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);

  const [useBalance, setUseBalance] = useState(true);

  function handlerToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }
  function handlerToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <Header
        colors={useBalance ? ['#52E7BC', '#1AB563'] : ['#d3d3d3', '#868686']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0.2}}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '56.900,00' : '---'}</Bold>
            </Value>

            <EyeButton onPress={handlerToggleVisibility}>
              <MaterialCommunityIcons
                name="eye-outline"
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>User saldo ao pagar</UseBalanceTitle>

        <Switch value={useBalance} onValueChange={handlerToggleUseBalance} />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamentos</PaymentMethodsTitle>
      </PaymentMethods>
      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito.</CardTitle>
            <CadrDescription>
              Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
              quando tiver saldo no seu PicPay
            </CadrDescription>
          </CardDetails>

          <Img source={creditCard} resizeMode="contain" />
        </CardBody>

        <AddButton>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={30}
            color="#0db060"
          />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
        </AddButton>
      </Card>

      <UseTicketContainer>
        <UseTicketButton>
          <MaterialCommunityIcons
            name="ticket-percent-outline"
            size={20}
            color="#0db060"
          />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>
    </Wrapper>
  );
}
