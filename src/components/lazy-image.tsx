import * as React from "react";
import ProgressiveImage from "react-progressive-image";
import { Image } from "@chakra-ui/react";
import placeholder from "../assets/images/placeholder.png";

type LazyImageProps = {
  src: string;
  width?: number;
  height?: number;
  style?: any;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, width, height, style } = props;

  return (
    <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
      {(src: any, loading: any) => {
        return (
          <Image
            src={src}
            objectFit="cover"
            alt="cover image"
            width={width}
            height={height}
            fallbackSrc={placeholder}
            style={style}
          />
        );
        // loading ? (
        //   <BlurhashCanvas
        //     hash={blurHash}
        //     width={width}
        //     height={height}
        //     punch={1}
        //     style={{ borderRadius: rounded ? "5px" : "" }}
        //   />
        // ) : (

        // );
      }}
    </ProgressiveImage>
  );
};

export default LazyImage;
