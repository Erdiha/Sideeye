export const AccountShape = () => {
  const Account = {
    logout: false,
    email: "",
    password: "",
    role: "",
    status: "",
    created_at: "",
    updated_at: "",
    name: "",
    email: "",
    password: "",
    role: "",
    status: "",
    created_at: "",
    updated_at: "",
    likedPeople: "",
    dislikedPeople: "",
    Units:'f or c',
    receiveEmails:false,
    AllowNotification:'false',

    UpgradeAccount:'false'
  };
  return <div><section>{Account}</section></div>;
};
