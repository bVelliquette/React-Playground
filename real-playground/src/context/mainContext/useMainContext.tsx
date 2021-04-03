import React, { useContext, useState } from "react";
import { PageState } from "../../types/enums";
import { IMainContext } from "../../types/types";

const initial = {
  pageState: PageState.Home,
  changePages: (newPageState: PageState) => {},
};
const MainContext = React.createContext<IMainContext>(initial);

const MainProvider = ({ children }: { children: React.ReactNode[] | React.ReactNode}) => {
  const [pageState, setPageState] = useState<PageState>(PageState.Home);

  const changePages = (newPageState: PageState) => {
    setPageState(newPageState);
  };

  return (
    <MainContext.Provider value={{ pageState, changePages }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
