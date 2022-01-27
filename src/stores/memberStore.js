import membersData from "../Data/members";
import { makeAutoObservable, observable } from "mobx";

class MemberStore {
  members = membersData;

  constructor() {
    makeAutoObservable(this);
  }
}
const memberStore = new MemberStore();
export default memberStore;
