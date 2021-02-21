import React, { useCallback, useEffect, useState } from "react";

import styled, { css } from "styled-components";
import { darken } from "polished";
import styles from "../../styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faChevronLeft, faChevronRight, faCloudMoon, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import UsersApi from "../../api/Users";
import AmenitiesApi from "../../api/Amenities";
import PaymentsApi from "../../api/Payments";

import Text from "../../components/common/Text";
import Card from "../../components/card/Card";
import Link from "../../components/links/Link";

import Avatar from "../../components/common/Avatar";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import MultipleSelect from "../../components/select/MultipleSelect";
import { connect } from "react-redux";
import MultipleSelectClick from "../../components/select/MultipleSelectClick";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
`;
const OuterContainer = styled.div`
  display: flex;
`;

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
const BottomContainer = styled.div`
  width: 100%;
`;

const CustomisedDateRangePicker = styled(DateRangePicker)`
  & > *:focus,
  & > * > *:focus,
  & > * > * > *:focus {
    outline: ${styles.colors.blue} solid 2px;
  }

  & > * {
    padding: 5px;
    border: 2px solid ${styles.colors.grey};
    border-radius: 8px;
  }
`;
const CustomisedMultipleSelect = styled(MultipleSelect)`
  margin-right: 5px;
`;
const AmenityListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
`;
const AmenityOptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const AmenityCardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Image = styled.img`
  height: 200px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const TopCard = styled(Card)`
  margin-bottom: 20px;
  min-width: fit-content;

  &:nth-child(1) {
    flex: 1 1 30%;
  }
  &:nth-child(3) {
    flex: 1 1 60%;
  }
`;
const HouseMember = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const HouseMemberInformation = styled.div`
  display: flex;
`;
const HouseMemberText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const TableCSS = css`
  padding: 10px;
  text-align: ${props => props.align ? props.align : 'center'};
`;
const TableHeader = styled.th`
  ${TableCSS}
  background-color: ${styles.colors.grey};
`;
const TableData = styled.td`${TableCSS}`;

const Spacer = styled.div`
  flex: 1 1 ${props => props.flexBasis};
`;


function HomepageLoggedIn(props) {
  const usersApi = new UsersApi();
  const paymentsApi = new PaymentsApi();
  const amenitiesApi = new AmenitiesApi();
  const [houseMembers, setHouseMembers] = useState([]);
  const getHouseMembers = async () => {
    const response = await usersApi.getHouseMembers(props.currentUser.userId, 0, 4);
    setHouseMembers(response.data.members);
  };
  const getHouseMembersCallback = useCallback(getHouseMembers);
  useEffect(() => {
    getHouseMembersCallback();
  }, [getHouseMembersCallback]);

  const [communities, setCommunities] = useState([]);
  const getCommunities = async () => {
    const response = await usersApi.getUser(props.currentUser.userId);
    setCommunities(response.data.communityIds);
    getAmenities(response.data.communityIds);
    getPaymentsNew(response.data.communityIds, 0);
  };
  const getCommunitiesCallback = useCallback(getCommunities);
  useEffect(() => {
    getCommunitiesCallback();
  }, [getCommunitiesCallback]);


  const [currentPage, setCurrentPage] = useState(0);
  const [payments, setPayments] = useState();
  const [date, setDate] = useState([new Date(), new Date()]);
  const [selectedOption, setSelectedOption] = useState('weeks');

  const getPaymentsNew = async (ids, page) => {
    for (let i = 0; i < ids.length; i++) {
      const response = await paymentsApi.getCommunityAdminPayments(ids[i], props.currentUser.userId, page, 4);
      setPayments(response.data);
    }
  };
  const recalculate = function (page) {
    setCurrentPage(page);
    getPaymentsNew(communities, page);
  }

  const [amenities, setAmenities] = useState([]);
  const getAmenities = async (ids) => {
    const newAmenities = [];
    for (let i = 0; i < ids.length; i++) {
      const response = await amenitiesApi.getAmenitiesForCommunityId(ids[i]);
      response.data.forEach(amenity => newAmenities.push(amenity));
    }
    setAmenities(newAmenities);
  };
  
  return (
    <OuterContainer>
      <MainContainer>
        <h1>Home</h1>
        <TopContainer>
          <TopCard
            header={
              <Text bold fontSize="24px">
                House Members
              </Text>
            }
            footer={
              /* TODO: Consider updating the link below */
              <Link
                to="/housemembers"

                icon={faChevronRight}

                bold
                color={styles.colors.blue}
                width="fit-content"
              >
                View All
              </Link>
            }
          >
            {houseMembers.map(member => {
            return (
              <HouseMember key={member.id}>
                <HouseMemberInformation>
                  <Avatar src={member.image} />
                  <HouseMemberText>
                    <Text bold>
                      {member.name}
                    </Text>
                    {
                    // This is currently not used as the information is not available from the back-end service, nor would it be useful to have
                    // See #87

                    /*<Text color={darken(0.2, styles.colors.grey)}>
                      ID#{member.id}
                    </Text>*/
                    }
                  </HouseMemberText>
                </HouseMemberInformation>
                <Link to={`/users/${member.id}/message`} color={styles.colors.black}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </Link>
              </HouseMember>
            );
          })}
          </TopCard>
          <Spacer flexBasis="10%" />
          <TopCard
            header={
              <Text bold fontSize="24px">
                Payments
              </Text>
            }
          >
            <table>
              <thead>
                <tr>
                  <TableHeader>
                    <Text bold uppercase>Type</Text>
                  </TableHeader>
                  <TableHeader>
                    <Text bold uppercase>Amount</Text>
                  </TableHeader>
                  <TableHeader>
                    <Text bold uppercase>Due Date</Text>
                  </TableHeader>
                </tr>
              </thead>
              <tbody>
                {payments ? payments.payments.map(payment => {
                  return (
                    <tr key={payment.id}>
                      <TableData align="left">{payment.type || 'Not provided' /* payment.type */}</TableData>
                      <TableData>${payment.charge}</TableData>
                      <TableData>
                        {payment.dueDate}
                      </TableData>
                    </tr>
                  );
                }) : ''}
              </tbody>
            </table>
            <div>
              {payments ? <MultipleSelectClick
                justifyContent="center"
                options={(() => { // TODO: Improve DX here
                  const options = [];

                  options.push({
                    text: <FontAwesomeIcon icon={faChevronLeft} />,
                    onClick: () => recalculate(currentPage - 1),
                    disabled: (currentPage - 1) < 0,
                  });

                  if ((currentPage + 1) !== 1) options.push({
                    text: '1',
                    onClick: () => recalculate(0),
                  });

                  if ((currentPage - 1) > 1) {
                    options.push({
                      text: '...',
                      disabled: true,
                    });
                  }

                  if (currentPage > 1) {
                    options.push({
                      text: currentPage,
                      onClick: () => recalculate(currentPage - 1),
                    });
                  }

                  options.push({
                    text: (currentPage + 1),
                    onClick: () => recalculate(currentPage),
                    selected: true,
                  });

                  if ((currentPage + 1) < payments.pageInfo.totalPages) {
                    if ((currentPage + 2) < payments.pageInfo.totalPages) options.push({
                      text: currentPage + 2,
                      onClick: () => recalculate(currentPage + 1),
                    });

                    if ((currentPage + 2) <= (payments.pageInfo.totalPages - 2)) options.push({
                      text: '...',
                      disabled: true,
                    });

                    options.push({
                      text: payments.pageInfo.totalPages,
                      onClick: () => recalculate(payments.pageInfo.totalPages - 1),
                    });
                  }

                  options.push({
                    text: <FontAwesomeIcon icon={faChevronRight} />,
                    onClick: () => recalculate(currentPage + 1),
                    disabled: currentPage >= (payments.pageInfo.totalPages - 1),
                  });

                  return options;
                })()}
              /> : ''}
            </div>
          </TopCard>
        </TopContainer>

        <BottomContainer>
          <TopContainer>
            <div>
              <h1>Amenity Booking</h1>
            </div>
            <AmenityOptionContainer>
              <CustomisedMultipleSelect
                selected={selectedOption}
                setSelected={setSelectedOption}
                options={[
                  {id: 'days', text: 'Days'},
                  {id: 'weeks', text: 'Weeks'},
                  {id: 'months', text: 'Months'},
                ]}
              />
              <CustomisedDateRangePicker
                onChange={setDate}
                value={date}
              
                maxDetail="year"
                fomat="y-MM-dd"
                calendarIcon={
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    color={styles.colors.grey}
                  />
                }
                clearIcon={
                  <FontAwesomeIcon
                    icon={faTimes}
                  />
                }
              />
            </AmenityOptionContainer>
          </TopContainer>
          <AmenityListContainer>
            {amenities.map(amenity =>
              <Card
                key={amenity.id}
                margin="5px 0"
                image={
                  <Image
                    src="https://http.cat/400"
                  />
                }
                header={
                  <AmenityCardContainer>
                    <Text bold fontSize="24px">
                      {amenity.description}
                    </Text>
                    <FontAwesomeIcon
                      icon={faCloudMoon /* Needs to be calculated depending on time, need to see backend implementation of this*/ }
                      color={styles.colors.purple}
                    />
                  </AmenityCardContainer>
                }
              >
                <AmenityCardContainer>
                  <Text color={darken(0.2, styles.colors.grey)}>
                    12 AM
                  </Text>
                  <Text backgroundColor={styles.colors.red} label bold fontSize="12px" color={styles.colors.white}>
                    28. Aug 2021
                  </Text>
                </AmenityCardContainer>
              </Card>
            )}
          </AmenityListContainer>
        </BottomContainer>
      </MainContainer>
      <Spacer flexBasis="30%" />
    </OuterContainer>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HomepageLoggedIn);