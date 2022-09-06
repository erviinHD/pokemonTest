import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() { }

  sweeAletDeleteGeneric(texto: string = 'Texto', icono: string = 'warning') {
    const alert = Swal.fire({
      title: '¿Está seguro que desea eliminar?',
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#b4b2b2',
      confirmButtonColor: '#6013DB',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
    });
    return alert;
  }

  sweetAlertConfirmDelete() {
    Swal.fire({
      title: 'Eliminado!',
      text: 'Registro eliminado.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#001f27'
    });
  }

  sweetAletGenericSuccess(titulo: string = 'titulo', texto: string = 'texto') {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#7C3AED'
    });
  }

  sweetAletConfirSave(titulo: string = 'ENTIDAD', texto: string = 'texto') {
    Swal.fire({ title: titulo, text: texto, icon: 'success' });
  }

  sweetAletGenericWarning(
    titulo: string = 'titulo',
    texto: string = 'Config texto...'
  ) {
    Swal.fire({
      title: titulo, 
      text: texto, 
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#7C3AED',
    });
  }
}
