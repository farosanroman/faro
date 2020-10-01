import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
const WhiteTextTypography = withStyles({
  root: {
    color: "#0F74B8"
  }
})(Typography);
export default function Title(props) {
  return (
    <WhiteTextTypography component="h2" variant="h6"  gutterBottom>
      {props.children}
    </WhiteTextTypography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};