import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.css']
})
export class MyInformationComponent implements OnInit {

  public educationLevels =  [
    {name: "Bachelors", value: "Bachelors"}, 
    {name: "Some college", value: "Some-college"},
    {name:  "11th", value: "11th"},
    {name: "High School grad", value: "HS-grad"},
    {name: "Prof-school", value: "Prof-school"}, 
    {name: "Assoc-acdm", value: "Assoc-acdm"},
    {name: "Assoc-voc", value: "Assoc-voc"},
    {name: "9th", value: "9th"},
    {name: "7th-8th", value: "7th-8th"},
    {name: "12th", value: "12th"},
    {name: "Masters Degree", value: "Masters"},
    {name: "1st-4th", value: "1st-4th"},
    {name: "10th", value: "10th"},
    {name: "Doctorate", value:  "Doctorate"}, 
    {name: "5th-6th", value: "5th-6th"}, 
    {name: "Preschool", value: "Preschool"}
  ]

  public workclasses = [
    {name: "Private", value: "Private"}, 
    {name: "Self employed, not-inc" , value: "Self-emp-not-inc"}, 
    {name: "Self-employed , inc" , value: "Self-emp-inc"}, 
    {name: "Federal government", value: "Federal-gov"}, 
    {name: "Local government", value: "Local-gov"}, 
    {name: "State governmenent", value: "State-gov"}, 
    {name: "Without pay", value: "Without-pay"}, 
    {name: "Never worked", value: "Never-worked"}
  ]

  public maritalStatuses = [
    {name: "Married, civil spouse", value: "Married-civ-spouse"}, 
    {name: "Divorced", value: "Divorced"}, 
    {name: "Never married", value: "Never-married"}, 
    {name: "Separated", value: "Separated"}, 
    {name: "Widowed", value: "Widowed"}, 
    {name: "Married, spouseabsent", value: "Married-spouse-absent"}, 
    {name: "Married, AFspouse", value: "Married-AF-spouse"}
  ]

  public occupations = [
    {name: "Tech-support", value: "Tech-support"},
    {name: "Craft-repair", value: "Craft-repair"},
    {name: "Other services", value: "Other-service"}, 
    {name: "Sales", value: "Sales"}, 
    {name: "Exec-managerial", value: "Exec-managerial"}, 
    {name: "Prof-specialty", value: "Prof-specialty"},
    {name: "Handlers-cleaners", value: "Handlers-cleaners"},
     {name: "Machine-op-inspct", value: "Machine-op-inspct"}, 
     {name: "Adm-clerical", value: "Adm-clerical"}, 
     {name: "Farming, fishing", value: "Farming-fishing"}, 
     {name: "Transport, moving", value: "Transport-moving"}, 
     {name: "Private house services", value: "Priv-house-serv"}, 
     {name: "Protective services" , value: "Protective-serv"}, 
     {name: "Armed Forces", value: "Armed-Forces"}
  ]

  public relationships = [
    {name: "Wife", value: "Wife"},
    {name: "Own child", value: "Own-child"},
    {name: "Husband", value: "Husband"},
    {name: "Not in family", value: "Not-in-family"},
    {name: "Other ", value: "Other-relative"}, 
    {name: "Unmarried", value: "Unmarried"}
  ]

  public races = [
    {name: "Asian, Pac, Islander", value: "Asian-Pac-Islander"},
    {name: "American, Indian, Eskimo" , value: "Amer-Indian-Eskimo"},
    {name: "Black", value: "Black"},
    {name: "Other", value: "Other"}
  ]

  public countries = [
    {name: "United States", value:"United-States"}, 
    {name: "Cambodia", value: "Cambodia"}, 
    {name: "England", value: "England"}, 
    {name: "Puerto-Rico", value: "Puerto-Rico"}, 
    {name: "Canada", value: "Canada"}, 
    {name: "Germany", value: "Germany"},
    {name: "Outlying-US(Guam-USVI-etc)", value: "Outlying-US(Guam-USVI-etc)"}, 
    {name: "India" , value: "India"}, 
    {name: "Japan", value: "Japan"}, 
    {name: "Greece", value: "Greece"}, 
    {name: "South", value: "South"}, 
    {name: "China", value: "China"}, 
    {name: "Cuba", value: "Cuba"}, 
    {name: "Iran", value: "Iran"}, 
    {name: "Honduras", value: "Honduras"}, 
    {name: "Philippines", value: "Philippines"}, 
    {name: "Italy", value: "Italy"}, 
    {name: "Poland", value: "Poland"}, 
    {name: "Jamaica", value: "Jamaica"}, 
    {name: "Vietnam", value: "Vietnam"}, 
    {name: "Mexico", value: "Mexico"}, 
    {name: "Portugal", value: "Portugal"}, 
    {name: "Ireland", value: "Ireland"}, 
    {name: "France", value: "France"},
    {name: "Dominican Republic", value: "Dominican-Republic"}, 
    {name: "Laos", value: "Laos"}, 
    {name: "Ecuador", value: "Ecuador"},
    {name: "Taiwan", value: "Taiwan"},
    {name: "Haiti", value: "Haiti"}, 
    {name: "Columbia", value: "Columbia"},
    {name: "Hungary", value: "Hungary"}, 
    {name: "Guatemala", value: "Guatemala"}, 
    {name: "Nicaragua", value: "Nicaragua"}, 
    {name: "Scotland", value: "Scotland"}, 
    {name:"Thailand", value: "Thailand"}, 
    {name: "Yugoslavia", value: "Yugoslavia"}, 
    {name: "El Salvador", value: "El-Salvador"}, 
    {name: "Trinadad & Tobago", value: "Trinadad&Tobago"}, 
    {name: "Peru", value: "Peru"}, 
    {name: "Hong", value: "Hong"}, 
    {name: "Holand-Netherlands", value: "Holand-Netherlands"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
