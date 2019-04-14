import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FolderList-cli';

  tree: any[]
  path: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.tree = [];
    this.path = "";
    

  }
  getList(){
    this.appService.getFileList(this.path).subscribe(
      (res: any) => {
        if (res.error) {
          alert(res.data)
        } else {
          this.tree = JSON.parse(res.data);
          console.log(res.data);
        }

      }
    );
  }

  openCurDir(item) {
    item.expanded = true;
    if (item.type === 'Folder') {
      this.path = item.parentPath + '/' + item.name
      this.appService.getFileList(this.path).subscribe(
        (res: any) => {
          if (res.error) {
            alert(res.data)
          } else {
            item.children = JSON.parse(res.data);
            console.log(res.data);
          }
        }
      );
    }
  }

  toggleExpandFolder(item, idx) {
    item.expanded = !item.expanded;
    if (item.expanded) {
      this.openCurDir(item)
    } 
    // else {
    //   this.openCurDir(item.parentPath)
    // }
  }

}


