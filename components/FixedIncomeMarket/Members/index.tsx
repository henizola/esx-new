"use client";
import React from "react";
import HowToBecomeMember from "./HowToBecomeMember";
import MembershipRules from "./MembershipRules";
import ListOfMembers from "./ListOfMembers";

const SelectedPage = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <HowToBecomeMember />;
    case 1:
      return <MembershipRules />;
    case 2:
      return <ListOfMembers />;
    default:
      return null;
  }
};

function Members({ index }: { index: number }) {
  return (
    <div>
      <SelectedPage index={index} />
    </div>
  );
}

export default Members;
