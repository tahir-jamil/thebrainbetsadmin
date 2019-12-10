import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-modelAddPridiction',
  templateUrl: './modelAddPridiction.component.html',
  styleUrls: ['./modelAddPridiction.component.scss']
})
export class ModelAddPridictionComponent implements OnInit {

  predictionData;

  options = {
    'value_1x2': '',
    'value_1x2ht': '',
    'value_ou05': '',
    'value_ou05ht': '',
    'value_ou15': '',
    'value_ou15ht': '',
    'value_ou25': '',
    'double_change': '',
    'value_ggng': '',
    'result': '',
    match_id: '',
    id: '',
    status_id: '',
    Match: ''
  }

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<ModelAddPridictionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.predictionData = data.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    if (this.predictionData.updateBit) {
      if ((this.predictionData['id'] !== undefined)) {
        this.options.id = this.predictionData['id'];
        this.options.match_id = this.predictionData['match_id'];
      }
    } else {
      if (this.predictionData['id'] !== undefined) {
        this.options.match_id = this.predictionData['id'];
      }
    }

    // this.options.match_id = this.predictionData['match_id'];

    if (this.predictionData['status_id'] !== undefined) {
      this.options.status_id = this.predictionData['status_id'];
    }

    if (this.predictionData['double_change'] !== undefined) {
      this.options.double_change = this.predictionData['double_change'];
    }

    if (this.predictionData['1x2'] !== undefined) {
      this.options.value_1x2 = this.predictionData['1x2'];
    }

    if (this.predictionData['Match'] !== undefined) {
      this.options.Match = this.predictionData['Match'];
    }

    if (this.predictionData['ggng'] !== undefined) {
      this.options.value_ggng = this.predictionData['ggng'];
    }

    if (this.predictionData['ou05'] !== undefined) {
      this.options.value_ou05 = this.predictionData['ou05'];
    }

    if (this.predictionData['ou25'] !== undefined) {
      this.options.value_ou25 = this.predictionData['ou25'];
    }

    if (this.predictionData['ou05ht'] !== undefined) {
      this.options.value_ou05ht = this.predictionData['ou05ht'];
    }

    if (this.predictionData['ou15'] !== undefined) {
      this.options.value_ou15 = this.predictionData['ou15'];
    }

    if (this.predictionData['ou15ht'] !== undefined) {
      this.options.value_ou15ht = this.predictionData['ou15ht'];
    }

    if (this.predictionData['1x2ht'] !== undefined) {
      this.options.value_1x2ht = this.predictionData['1x2ht'];
    }

    if (this.predictionData['result'] !== undefined) {
      this.options.value_1x2ht = this.predictionData['result'];
    }

  }

  update() {
    if (this.predictionData.updateBit) {
      this.httpService.updatePredictions(this.options)
        .subscribe((data) => {
          this.onNoClick();
        }, (error) => {
          console.log(error);
          this.onNoClick();
        });
    } else {
      this.httpService.postPredictions(this.options)
        .subscribe((data) => {
          this.onNoClick();
        }, (error) => {
          console.log(error);
          this.onNoClick();
        });
    }
  }

  close() {
    this.onNoClick();
  }

}
