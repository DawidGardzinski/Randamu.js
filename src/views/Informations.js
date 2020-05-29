import React from 'react';
import TopBar from 'components/molecules/TopBar/TopBar';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import { routes } from 'routes';
import GridTemplate from 'templates/GridTemplate';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Informations = () => {
  const { t } = useTranslation();
  return(
  <GridTemplate>
    <TopBar
      mode={t('informations')}
      path={routes.home}
    />
    <StyledWrapper>
      <StyledHeading as="h2">{t('about')}</StyledHeading>
      <Paragraph>
        {t('about desc')}
      </Paragraph>

      <StyledHeading as="h2">
        {t('introduction')}
      </StyledHeading>
      <Paragraph>
      {t('introduction desc')}
      </Paragraph>
    </StyledWrapper>
  </GridTemplate>
)};

export default Informations;
