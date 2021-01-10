class LoadUserByEmailRepository {
  async execute (email) {
    return null
  }
}

describe('LoadUserByEmail Repository', () => {
  test('Should return null if no user is found', async () => {
    const sut = new LoadUserByEmailRepository()
    const user = await sut.execute('invalid_email@email.com')
    expect(user).toBeNull()
  })
})
