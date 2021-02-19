import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor() { }
  getMeme(): any {
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
        return this.responseText;
      }
    });
    xhr.open("GET", "https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=Condescending-Wonka&bottom=Bottom%20Text&top=Top%20Text&font_size=50&font=Impact");
    xhr.setRequestHeader("x-rapidapi-key", "7c53bae2a5msh292f6dc073269d5p171a55jsnd8d80fc6f584");
    xhr.setRequestHeader("x-rapidapi-host", "ronreiter-meme-generator.p.rapidapi.com");
    xhr.send(data);

  }
}
