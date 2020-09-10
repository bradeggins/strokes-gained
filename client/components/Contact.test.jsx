import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react'
import {ReactDOM} from 'react-dom'
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

    test('Check form submit is enabled after email and human check completed', () => {
        render(<Contact />)
        let emailForm = screen.getByLabelText('Email')
        let humanCheck = screen.getByLabelText(/Are you a human/i)

        fireEvent.change(emailForm, {target: {value: 'bob@gmail.com'}})
        fireEvent.change(humanCheck, {target: {value: 7}})

        let disabledButton = screen.getByRole('button', {name: /Submit/i}).disabled
             
        expect(disabledButton).toBeFalsy()
    })

    test('Check submit disable when only email completed', () => {
        render(<Contact />)
        let emailForm = screen.getByLabelText('Email')
        fireEvent.change(emailForm, {target: {value: 'bob@gmail.com'}})
       
        let disabledButton = screen.getByRole('button', {name: /Submit/i}).disabled
             
        expect(disabledButton).toBeTruthy()

    })

})

