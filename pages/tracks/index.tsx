import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetUserTopItemsQuery } from "../../src/redux/services/spotifyApi/user/user";
import ProfileList from "../../src/components/molecules/ProfileList/ProfileList";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AppState } from "../../src/redux/store";

const Tracks = () => {
  const router = useRouter();
  const [pagination, setPagination] = useState("10");
  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed) as UserState;
  const {
    data: tracksData,
    isLoading: areTracksLoading,
    isFetching: areTracksFetching,
  } = useGetUserTopItemsQuery({ type: "tracks", limit: pagination });

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
            album: item.album.name,
            title: item.name,
            artist: item.artists[0].name,
            image: item.album.images[2].url,
            time: item.duration_ms,
            id: item.id,
          }))}
          header={"Top tracks of all time"}
          isTrack
          inSubpage
          withPagination
          setPagination={setPagination}
          currentPagination={pagination}
        />
      )}
    </UserPanelTemplate>
  );
};

export default Tracks;
