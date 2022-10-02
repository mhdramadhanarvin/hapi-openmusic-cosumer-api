const config = require("./utils/config")
const nodemailer = require("nodemailer")

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: config.mail.host,
      port: config.mail.port,
      secure: config.mail.secure,
      auth: {
        user: config.mail.username,
        pass: config.mail.password,
      },
    })
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: "Open Music Apps",
      to: targetEmail,
      subject: "Ekspor Playlist",
      text: "Terlampir hasil dari ekspor playlist",
      attachments: [
        {
          filename: "playlists.json",
          content,
        },
      ],
    }

    return this._transporter.sendMail(message)
  }
}

module.exports = MailSender
