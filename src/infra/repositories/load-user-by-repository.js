module.exports = class LoadUserByEmailRepository {
  constructor (userModel) {
    this.userModel = userModel
  }

  async execute (email) {
    const user = await this.userModel.findOne({
      email
    }, {
      projection: {
        password: 1
      }
    })
    return user
  }
}
