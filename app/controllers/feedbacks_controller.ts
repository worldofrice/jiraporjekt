import type { HttpContext } from '@adonisjs/core/http'
import Course from '#models/course'
import { createFeedbackValidator } from '#validators/feedback'
import Feedback from '#models/feedback'
import Student from '#models/student'

export default class FeedbacksController {
  async index({ inertia }: HttpContext) {
    // implement fetching courses from database
    const courses = await Course.query()

    return inertia.render('feedback', { courses })
  }

  async create({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createFeedbackValidator)

    console.log(payload)

    const student = await Student.firstOrCreate({
      name: payload.name,
      class: payload.class,
    })

    for (let courseFeedback of payload.feedback) {
      const course = await Course.findOrFail(courseFeedback.id)

      const feedback = await Feedback.create({
        rating: courseFeedback.rating,
        comment: courseFeedback.comment ?? '',
      })

      await course.related('feedbacks').save(feedback)
      await student.related('feedbacks').save(feedback)
    }

    response.redirect().toPath('/')
  }
}
