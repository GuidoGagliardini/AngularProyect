import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RodriguezSeguros';
  hideFooter :boolean =false;
  hideNavbarAdmin:boolean=false;
  hideNavbar:boolean=false;
  constructor (private router : Router,
               private activitedRoute : ActivatedRoute){}

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.hideNavbar=this.activitedRoute.firstChild.snapshot.data.hideNavbar;
        this.hideFooter=this.activitedRoute.firstChild.snapshot.data.hideFooter;
        this.hideNavbarAdmin=this.activitedRoute.firstChild.snapshot.data.hideNavbarAdmin;

        
      } //AYUDA
    });
    //admin
    
  }

  
}
