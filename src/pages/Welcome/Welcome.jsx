import {
  Container,
  Title,
  VideoTutorialContainer,
  PlayIcon,
  TextContainerB,
  VideoTutorialTextA,
  VideoTutorialTextB,
  FlexContainer,
  FlexContainerB,
  CalorieContainer,
  RunIcon,
  TextContainerC,
  CalorieTextA,
  CalorieTextB,
  ButtonContainer,
  ButtonYellow,
  ButtonBlack,
  Section,
  PlayIconContainer,
  RunIconContainer,
  TextIcon,
} from './Welcome.styled';
import sprite from '../../sprite/sprite.svg';
import { useDispatch } from 'react-redux';
import getStatistics from '../../redux/statistics/statisticsOperations';

const Welcome = () => {
  const dispatch = useDispatch();
  
  const onHandleClick = () => {
    dispatch(getStatistics());
  };

  return (
    <Section>
      <Container>
        <Title>
          Transforming your{' '}
          <TextIcon className="text-container">body&nbsp;</TextIcon>
          shape with Power Pulse
        </Title>
        <ButtonContainer>
          <ButtonYellow to="/signup">Sign Up</ButtonYellow>
          <ButtonBlack to="/signin">Sign In</ButtonBlack>
        </ButtonContainer>
        <FlexContainer>
          <VideoTutorialContainer>
            <PlayIconContainer>
              <PlayIcon className="setPlay">
                <use href={`${sprite}#icon-Polygon`}></use>
              </PlayIcon>
            </PlayIconContainer>
            <TextContainerB>
              <VideoTutorialTextA>350+</VideoTutorialTextA>
              <VideoTutorialTextB>Video tutorial</VideoTutorialTextB>
            </TextContainerB>
          </VideoTutorialContainer>
        </FlexContainer>
        <FlexContainerB>
          <CalorieContainer>
            <RunIconContainer>
              <RunIcon className="setRun">
                <use href={`${sprite}#icon-running`}></use>
              </RunIcon>
            </RunIconContainer>
            <TextContainerC>
              <CalorieTextA>500</CalorieTextA>
              <CalorieTextB>cal</CalorieTextB>
            </TextContainerC>
          </CalorieContainer>
        </FlexContainerB>
      </Container>
    </Section>
  );
};

export default Welcome;
