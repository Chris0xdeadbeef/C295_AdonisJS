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
import TeacherController from '#controllers/teacher_controller'
import ClassgroupsController from '#controllers/classgroups_controller'
import CommentsController from '#controllers/comments_controller'

router.get('test', async () => {
  return 'API is working!'
})

router.resource('students', StudentsController).apiOnly()
router.resource('teacher', TeacherController).apiOnly()
router.resource('classGroups', ClassgroupsController).apiOnly()

// Routes imbriquées sur les commentaires
// pour le CRUD /students/:student_id/comments
router
 .group(() => {
 router.resource('comments', CommentsController).apiOnly()
 })
 .prefix('students/:student_id')
