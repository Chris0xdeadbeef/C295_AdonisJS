// database/seeders/student_seeder.ts
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { TeacherFactory } from '#database/factories/teacher_factory'
export default class TeacherSeeder extends BaseSeeder {
 public async run() {
 // Crée 10 teacher
 await TeacherFactory.createMany(10)
 }
}
