import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let quote = _qs.Quote
  let template = ''
  template += quote.Template
  document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }

}
