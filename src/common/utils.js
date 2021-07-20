export default {
    methods: {
        checkLoggedIn() {
            const token = localStorage.getItem("token");
            if (token === null) {
                this.$router.push("/login");
            }
        }
    }
}