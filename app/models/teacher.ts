import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import ClassGroup from './classgroup.js'
import Comment from './comment.js'

export default class Teacher extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare name: string
  @column()
  declare firstname: string
  @column()
  declare email: string
  // Relation : enseignant → classes
  @hasMany(() => ClassGroup)
  declare classGroups: HasMany<typeof ClassGroup>
  // Relation : 1 enseignant → N commentaires
  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

}