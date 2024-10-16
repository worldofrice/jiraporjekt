import type { HttpContext } from '@adonisjs/core/http'

export default class FeedbacksController {
  async index({ inertia }: HttpContext) {
    return inertia.render('feedback')
  }
  async create({ request, response }: HttpContext) {
    console.log(request.all())
    response.redirect().toPath('/feedback')
  }
}


// 22: {
//   rating: 1,
//   comment: "afafafa"
// }