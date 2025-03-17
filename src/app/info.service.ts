import { Injectable } from '@angular/core';
import infoJson from "../app/info.json";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  // Service that interacts with info.json
  // which holds all information to be displayed on the website

  // getter to get the about paragraph(s)
  get about()
  {
    return infoJson.about;
  }

  // getter to get the education array
  get education()
  {
    return infoJson.education;
  }

  // getter to get the certification array
  get certifications()
  {
    return infoJson.certifications;
  }  
  
  // getter to get the projects array
  get projects()
  {
    return infoJson.projects;
  }  
  
  // getter to get the projects array
  get services()
  {
    return infoJson.services;
  }

  // error message for if something goes wrong with the JSON
  get returnError()
  {
    return "Something went wrong with retrieving information from the JSON.";
  }

}
