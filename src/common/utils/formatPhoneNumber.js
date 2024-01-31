export function formatPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[+() ]/g, "");
}
