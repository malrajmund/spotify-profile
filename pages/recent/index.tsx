import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetUserTopItemsQuery } from "../../src/redux/services/spotifyApi/user/user";
import ProfileList from "../../src/components/molecules/ProfileList/ProfileList";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AppState } from "../../src/redux/store";
import { useGetUserRecentlyPlayedTracksQuery } from "../../src/redux/services/spotifyApi/player/player";

const Recent = () => {
  const router = useRouter();
  const [pagination, setPagination] = useState("10");
  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed) as UserState;
  const { data: tracksData, isLoading: areTracksLoading, isFetching: areTracksFetching } = useGetUserRecentlyPlayedTracksQuery({ limit: pagination });

  useLayoutEffect(() => {
    if (!isAuthed) {
      router.push("/");
    }
  }, []);

  return (
    <UserPanelTemplate>
      {!areTracksLoading && !areTracksFetching && (
        <ProfileList
          trackItems={tracksData.items.map((item: any) => ({
            album: item.track.album.name,
            title: item.track.name,
            artist: item.track.artists[0].name,
            image: item.track.album.images[2].url,
            time: item.track.duration_ms,
            id: item.track.id,
          }))}
          header={"Recently played songs"}
          isTrack
          inSubpage
          withPagination
          currentPagination={pagination}
          setPagination={setPagination}
        />
      )}
    </UserPanelTemplate>
  );
};

export default Recent;
