import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Course from '#models/course'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Course.createMany([
      { id: 1, name: 'Inglise keel' },
      { id: 2, name: 'Eesti keel' },
      { id: 3, name: 'Programmeerimine' },
      { id: 4, name: 'Vene keel' },
      { id: 5, name: 'Tarkvaraarenduse meetodid' },
      { id: 6, name: 'Matemaatika' },
      { id: 7, name: 'Ajalugu' },
      { id: 8, name: 'Muusika' },
    ])
  }
}
