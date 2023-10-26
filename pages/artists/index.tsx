import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetUserTopItemsQuery } from "../../src/redux/services/spotifyApi/user/user";
import ProfileList from "../../src/components/molecules/ProfileList/ProfileList";

const Tracks = () => {
  const { data: artistsData, isLoading: areArtistsLoading, isFetching: areArtistsFetching } = useGetUserTopItemsQuery({ type: "artists" });
  return (
    <UserPanelTemplate>
      {!areArtistsLoading && !areArtistsFetching && (
        <ProfileList
          artistItems={artistsData.items.map((item: any) => ({
            title: item.name,
            type: item.genres[0],
            image: item.images[2].url,
          }))}
          header={"Top artists"}
          inSubpage
        />
      )}
    </UserPanelTemplate>
  );
};

export default Tracks;
