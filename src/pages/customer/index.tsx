import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
        <h1>LOGIN BERHASIL</h1>
        <Link href='/customer/list-event'>Event</Link>
        <Link href='/customer/list-venue'>Venue</Link>
    </div>
  )
}
