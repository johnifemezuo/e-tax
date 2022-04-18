import React from 'react'
import Container from '../../layout/Container';
import ProfileDescription from "./ProfileDescription";
import CoverImageAndProfileImage from "./CoverImageAndProfileImage";
import GeneralDetails from "../../components/Achive_components/GeneralDetails";
import EachDetails from "./EachDetails";

function userProfile() {
  return (
    <div>
      <div className="">
        <Container>
          <CoverImageAndProfileImage />
          <ProfileDescription />
          <GeneralDetails />
          <EachDetails />
        </Container>
      </div>
    </div>
  );
}

export default userProfile