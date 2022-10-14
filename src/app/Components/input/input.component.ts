import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  header1: string
  h1Font: number
  headerL1Color:any

  header2: string
  h2Font: number
  headerL2Color:any

  header3: string
  h3Font: number
  headerL3Color:any

  hight:number
  width:number

  logoPosition:any

  HeaderTxtposition:any



  lpChange(){

  }

  // panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  openBottomSheet() {
    console.log("Upload function working")
  }

  selectedFile = File;
  url = "";

  // ../../../assets/2022-10-12-105609.jpg

  onFileSelected(event: any) {
    console.log(event)
    if(event.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
  }

 





}
