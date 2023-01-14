import PropTypes from "prop-types";
import ListItem from "./ListItem";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`;

const TH = styled.th`
  text-align: left;
`;

const TableTextContainer = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const getBodyTextContent = (text) => (
  <tr>
    <td colSpan={3}>
      <TableTextContainer>{text}</TableTextContainer>
    </td>
  </tr>
);
const getLoadingContent = () => getBodyTextContent("Loading data...");

const getEmptyContent = () => getBodyTextContent("No data!");

const getErrorContent = (error) => getBodyTextContent(error);

const Content = ({ listItems, loading, error }) => {
  const getListContent = () =>
    listItems.map((item) => (
      <ListItem name={item.name} id={item.id} size={item.size} key={item.id} />
    ));

  const getDataContent = () =>
    listItems.length ? getListContent() : getEmptyContent();

  const getBodyContent = () =>
    error ? getErrorContent(error) : getDataContent();

  const renderBody = () => (loading ? getLoadingContent() : getBodyContent());

  return (
    <Table>
      <thead>
        <tr>
          <TH>ID</TH>
          <TH>Name</TH>
          <TH>Size</TH>
        </tr>
      </thead>

      <tbody>{renderBody()}</tbody>
    </Table>
  );
};

Content.defaultProps = {
  listItems: [],
  error: null,
};

Content.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.number,
    })
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Content;
