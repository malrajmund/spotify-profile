import { useRouter } from "next/router";
import React from "react";
import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import {
  track,
  useGetTrackAudioAnalysisQuery,
  useGetTrackAudioFeaturesQuery,
  useGetTrackDataQuery,
} from "../../src/redux/services/spotifyApi/track/track";
import TrackDetails from "../../src/components/molecules/TrackDetails/TrackDetails";
import { BarChart } from "../../src/components/atoms/BarChart/BarChart";
import { Wrapper } from "./Track.styles";

const data = [
  {
    feature: "acousticness",
    accousticness: 156,
    accousticnessColor: "hsl(234, 70%, 50%)",
  },
  {
    feature: "danceability",
    danceability: 72,
    danceabilityColor: "hsl(163, 70%, 50%)",
  },
  {
    feature: "liveness",
    danceability: 50,
    danceabilityColor: "hsl(163, 70%, 50%)",
  },
  {
    feature: "instrumentalness",
    danceability: 10,
    danceabilityColor: "hsl(163, 70%, 50%)",
  },
  {
    feature: "energy",
    danceability: 80,
    danceabilityColor: "hsl(163, 70%, 50%)",
  },
  {
    feature: "speechiness",
    danceability: 80,
    danceabilityColor: "hsl(163, 70%, 50%)",
  },
  {
    feature: "svalence",
    danceability: 80,
    danceabilityColor: "hsl(163, 70%, 50%)",
  },
];

const Track = () => {
  const router = useRouter();
  const { data: trackData, isLoading: isTrackDataLoading, isFetching: isTrackDataFetching } = useGetTrackDataQuery({ id: router.query.track });
  const {
    data: trackFeatures,
    isLoading: isTrackFeaturesLoading,
    isFetching: isTrackFeaturesFetching,
  } = useGetTrackAudioFeaturesQuery({ id: router.query.track });
  const {
    data: trackAnalysis,
    isLoading: isTrackAnalysisLoading,
    isFetching: isTrackAnalysisFetching,
  } = useGetTrackAudioAnalysisQuery({ id: router.query.track });

  return (
    <UserPanelTemplate>
      <Wrapper>
        {!isTrackDataLoading && !isTrackDataFetching && (
          <TrackDetails
            title={trackData.name}
            href={trackData.external_urls.spotify}
            artist={trackData.artists[0].name}
            date={trackData.album.release_date}
            album={trackData.album.name}
            image={trackData.album.images[0].url}
          />
        )}
        {!isTrackFeaturesFetching && !isTrackFeaturesLoading && (
          <BarChart
            data={[
              {
                feature: "acousticness",
                acousticness: trackFeatures.acousticness,
              },
              {
                feature: "danceability",
                danceability: trackFeatures.danceability,
              },
              {
                feature: "liveness",
                liveness: trackFeatures.liveness,
              },
              {
                feature: "instrumentalness",
                instrumentalness: trackFeatures.instrumentalness,
              },
              {
                feature: "energy",
                energy: trackFeatures.energy,
              },
              {
                feature: "speechiness",
                speechiness: trackFeatures.speechiness,
              },
              {
                feature: "valence",
                valence: trackFeatures.valence,
              },
            ]}
          />
        )}
      </Wrapper>
    </UserPanelTemplate>
  );
};

export default Track;
