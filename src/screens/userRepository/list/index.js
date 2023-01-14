import SearchForm from "./SearchForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Content from "./Content";

const Container = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Index = ({}) => {
  const { data, isLoading, error } = useSelector(
    (state) => state.userRepositories
  );

  return (
    <Container>
      <SearchForm />

      <Content listItems={data} loading={isLoading} error={error} />
    </Container>
  );
};

export default Index;
