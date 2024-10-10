import Swal from 'sweetalert2'
import storage from './useStorage'

const showAlert = (title, type = 'error', text) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    }
  })

  Toast.fire({
    icon: type,
    title,
    text,
    footer: ''
  })
}

const confirmDelete = (message) => {
  const locale = storage.get('locale')
  return Swal.fire({
    title: locale == 'ar' ? 'هل أنت متأكد؟' : 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    reverseButtons: locale == 'ar' ? true : false,
    confirmButtonColor: 'rgba(var(--v-theme-primary))',
    confirmButtonText: locale == 'ar' ? 'موافق' : 'OK',
    cancelButtonText: locale == 'ar' ? 'إلغاء' : 'Cancel'
  }).then((result) => {
    return result.isConfirmed
  })
}

export { showAlert, confirmDelete }
