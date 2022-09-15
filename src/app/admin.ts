export interface Admin {
    id:number;
    name:string;
    username:string;
    email:string;
    address:{
        street:string;
        suite:string;
        city:string;
        zipcode:number;
        geo:{
            lat:number;
            ing:number;
        }
    }
    phone:number;
    website:string;
    company:{
        name:string;
        catchphrase:string;
        bs:string;
    }

}
