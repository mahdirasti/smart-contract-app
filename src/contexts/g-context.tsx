import * as React from "react";

import { FModal } from "@/components/reusables/modal";
import { SxProps, Theme } from "@mui/material";

interface IGlobalContext {
  showModal: (element: React.ReactNode, sxProps?: SxProps<Theme>) => void;
  closeModal: () => void;
}

const initialState: IGlobalContext = {
  showModal: (element: React.ReactNode, sxProps?: SxProps<Theme>) => {},
  closeModal: () => {},
};

const GlobalContext = React.createContext(initialState);

export const useGlobalContext = () => React.useContext(GlobalContext);

const GContext: React.FC = ({ children }) => {
  const [isShowModal, setShowModal] = React.useState(false);
  const [sxModal, setSxModal] = React.useState<SxProps<Theme>>({});
  const [modalContext, setModalContent] = React.useState<React.ReactNode>(null);
  const showModal = (element: React.ReactNode, sxProps?: SxProps<Theme>) => {
    if (sxProps) setSxModal(sxProps);
    setModalContent(element);
    setShowModal(true);
  };
  const closeModal = () => {
    if (Boolean(Object.keys(sxModal).length)) setSxModal({});

    setShowModal(false);
    setModalContent(null);
  };

  return (
    <GlobalContext.Provider
      value={{
        showModal,
        closeModal,
      }}
    >
      <FModal open={isShowModal} handleClose={closeModal} parentSx={sxModal}>
        {modalContext}
      </FModal>
      {children}
    </GlobalContext.Provider>
  );
};
export default GContext;
