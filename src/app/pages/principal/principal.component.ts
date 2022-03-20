import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder,  Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.email]);

  panelOpenState = false;
  registerForm!: FormGroup;
  submitted = false;
  cargando = false;
  valido = true;
  mensajeError = '';
  canInput: boolean = false // por defecto la pondremos falsa
  contactStyle = '';

  public nombre = '';
  public correo = '';
  public tel = '';
  public mensaje = '';
  public empresa = '';

  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);

  telefonoFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  empresaFormControl = new FormControl('', [
    Validators.required,
  ]);

  mensajeFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(public router: Router,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
  }, {
      
  });
  }

  sendMail(){
    this.valido = true;
    console.log('Enviar correo nuevo');
    console.log('Nombre: ' + this.nombre);
    console.log('Teléfono: ' + this.tel);
    console.log('Empresa: ' + this.empresa);
    console.log('Correo: ' + this.correo);
    console.log('Mensaje: ' + this.mensaje);


    

    if (this.nombre.trim() == ''){
      this.mensajeError = 'Ingrese nombre';
      this.valido = false;
    }else if(this.correo.trim() == ''){
      this.mensajeError = 'Ingrese correo';
      this.valido = false;
    }else if (!this.esEmailValido(this.correo)){
      this.mensajeError = 'Ingrese formato de correo válido';
      this.valido = false;
    }else if (this.tel == ''){
      this.mensajeError = 'Ingrese teléfono';
      this.valido = false;
    }else if (this.tel.toString().length < 10){
      this.mensajeError = 'Ingrese formato de teléfono correcto';
      this.valido = false;
    }else if(this.empresa.trim() == ''){
      Swal.fire("Ingrese el nombre de la empresa", "", "error");
      this.valido = false;
    }else if (this.mensaje.trim() == ''){
      this.mensajeError = 'Ingrese mensaje';
      this.valido = false;
    }

    if (this.valido){
      console.log("Se envia correo");
       
      Swal.fire({
        title: 'Mensaje enviado',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText:'Continuar',
        showClass: {
          popup: 'animate__animated animate__bounceIn'
        },
        hideClass: {
          popup: 'animate__animated animate__bounceOut'
        }
      })

     /* Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: true,
        confirmButtonText:'Continuar'
      })*/
      //this.register();
    }else{
      Swal.fire({
        title: this.mensajeError,
        icon: 'error',
        showClass: {
          popup: 'animate__animated animate__bounceIn'
        },
        hideClass: {
          popup: 'animate__animated animate__bounceOut'
        }
      })
    }
  }

  esEmailValido(email: string):boolean {
    let mailValido = false;
      'use strict';

      var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (email.match(EMAIL_REGEX)){
        mailValido = true;
      }
    return mailValido;
  }

}
