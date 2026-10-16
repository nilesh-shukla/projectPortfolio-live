export const CONTACT_EMAIL = "shuklanilesh810@gmail.com";
export const CONTACT_PHONE = "+919005082611";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Website enquiry")}`;

export function canPlaceCalls() {
  const mobileUserAgent = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  return navigator.userAgentData?.mobile || mobileUserAgent || window.matchMedia("(pointer: coarse)").matches;
}
