import type { HttpContext } from '@adonisjs/core/http'
import Course from '#models/course'
import Feedback from '#models/feedback'
import logger from '@adonisjs/core/services/logger'

export default class AdminController {
    async index({ inertia }: HttpContext) {
        // implement fetching courses from database
        const courses = await Course.query()
        const coursesWithFeedbacks = []

        // for courses in courses find feedbacks and add all feedback ratings and add to coursesWithFeedbacks
        for (const course of courses) {
            const feedbacks = await Feedback.query().where('course_id', course.id)
            let totalRating = 0
            let totalComments = 0
            for (const feedback of feedbacks) {
                totalRating += feedback.rating
                if (feedback.comment) {
                    totalComments++
                }
            }
            const averageRating = Math.round((totalRating / feedbacks.length) * 100) / 100



            // add total number of feedback comments and average rating to coursesWithFeedbacks
            coursesWithFeedbacks.push({
                id: course.id,
                name: course.name,
                feedbacks: totalComments,
                averageRating: averageRating
            })
        }

        logger.debug(coursesWithFeedbacks)

        return inertia.render('adminpage', { coursesWithFeedbacks })
    }
}