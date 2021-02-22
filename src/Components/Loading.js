import './Loading.css';
import pug from 'react-pug';

const Loading = props => pug`
h1 Cooking in progress..
#cooking
  - for (var i = 0; i < 5; i++)
    .bubble
  #area
    #sides
      #pan
      #handle
    #pancake
      #pastry
`;

export default Loading;
