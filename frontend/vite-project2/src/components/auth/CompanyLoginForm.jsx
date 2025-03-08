import  { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Lock, Mail, Phone, Loader, AlertCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const CompanyLoginForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: ''
  });
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { loginWithEmailPassword } = useAuth();

  const validateForm = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
    } else {
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?[1-9]\d{9,11}$/.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number format';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(step)) {
      try {
        setIsLoading(true);
        if (step === 1) {
          // Simulate email verification
          await new Promise(resolve => setTimeout(resolve, 1000));
          setStep(2);
        } else {
          await loginWithEmailPassword(formData.email, formData.password);
        }
      } catch (error) {
        setErrors({ 
          submit: error.message || 'Login failed. Please try again.' 
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <div className="space-y-6">
      <motion.div 
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Company Login</h2>
          <p className="text-sm text-gray-600">
            Step {step} of 2: {step === 1 ? 'Enter your credentials' : 'Verify your identity'}
          </p>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.form
          key={step}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {step === 1 ? (
            <div className="space-y-4">
              <InputField
                type="email"
                label="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                error={errors.email}
                icon={<Mail className="w-5 h-5" />}
              />
              <InputField
                type="password"
                label="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                error={errors.password}
                icon={<Lock className="w-5 h-5" />}
              />
            </div>
          ) : (
            <InputField
              type="tel"
              label="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              error={errors.phone}
              icon={<Phone className="w-5 h-5" />}
              placeholder="+1234567890"
            />
          )}

          {errors.submit && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-red-600 text-sm"
            >
              <AlertCircle className="w-4 h-4" />
              <span>{errors.submit}</span>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading && <Loader className="w-5 h-5 animate-spin" />}
            {step === 1 ? 'Continue' : 'Verify & Login'}
          </motion.button>
        </motion.form>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-center"
      >
        <span className="text-sm text-gray-500">
          Step {step} of 2
        </span>
        <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-yellow-500"
            initial={{ width: '50%' }}
            animate={{ width: step === 1 ? '50%' : '100%' }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

const InputField = ({ type, label, value, onChange, error, icon, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors`}
      />
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-1 text-sm text-red-500"
      >
        {error}
      </motion.p>
    )}
  </div>
);

CompanyLoginForm.propTypes = {
  onBack: PropTypes.func.isRequired
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  icon: PropTypes.node.isRequired,
  placeholder: PropTypes.string
};

export default CompanyLoginForm;