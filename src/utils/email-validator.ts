import { type IEmailValidator } from '../presentation/protocols/email-validator'
import validator from 'validator'

export class EmailValidatorAdapter implements IEmailValidator {
  isValid (email: string | any): boolean {
    return validator.isEmail(email)
  }
}
