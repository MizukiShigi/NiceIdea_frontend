import { CSRF_TOKEN } from "../common/csrf_token.js";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const VueAxiosPlugin = {}
export default VueAxiosPlugin.install = function (Vue, { axios }) {
    axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFTOKEN": CSRF_TOKEN
    };

    Vue.axios = axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return axios
            }
        }
    });

    axios.interceptors.request.use(config => {
        config.headers = {
            'Authorization': "JWT " + localStorage.getItem('token'),
        }
        return config
    });

    axios.interceptors.response.use(
        response => {
            console.log(response)
            return response
        },
        error => {
            switch (error.response?.status) {
                case 400:
                    Swal.fire({
                        type: "Error",
                        title: "400エラー",
                        showConfirmButton: false,
                        showCloseButton: false,
                        timer: 2000,
                    });
                    break;
                case 401:
                    Swal.fire({
                        type: "Error",
                        title: "再ログイン",
                        text: "有効期限が切れています。再度ログインしてください。",
                        showConfirmButton: false,
                        showCloseButton: false,
                        timer: 2000,
                    });
                    localStorage.removeItem('token')
                    window.location.href = ("https://www.niceidea.link/login");
                    break;
                case 404:
                    Swal.fire({
                        type: "Error",
                        title: "404エラー",
                        showConfirmButton: false,
                        showCloseButton: false,
                        timer: 2000,
                    });
                    break;
                case 500:
                    Swal.fire({
                        type: "Error",
                        title: "500エラー",
                        showConfirmButton: false,
                        showCloseButton: false,
                        timer: 2000,
                    });
                    break;
                default:
                    console.log();
            }
        }
    );
}
