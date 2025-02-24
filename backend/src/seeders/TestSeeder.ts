import type { EntityManager } from '@mikro-orm/core'
import { Seeder } from '@mikro-orm/seeder'
import { User } from '../modules/user/user.entity.js'
import { Table } from '../modules/table/table.entity.js'

export class TestSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    em.create(User, {
      id: 1001,
      fullName: 'Harald Eder',
      email: 'meistereder@example.com',
      nickname: 'MeisterEder',
      password: 'password123',
      contacts: {},
    })

    for (let id = 1; id <= 10; id++) {
      em.create(Table, { id })
    }

    ;[
      {
        id: 1002,
        fullName: 'Daffy Duck',
        nickname: 'daffy',
        exhibits: [
          { id: 1001, title: 'The first Macintosh' },
          { id: 1002, title: 'Old DEC systems' },
        ],
      },
      {
        id: 1003,
        fullName: 'Donald Duck',
        nickname: 'donald',
        exhibits: [
          { id: 1003, title: 'IBM Mainframes' },
          { id: 1004, title: 'HP calculators' },
        ],
      },
      {
        id: 1004,
        nickname: 'admin',
        isAdministrator: true,
      },
    ].forEach((user) =>
      em.create(User, {
        ...user,
        email: `${user.nickname}@example.com`,
        password: 'geheim',
        contacts: {},
      }),
    )
  }
}
