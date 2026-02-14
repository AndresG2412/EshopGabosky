'use client'

import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

export default function SingIn() {
    return (
        <SignInButton mode='modal'>
            <button className='text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect'>
                Login
            </button>
        </SignInButton>
    )
}
