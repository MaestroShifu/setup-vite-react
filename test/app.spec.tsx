import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from '../src/ui/App';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

afterEach(cleanup); // Tenemos que limpiar siempre nuestro DOM Virtual

// Guia de testing library https://medium.com/swlh/beginners-guide-to-react-testing-with-testing-library-97f23b4af40f
describe('<App component>', () => {
  beforeEach(() => {
    mockedAxios.create.mockImplementation(() => axios);
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          id: '1648690803050',
          name: 'marta',
          description: '',
          imageUrl: '',
          price: 0
        }
      ]
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Snapshot of Body', async () => {
    const { asFragment } = render(<App />);
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
      expect(mockedAxios.get).toBeCalledTimes(1);
    });
  });

  it('finding title app', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => {
      expect(getByText('Hello Vite + React!')).toBeInTheDocument(); // -> Documentacion jest-dom https://github.com/testing-library/jest-dom
      expect(mockedAxios.get).toBeCalledTimes(1);
    });
  });

  it('finding title with TestId', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => {
      expect(getByTestId('title-app')).toHaveTextContent('Hello Vite + React!');
      expect(getByTestId('img-logo')).toBeInTheDocument();
      expect(mockedAxios.get).toBeCalledTimes(1);
    });
  });

  it('check Counter initial value', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => {
      expect(getByTestId('button-count')).toHaveTextContent('0');
      expect(mockedAxios.get).toBeCalledTimes(1);
    });
  });

  it('check Counter value after a tap', async () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('button-count');
    userEvent.click(button);
    await waitFor(() => {
      expect(getByTestId('button-count')).toHaveTextContent('1');
      expect(mockedAxios.get).toBeCalledTimes(1);
    });
  });

  it('check Counter value after tapping twice', async () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('button-count');
    userEvent.click(button);
    userEvent.click(button);
    await waitFor(() => {
      expect(getByTestId('button-count')).toHaveTextContent('2');
      expect(mockedAxios.get).toBeCalledTimes(1);
    });
  });
});
