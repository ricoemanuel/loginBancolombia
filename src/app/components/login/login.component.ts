import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formularioLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginS: ApiServiceService) {
    this.formularioLogin = this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    });
  }
  iniciar() {
    if (this.formularioLogin.valid) {

      this.loginS.login(this.formularioLogin.value).subscribe(
        (res: any) => {
          if (res.response === "Login successful") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Has iniciado sesión",
              showConfirmButton: false,
              timer: 1500
            });
          }
        },
        (error: any) => {
          if (error.status === 404) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Usuario o contraseña incorrectos.",
              showConfirmButton: false,
              timer: 1500
            });
          } 
        }
      );



    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debes diligenciar los campos requeridos.",
        showConfirmButton: false,
        timer: 1500
      });
    }

  }
}
