
export const mode = process.env.MODE
export const isDev = mode === 'development'
export const isProd = !isDev
