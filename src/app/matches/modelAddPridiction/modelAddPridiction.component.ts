import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-modelAddPridiction',
  templateUrl: './modelAddPridiction.component.html',
  styleUrls: ['./modelAddPridiction.component.scss']
})
export class ModelAddPridictionComponent implements OnInit {

  options = {
    'value_1x2': '',
    'value_1x2ht': '',
    'value_ou05': '',
    'value_ou15': '',
    'value_ou05ht': '',
    'value_ou15ht': '',
    'value_ou25': '',
    'doubleChange': '',
    'value_ggng': '',
    id: this.data.data.id,
    Match: this.data.data.Match
  }

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
    this.httpService.postPredictions(this.options)
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
