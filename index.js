require('dotenv').config()
const IFTTT = require('ifttt-webhooks-channel')
const ifttt = new IFTTT(process.env.IFTTT_KEY)

ifttt.post('push_notify', [
  'the answer:',
  '42'
])
  .then(res => console.log(res))
  .catch(err => console.error(err))
