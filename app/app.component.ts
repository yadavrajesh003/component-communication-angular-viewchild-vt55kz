import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent
{
  @ViewChild('maincontent') mainContent: any;
  @ViewChild('subcontent') subContent: any;

  name = 'Angular Component Talk';

  public changeMainContent()
  {
    console.log("changeMainContent");
    this.mainContent.nativeElement.setAttribute("style", "color:red");
  }

  public changeSubContent()
  {
    console.log("changeSubContent");
    this.subContent.nativeElement.setAttribute("style", "color:green");
  }
}
