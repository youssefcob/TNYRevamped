import { Employer, Hero, Service } from "@/interface/Types";
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