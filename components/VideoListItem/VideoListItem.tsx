import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

type VideoListItemProps = {
    video: {
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        videoUrl: string;
        duration: number;
        views: number;
        user: {
            name: string;
            image?: string;
        };
    };
};

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props;
    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60;

    let viewsString = video.views.toString();
    if (video.views > 1_000_000) {
        viewsString = (video.views / 1_000_000).toFixed(1) + "M";
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed(1) + "K";
    }

    return (
        <View style={styles.videoCard}>
            {/* Thumbnail */}
            <View>
                <Image
                    style={styles.thumbnail}
                    source={{
                        uri: video.thumbnail,
                    }}
                />
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>
                        {minutes}:{seconds < 10 ? "0" : ""}
                        {seconds}
                    </Text>
                </View>
            </View>

            {/* Title row */}
            <View style={styles.titleRow}>
                {/* Avatar */}
                <Image
                    style={styles.avatar}
                    source={{
                        uri: video.user.image,
                    }}
                />
                {/* Middle container: Title, subtitle, etc */}
                <View style={styles.middleContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>
                        {video.user.name} {viewsString} {video.createdAt}
                    </Text>
                </View>
                {/* Icon */}
                <Entypo name="dots-three-vertical" size={14} color="white" />
            </View>
        </View>
    );
};

export default VideoListItem;
