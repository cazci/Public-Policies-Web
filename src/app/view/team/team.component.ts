import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamMembers = [
    {
      image: 'user.svg',
      name: 'Beatriz',
      spec: ['Project management', 'Communication']
    },
    {
      image: 'user.svg',
      name: 'Abel Camacho',
      spec: ['Modeling']
    },
    {
      image: 'user.svg',
      name: 'Tim Jones',
      spec: ['Preprocessing']
    },
    {
      image: 'user.svg',
      name: 'Michel Heusser',
      spec: ['Preprocessing']
    },
    {
      image: 'user.svg',
      name: 'Lutharsanen Kunam',
      spec: ['Modeling']
    },
    {
      image: 'user.svg',
      name: 'Lukas Heumos',
      spec: ['Preprocessing']
    },
    {
      image: 'user.svg',
      name: 'Sashika Nawarathne',
      spec: ['Mobile development', 'Web development']
    },
    {
      image: 'user.svg',
      name: 'Mattia Gasparini',
      spec: ['Modeling', 'Preprocessing']
    },
    {
      image: 'user.svg',
      name: 'Carolin Liesenjohann',
      spec: ['Design', 'Communication']
    },
    {
      image: 'user.svg',
      name: 'Luis Ramos',
      spec: ['Modeling', 'Visualization']
    },
    {
      image: 'user.svg',
      name: 'Sarthak Pokharel',
      spec: ['Modeling', 'Visualization', 'Api', 'Web development']
    },
    {
      image: 'user.svg',
      name: 'Nishan Wijethunga',
      spec: ['Web development']
    }
  ]
  constructor() {}

  ngOnInit() {}
}
