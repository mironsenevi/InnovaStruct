import PropTypes from 'prop-types'; 
import CompanyDetails from './CompanyDetails'; 

import ClientReviews from './ClientReviews'; 
import ContactAndQuote from './ContactAndQuote';
import CompanyTabs from './CompanyTabs';

const CompanyProfile = ({ company }) => {
  return (
    <div>
      <CompanyDetails company={company} />
      <CompanyTabs company={company} />
      
      <ClientReviews reviews={company.reviews} /> 
      <ContactAndQuote companyId={company.id} /> 
    </div>
  );
};

CompanyProfile.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired,
    trackRecord: PropTypes.object,
    financialStability: PropTypes.object,
    servicesOffered: PropTypes.object,
    certificationsCompliance: PropTypes.object,
    awardsRecognitions: PropTypes.object,
    projects: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
  }).isRequired,
};

export default CompanyProfile;