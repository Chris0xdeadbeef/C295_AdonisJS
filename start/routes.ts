/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import StudentsController from '#controllers/students_controller'


router.get('test', async () => {
  return 'API is working!'
})

router.resource('students', StudentsController).apiOnly()
