import { Component } from '@angular/core';
import { IPic } from '../../../core/interfaces/i-pic';
import { PicService } from '../../../core/services/pic.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  pic?: IPic;
  file: any;

  constructor(private picService: PicService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.picService
        .upload(this.file)
        .pipe(
          catchError((error) => {
            const errorMessage =
              error?.error?.src?.[0] || 'An error occurred during upload.';
            Swal.fire({
              title: 'Upload Error',
              text: errorMessage,
              icon: 'error',
            });
            return [];
          })
        )
        .subscribe((resp: IPic) => {
          Swal.fire({
            title: 'Success',
            text: 'Upload successfully!',
            icon: 'success',
          });

          this.pic = resp;
          this.router.navigate(['/pic']);
        });
    }
  }

  upload(event: any) {
    this.file = event.target.files[0];
  }
}
