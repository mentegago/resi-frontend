const Score = function(response) {
    this.id = response.id
    this.userId = response.userId
    this.mapId = response.mapId
    this.createdAt = response.createdAt
    this.modifiers = response.modifiers
    this.score = response.score
    this.modifiedScore = response.modifiedScore
    this.multipliedScore = response.multipliedScore
    this.accuracy = response.accuracy
    this.missedCount = response.missedCount
    this.badCutsCount = response.badCutsCount
    this.maxCombo = response.maxCombo
    this.fullCombo = response.fullCombo
    this.platform = response.platform
    this.pb = response.pb
}

export default Score