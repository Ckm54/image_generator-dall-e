import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt: string) {
  const randomIndex: number = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if(randomPrompt === prompt) getRandomPrompt(prompt);
  
  return randomPrompt;
}


export async function downloadImage(_id: string, photo: string) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}