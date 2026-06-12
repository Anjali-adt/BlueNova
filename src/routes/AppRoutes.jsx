import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Portfolio from '../pages/Portfolio/Portfolio';
import Technologies from '../pages/Technologies/Technologies';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions/TermsConditions';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
