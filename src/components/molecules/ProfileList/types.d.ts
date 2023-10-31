interface ProfileList {
  trackItems?: Track[];
  artistItems?: Artist[];
  header: string;
  isTrack?: boolean;
  inSubpage?: boolean;
  withPagination?: boolean;
  setPagination?: React.SetStateAction;
}

interface ProfileListWrapper {
  inSubpage?: boolean;
}
