import { EntityRepository } from '@mikro-orm/postgresql'
import { User } from './user.entity.js'
import { AuthError } from '../common/utils.js'

export class UserRepository extends EntityRepository<User> {
  async exists(username: string) {
    const count = await this.count({ username })
    return count > 0
  }

  async login(username: string, password: string) {
    // we use a more generic error so we don't leak such username is registered
    const err = new AuthError('Invalid combination of username and password')
    const user = await this.findOneOrFail(
      { username },
      {
        populate: ['password'], // password is a lazy property, we need to populate it
        failHandler: () => err,
      },
    )

    if (await user.verifyPassword(password)) {
      return user
    }

    throw err
  }
}
