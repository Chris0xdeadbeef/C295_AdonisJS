import ClassGroup from '#models/classgroup'
import Teacher from '#models/teacher'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
export default class ClassGroupSeeder extends BaseSeeder {
  public async run() {
    // Récupération des enseignants
    const teachers = await Teacher.all()

    console.log(teachers)

    await ClassGroup.createMany([
      { name: 'CIN1A', teacherId: teachers[0].id },
      { name: 'CIN1B', teacherId: teachers[0].id },
      { name: 'CIN1C', teacherId: teachers[0].id },
      { name: 'FID1', teacherId: teachers[0].id },
      { name: 'FID2', teacherId: teachers[0].id },
      { name: 'CID2A', teacherId: teachers[0].id },
      { name: 'CID2B', teacherId: teachers[0].id },
    ])
  }
}
