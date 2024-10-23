import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
//import Course from '#models/course'

export default class FeedbacksController {
  async index({ inertia }: HttpContext) {
    // implement fetching courses from database
    const courses = await db.from('courses').select('*')

    return inertia.render('feedback', { courses })
  }
  async create({ request, response }: HttpContext) {
    let data = request.all()
    console.log(data)
    response.redirect().toPath('/feedback')
  }
}
