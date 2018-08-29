import aether from './sub-functions/aether'
import apollo from './sub-functions/apollo'
import artemis from './sub-functions/artemis'
import demeter from './sub-functions/demeter'
import eleuthia from './sub-functions/eleuthia'
import hades from './sub-functions/hades'
import hephestus from './sub-functions/hephaestus'
import minerva from './sub-functions/minerva'
import posseidon from './sub-functions/poseidon'

const events = []

const init = async () => {
  console.log('[GAIA] starting process')
  aether()
  apollo()
  artemis()
  demeter()
  eleuthia()
  hades()
  hephestus()
  minerva()
  posseidon()
}

const train = async (data) => {
  console.log(`[GAIA] training: ${data}`)
}

const addEvent = (event) => {
  events.unshift(event)
}

const runEvents = () => {
  if (events.length > 0) {
    const event = events.pop()
    console.log(`[GAIA] processing event...`)
    event()
  }
}

const run = () => {
  // init
  init()

  // process
  setInterval(runEvents, 100)

  // TEST
  setInterval(() => addEvent(train), 5000)
}

run()