import { Component, Input, OnInit} from '@angular/core';
import { Result } from 'src/app/interfaces/ICharacters';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() _dataCharacter!: Result[];
  colors: string = '';
  public removeEventListener!: () => void;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {

  }


}
