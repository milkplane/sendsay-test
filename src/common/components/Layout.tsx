import styled from 'styled-components';

const Constainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  max-width: 570px;
  margin: 0 auto;
  margin-top: 14vh;
  gap: 30px 56px;
`;

const CenteredDiv = styled.div`
  margin: 0 auto;
`;

type LayoutProps = {
  switch: React.ReactElement;
  constructionArea: React.ReactElement;
}

const Row = styled.div`
  grid-column: 1 / 3;
`;

const Layout = (props: LayoutProps) => {
  return <Constainer>
    <CenteredDiv></CenteredDiv>
    <CenteredDiv>{props.switch}</CenteredDiv>
    <Row>
      <CenteredDiv>
        {props.constructionArea}
      </CenteredDiv>
    </Row>
  </Constainer>;
};

export default Layout;