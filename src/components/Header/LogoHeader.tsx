import {View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import LogoHeaderIcon from './LogoHeaderIcon';

export default function LogoHeader() {
  return (
    <SafeAreaView>
      <View
        style={{
          margin: 14,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../asset/logo.png')}
          style={{width: 90, height: 30}}
        />

        <View style={{flexDirection: 'row'}}>
          <LogoHeaderIcon iconName="cast" />
          <LogoHeaderIcon iconName="search" />
          <View
            style={{
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LogoHeaderIcon
              style={{
                backgroundColor: '#666',
                borderRadius: 100,
                height: 30,
                width: 30,
              }}
              iconName="perm-identity"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
