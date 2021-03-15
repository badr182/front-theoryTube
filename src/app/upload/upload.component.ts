import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from '../services/upload.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {


  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;

  formData: NgForm
  title:string="";
  description:string = "";

  success:string = "";
  error:string = "";
  
  constructor(private uploadService:UploadService, private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    const fileUpload = this.fileUpload.nativeElement;    
    
    // console.log(fileUpload.files[0]);
    
    let formData = new FormData();

    

    formData.append('file', fileUpload.files[0]);
    formData.append('title', this.title);
    formData.append('description', this.description);

    formData.append('role', this.userService.getCurrentUser()["role"]);
    formData.append('id', this.userService.getCurrentUser()["id"]);
    
    
    this.uploadService.upload(formData).subscribe(
      (data)=>{
        //console.log(data);
        this.success = data["success"] ;
        this.fileUpload.nativeElement.value = "";
        this.title = "";
        this.description = "";
      },
      err=>{        
        this.error = "Please retry again with valid information" ;
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
