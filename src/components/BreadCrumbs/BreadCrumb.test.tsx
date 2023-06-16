import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import BreadCrumb from './index';

jest.mock('use-react-router-breadcrumbs', () =>
  jest.fn(() => [
    { breadcrumb: 'Home', match: { pathname: '/' } },
    { breadcrumb: 'Books', match: { pathname: '/books' } },
  ])
);

describe('<BreadCrumb />', () => {
  it('should render breadcrumb items correctly', () => {
    render(
      <MemoryRouter initialEntries={['/books']}>
        <Route path="/:path?" element={<BreadCrumb/>} />
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();

    const booksLink = screen.getByText(/books/i);
    expect(booksLink).toBeInTheDocument();
  });
});