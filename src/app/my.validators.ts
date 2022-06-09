import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";
import {Observable} from "rxjs";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";

export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean } | null {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {
        'restrictedEmail': true
      }
    } else
    {
      return null
    }
  }

  static uniqueEmail(control: AbstractControl): Promise<any>{
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru')
          resolve({uniqueEmail: true})
        else
          resolve(null)
      }, 1000)
    })
  }
}
