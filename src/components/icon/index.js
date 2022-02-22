import React from "react";
import PropTypes from "prop-types";
import IconLogo from "./logo";
import IconLinkedin from "./linkedin";
import IconInstagram from "./instagram";
import IconTwitter from "./twitter";
import IconGithub from "./github";
import IconYoutube from "./youtube";
import IconMoon from "./moon";
import IconSun from "./sun";

const Icon = ({ name }) => {
  switch (name) {
    case "logo":
      return <IconLogo />;
    case "instagram":
      return <IconInstagram />;
    case "linkedin":
      return <IconLinkedin />;
    case "twitter":
      return <IconTwitter />;
    case "github":
      return <IconGithub />;
    case "youtube":
      return <IconYoutube />;
    case "sun":
      return <IconSun />;
    case "moon":
      return <IconMoon />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
