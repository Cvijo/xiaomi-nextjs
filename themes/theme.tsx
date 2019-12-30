import deepPurple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepPurple,
    secondary: pink,
    error: {
      main: red.A400
    }
  }
});

export default theme;


// import red from "@material-ui/core/colors/red";
// import { createMuiTheme } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#556cd6"
//     },
//     secondary: {
//       main: "#19857b"
//     },
//     error: {
//       main: red.A400
//     },
//     background: {
//       default: "#fff"
//     }
//   }
// });


// export default theme;