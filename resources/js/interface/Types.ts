
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

export type Bid = {
    id: number;
    job_seeker_id: number;
    rate_per_hour: string;
    status: string;
}
export type Service = {
    id: number;
    title: string;
    description: string;
    image: string;
    available: boolean;
    onMainPage: boolean;
}

export type Application = {
    vacancy:Vacancy;
    status:string;
    resume:string;
}

export type Employer = {
    id: number;
    facility_name: string;
    phone_number: string;
    borough: string | null;
    user_id: number;
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


export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    status: string;
    user_type: string;
    created_at: string;
    updated_at: string;
}

export type JobSeeker = {
    id: number;
    availability_to_start: string;
    created_at: string;
    dob: string;
    is_employed: boolean;
    experience: number;
    facility_type: string;
    gender: string;
    is_talent: number;
    legal_status: string;
    is_licensed: boolean;
    payment_type: string;
    phone_number: string;
    position_id: number;
    preferred_location: string;
    rate_per_hour: string;
    shift_type: string;
    resume: string;
    status: string;
    updated_at: string;
    position: Job;
    user: User;
    language: string;
    borough: string;
    languages: Language[];
    work_days: string[];
}

export type JobSeekerWithBid = JobSeeker & { pivot: Bid };

export type Language = {
    id: number;
    name: string;
    display_name: string;
}

export type Vacancy = {
    id: number;
    employer_id: number;
    position_id: number;
    borough: string;
    address: string;
    shift_details: string;
    experience: number;
    facility_type: string;
    payment_type: string;
    rate_per_hour: string;
    license_required: boolean;
    legal_status: string;
    status: string;
    gender_pref: string;
    work_days: string[];
    availability_to_start: string;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
    position: Job;
    language_pref: string;
    applications_count: number;
}

type Links = {
    url: string | null;
    label: string;
    active: boolean;
}
export type PaginatedResponse<T> = {
    data: T[];
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Links[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface TextStyle {
    id: number;
    name: string;
    font_family: 'heading' | 'body' | 'switzer' | 'inherit';
    font_weight: 400 | 500 | 600 | 700;
    italic: boolean;
    underline: boolean;
    color: string | null;
    min_font_size: number;
    max_font_size: number;
    font_size_vw: number;
    line_height: number | null;
}

export type PageContentEntry = {
    value: string | null;
    textStyleId: number | null;
    tag: string | null;
};

export type PageContentMap = Record<string, PageContentEntry | undefined>;

