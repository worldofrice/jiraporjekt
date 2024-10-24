import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  // Error message for the username field
  'feedback.*.rating.min': 'Palun valige hinnang',
  'feedback.*.rating.max': 'Hinnang ei saa olla üle arvu 5',
})

export const createFeedbackValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(1).maxLength(64),
    class: vine.string().minLength(1).maxLength(64),
    feedback: vine.array(
      vine.object({
        id: vine.number(), // Unique identifier for each feedback object
        name: vine.string().nullable(),
        rating: vine.number().min(1).max(5),
        comment: vine.string().maxLength(1024).nullable(),
      })
    ),
  })
)
