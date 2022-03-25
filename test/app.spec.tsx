import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

afterEach(cleanup); // Tenemos que limpiar siempre nuestro DOM Virtual

// Guia de testing library https://medium.com/swlh/beginners-guide-to-react-testing-with-testing-library-97f23b4af40f
describe('<App component>', () => {
    it('Snapshot of Body', () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('finding title app', ()=>{
        const { getByText } = render(<App />);        
        expect(getByText('Hello Vite + React!')).toBeInTheDocument(); // -> Documentacion jest-dom https://github.com/testing-library/jest-dom
    });

    it('finding title with TestId', ()=>{
        const { getByTestId } = render(<App />);
        expect(getByTestId('title-app')).toHaveTextContent('Hello Vite + React!')
        expect(getByTestId('img-logo')).toBeInTheDocument();
    });

    test("check Counter initial value", ()=>{
        const { getByTestId } = render(<App />);
        expect(getByTestId('button-count')).toHaveTextContent('0')
    });

    test("check Counter value after a tap", ()=>{
        const { getByTestId } = render(<App />);
        const button = getByTestId('button-count');
        userEvent.click(button)
        expect(getByTestId('button-count')).toHaveTextContent('1')
    });

    test("check Counter value after tapping twice", ()=>{
        const { getByTestId } = render(<App />);
        const button = getByTestId('button-count');
        userEvent.click(button)
        userEvent.click(button)
        expect(getByTestId('button-count')).toHaveTextContent('2')        
    });
});