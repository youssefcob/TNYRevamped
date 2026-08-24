import { Client, Employer, Hero, Job, News, Service, Team, Testimonial } from "@/interface/Types";
import { reactive, Ref, ref } from "vue";

let heroState:Ref<Hero[]> = ref([]);

const assignHero = (hero:Hero[]) => {
  heroState.value = hero;
}

export { heroState, assignHero };


let serviceState:Ref<Service[]> = ref([]);

const assignService = (service:Service[]) => {
  serviceState.value = service;
}

export { serviceState, assignService };

let employerState:Ref<Employer[]> = ref([]);

const assignEmployer = (employer:Employer[]) => {
  employerState.value = employer;
}

export { employerState, assignEmployer };

let jobState:Ref<Job[]> = ref([]);

const assignJob = (job:Job[]) => {
  jobState.value = job;
}

export { jobState, assignJob };

let newsState:Ref<News[]> = ref([]);

const assignNews = (news:News[]) => {
  newsState.value = news;
}

export { newsState, assignNews };

let clientState:Ref<Client[]> = ref([]);

const assignClient = (client:Client[]) => {
  clientState.value = client;
}

export { clientState, assignClient };

const testimonialState:Ref<Testimonial[]> = ref([]);

const assignTestimonial = (testimonial:Testimonial[]) => {
  testimonialState.value = testimonial;
}

export { testimonialState, assignTestimonial };

const teamState:Ref<Team[]> = ref([]);

const assignTeam = (team:Team[]) => {
  teamState.value = team;
}

export { teamState, assignTeam };


const talentState:Ref<any[]> = ref([]);
const assignTalent = (talent:any[]) => {
  talentState.value = talent;
}
export { talentState, assignTalent };

const vacanciesState:Ref<any[]> = ref([]);
const assignVacancies = (vacancies:any[]) => {
  vacanciesState.value = vacancies;
}
export { vacanciesState, assignVacancies };

const jobSeekerProfileState:Ref<any> = ref(null);
const assignJobSeekerProfile = (profile:any) => {
  jobSeekerProfileState.value = profile;
}
export { jobSeekerProfileState, assignJobSeekerProfile };

const editModeEnabled: Ref<boolean> = ref(false);
const setEditMode = (enabled: boolean) => {
  editModeEnabled.value = enabled;
}
export { editModeEnabled, setEditMode };