import { Injectable, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { waitForAsync } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class SwalService {
  normalMessage(obj) {
    Swal.fire({
      position : 'center',
      icon : obj.icon,
      html : obj.html,
      showConfirmButton : true
    })
  }

  async confirmMessage(obj) {
    let result = await Swal.fire({
      title: "¡Atencion!",
      text: obj.text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    });
    return result;
  }
  errorMessage(obj) {
    Swal.fire({
      position : 'center',
      icon : obj.icon,
      html : obj.html,
      showConfirmButton : true
    })
  }

  userExistent(obj) {
    Swal.fire({
      position : 'center',
      icon : obj.icon,
      html : obj.html,
      showConfirmButton : true
    })
  }



  async inputMail (){
    const { value: email } = await Swal.fire({
      title: ' Ingrese su e-mail',
      input: 'email',
      inputPlaceholder: 'Por favor ingrese su e-mail'
    })
    
    if (email) {
      console.log(`Este es el  email: ${email}`)
    }
    return email;
  }
  
}


  