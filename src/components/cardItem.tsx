import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { DataProps } from '../../App'
import Styles from '../styles'

interface CardProps {
    data: DataProps
}

const CardItem = ({ data }: CardProps) => {
    return (
        <View style={Styles.cardContainer}>
            <View style={Styles.width100p}>
                {data.cover_image_url ?
                    <Image resizeMode='stretch' source={{ uri: (`${data.cover_image_url}`) }}
                        style={[Styles.width100p, Styles.height200]} />
                    :
                    <View style={[Styles.width100p, Styles.height200, Styles.alignContentCenter]}>
                        <Text>No Image to display</Text>
                    </View>
                }
                {
                    data.must_see || data.likely_to_sell_out || data.top_seller ?
                        <View style={Styles.topContainer}>
                            <Text style={[Styles.padding10, Styles.colorWhite]}>{data.must_see ? 'Must see' : data.likely_to_sell_out ? 'Likely to sell out' : 'Top seller'}</Text>
                        </View>
                        : null
                }
            </View>
            <View style={[Styles.flex, Styles.padding10, Styles.justifySpcBtwn]}>
                <View>
                    <Text style={[Styles.colorBlack, Styles.textTitle]}>{data.title}</Text>
                    <Text numberOfLines={2} style={[Styles.colorBlack, Styles.textCaption]}>{data.description}</Text>
                </View>
                <View>
                    <Text style={[Styles.colorGreen, Styles.textTitle]}>{data.free_cancellation ? 'Free cancellations' : ''}</Text>
                    <View style={Styles.seperator}></View>
                    <View style={[Styles.width100p, Styles.padding10, Styles.row, Styles.justifySpcBtwn, Styles.alignCenter]}>
                        <Text style={[Styles.textTitle, Styles.colorBlack, Styles.textBold]}>4.5/5 <Text style={[Styles.textCaption, Styles.colorBlack, Styles.textBold]}>(1234)</Text></Text>
                        <Text style={[Styles.textTitle, Styles.colorBlack, Styles.textBold]}>$40</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardItem