import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Form from "../components/form/Form";

describe('Componente Form', () => {
    test('renderiza elementos de entrada e botão', () => {
        render(<Form onSearch={jest.fn()} />);

        //verifica se o input e o botão estão no documento
        expect(screen.getByPlaceholderText('Nome do personagem')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Pesquisar/i})).toBeInTheDocument();
    });

    test('chama onSearch com o valor de entrada correto', () => {
        const mockOnSearch = jest.fn();
        render(<Form onSearch={mockOnSearch} />);

        const inputElement = screen.getByPlaceholderText('Nome do personagem');
        const buttonElement = screen.getByRole('button', {name: /Pesquisar/i});

        //simula preenchimento e clique no botão
        fireEvent.change(inputElement, {target: {value: 'Rick'}});
        fireEvent.click(buttonElement);

        //verifica se a função onSearch foi chamada com o valor correto
        expect(mockOnSearch).toHaveBeenCalledWith('Rick');
    });
})