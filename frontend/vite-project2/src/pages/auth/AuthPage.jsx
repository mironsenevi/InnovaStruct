import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Building2, UserCircle2, ArrowRight } from 'lucide-react';
import ClientLoginForm from '../../components/auth/ClientLoginForm';
import CompanyLoginForm from '../../components/auth/CompanyLoginForm';

const AuthPage = () => {
  const [selectedType, setSelectedType] = useState(null);

  const userTypes = [
    {
      type: 'client',
      title: 'Client Login',
      icon: <UserCircle2 className="w-8 h-8" />,
      description: 'Looking to hire construction services'
    },
    {
      type: 'company',
      title: 'Company Login',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Construction company providing services'
    }
  ];

  const handleBack = () => {
    setSelectedType(null);
  };

  const pageTransition = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Construction-themed background pattern */}
      <div className="absolute inset-0 bg-opacity-10 bg-yellow-500 pattern-grid-lg"></div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header with Logo */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={pageTransition}
            className="text-center mb-12"
          >
            <HardHat className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to InnovaStruct
            </h1>
            <p className="mt-2 text-gray-600">
              Select your account type to continue
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!selectedType ? (
              // User Type Selection
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageTransition}
                className="grid md:grid-cols-2 gap-6"
              >
                {userTypes.map((userType) => (
                  <motion.button
                    key={userType.type}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setSelectedType(userType.type)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        {userType.icon}
                      </div>
                      <ArrowRight className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h2 className="text-2xl font-bold mt-4 text-gray-900">
                      {userType.title}
                    </h2>
                    <p className="mt-2 text-gray-600">
                      {userType.description}
                    </p>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              // Login Forms
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageTransition}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                {selectedType === 'client' ? (
                  <ClientLoginForm onBack={handleBack} />
                ) : (
                  <CompanyLoginForm onBack={handleBack} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;