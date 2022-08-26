const Beatmap = function(response) {
    this.id = response.id
    this.hash = response.hash
    this.name = response.name
    this.subName = response.subName
    this.author = response.author
    this.bpm = response.bpm
    this.duration = response.duration
    this.characteristic = response.characteristic
    this.difficulty = response.difficulty
    this.bsrCode = response.bsrCode
    this.maxScore = response.maxScore
    this.mapAuthor = response.mapAuthor
    this.mapUploader = response.mapUploader
    this.thumbnail = response.thumbnail
    this.createdAt = response.createdAt
}

export default Beatmap