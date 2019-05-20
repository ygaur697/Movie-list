import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private _movieservice: MoviesService) { }
  /*public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];*/

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any = [{
    data: [],
    label: ''
  }];
  pageNo: number = 1;
  moviedata = [];
  datasets: [
    {

      borderColor: '#3cba9f',
      fill: false
    }
  ]

  ngOnInit() {

    this._movieservice.getmovies(this.pageNo)

      .subscribe(data => {
        this.moviedata = data;
        console.log(this.moviedata);
        for (let i = 0; i < 20; i++) {
          this.barChartLabels[i] = this.moviedata['results'][i].title;
          this.barChartData[0].data.push(this.moviedata['results'][i].vote_average);
          console.log(this.barChartLabels);
          console.log(this.barChartData.data);
        }
        this.barChartData[0].label = 'Rating';



      }


      )


  }



}
