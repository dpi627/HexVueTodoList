import Swal from 'sweetalert2'

export const showSuccessAlert = (title, text = '', timeout = false) => {
  const config = {
    icon: 'success',
    title: title,
    text: text,
    confirmButtonText: '確定',
    confirmButtonColor: '#d87355',
  }

  // 如果設定了 timeout，加入計時器和進度條
  if (timeout) {
    config.timer = timeout
    config.timerProgressBar = true
  }

  return Swal.fire(config)
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
    confirmButtonColor: '#d87355',
    cancelButtonColor: '#9f9a91',
    // 預設聚焦在取消按鈕
    focusCancel: true,
  })

  // 返回布林值，而不是整個結果對象
  return result.isConfirmed
}

export const showSuccessToast = (title, text = '', timer = 3000) => {
  return Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: title,
    text: text,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })
}

export default Swal
