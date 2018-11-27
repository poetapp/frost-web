import * as React from 'react'
import { Link } from 'react-router'

import './Announcement.scss'

export const Announcement = () =>
  <div className="Announcement">
    <p>
      As of today you can now record your creative works on the
      Bitcoin Mainnet, securing the proof of their existence on
      the world's most robust blockchain. To get started, please
      see our <a href="https://docs.poetnetwork.net/use-poet/beta-user-migration.html">beta user migration guide</a>.
    </p>
    <p>
      This beta platform will be closed on January 15, 2019, so please switch over to the new platform before then.
    </p>
  </div>
