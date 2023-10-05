export enum StackScreens {
  Home = "Home",
  Profile = "Profile",
  HomeDetail = "Home Detail",
}

export enum TabScreens {
  Home = "Home Screen",
  Profile = "Profile Screen",
}

export type TabParamList = {
  [TabScreens.Home]: undefined;
  [TabScreens.Profile]: undefined;
};

export type HomeStackParamList = {
  [StackScreens.Home]: undefined;
  [StackScreens.HomeDetail]: { item: number };
  navigate: (screen: StackScreens, params: { item: number }) => void;
};
