import React from "react";
import memberStore from "../stores/memberStore";
import MemberItem from "./MemberItem";
import { observer } from "mobx-react";

const MemberList = () => {
  const members = memberStore.members.map((member) => (
    <MemberItem key={member.id} member={member} />
  ));

  return <div>{members}</div>;
};

export default observer(MemberList);
