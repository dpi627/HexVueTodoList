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

export const showConfirmAlert = async (title, text = '') => {
  const result = await Swal.fire({
    icon: 'question',
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
    confirmButtonColor: '#333333',
    cancelButtonColor: '#9f9a91',
  })

  // 返回布林值，而不是整個結果對象
  return result.isConfirmed
}

export default Swal
