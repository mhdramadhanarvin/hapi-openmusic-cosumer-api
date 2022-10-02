const config = { 
  rabbitMq: {
    server: process.env.RABBITMQ_SERVER,
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: !process.env.MAIL_SECURE ? true : false || process.env.MAIL_SECURE == "true" ? true : false, //when not set in .env file,so default value is true
    username: process.env.MAIL_ADDRESS,
    password: process.env.MAIL_PASSWORD
  },
}
 
module.exports = config