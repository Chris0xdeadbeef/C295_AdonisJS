import Teacher from '#models/teacher'
import { teacherValidator } from '#validators/teacher';
import type { HttpContext } from '@adonisjs/core/http'

export default class TeacherController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const teacher = await Teacher.query().orderBy('name').orderBy('firstname')
    return response.ok(teacher);
  }
  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    // Récupération des données envoyées par le client
    const{name,firstname} = await request.validateUsing(teacherValidator);
    
    // Création d'un nouvel élève avec les données récupérées
    const teacher = await Teacher.create({name, firstname})
    return response.created(teacher);
  }
  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await Teacher.findOrFail(params.id)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    // Récupération des données envoyées par le client
    const { name, firstname } = await request.validateUsing(teacherValidator)
    
    const data = {name, firstname};
    // Vérification de l'existence de l'élève
    const teacher = await Teacher.findOrFail(params.id)
    // Mise à jour des données de l'élève
    teacher.merge(data)
    // Sauvegarde des modifications
    await teacher.save()
    // Retour le json de l'élève mis à jour
    return teacher
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    // Vérification de l'existence de l'élève
    const teacher = await Teacher.findOrFail(params.id)
    // Suppression de l'élève
    return await teacher.delete()
  }
}