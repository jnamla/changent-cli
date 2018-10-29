export default {
  changent: {
    port: 8080,
    host: 'localhost',
    get serverApi() {
      return `http://${this.host}:${this.port}/api`
    }
  }
}