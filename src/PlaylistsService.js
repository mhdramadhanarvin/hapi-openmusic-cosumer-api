const { Pool } = require("pg")

class PlaylistsService {
  constructor() {
    this._pool = new Pool()
  }

  async getPlaylistsById(id) {
    const queryPlaylist = {
      text: "SELECT id, name FROM playlists WHERE id = $1",
      values: [id],
    }

    const resultPlayist = await this._pool.query(queryPlaylist)

    const querySongInPlaylist = {
      text: "SELECT songs.id, songs.title, songs.performer FROM playlist_songs LEFT JOIN songs ON playlist_songs.song_id = songs.id WHERE playlist_songs.playlist_id = $1",
      values: [id],
    }

    const { rows } = await this._pool.query(querySongInPlaylist)

    const result = resultPlayist.rows[0]

    result.songs = rows

    return result
  }
}

module.exports = PlaylistsService
