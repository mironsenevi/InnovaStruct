import PropTypes from 'prop-types';

const CompanyProfile = ({ company }) => {
  if (!company) return null;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{company.companyName}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Basic Information</h3>
          <p><span className="font-medium">License Number:</span> {company.licenseNumber}</p>
          <p><span className="font-medium">CIDA Grade:</span> {company.cidaGrading}</p>
          <p><span className="font-medium">Established:</span> {company.establishedYear}</p>
          <p><span className="font-medium">Employees:</span> {company.employeeCount}</p>
          <p><span className="font-medium">Engineer Capacity:</span> {company.engineerCapacity}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact Information</h3>
          <p><span className="font-medium">Email:</span> {company.email}</p>
          <p><span className="font-medium">Phone:</span> {company.phone}</p>
          {company.website && <p><span className="font-medium">Website:</span> {company.website}</p>}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{company.shortDescription}</p>
      </div>

      {company.services?.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Services</h3>
          <div className="flex flex-wrap gap-2">
            {company.services.map((service, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {service}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

CompanyProfile.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.string,
    companyName: PropTypes.string.isRequired,
    licenseNumber: PropTypes.string,
    shortDescription: PropTypes.string,
    establishedYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    employeeCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    cidaGrading: PropTypes.string,
    engineerCapacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    services: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
  }),
};

export default CompanyProfile;