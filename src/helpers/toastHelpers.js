import toast from "react-hot-toast"

function getToast(type, explanation, isSuccess) {
    switch (type) {
        case 'note':
            if (isSuccess) {
                toast.success(explanation, {
                    duration: 1500,
                    style: {
                        background: 'rgb(85, 85, 85)',
                        color: 'white'
                    }
                })
            } else {
                toast.error(explanation, {
                    duration: 1500,
                    style: {
                        background: 'rgb(85, 85, 85)',
                        color: 'white'
                    }
                })
            }
            break;
        case 'list':
            if (isSuccess) {
                toast.success(explanation, {
                    duration: 1500,
                    style: {
                        background: 'rgb(85, 85, 85)',
                        color: 'white'
                    }
                })
            } else {
                toast.error(explanation, {
                    duration: 1500,
                    style: {
                        background: 'rgb(85, 85, 85)',
                        color: 'white'
                    }
                })
            }
        default:
            break;
    }
}

export default getToast