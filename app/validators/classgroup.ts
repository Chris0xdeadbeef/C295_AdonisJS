import vine from '@vinejs/vine'
const classgroupValidator = vine.compile(
 vine.object({
 name: vine.string().minLength(2).maxLength(255),
 })
)
export { classgroupValidator }