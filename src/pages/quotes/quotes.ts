import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage,  NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup:{category:string, quotes:Quote[], icon:string};

  constructor(
    private navParams: NavParams,
    private alertCtrl:AlertController,
    private quotesService:QuotesService){}

  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data;
  // add elvis operator (?) in the template to use this approach
  // }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title:'Add Quote',
      subTitle:'Are you sure?',
      message:'Are you sure you want to add the quote?',
      buttons:[
        {
          text:'Yes, go ahead',
          handler:()=>{
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text:'No, I changed my mind!',
          handler:()=>{
            console.log('Cancelled')
          },
          role:'cancel'
        }
      ]
    });

    alert.present();
  }
}
