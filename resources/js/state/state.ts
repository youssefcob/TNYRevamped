import { Hero } from "@/interface/Types";
import { reactive, Ref, ref } from "vue";

let heroState:Ref<Hero[]> = ref([]);

const assignHero = (hero:Hero[]) => {
  heroState.value = hero;
}

export { heroState, assignHero };