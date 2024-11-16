import React, { Dispatch, SetStateAction, useState } from "react";

interface NotificationPopUpProps {
  title: string;
  message: string;
  confirm?: boolean;
  setEmailPopUpActive: Dispatch<SetStateAction<boolean>>;
}

export const NotificationPopUp = ({
  title,
  message,
  confirm,
  setEmailPopUpActive,
}: NotificationPopUpProps) => {
  const [popUpActive, setPopUpActive] = useState(true);
  const [animation, setAnimation] = useState(true);

  const handleConfirm = () => {
    setAnimation(false);
    setTimeout(() => {
      setPopUpActive(false);
      setEmailPopUpActive(false);
    }, 500);
  };

  if (!confirm) {
    setTimeout(() => {
      handleConfirm();
    }, 3000);
  }

  return (
    <div>
      {popUpActive && (
        <div
          className={`flex flex-col absolute max-w-xs place-self-end bottom-3 p-4 bg-white rounded-xl shadow-md space-y-3 transition-all duration-1000 ${
            animation
              ? "animate-fadeIn right-3"
              : "animate-fadeOut right-[-400px]"
          }`}>
          <span className="font-semibold font-syke">{title}</span>
          <p className="text-sm">{message}</p>
          {confirm && <button className="bg-buttongreen rounded-md py-1 px-4 self-end" onClick={handleConfirm}>Confirm</button>}
        </div>
      )}
    </div>
  );
};
