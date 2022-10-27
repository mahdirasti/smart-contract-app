import { useEffect, useState } from "react";

import { Box } from "@mui/material";

export interface WithCountdownProps {
  count: number; //In seconds
  startCountdown: () => void;
  stopCountdown: () => void;
}

let intervalTimer: NodeJS.Timer;

export function withCountdown<
  T extends WithCountdownProps = WithCountdownProps
>(WrappedComponent: React.ComponentType<T>, initialSeconds: number) {
  const ComponentWithCountdown = (props: Omit<T, keyof WithCountdownProps>) => {
    const [count, setCount] = useState(0);

    const startCountdown = () => {
      setCount(initialSeconds);
      resetCountdown();
      resumeIntervalCountdown();
    };

    const stopCountdown = () => {
      clearIntervalCountdown();
    };

    const clearIntervalCountdown = () => {
      if (intervalTimer) {
        clearInterval(intervalTimer);
      }
    };

    const resumeIntervalCountdown = () => {
      intervalTimer = setInterval(() => {
        setCount((crt) => {
          if (crt - 1 >= 0) {
            return crt - 1;
          } else {
            stopCountdown();
            setCount(initialSeconds);
            return 0;
          }
        });
      }, 1000);
    };

    const resetCountdown = () => {
      clearIntervalCountdown();
    };

    return (
      <Box sx={{ width: "100%" }}>
        <WrappedComponent
          {...(props as T)}
          count={count}
          startCountdown={startCountdown}
          stopCountdown={stopCountdown}
        />
      </Box>
    );
  };

  return ComponentWithCountdown;
}
