import React, { Component } from 'react';
import styled from 'styled-components/native';
import Svg, { Circle, Rect } from 'react-native-svg';

import { colors } from '../../utils/constants';

import type { CoinMarketCapData } from '../../types';
import BTC from '../../../assets/crypto-svg/BTC';

const Root = styled.View`
    height: 150;
    width: 90%;
    backgroundColor: ${colors.darkGray};
    alignSelf: center;
    borderRadius: 14;
    flexDirection: row;
`;

const TitleWrapper = styled.View`
    flex: 0.3;
    justifyContent: center;
    alignItems: center;
`;

const ContentWrapper = styled.View`
    flex: 1;
`;

const Title = styled.Text`
    
`;

type Props = {
    data: CoinMarketCapData,
};

class Coin extends Component {
    state = {}
    render() {
        return (
            <Root>
                <TitleWrapper>
                    <Title>
                        {this.props.data.name}
                    </Title>
                    <BTC />
                </TitleWrapper>
                <ContentWrapper />

            </Root>
        );
    }
}

export default Coin;