interface ProfileList {
  trackItems?: Track[];
  artistItems?: Artist[];
  header: string;
  isTrack?: boolean;
  inSubpage?: boolean;
}

interface ProfileListWrapper {
  inSubpage?: boolean;
}
