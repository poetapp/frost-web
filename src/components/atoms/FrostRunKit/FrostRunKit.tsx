import * as React from 'react'
const Embed = require('react-runkit')

const FrostRunKitSource = `// https://github.com/poetapp/frost-client
const { Frost } = require('@po.et/frost-client')
// HipsterIpsum gives us random content for this demo
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
  host: 'https://api.frost.po.et',
  timeout: 10
}
const frost = new Frost(config)
const author = process.env.AUTHOR // your email address
const token = process.env.API_TOKEN // your first test API Token
const content = HipsterIpsum.get(1, false, true)
const date = new Date()
const work = {
  name: content.split(' ').slice(0, 5).join (' '),
  datePublished: date.toISOString(),
  dateCreated: date.toISOString(),
  author,
  tags: content.split(' ').slice(5, 7).join (', '),
  content
}

createWork(work).then(r => getWork(r)).then(r => console.log(r)).catch(handleError)
`

interface FrostRunKitProps {
  readonly email: string
  readonly token: string
}

export const FrostRunKit = (props: FrostRunKitProps) => (
  <Embed height="25px" source={FrostRunKitSource} env={[`API_TOKEN=${props.token}`, `AUTHOR=${props.email}`]} />
)
