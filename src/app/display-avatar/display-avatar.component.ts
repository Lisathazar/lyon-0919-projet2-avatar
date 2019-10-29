import { Component, OnInit, Input } from '@angular/core';
import { TONES } from '../shared/tones-mock';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';
import { EYES } from '../shared/eyes-mock';
import { Mouth } from '../shared/mouths';
import { MOUTHS } from '../shared/mouths-mock';
import { Hairiness } from '../shared/hairiness';
import { HAIRINESS } from '../shared/hairiness-mock';
import { Hair } from '../shared/hair';
import { HAIR } from '../shared/hair-mock';
import { Eyebrows } from '../shared/eyebrows';
import { EYEBROWS } from '../shared/eyebrows-mock';
import { Hat } from '../shared/hat';
import { HAT } from '../shared/hat-mock';


@Component({
  selector: 'app-display-avatar',
  templateUrl: './display-avatar.component.html',
  styleUrls: ['./display-avatar.component.css']
})
export class DisplayAvatarComponent implements OnInit {

  @Input() displayAvatar : Avatar;
  tonesList: Tone[] = TONES;
  tone : Tone;

  eyesList: Eyes[] = EYES;
  eyes : Eyes;  


  mouths: Mouth[] = MOUTHS;
  mouth : Mouth;  

  hairiness: Hairiness[] = HAIRINESS;
  
  hairList: Hair[] = HAIR;
  hair : Hair; 

  eyebrows : Eyebrows[] = EYEBROWS;

  hats: Hat[] = HAT
  hat: Hat;

  constructor() { }

  ngOnInit() {
    console.log(this.displayAvatar);
  }

}
