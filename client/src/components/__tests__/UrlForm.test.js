/*
 * Unit Tests for UrlForm Component
 *
 * These tests validate the core functionality of the UrlForm component,
 * including rendering, user interactions, and integration with metadata fetching.
 *
 * Covered scenarios:
 * - Form renders correctly with input and buttons
 * - Displays error message on invalid URL
 * - Displays metadata card on successful fetch
 * - Resets the form and clears inputs/results
 *
 * Axios is mocked to simulate API responses
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UrlForm from '../UrlForm';

const axios = require('axios');
jest.mock('axios');

describe('UrlForm Component', () => {
  it('should render the form with input fields and submit button', () => {
    render(<UrlForm />);
    expect(screen.getByLabelText(/URL 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  it('should display an error message for invalid URL submission', async () => {
    axios.post.mockRejectedValueOnce(new Error('Failed to fetch metadata'));

    render(<UrlForm />);
    fireEvent.change(screen.getByLabelText(/URL 1/i), {
      target: { value: 'invalid-url' },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    const errorMessage = await screen.findByText(/Failed to fetch metadata/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('should render metadata cards when valid URLs are submitted', async () => {
    const mockData = [
      {
        url: 'https://example.com',
        title: 'Example Title',
        description: 'Example Description',
        image: 'https://example.com/image.jpg',
      },
    ];
    axios.post.mockResolvedValueOnce({ data: mockData });

    render(<UrlForm />);
    fireEvent.change(screen.getByLabelText(/URL 1/i), {
      target: { value: 'https://example.com' },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    const card = await screen.findByText(/https:\/\/example.com/i);
    expect(card).toBeInTheDocument();
  });

  it('should clear the form when the reset button is clicked', () => {
    render(<UrlForm />);
    fireEvent.change(screen.getByLabelText(/URL 1/i), {
      target: { value: 'https://example.com' },
    });
    fireEvent.click(screen.getByText(/Reset/i));
    expect(screen.getByLabelText(/URL 1/i).value).toBe('');
  });
});
