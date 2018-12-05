import { Component, OnInit, Renderer2 } from '@angular/core';
import { TriviaCountriesDetailsService } from './services/trivia-countries-details.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trivia-countries';
  private isMobile;

  constructor(
    private renderer: Renderer2,
    private triviaCountriesDetailsService: TriviaCountriesDetailsService) {
  }

  ngOnInit() {
    this.triviaCountriesDetailsService.checkDevice();
    if (this.triviaCountriesDetailsService.getIsMobile()) {
      // set a class on the body
      this.renderer.addClass(document.body, 'mobile-mode');
      this.isMobile = true;
    } else {
      this.renderer.addClass(document.body, 'desktop-mode');
    }
  }


}
