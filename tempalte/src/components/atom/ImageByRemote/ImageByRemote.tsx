// src/components/ImageByRemote.tsx
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import FastImage, {
  FastImageProps,
  ImageStyle as FastImageStyle,
  Source,
} from 'react-native-fast-image';

type ImageByRemoteProps = {
  src: string;
  size?: number;
  borderRadius?: number;
  rounded?: boolean;
  resizeMode?: FastImageProps['resizeMode'];
  style?: FastImageStyle;
  variant?: 'default' | 'dark'; // for future use
};

const ImageByRemote = ({
  src,
  resizeMode = FastImage.resizeMode.cover,
  style,
}: ImageByRemoteProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const source: Source = {
    uri: src,
    cache: FastImage.cacheControl.immutable,
    priority: FastImage.priority.normal,
  };

  // TODO: 에러 이미지 처리
  // const fallback = require('@/assets/images/error.png');

  return (
    <View style={[styles.container, style]}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color="#aaa" />
        </View>
      )}
      <FastImage
        // source={error ? fallback : source}
        source={error ? source : source}
        style={[style, styles.image] as FastImageStyle}
        resizeMode={resizeMode}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  image: {
    backgroundColor: '#eee',
  },
});

export default ImageByRemote;
