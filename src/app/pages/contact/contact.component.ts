import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.email]);

  registerForm!: FormGroup;
  submitted = false;
  cargando = false;
  valido = true;
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
      emrpesa: ['', Validators.required],
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
    console.log('Empresa: ' + this.empresa);
    console.log('Teléfono: ' + this.tel);
    console.log('Correo: ' + this.correo);
    console.log('Mensaje: ' + this.mensaje);


    

    if (this.nombre.trim() == ''){
      Swal.fire("Ingrese nombre", "", "error");
      this.valido = false;
    }else if(this.correo.trim() == ''){
      Swal.fire("Ingrese correo", "", "error");
      this.valido = false;
    }else if (!this.esEmailValido(this.correo)){
      Swal.fire("Ingrese formato de correo válido", "", "error");
      this.valido = false;
    }else if (this.tel == ''){
      Swal.fire("Ingrese teléfono", "", "error");
      this.valido = false;
    }else if (this.tel.toString().length < 10){
      Swal.fire("Ingrese formato de teléfono correcto", "", "error");
      this.valido = false;
    }else if(this.empresa.trim() == ''){
      Swal.fire("Ingrese el nombre de la empresa", "", "error");
      this.valido = false;
    }else if (this.mensaje.trim() == ''){
      Swal.fire("Ingrese mensaje", "", "error");
      this.valido = false;
    }

    if (this.valido){
      console.log("Se envia correo");
       
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: true,
        confirmButtonText:
        'Continuar'
      })
      //this.register();
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
