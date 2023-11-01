import { useRouter } from "next/router";
import React from "react";
import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetTrackDataQuery } from "../../src/redux/services/spotifyApi/track/track";
import TrackDetails from "../../src/components/molecules/TrackDetails/TrackDetails";

const Track = () => {
  const router = useRouter();
  const { data, isLoading, isFetching } = useGetTrackDataQuery({ id: router.query.track });
  return (
    <UserPanelTemplate>
      {!isLoading && !isFetching && (
        <TrackDetails
          title={data.name}
          href={data.external_urls.spotify}
          artist={data.artists[0].name}
          date={data.album.release_date}
          album={data.album.name}
          image={data.album.images[0].url}
        />
      )}
    </UserPanelTemplate>
  );
};

export default Track;
