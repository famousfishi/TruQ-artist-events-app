import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Events } from 'src/app/interfaces/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.page.html',
  styleUrls: ['./search-events.page.scss'],
})
export class SearchEventsPage implements OnInit {
  showSkeleton: boolean = false;
  name: string;

  eventsData: any = [];

  showNoDataOnFirstLoad: boolean = true;

  constructor(private eventService: EventsService, private router: Router) { }

  ngOnInit() {
  }

  searchUpComingEvents(event){
    this.showSkeleton = true;
    this.showNoDataOnFirstLoad = false;
    this.name = event.target.value
    this.eventService.getUpcomingEvents(this.name).then(data=>{
      console.log(data);
      this.showSkeleton = false;

      this.eventsData = data;
      console.log(this.eventsData.length); 
    })
  }

  goToEventDetail(item: any){
    console.log(item);
    let navigationExtras: NavigationExtras = {
      state: {
        eventDetail: item
      }
    }

    this.router.navigate(['search-details'], navigationExtras);
    // this.router.navigate([`/search-details/${id}`]);
  }

}
