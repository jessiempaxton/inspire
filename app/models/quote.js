export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
    this.id = data.quote.id
  }

  get Template() {
    return `
    <h1>${this.quote}</h1>
    <h4>${this.author}</h4>
    `
  }
}