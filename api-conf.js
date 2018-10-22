export default {
  changent: {
    port: 8081,
    host: '0.0.0.0',
    get serverApi() {
      return `http://${this.host}:${this.port}/api`
    }
  }
}