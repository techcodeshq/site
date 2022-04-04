export const SOCIALS = {
  INSTAGRAM: "https://instagram.com/techcodeshq",
  TWITTER: "https://twitter.com/techcodeshq",
  GITHUB: "https://github.com/techcodeshq",
  YOUTUBE: "https://www.youtube.com/channel/UC74GHmtwQoj3bFxw2pBYM0A",
  LINKEDIN: "https://www.linkedin.com/company/techcodes",
};
export function hexToRgbA(hex = "#FFFFFF", alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
