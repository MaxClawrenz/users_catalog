export interface FilterState {
    name: string;
    email: string;
    city: string;
    company: string;
    department: string;
    position: string;
    sex: string;
    subdivision: string;
    photo: boolean;
    //social: boolean;
    [key: string]: string | boolean;
}