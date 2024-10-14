import {it, expect, test } from 'vitest'
import Typography from './typography'
import {render, screen, } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

render(<Typography as='h1'>{'test'}</Typography>)

it("should render a h1 tag if we provide  'h1' as prop", () => {
    const h1El = screen.getByRole('heading');

    expect(h1El).toBeDefined();
})


it("should render 'test' as children", () => {
    const h1El = screen.getByText(/test/i);

    expect(h1El).toBeDefined();
})

it("should render p tag as default tag", () => {
    render(<Typography>{'paragraph'}</Typography>)
    const pEl= screen.getByRole('paragraph');

    expect(pEl).toBeDefined();
})

