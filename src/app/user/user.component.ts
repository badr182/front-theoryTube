import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private sanitizer: DomSanitizer) { }

  // videos = ["Lorem ipsum dolor sit amet", "sit amet", "ipsum dolor","Lorem ipsum"];
  url = "./src/assets/uploads/test_file.mp4";
  videos: any[];

  ngOnInit() {

    this.userService.getVideos().subscribe(
      (data: any) => {
        console.log(data);
        this.videos = data.data;
      },
      (err) => {
        console.log(err);

      }
    );
  }

  getURL() {
    //this.url = this.sanitizer.bypassSecurityTrustUrl("/opt/lampp/htdocs/learn/project-THEORYTUBE/therorietube_backend/public/uploads/test_file.mp4");
  }

}
