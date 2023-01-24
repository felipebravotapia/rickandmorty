import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Result } from 'src/app/interfaces/ICharacters';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  characterDetails!: Result;
  constructor(
    private dataService: DataService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((p) => {
      const id = Number(p.get('id'));
      this.getCharacterById(id);
    });
  }

  getCharacterById(id: number) {
    this.dataService.getCharacterById(id).subscribe((_characterDetails) => {
      this.characterDetails = _characterDetails;
    });
  }
}
