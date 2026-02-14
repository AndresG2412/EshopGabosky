'use client'

import React from 'react'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/clerk-react'
import SingIn from './SingIn'

interface ClerkAuthProps {
  user: any
}

export default function ClerkAuth({ user }: ClerkAuthProps) {
  return (
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {!user && <SingIn />}
    </ClerkLoaded>
  )
}
