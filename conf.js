const env = process.env

export const nodeEnv = env.NODE_ENV || 'development'

export default {
  port: env.PORT || 8082,
  host: env.HOST || '0.0.0.0'
}