// database/seeders/student_seeder.ts
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { StudentFactory } from '#database/factories/student_factory'
import ClassGroup from '#models/classgroup'

export default class StudentSeeder extends BaseSeeder {
  public async run() {
    // Crée 10 étudiants
    await StudentFactory.createMany(10)

    const classGroups = await ClassGroup.all()

    if(classGroups.length == 0){
      console.warn("Aucune classe trouvée, aucun étudiant ne sera crée.");
      return;
    }

    for(const group of classGroups){
      // crée 10 étudiants liés à chaque classe
      await StudentFactory.merge({classGroupId: group.id}).createMany(10);
    }
  }
}