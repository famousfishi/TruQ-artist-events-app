import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.page.html',
  styleUrls: ['./search-details.page.scss'],
})
export class SearchDetailsPage implements OnInit {
  id: any;
  data: any;

  constructor(private route: ActivatedRoute,private router: Router ) { 
    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.route.queryParams.subscribe(parameters =>{
      if (this.router.getCurrentNavigation().extras.state) {
          this.data = this.router.getCurrentNavigation().extras.state.eventDetail;
          console.log(this.data);
      }
    })
  }

  ngOnInit() {
  }

}
