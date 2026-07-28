import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import mysql from 'mysql2/promise'

const app = express()
const port = Number(process.env.PORT || 3001)
const requiredConfig = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD']
const missingConfig = requiredConfig.filter((key) => !process.env[key])
const pool = missingConfig.length === 0 ? mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
  queueLimit: 0,
}) : null

app.use(cors())
app.use(express.json({ limit: '100kb' }))

app.get('/api/health', async (_req, res) => {
  if (!pool) return res.status(503).json({ status: 'configuration-required', missing: missingConfig })
  try { await pool.query('SELECT 1'); return res.json({ status: 'ok', database: 'connected' }) }
  catch (error) { console.error('Database health check failed:', error.message); return res.status(503).json({ status: 'unavailable', database: 'disconnected' }) }
})

app.post('/api/leads', async (req, res) => {
  if (!pool) return res.status(503).json({ message: 'Database configuration is required.' })
  const { name, email, company = null, message } = req.body ?? {}
  const normalizedName = typeof name === 'string' ? name.trim() : ''
  const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''
  const normalizedCompany = typeof company === 'string' ? company.trim() : null
  const normalizedMessage = typeof message === 'string' ? message.trim() : ''
  if (!normalizedName || !normalizedEmail || !normalizedMessage) return res.status(400).json({ message: 'Name, email, and message are required.' })
  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) return res.status(400).json({ message: 'Please enter a valid email address.' })
  if (normalizedName.length > 120 || normalizedEmail.length > 255 || normalizedCompany?.length > 160 || normalizedMessage.length > 5000) return res.status(400).json({ message: 'One or more fields are too long.' })
  try {
    const [result] = await pool.execute('INSERT INTO contact_leads (name, email, company, message) VALUES (?, ?, ?, ?)', [normalizedName, normalizedEmail, normalizedCompany || null, normalizedMessage])
    return res.status(201).json({ id: result.insertId, message: 'Thanks — your message has been received.' })
  } catch (error) { console.error('Lead insert failed:', error.message); return res.status(500).json({ message: 'We could not save your message. Please try again.' }) }
})

app.use((err, _req, res, _next) => {
  if (err instanceof SyntaxError) return res.status(400).json({ message: 'Invalid JSON request body.' })
  console.error('Unexpected server error:', err)
  return res.status(500).json({ message: 'Unexpected server error.' })
})

app.listen(port, () => { console.log(`Nexus API listening at http://localhost:${port}`); if (!pool) console.warn(`Database disabled: set ${missingConfig.join(', ')} in .env`) })
