import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";

type VideoPlayerProps = {
    videoURI: string;
    thumbnailURI: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
    const { videoURI, thumbnailURI } = props;

    /*  const onRefAssign = (videoElement: Video) => {
        console.warn("video is mounted!");
        const playbackObject = videoElement;

        playbackObject.loadAsync();
    }; */

    return (
        <View>
            <Video
                source={{ uri: videoURI }}
                style={{ width: "100%", aspectRatio: 16 / 9 }}
                usePoster={true}
                posterSource={{ uri: thumbnailURI }}
                posterStyle={{ resizeMode: "contain" }}
                useNativeControls
            />
        </View>
    );
};

export default VideoPlayer;
