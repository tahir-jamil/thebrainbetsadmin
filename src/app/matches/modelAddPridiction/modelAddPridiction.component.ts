import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-modelAddPridiction',
  templateUrl: './modelAddPridiction.component.html',
  styleUrls: ['./modelAddPridiction.component.scss']
})
export class ModelAddPridictionComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<ModelAddPridictionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  update() {
    this.httpService.postPredictions(this.data.data)
      .subscribe((data) => {
        this.onNoClick();
      }, (error) => {
        console.log(error);
        this.onNoClick();
      });
  }

  close() {
    this.onNoClick();
  }

}
