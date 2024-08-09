import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MarketsIcon = ({ focused }: { focused: boolean }) => {
    const fillColor = focused ? "#070707" : "#9CA3AF";

    return (
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <Path d="M5.25 15.5H2.25V20H5.25V15.5ZM12.75 9.5H9.75V20H12.75V9.5ZM20.25 2V20H17.25V2L20.25 2ZM17.25 0.5C16.4216 0.5 15.75 1.17157 15.75 2V20C15.75 20.8284 16.4216 21.5 17.25 21.5H20.25C21.0784 21.5 21.75 20.8284 21.75 20V2C21.75 1.17157 21.0784 0.5 20.25 0.5H17.25ZM8.25 9.5C8.25 8.67157 8.92157 8 9.75 8H12.75C13.5784 8 14.25 8.67157 14.25 9.5V20C14.25 20.8284 13.5784 21.5 12.75 21.5H9.75C8.92157 21.5 8.25 20.8284 8.25 20V9.5ZM0.75 15.5C0.75 14.6716 1.42157 14 2.25 14H5.25C6.07843 14 6.75 14.6716 6.75 15.5V20C6.75 20.8284 6.07843 21.5 5.25 21.5H2.25C1.42157 21.5 0.75 20.8284 0.75 20V15.5Z" fill={fillColor}/>
            {focused && (
                <Path d="M5.25 15.5H2.25V20H5.25V15.5ZM12.75 9.5H9.75V20H12.75V9.5ZM20.25 2V20H17.25V2L20.25 2Z" fill={fillColor}/>
            )}
        </Svg>
    );
};

export default MarketsIcon;