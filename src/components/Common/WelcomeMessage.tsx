import { Box } from "@mui/material";
import { memo } from "react";
interface WelcomeMessageProps {
  position: string;
  country?: string;
  username?: string;
}
const WelcomeMessage = ({
  position,
  country = "Viet Nam",
  username,
}: WelcomeMessageProps) => {
  return (
    <Box mb={1}>
      Welcome {username} - {position} from {country}
    </Box>
  );
};

export default memo(WelcomeMessage);
