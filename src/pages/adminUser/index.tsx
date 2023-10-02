import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
        <Link href='/adminUser/manageVenue'>Manage Venue</Link>
        <Link href='/adminUser/manageUser'>Manage User</Link>
        <Link href='/adminUser/manageContent'>Manage Content</Link>
    </div>
  )
}
