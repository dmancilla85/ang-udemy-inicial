import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {
  constructor() {}

  noHerrera(control: FormControl): ErrorValidate {
    if (control.value?.toLowerCase() === 'herrera') {
      return {
        noHerrera: true
      };
    }

    return null;
  }

  existeUsuario(
    control: FormControl
  ): Promise<ErrorValidate> | Observable<ErrorValidate> {
    if (!control.value) {
      return Promise.resolve(null);
    }

    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'strider') {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      }, 3500);
    });
  }

  passwordsIguales(pass1Name: string, pass2Name: string): ValidationErrors {
    return (formGroup: FormGroup): void => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }
}
