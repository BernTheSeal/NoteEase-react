import toast from "react-hot-toast"

function getToast(explanation, isSuccess) {
    if (isSuccess) {
        toast.success(explanation, {
            duration: 1800,
            style: {
                background: '#2e2e2e',
                color: 'white',
                border: '1px solid green'

            }
        })
    } else {
        toast.error(explanation, {
            duration: 1800,
            style: {
                background: '#2e2e2e',
                color: 'white',
                border: '1px solid red'
            }
        })
    }
}

export default getToast