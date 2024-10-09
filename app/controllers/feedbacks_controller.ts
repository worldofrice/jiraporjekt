import type { HttpContext } from '@adonisjs/core/http'

export default class FeedbacksController {
  async index({ inertia }: HttpContext) {
    return inertia.render('feedback')
  }

  async create({ request, response }: HttpContext) {
    console.log(request.method(), request.intended())
    console.log(request.all())
    return response.send('Form submitted successfully!')
  }
}