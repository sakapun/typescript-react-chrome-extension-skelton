export const defaultState = {
  hoge: "piyo"
};

export type State = typeof defaultState;

export type Action =
  | { type: "FINISH_SETTING" }
;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FINISH_SETTING":
      return {
        ...state,
        hoge: "fuga",
      };
    default:
      return state;
  }
};
