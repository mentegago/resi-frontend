const User = function(response) {
    this.id = response.id
    this.displayName = response.displayName
    this.profilePicture = response.profilePicture
    this.xp = response.xp
    this.totalMapPlays = response.totalMapPlays
    this.totalPlays = response.totalPlays
    this.countryCode = response.countryCode
    this.createdAt = response.createdAt
    this.isCached = response.isCached
}



export default User;