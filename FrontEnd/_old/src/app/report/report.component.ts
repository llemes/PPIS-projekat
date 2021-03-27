import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public pieChartLabels: string[] = ['Greška u aplikaciji', 'Pogrešno korištenje aplikacije','Greška nakon uvođenja promjena','Nemogućnost implementacije promjene'];
  public pieChartData: number[] = [25,17,22,40];
  public pieChartType: any = 'pie';
  public pieChartLabels1:string[] =['Obične promjene','Hitne promjene'];
  public pieChartData1:number[]=[55,40];
  public pieChartType1: any='pie';
  constructor() { }

  ngOnInit() {
  }
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
