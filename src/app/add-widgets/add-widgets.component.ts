import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {WidgetServiceService} from '../services/widget-service.service';

@Component({
  selector: 'app-add-widgets',
  templateUrl: './add-widgets.component.html',
  styleUrls: ['./add-widgets.component.scss']
})
export class AddWidgetsComponent implements OnInit {
  //imageSrc: string;

   myForm = new FormGroup({
    appLogo: new FormControl(''),
    appLogoPath: new FormControl(''),
    appImage: new FormControl(''),
    appImagePath: new FormControl(''),
    appOtherImage: new FormControl(''),
    appOtherImagePath: new FormControl(''),
    titleApp: new FormControl(''),
    descriptionApp: new FormControl(''),
    aboutApp: new FormControl(''),
    ratingApp: new FormControl(''),
    urlApp: new FormControl(''),
    status:new FormControl(false)
  });

  constructor(private widgetService: WidgetServiceService) {

   }

  ngOnInit() {
  }

  submit(){
    console.log(this.myForm.value);
    this.widgetService.addWidgets(this.myForm.value).subscribe(res => {
            console.log(res);
            // alert('Uploaded Successfully.');
          })
   }

  //   this.http.post('http://70.113.42.250:4000/api/v2/dummy', this.myForm.value)
  //   .subscribe(res => {
  //       console.log(res);
  //       // alert('Uploaded Successfully.');
  //     })
  // }

  onFileChangeLogo(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        //this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          appLogoPath: reader.result
        });
      };
    }
  }

  onFileChangeImage(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        //this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          appImagePath: reader.result
        });
      };
    }
  }

  onFileChangeOther(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        //this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          appOtherImagePath: reader.result
        });
      };
    }
  }

}
