import { Stack, Typography } from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";

type Props = {
  currentTitle: string;
  previousLink: string;
};

const Mobile = ({ currentTitle, previousLink }: Props): React.ReactElement => {
  return (
    <Stack direction="row" alignItems="center">
      {Boolean(previousLink) && (
        <Link to={previousLink}>
          <KeyboardArrowLeftIcon />
        </Link>
      )}
      <Typography variant="headerBold" marginLeft={1}>
        {currentTitle}
      </Typography>
    </Stack>
  );
};

export default Mobile;
