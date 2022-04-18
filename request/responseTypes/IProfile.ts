export interface IProfile {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  name?: string;
  email?: string;
  isEmailConfirmed?: boolean;
  active?: boolean;
  phone?: string;
  password?: string;
  androidNotificationToken?: null;
  iosNotificatoinToken?: null;
  deleted?: null;
  isAdmin?: boolean;
  verified?: boolean;
  transactionLimit?: null;
  profile?: Profile;
}

export interface Profile {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: null;
  gender?: null;
  state?: null;
  country?: null;
  userID?: number;
  profilePicURL?: string;
}
