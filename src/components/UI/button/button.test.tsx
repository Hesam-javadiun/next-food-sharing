import {it, expect,afterEach} from 'vitest'
import {screen , render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import Button from './button';

afterEach(cleanup);

it('should render a anchor with href prop' , () => {
    render(<Button href='/test'>{'test'}</Button>);

    const anchorEl = screen.getByRole('link');

    expect(anchorEl).toBeInTheDocument();
})

it('should render a button without href prop', ()=> {
    render(<Button >{'test'}</Button>);

    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeInTheDocument();
});

it('should render it children', ()=> {
    render(<Button >{'test'}</Button>);

    const buttonEl = screen.getByText(/test/i);

    expect(buttonEl).toBeInTheDocument();
});
