import type { HttpContext } from '@adonisjs/core/http'

export default class FeedbacksController {
    async handle({ inertia }: HttpContext) {
        return inertia.render('feedback')
      }    
}