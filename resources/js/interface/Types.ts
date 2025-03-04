
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