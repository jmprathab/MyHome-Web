import React from "react";
import { connect } from "react-redux";
import HeroText from "../../components/hero-text/hero-text.component";
import CommunityList from "./columns/community-list.component";

const HomePage = ({ currentUser }) => (
  <div>
    {!currentUser && <HeroText />}
    {currentUser ? <CommunityList /> : ''}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HomePage);
