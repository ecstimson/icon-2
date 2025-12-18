import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Use provided email or a default if empty (to satisfy "without adding creds" request)
      const userEmail = email.trim() || 'demo@icontransportation.com';
      localStorage.setItem('icon_user', JSON.stringify({ email: userEmail }));
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-center items-center py-24 px-6">
      <div className="w-full max-w-md bg-white p-8 md:p-12 shadow-xl border border-neutral-100 rounded-sm">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl text-neutral-900 mb-2">Welcome Back</h1>
          <p className="text-neutral-500 text-sm font-light">Sign in to manage your bookings and profile.</p>
        </div>

        {/* Google Sign In */}
        <button 
          type="button"
          onClick={() => handleLogin()}
          className="w-full flex items-center justify-center gap-3 bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 py-3 rounded-sm transition-all duration-300 mb-8 shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-sm font-medium">Sign in with Google</span>
        </button>

        <div className="relative flex py-2 items-center mb-8">
            <div className="flex-grow border-t border-neutral-200"></div>
            <span className="flex-shrink-0 mx-4 text-neutral-400 text-xs uppercase tracking-wider">Or continue with email</span>
            <div className="flex-grow border-t border-neutral-200"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder-neutral-300" 
              placeholder="name@example.com" 
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder-neutral-300" 
              placeholder="••••••••" 
            />
          </div>

          <div className="flex items-center justify-between text-xs">
             <label className="flex items-center text-neutral-500 cursor-pointer">
                <input type="checkbox" className="mr-2 rounded-sm border-neutral-300 text-neutral-900 focus:ring-neutral-900" />
                Remember me
             </label>
             <a href="#" className="text-neutral-900 hover:underline">Forgot password?</a>
          </div>

          <Button fullWidth disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-8 pt-8 border-t border-neutral-100 text-center">
          <p className="text-neutral-500 text-sm font-light">
            Don't have an account? <Link to="/contact" className="text-neutral-900 font-medium hover:underline">Request Access</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;