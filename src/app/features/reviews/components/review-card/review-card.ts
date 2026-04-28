import { Component, input } from '@angular/core';
import { getClassStar } from '../../../../utils/review-utils';

export interface ReviewCardData {
  userName: string;
  userPhoto: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'review-card',
  imports: [],
  templateUrl: './review-card.html',
  styleUrl: './review-card.css',
})
export class ReviewCard {
  readonly getStarClass = getClassStar;
  review = input.required<ReviewCardData>();
}
