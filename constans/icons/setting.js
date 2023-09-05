import React from 'react'
import { Path, Svg } from 'react-native-svg'

const SettingIcon = ({ size, color = 'black' }) => 
  <Svg width={size || "48"} height={size || "48"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M19.6616 12.8816L19.3047 12.6753C18.8799 12.4303 18.6261 11.9906 18.6261 11.5C18.6261 11.0094 18.8799 10.5697 19.3047 10.3247L19.6616 10.1184C20.636 9.55521 20.9692 8.31207 20.4067 7.33764L19.7281 6.16236C19.1669 5.18996 17.919 4.85611 16.9473 5.41729L16.5904 5.62289C16.1656 5.86854 15.6574 5.86854 15.2332 5.62289C14.8085 5.37725 14.5547 4.93821 14.5547 4.44761V4.03571C14.5547 2.91336 13.6413 2 12.519 2H11.1618C10.0395 2 9.1261 2.91336 9.1261 4.03571V4.44829C9.1261 4.93889 8.87232 5.37793 8.44753 5.62357C8.02275 5.86854 7.51518 5.86921 7.09039 5.62357L6.73346 5.41729C5.76175 4.85611 4.51385 5.18996 3.952 6.16236L3.27343 7.33764C2.71089 8.31207 3.04407 9.55589 4.0185 10.1184L4.3761 10.3247C4.80089 10.5697 5.05468 11.0094 5.05468 11.5C5.05468 11.9906 4.80089 12.4303 4.3761 12.6753L4.01918 12.8816C3.04475 13.4441 2.71157 14.6879 3.2741 15.6624L3.95268 16.8376C4.51453 17.81 5.76243 18.1439 6.73346 17.5827L7.09039 17.3771C7.51518 17.1308 8.02275 17.1321 8.44753 17.3771C8.87232 17.6227 9.1261 18.0618 9.1261 18.5524V18.9643C9.1261 20.0866 10.0395 21 11.1618 21H12.519C13.6413 21 14.5547 20.0866 14.5547 18.9643V18.5517C14.5547 18.0611 14.8085 17.6221 15.2332 17.3764C15.6574 17.1315 16.1656 17.1308 16.5904 17.3764L16.9473 17.5827C17.919 18.1432 19.1669 17.8094 19.7281 16.8376L20.4067 15.6624C20.9692 14.6879 20.636 13.4441 19.6616 12.8816ZM11.8404 14.8929C9.96957 14.8929 8.44753 13.3708 8.44753 11.5C8.44753 9.62918 9.96957 8.10714 11.8404 8.10714C13.7112 8.10714 15.2332 9.62918 15.2332 11.5C15.2332 13.3708 13.7112 14.8929 11.8404 14.8929Z" fill={color}/>
  </Svg>

export default SettingIcon;

