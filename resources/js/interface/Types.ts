
type Button = {
    id: number;
    text: string;
    link: string;
    color: number;
    hero_id: number;
}
export type Hero = {
    id: number;
    title: string;
    order: number;
    image: string;
    buttons: Button[];
    subtitles: string;
}

export type Service = {
    id: number;
    title: string;
    description: string;
    image: string;
    available: boolean;
    onMainPage: boolean;
}

export type Employer = {
    id: number;
    title: string;
    description: string;
    image: string;
    onMainPage: boolean;
}

export type Job = {
    id: number;
    title: string;
    description: string;
    available: boolean;
}

export type News = {
    id: number;
    title: string;
    image: string;
    link: string;
    content:string;
}

export type Client = {
    id:number;
    image:string;
}

export type Testimonial = {
    id:number;
    name:string;
    position:string;
    image:string;
    review:string;
}

export type Team = {
    id:number;
    name:string;
    position:string;
    image:string;
}