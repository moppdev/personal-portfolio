import { Injectable } from '@angular/core';
import infoJson from "../info.json";

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

  // getter to get the soft skills array
  get softSkills()
  {
    return infoJson.skills[0].soft_skills;
  }

  // getter to get the languages skills array
  get languageSkills()
  {
    return infoJson.skills[1].languages;
  }

  // getter to get the frameworks skills array
  get frameworkSkills()
  {
    return infoJson.skills[2].frameworks;
  }

}
