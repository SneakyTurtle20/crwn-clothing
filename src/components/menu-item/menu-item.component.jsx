import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer, ContentContainer, ContentTitle, ContentSubtitle, BackgroundImageContainer } from './menu-item.styles';
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{ title.toUpperCase() }</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
  </MenuItemContainer>  
);

export default withRouter(MenuItem);