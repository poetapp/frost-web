import * as React from 'react'
const Embed = require('react-runkit')

const FrostRunKitSource = `const { Frost } = require('@po.et/frost-client')
const HipsterIpsum = require('hipsteripsum')

async function createWork(work) {
  try {
    const { workId } = await frost.createWork(token, work)
    return workId
  } catch(e) {
    console.log(e)
  }
}

async function getWork (workId) {
  try {
    const work = await frost.getWork(token, workId)
    return work
  } catch(e) {
    console.log(e)
  }
}

const config = {
  host: 'https://api.frost.po.et',
  timeout: 10
}
const token = process.env.API_TOKEN
const author = process.env.AUTHOR
const frost = new Frost(config)

const content = HipsterIpsum.get(1, false, true)
const date = new Date()

const work = {
  name: content.split(' ').slice(0, 5).join (' '),
  datePublished: date.toISOString(),
  dateCreated: date.toISOString(),
  author: author,
  tags: content.split(' ').slice(5, 7).join (', '),
  content
}

createWork(work).then(res => console.log(res))
`

interface FrostRunKitProps {
  readonly user: string
  readonly token: string
}

export const FrostRunKit = (props: FrostRunKitProps) => (
  <Embed source={FrostRunKitSource} env={[`API_TOKEN=${props.token}`, `AUTHOR=${props.user}`]} />
)
