import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamMembers = [
    {
      image: '',
      name: 'Beatriz',
      spec: ['Project management', 'Communication']
    },
    {
      image: '',
      name: 'Abel Camacho',
      spec: ['Modeling']
    },
    {
      image: '',
      name: 'Tim Jones',
      spec: ['Preprocessing']
    },
    {
      image: '',
      name: 'Michel Heusser',
      spec: ['Preprocessing']
    },
    {
      image: '',
      name: 'Lutharsanen Kunam',
      spec: ['Modeling']
    },
    {
      image: '',
      name: 'Lukas Heumos',
      spec: ['Preprocessing']
    },
    {
      image: '',
      name: 'Sashika Nawarathne',
      spec: ['Mobile development', 'Web development']
    },
    {
      image: '',
      name: 'Mattia Gasparini',
      spec: ['Modeling', 'Preprocessing']
    },
    {
      image: '',
      name: 'Carolin Liesenjohann',
      spec: ['Design', 'Communication']
    },
    {
      image: '',
      name: 'Luis Ramos',
      spec: ['Modeling', 'Visualization']
    },
    {
      image: '',
      name: 'Sarthak Pokharel',
      spec: ['Modeling', 'Visualization', 'Api', 'Web development']
    },
    {
      image: '',
      name: 'Nishan Wijethunga',
      spec: ['Web development']
    }
  ]
  constructor() {}

  ngOnInit() {}
}
