import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/card/Card';

const mockCharacters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth' },
    location: { name: 'Citadel of Ricks' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
];

describe('Componente Card', () => {
  test('Renderiza o caracter corretamente', () => {
    const { getByText } = render(<Card characters={mockCharacters} />);
    
    // Verificar se os dados do personagem está sendo exibido corretamente
    expect(getByText('Rick Sanchez')).toBeInTheDocument();
  });
});
