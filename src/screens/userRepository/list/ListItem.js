import PropTypes from "prop-types";
import styled from "styled-components";

const TR = styled.tr`
  &:nth-child(even) {
    background-color: mediumpurple;
    color: white;
  }
`;
const ListItem = ({ id, name, size }) => (
  <TR>
    <td>{id}</td>
    <td>{name}</td>
    <td>{size}</td>
  </TR>
);

ListItem.defaultProps = {
  size: 0,
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};
export default ListItem;
