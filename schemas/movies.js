const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required'
  }),
  year: z.number().int().positive().min(1920).max(2025),
  director: z.string(),
  poster: z.string().url(),
  genre: z.array(
    z.enum([
      'Action',
      'Drama',
      'Comedy',
      'Horror',
      'Sci-Fi',
      'Romance',
      'Thriller',
      'Fantasy',
      'Documentary',
      'Adventure'
    ])
  ),
  rate: z.number().min(0).max(10),
  duration: z.number().int().positive()
})

function validateMovie(movie) {
  return movieSchema.safeParse(movie)
}
function validatePartialMovie(movie) {
  return movieSchema.partial().safeParse(movie)
}

module.exports = { validateMovie, validatePartialMovie }
