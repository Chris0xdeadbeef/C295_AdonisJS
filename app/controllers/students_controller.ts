import Student from '#models/student'
import { studentValidator } from '#validators/student';
import type { HttpContext } from '@adonisjs/core/http'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const student = await Student.query().orderBy('name').orderBy('firstname')
    return response.ok(student);
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
    const{name,firstname} = await request.validateUsing(studentValidator);
    
    // Création d'un nouvel élève avec les données récupérées
    const student = await Student.create({name, firstname})
    return response.created(student);
  }
  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await Student.findOrFail(params.id)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const data = request.only(['name', 'firstname'])
    // Vérification de l'existence de l'élève
    const student = await Student.findOrFail(params.id)
    // Mise à jour des données de l'élève
    student.merge(data)
    // Sauvegarde des modifications
    await student.save()
    // Retour le json de l'élève mis à jour
    return student
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    // Vérification de l'existence de l'élève
    const student = await Student.findOrFail(params.id)
    // Suppression de l'élève
    return await student.delete()
  }
}