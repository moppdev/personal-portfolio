// model types for each education type
export class Education
{
    institution?: string;
    qualification?: string;
    institution_img?: string;
    started?: string;
    finished?: string;
    grade?: string;

    constructor()
    {

    }
}

export class Certification
{
    institution?: string;
    title?: string;
    institution_img? : string;
    link? : string;
    skills_learned? : string[]

    constructor()
    {
        
    }
}


// type guards
export function isEducation(item: Education | Certification) : item is Education 
{
    return 'qualification' in item && 'grade' in item;
}

export function isCertification(item: Education | Certification) : item is Certification
{
    return "skills_learned" in item && "link" in item;
}