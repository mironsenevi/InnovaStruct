import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Loader, AlertCircle, CheckCircle } from 'lucide-react';

const MFAVerification = ({ onVerify, onCancel }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => timer && clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    setCode(prev => {
      const newCode = [...prev];
      newCode[index] = value;
      return newCode;
    });

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name="code-${index + 1}"]`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      await onVerify(fullCode);
      setVerificationStatus('success');
      setTimeout(() => {
        onCancel();
      }, 1500);
    } catch (error) {
      console.error('MFA verification failed:', error);
      setError(error.message || 'Verification failed. Please try again.');
      setVerificationStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-3 bg-yellow-100 rounded-full"
        >
          <Shield className="w-6 h-6 text-yellow-600" />
        </motion.div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Two-Factor Authentication</h2>
          <p className="text-sm text-gray-600">Enter the code from your authenticator app</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-2 justify-between">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              name={`code-${index}`}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              required
            />
          ))}
        </div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-red-600 text-sm"
            >
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading || verificationStatus === 'success'}
            className={`flex-1 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              verificationStatus === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-yellow-500 text-white hover:bg-yellow-600'
            }`}
          >
            {isLoading ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : verificationStatus === 'success' ? (
              <><CheckCircle className="w-5 h-5" /> Verified</>
            ) : (
              'Verify'
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onCancel}
            disabled={isLoading || verificationStatus === 'success'}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </motion.button>
        </div>

        {timeLeft > 0 && (
          <div className="text-center text-sm text-gray-500">
            Code expires in: {timeLeft}s
            <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-yellow-500"
                initial={{ width: '100%' }}
                animate={{ width: `${(timeLeft / 30) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        )}
      </form>
    </motion.div>
  );
};

MFAVerification.propTypes = {
  onVerify: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default MFAVerification;