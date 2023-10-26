import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetUserTopItemsQuery } from "../../src/redux/services/spotifyApi/user/user";
import ProfileList from "../../src/components/molecules/ProfileList/ProfileList";

const Tracks = () => {
  const { data: tracksData, isLoading: areTracksLoading, isFetching: areTracksFetching } = useGetUserTopItemsQuery({ type: "tracks" });
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
          }))}
          header={"Top tracks of all time"}
          isTrack
          inSubpage
        />
      )}
    </UserPanelTemplate>
  );
};

export default Tracks;
