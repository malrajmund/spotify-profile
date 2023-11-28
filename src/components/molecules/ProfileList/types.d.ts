interface ProfileList {
  trackItems?: Track[];
  artistItems?: Artist[];
  header: string;
  isTrack?: boolean;
  inSubpage?: boolean;
  withPagination?: boolean;
  setPagination?: React.SetStateAction;
  currentPagination?: string;
}

interface ProfileListWrapper {
  inSubpage?: boolean;
}
