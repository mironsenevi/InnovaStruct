export const validateLicenseNumber = (licenseNumber) => {
    // License number format: XXX-YYYY-ZZZ
    const licenseRegex = /^[A-Z]{3}-\d{4}-[A-Z]{3}$/;
    return licenseRegex.test(licenseNumber);
  };
  
  export const validatePhoneNumber = (phoneNumber) => {
    // Phone format: +94XXXXXXXXX
    const phoneRegex = /^\+94\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };
  
  export const generateMFASecret = () => {
    return crypto.randomBytes(20).toString('hex');
  };