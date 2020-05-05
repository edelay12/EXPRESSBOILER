module.exports = {
    PORT: process.env.PORT || 8000,
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://bugtrax@localhost/bugtraxapp',
    NODE_ENV: process.env.NODE_ENV || 'development',
    JWT_SECRET: process.env.JWT_SECRET || 'bugSecret',
    JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
  }