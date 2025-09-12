// database/seeders/student_seeder.ts
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Teacher from '#models/teacher'
export default class TeacherSeeder extends BaseSeeder {
 public async run() {
 // Crée 10 teacher
 await Teacher.createMany([
  {name:"Mveng", firstname:"Antoine", email: "antoine.mveng@eduvaud.ch"},
 ])
 }
}
