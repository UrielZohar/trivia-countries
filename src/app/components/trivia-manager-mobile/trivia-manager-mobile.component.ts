import {
	Component,
	ElementRef
} from '@angular/core';

import { TriviaManagerComponent } from '../trivia-manager/trivia-manager.component';
import { QuestionsManagerService } from 'src/app/services/questions-manager.service';
import { Router } from '@angular/router';
import { TriviaCountriesDetailsService } from 'src/app/services/trivia-countries-details.service';

@Component({
  selector: 'app-trivia-manager-mobile',
  templateUrl: './trivia-manager-mobile.component.html',
  styleUrls: ['../trivia-manager/trivia-manager.component.scss']
})
export class TriviaManagerMobileComponent extends TriviaManagerComponent {

  constructor(
    questionManager: QuestionsManagerService, 
    elementEl: ElementRef,
    router: Router,
    triviaCountriesDetailsService: TriviaCountriesDetailsService) {
    super(questionManager, 
      elementEl,
      router,
      triviaCountriesDetailsService);
   }

}
