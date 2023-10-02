import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
        <h1>LOGIN BERHASIL</h1>
        <Link href='/provideruser/bookingConfirmation'>Booking Confirmation</Link>
        <Link href='/provideruser/myVenue'>My Venue</Link>
        <Link href='/provideruser/venueRegister'>Venue Register</Link>
    </div>
  )
}
