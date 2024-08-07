require('dotenv').config();

const configs = {
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  BASE_URL: process.env.BASE_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY,
  X_RAPIDAPI_HOST_INSTA: process.env.X_RAPIDAPI_HOST_INSTA,
  X_RAPIDAPI_HOST_YT: process.env.X_RAPIDAPI_HOST_YT,
  X_RAPIDAPI_HOST_YT_STAT: process.env.X_RAPIDAPI_HOST_YT_STAT,
  X_RAPIDAPI_HOST_FB: process.env.X_RAPIDAPI_HOST_FB,
  YT_ENDPOINT: process.env.YT_ENDPOINT,
  YT_STAT_ENDPOINT: process.env.YT_STAT_ENDPOINT,
  FB_ENDPOINT: process.env.FB_ENDPOINT,
  INSTA_ENDPOINT: process.env.INSTA_ENDPOINT,
  UPI_URL: process.env.UPI_URL,
  OTP_MAIL: process.env.OTP_MAIL,
  PASSWORD: process.env.PASSWORD,
  SMTP_HOST: process.env.SMTP_HOST,
  INSTAGRAM_CLIENT_ID: process.env.INSTAGRAM_CLIENT_ID,
  INSTAGRAM_CLIENT_SECRET: process.env.INSTAGRAM_CLIENT_SECRET,
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
  RESET_PASSWORD_TOKEN_SECRET: process.env.RESET_PASSWORD_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_EXPIRATION: process.env.RESET_PASSWORD_TOKEN_EXPIRATION,
};

module.exports = configs;