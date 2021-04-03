import { PageState } from "./enums";

export interface IMainContext {
  pageState: PageState;
  changePages: (newPageState: PageState) => void;
}
