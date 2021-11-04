import React from 'react'

import Link from 'next/link'

const Home = () => (

  <div>

    <ul>
      <li><Link href={'/1'} locale={'fr'}>Page 1 (français)</Link></li>
      <li><Link href={'/2'} locale={'fr'}>Page 2 (français)</Link></li>
      <li><Link href={'/1'} locale={'en'}>Page 1 (english)</Link></li>
      <li><Link href={'/2'} locale={'en'}>Page 2 (english)</Link></li>
    </ul>

  </div>
)

export default Home
