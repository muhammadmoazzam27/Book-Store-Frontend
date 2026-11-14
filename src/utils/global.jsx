import { message } from "antd"

window.toastify = (msg, type) => {
    return message[type](msg)
}