import { Employer, Hero, Job, News, Service } from "@/interface/Types";
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