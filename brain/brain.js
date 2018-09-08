// import { MongoClient } from 'mongodb'

// const url = "mongodb://localhost:27017";

// const get = async () => {
//   await MongoClient.connect(url, (err, db) => {
//     if (err) { throw err }
//     console.log('[BRAIN] Database connected')
    
//     const dbo = db.db('brains')
  
//     dbo.createCollection('gaia', (err, res) => {
//       if (err) { throw err }
//       console.log("[BRAIN] Gaia's brain connected")
//     })

//     brainInstance = db
//   })
// }

/*
 * Using fs for basic db until mango is necessary.
 */
import fs from 'fs'
import path from 'path'
import { promisify } from 'util';

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const braindb = path.join(__dirname, './braindb')

const get = async () => {
  const brainBuffer = await readFile(braindb)
  const brainData = JSON.parse(brainBuffer)
}

const update = async (data) => {
  const brainBuffer = await readFile(braindb)
  const brainData = JSON.parse(brainBuffer)
  brainData.nums.push(data)
  const newBrain = JSON.stringify(brainData)
  await writeFile(braindb, newBrain)
}

export default {
  get,
  update
}