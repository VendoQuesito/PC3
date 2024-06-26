import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [],
})
export class MemberListComponent implements OnInit {;
  members: Member[] = [];
  addMemberForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    semester: new FormControl(''),
    career: new FormControl(''),
  });

  constructor(private memberService: MemberService, private addMember: FormBuilder) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      },
    });
  }
}
