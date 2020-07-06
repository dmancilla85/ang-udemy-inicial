import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validadores: ValidadoresService
  ) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();
  }
  ngOnInit(): void {}

  get nombreNoValido(): boolean {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido(): boolean {
    return (
      this.forma.get('apellido').invalid && this.forma.get('apellido').touched
    );
  }

  get correoNoValido(): boolean {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get usuarioNoValido(): boolean {
    return (
      this.forma.get('usuario').invalid && this.forma.get('usuario').touched
    );
  }

  get distritoNoValido(): boolean {
    return (
      this.forma.get('direccion.distrito').invalid &&
      this.forma.get('direccion.distrito').touched
    );
  }

  get ciudadNoValida(): boolean {
    return (
      this.forma.get('direccion.ciudad').invalid &&
      this.forma.get('direccion.ciudad').touched
    );
  }

  get pasatiempos(): FormArray {
    return this.forma.get('pasatiempos') as FormArray;
  }

  get pass1NoValido(): boolean {
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }

  get pass2NoValido(): boolean {
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return pass1 === pass2 ? false : true;
  }

  crearFormulario(): void {
    this.forma = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        apellido: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            this.validadores.noHerrera
          ]
        ],
        correo: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z09.-]+.[a-z]{2,3}$')
          ]
        ],
        usuario: ['', Validators.required, this.validadores.existeUsuario],
        pass1: ['', Validators.required],
        pass2: ['', Validators.required],
        direccion: this.fb.group({
          distrito: ['', Validators.required],
          ciudad: ['', Validators.required]
        }),
        pasatiempos: this.fb.array([])
      },
      {
        validators: this.validadores.passwordsIguales('pass1', 'pass2')
      }
    );
  }

  cargarDataAlFormulario(): void {
    this.forma.reset({
      nombre: 'David',
      apellido: 'Mancilla',
      correo: 'david.a.m@live.com',
      direccion: {
        distrito: 'Morón',
        ciudad: 'Ituzaingó'
      }
    });

    ['Comer', 'Dormir', 'Trabajar'].forEach(valor =>
      this.pasatiempos.push(this.fb.control(valor))
    );
  }

  crearListeners(): void {
    this.forma.valueChanges.subscribe(valor => console.log(valor));
    this.forma.statusChanges.subscribe(status => console.log({ status }));
    this.forma
      .get('nombre')
      .valueChanges.subscribe(valor => console.log(valor));
  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this.fb.control(['']));
  }

  borrarPasatiempo(i: number): void {
    this.pasatiempos.removeAt(i);
  }

  guardar(): void {
    if (this.forma.invalid) {
      this.forma.markAllAsTouched();
      this.forma.controls.direccion.markAllAsTouched();
      return;
    }

    this.forma.reset({
      nombre: 'David',
      apellido: 'Mancilla',
      correo: 'david.a.m@live.com'
    });
  }
}
