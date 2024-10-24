import type { HttpContext } from '@adonisjs/core/http'
import Course from '#models/course'
import { createFeedbackValidator } from '#validators/feedback'

export default class FeedbacksController {
  async index({ inertia }: HttpContext) {
    // implement fetching courses from database
    const courses = await Course.query()

    return inertia.render('feedback', { courses })
  }
  
  async create({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createFeedbackValidator)

    response.redirect().toPath('/feedback')
  }
}
