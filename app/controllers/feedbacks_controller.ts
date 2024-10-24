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
    let data = request.all()

    console.log(data)

    console.log("BBBB")
    const payload = await request.validateUsing(createFeedbackValidator)
    //return payload
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA")
    //console.log(typeof(payload) )

    response.redirect().toPath('/feedback')
  }
}
