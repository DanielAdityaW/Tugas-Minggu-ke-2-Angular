import { Component } from '@angular/core';
import { IPagination } from '../../../core/interfaces/i-pagination';
import { IPic } from '../../../core/interfaces/i-pic';
import { PicService } from '../../../core/services/pic.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  pics!: IPagination<IPic>;

  constructor(private picService: PicService) {}

  ngOnInit(): void {
    this.picService
      .getPics()
      .pipe(catchError(this.picService.baseHttp.handleError))
      .subscribe((resp: IPagination<IPic>) => {
        this.pics = resp;
      });
  }
}
