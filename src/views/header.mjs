import { h } from 'preact' /** @jsx h */
import c from 'classnames'

import { siteName } from '../config'

import Button from './button'
import Image from './image'
import Link from './link'
import Search from './search'

const Header = (props, { store, theme }) => {
  const { app } = store
  const { headerColor } = theme

  const cls = app.pending > 0
    ? 'animate-bg-rainbow'
    : `bg-${headerColor}`

  return (
    <header
      class={c(cls, 'top-0 w-100 shadow-1 ph3 ph3-safe flex justify-between')}
      style={{
        height: 50,
        paddingTop: 6,
        willChange: 'background, background-size'
      }}
    >
      <div class='flex-none'>
        <HeaderLogo />
      </div>
      <div class='flex-auto mh3 mw7'>
        <Search class='w-100' />
      </div>
      <nav class='tr'>
        <RandomMidiButton />
      </nav>
    </header>
  )
}

export default Header

const HeaderLogo = (_, { store }) => {
  const { app } = store
  const cls = app.pending > 0 &&
    'animate-pulse animate--normal animate--infinite'

  return (
    <Link
      color='white'
      class={c(cls, 'dib lh-copy white f3')}
      href='/'
    >
      <Image
        alt={siteName}
        class='dn db-m db-l'
        lazyload={false}
        src='/img/bitmidi.svg'
        style={{
          height: 38
        }}
      />
      <Image
        alt={siteName}
        class='db dn-m dn-l'
        lazyload={false}
        src='/img/bitmidi-icon.svg'
        style={{
          height: 39
        }}
      />
    </Link>
  )
}

const RandomMidiButton = () => {
  return (
    <Button
      class='mh1'
      fill
      size='medium'
      href='/random'
    >
      Random <span class='dn di-l'>MIDI ✨</span>
    </Button>
  )
}
