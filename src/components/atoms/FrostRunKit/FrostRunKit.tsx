import * as React from 'react'
const Embed = require('react-runkit')
import { Configuration } from 'configuration'

const FrostRunKitSource = `// https://github.com/poetapp/frost-client
const { Frost } = require('@po.et/frost-client')
// HipsterIpsum creates random content for this demo
const HipsterIpsum = require('hipsteripsum')

async function createWork(work) {
  const { workId } = await frost.createWork(token, work)
  return workId
}

async function getWork (workId) {
  const work = await frost.getWork(token, workId)
  return work
}

function handleError(e) {
  console.log(e)
}

const config = {
  host: process.env.HOST, // poet-api url,
  timeout: 10
}
const frost = new Frost(config)
const token = process.env.API_TOKEN // your first test API Token
const content = HipsterIpsum.get(1, false, true)
const date = new Date()
const work = {
  name: content.split(' ').slice(0, 5).join (' '),
  datePublished: date.toISOString(),
  dateCreated: date.toISOString(),
  author: content.split(' ').slice(5, 7).join (' '),
  tags: content.split(' ').slice(7, 9).join (', '),
  content
}

createWork(work).then(r => getWork(r)).then(r => console.log(r)).catch(handleError)
`

interface FrostRunKitProps {
  readonly token: string
}

interface FrostRunKitState {
  readonly token: string
}

export class FrostRunKit extends React.Component<FrostRunKitProps, FrostRunKitState> {
  readonly state = {
    token: this.props.token,
  }

  componentDidCatch(): void {
    this.setState(() => ({ token: '' }))
  }

  componentWillReceiveProps(nextProps: FrostRunKitProps): void {
    this.setState(() => ({ token: nextProps.token }))
  }

  render(): JSX.Element {
    if (this.state.token !== '')
      return (
        <Embed
          height="25px"
          source={FrostRunKitSource}
          env={[`API_TOKEN=${this.state.token}`, `HOST=${Configuration.frostApiUrl}`]}
        />
      )
    else return <div>Loading...</div>
  }
}
