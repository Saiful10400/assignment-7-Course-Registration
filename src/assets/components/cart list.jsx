import PropTypes from 'prop-types';

const CartLIst = ({tittle}) => {
    return (
      <li>{tittle}</li>
    );
};

export default CartLIst;

CartLIst.propTypes = {
  tittle: PropTypes.string
};