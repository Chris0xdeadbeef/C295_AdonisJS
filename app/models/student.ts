import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Comment from './comment.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare name: string
  @column()
  declare firstname: string
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime  
  @column()
  declare classGroupId: number | null
  // Relation : 1 élève -> N commentaires
@hasMany(() => Comment)
declare comments: HasMany<typeof Comment>
}