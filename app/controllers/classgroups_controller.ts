import ClassGroup from '#models/classgroup';
import { classgroupValidator } from '#validators/classgroup';
import type { HttpContext } from '@adonisjs/core/http'

export default class ClassgroupsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
      const classgroup = await ClassGroup.query().preload('teacher').orderBy('name','asc')
      return response.ok(classgroup);
    }
  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    // Récupération des données envoyées par le client
    const{name, teacherId} = await request.validateUsing(classgroupValidator);
    
    // Création d'un nouvel élève avec les données récupérées
    const classgroup = await ClassGroup.create({name, teacherId})
    return response.created(classgroup);
  }
  /**
   * Show individual record
   */
 async show({ params }: HttpContext) {
     return await ClassGroup.findOrFail(params.id)
   }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    // Récupération des données envoyées par le client
    const { name } = await request.validateUsing(classgroupValidator)
    
    const data = {name};
    // Vérification de l'existence de l'élève
    const classgroup = await ClassGroup.findOrFail(params.id)
    // Mise à jour des données de l'élève
    classgroup.merge(data)
    // Sauvegarde des modifications
    await classgroup.save()
    // Retour le json de l'élève mis à jour
    return classgroup
  }
  /**
   * Delete record
   */
   async destroy({ params }: HttpContext) {
      // Vérification de l'existence de l'élève
      const classgroup = await ClassGroup.findOrFail(params.id)
      // Suppression de l'élève
      return await classgroup.delete()
    }
}