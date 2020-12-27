import React from 'react';

import {Container, Option, Title, Img} from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const img = [
  {
    key: String(Math.random()),
    name: img8,
    label: 'Pague suas contas sem sair de casa',
    bgColor: '#172c4a',
  },
  {
    key: String(Math.random()),
    name: img9,
    label: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159',
  },
  {
    key: String(Math.random()),
    name: img10,
    label: 'Pague suas contas sem sair de casa',
    bgColor: '#4139c8',
  },
  {
    key: String(Math.random()),
    name: img11,
    label: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b',
  },
  {
    key: String(Math.random()),
    name: img12,
    label: 'Pague suas contas sem sair de casa',
    bgColor: '#ba2f76',
  },
];

export default function Tips() {
  return (
    <Container>
      {img.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.label}</Title>
          <Img source={item.name} />
        </Option>
      ))}
    </Container>
  );
}
