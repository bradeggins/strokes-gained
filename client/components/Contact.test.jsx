import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react'

import Contact from './contact'

describe('Contact component', () => {
    test('Check test setup', () => {
        expect(5).toBe(5)
    })

    test('Renders contact us page', () => {
        render(<Contact />)

        let heading = screen.getByRole('heading').textContent
        expect(heading).toContain('Contact Us')
    })
})

