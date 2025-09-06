import Swal from 'sweetalert2'

export const showSuccessAlert = (title, text = '') => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    confirmButtonText: '確定',
    confirmButtonColor: '#333333',
  })
}

export const showErrorAlert = (title, text = '') => {
  return Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    confirmButtonText: '確定',
    confirmButtonColor: '#d87355',
  })
}

export const showConfirmAlert = (title, text = '') => {
  return Swal.fire({
    icon: 'question',
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
    confirmButtonColor: '#333333',
    cancelButtonColor: '#9f9a91',
  })
}

export default Swal
