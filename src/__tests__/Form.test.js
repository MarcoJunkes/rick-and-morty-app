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
})