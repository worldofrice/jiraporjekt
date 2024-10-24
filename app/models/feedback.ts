import { DateTime } from 'luxon'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Course from '#models/course'
import Student from '#models/student'

export default class Feedback extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Course)
  declare profile: HasOne<typeof Course>

  @hasOne(() => Student)
  declare student: HasOne<typeof Student>

  @column()
  declare rating: number

  @column()
  declare comment: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
