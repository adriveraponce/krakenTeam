import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.css']
})
export class MyInformationComponent implements OnInit {

  public educationLevels =  [
    {name: "Bachelors", value: "Bachelors"}, 
    {name: "Some-college", value: "Some-college"},
    {name:  "11th", value: "11th"},
    {name: "HS-grad", value: "HS-grad"},
    {name: "Prof-school", value: "Prof-school"}, 
    {name: "Assoc-acdm", value: "Assoc-acdm"},
    {name: "Assoc-voc", value: "Assoc-voc"},
    {name: "9th", value: "9th"},
    {name: "7th-8th", value: "7th-8th"},
    {name: "12th", value: "12th"},
    {name: "Masters", value: "Masters"},
    {name: "1st-4th", value: "1st-4th"},
    {name: "10th", value: "10th"},
    {name:  "Doctorate", value:  "Doctorate"}, 
    {name: "5th-6th", value: "5th-6th"}, 
    {name: "Preschool", value: "Preschool"}
  ]

  public workclasses = [
    "Private", "Self-emp-not-inc", "Self-emp-inc", "Federal-gov", "Local-gov", "State-gov", "Without-pay", "Never-worked"
  ]

  public maritalStatuses = [
    "Married-civ-spouse", "Divorced", "Never-married", "Separated", "Widowed", "Married-spouse-absent", "Married-AF-spouse"
  ]

  public occupations = [
    "Tech-support"," Craft-repair"," Other-service", "Sales", "Exec-managerial", "Prof-specialty", "Handlers-cleaners", "Machine-op-inspct", "Adm-clerical", "Farming-fishing", "Transport-moving", "Priv-house-serv", "Protective-serv", "Armed-Forces"
  ]

  public relationships = [
    "Wife"," Own-child", "Husband", "Not-in-family"," Other-relative", "Unmarried"
  ]

  public races = [
    "Asian-Pac-Islander", "Amer-Indian-Eskimo", "Other", "Black" 
  ]

  public countries = [
    "United-States", "Cambodia", "England", "Puerto-Rico", 
    "Canada", "Germany", "Outlying-US(Guam-USVI-etc)", 
    "India", "Japan", "Greece", "South", "China", "Cuba", 
    "Iran", "Honduras", "Philippines", "Italy", "Poland", "Jamaica", "Vietnam", 
    "Mexico", "Portugal", "Ireland", "France", "Dominican-Republic", "Laos", 
    "Ecuador", "Taiwan", "Haiti", "Columbia", "Hungary", "Guatemala", "Nicaragua", 
    "Scotland", "Thailand", "Yugoslavia", "El-Salvador", 
    "Trinadad&Tobago", "Peru", "Hong", "Holand-Netherlands"
  ]

  constructor() { }

  ngOnInit() {
  }

}
