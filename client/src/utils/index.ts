import { surpriseMePrompts } from "../constants";


export function getRandomPrompt(prompt: string) {
  const randomIndex: number = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if(randomPrompt === prompt) getRandomPrompt(prompt);
  
  return randomPrompt;
}