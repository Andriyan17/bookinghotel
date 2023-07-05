/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

test('Should not allowed click button if isDisable is present', () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test('Should render loading/spinner', () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();

  expect(container.querySelector('span')).toBeInTheDocument();
});
