import { useCallback } from "react";


export const useCardActions = () => {
  const handleCardPress = useCallback(() => {
    alert("Card pressed!");
  }, []);

  const handleHeartPress = useCallback(() => {
    alert("Heart Liked!");
  }, []);

  const handleInnerCarouselPress = useCallback(() => {
    alert("Inner carousel item pressed!");
  }, []);

  const handleChallengePress = useCallback(() => {
    alert("Challenge button pressed!");
  }, []);

  return {
    handleCardPress,
    handleHeartPress,
    handleInnerCarouselPress,
    handleChallengePress,
  };
};
