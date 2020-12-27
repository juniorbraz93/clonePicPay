import React from 'react';

import {Container, Details, Img, Tilte, Description} from './styles';

import img13 from '../../images/13.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Tilte>Cober um amigo</Tilte>

        <Description>
          Mantenha suas parcerias em dia, use o Picpay para fazer suas
          cobranças.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
