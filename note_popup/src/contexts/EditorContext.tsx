import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type IState<T> = {
  value: T,
  set: Dispatch<SetStateAction<T>>
}

export enum UiMode {
  EDIT_VIEW_SIDE_TO_SIDE = 'EDIT_VIEW_SIDE_TO_SIDE',
  ONLY_EDIT = 'EDIT_VIEW',
  ONLY_VIEW = 'ONLY_VIEW'
}

export interface IEditorContext {
  uiMode: IState<UiMode>;
}


type UseStateReturnType<T> = [T, Dispatch<SetStateAction<T>>];

function convertUseStateToIState<T>(useStateReturn: UseStateReturnType<T>): IState<T> {
  return { value: useStateReturn[0]!, set: useStateReturn[1] };
}

export const EditorContext = createContext<IEditorContext>({
  uiMode: convertUseStateToIState<UiMode>([UiMode.EDIT_VIEW_SIDE_TO_SIDE, () => {}])
});

export const useEditorContext = () => {
  return useContext(EditorContext);
};

export const EditorContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const editing = convertUseStateToIState(useState<boolean>(false));
  const uiMode = convertUseStateToIState(useState<UiMode>(UiMode.EDIT_VIEW_SIDE_TO_SIDE));

  return (
    <EditorContext.Provider value={{ uiMode }}>
      {children}
    </EditorContext.Provider>
  );
};
