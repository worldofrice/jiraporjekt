import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inits'

  async up() {
    // Create courses table
    this.schema.createTable('courses', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.dateTime('created_at')
      table.dateTime('updated_at')
    })

    // Create students table
    this.schema.createTable('students', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('class').notNullable()
      table.dateTime('created_at')
      table.dateTime('updated_at')
    })

    // Create feedbacks table
    this.schema.createTable('feedbacks', (table) => {
      table.increments('id').primary()
      table.integer('rating').notNullable()
      table.text('comment').notNullable()
      table.dateTime('created_at')
      table.dateTime('updated_at')

      // Foreign keys
      table.integer('course_id').unsigned().references('id').inTable('courses').onDelete('CASCADE')
      table
        .integer('student_id')
        .unsigned()
        .references('id')
        .inTable('students')
        .onDelete('CASCADE')
    })
  }

  async down() {
    // Drop tables in reverse order of creation
    this.schema.dropTableIfExists('feedbacks')
    this.schema.dropTableIfExists('students')
    this.schema.dropTableIfExists('courses')
  }
}
