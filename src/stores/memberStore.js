import membersData from "../Data/members";
import { makeAutoObservable, observable } from "mobx";

class MemberStore {
  members = membersData;

  constructor() {
    makeAutoObservable(this);
  }
  addMember = (member) => {
    member.id = this.members[this.members.length - 1].id + 1;
    console.log(member);
    this.members = [...this.members, member];
  };
}
const memberStore = new MemberStore();
export default memberStore;
