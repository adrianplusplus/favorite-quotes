import {Quote} from "../data/quote.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class QuotesService {
  private favoriteQuotes: Quote[] = []

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote)=> {
      return quoteEl.id == quote.id;
    })

    this.favoriteQuotes.splice(position,1);
  }

  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }

}
