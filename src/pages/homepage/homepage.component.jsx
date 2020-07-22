import React from "react";
import { connect } from "react-redux";
import HeroText from "../../components/hero-text/hero-text.component";
import CommunityList from "../../components/community-list/community-list.component";

const HomePage = ({ currentUser }) => (
  <div>
    <HeroText />
    {currentUser? '' : <div className="container text-center"><h5><a href="signin">Login</a> to continue</h5></div>}
    {currentUser ? <CommunityList token={currentUser.token} /> : ''}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HomePage);
