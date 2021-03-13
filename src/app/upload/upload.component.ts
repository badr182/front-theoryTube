import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {


  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;

  formData: NgForm

  constructor(private uploadService:UploadService) { }

  ngOnInit() {
  }

  onSubmit(){
    const fileUpload = this.fileUpload.nativeElement;    
    
    console.log(fileUpload.files[0]);

    
    this.uploadService.upload(fileUpload.files[0]).subscribe(
      (data)=>{
        console.log(data);
        
      },
      err=>{
        console.log(err);
        
      }
    )
    
    for (let index = 0; index < fileUpload.files.length; index++) {
      // const file = fileUpload.files[index];
      // this.files.push({ data: file });

      // let formData = new FormData();

      // formData.append('files', fileUpload.files[index]);
      // formData.append('entity', form.value.entity);

      // this.uploadService.upload(formData).subscribe(
      //   (data: any) => {
      //     // @TODO: display this data 
      //     console.log(data);
      //   }
      // )
    }

  }

  addFile(event){
    console.log("Change");
    
    //console.log(event.target.file);
    
  }

}
