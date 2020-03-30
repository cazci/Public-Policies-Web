import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"]
})
export class TeamComponent implements OnInit {
  teamMembers = [
    {
      image: "max.png",
      name: "Max",
      spec: ["Mentor"]
    },
    {
      image: "beatriz.jpeg",
      name: "Beatriz Yumi",
      spec: ["Project management", "Communication"]
    },
    {
      image: "abel.png",
      name: "Abel Camacho",
      spec: ["Modeling"]
    },
    {
      image: "lutharsanen.jpeg",
      name: "Lutharsanen Kunam",
      spec: ["Modeling"]
    },
    {
      image: "sashika.jpg",
      name: "Sashika Nawarathne",
      spec: ["Mobile development", "Web development"]
    },
    {
      image: "carolin.jpg",
      name: "Carolin Liesenjohann",
      spec: ["Design", "UX"]
    },
    {
      image: "lukas.jpg",
      name: "Lukas Heumos",
      spec: ["Preprocessing"]
    },
    {
      image: "nishan.jpg",
      name: "Nishan Wijethunga",
      spec: ["Web development"]
    },
    {
      image: "moritz.jpg",
      name: "Moritz",
      spec: ["Api", "Backend"]
    },
    {
      image: "luis.jpeg",
      name: "Luis Ramos",
      spec: ["Modeling", "Visualization"]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
