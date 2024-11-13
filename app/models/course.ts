import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Feedback from '#models/feedback'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @hasMany(() => Feedback)
  declare feedbacks: HasMany<typeof Feedback>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
