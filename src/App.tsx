/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CollegeProvider, useCollege } from './context/CollegeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { HeroSlider } from './components/home/HeroSlider';
import { CollegeHistorySection } from './components/home/CollegeHistorySection';
import { WhyChooseEwartSection } from './components/home/WhyChooseEwartSection';

import { AboutUsView } from './components/about/AboutUsView';
import { AcademicsView } from './components/academics/AcademicsView';
import { StudentLifeView } from './components/student-life/StudentLifeView';
import { FacilitiesView } from './components/facilities/FacilitiesView';
import { FacultyView } from './components/faculty/FacultyView';
import { HelpDeskView } from './components/helpdesk/HelpDeskView';

import { AdmissionsView } from './components/admissions/AdmissionsView';
import { ExaminationsView } from './components/examinations/ExaminationsView';
import { CampusView } from './components/campus/CampusView';
import { NoticesView } from './components/notices/NoticesView';
import { PortalView } from './components/portal/PortalView';
import { PhpStudioView } from './components/php-studio/PhpStudioView';

const MainContent: React.FC = () => {
  const { activeView } = useCollege();

  return (
    <main className="min-h-[calc(100vh-140px)]">
      {/* 1. Home View with Photos Slider at top, College History, and Why Choose Ewart */}
      {activeView === 'home' && (
        <>
          <HeroSlider />
          <CollegeHistorySection />
          <WhyChooseEwartSection />
        </>
      )}

      {/* 2. Exact requested menus */}
      {activeView === 'about' && <AboutUsView />}
      {activeView === 'academics' && <AcademicsView />}
      {activeView === 'student-life' && <StudentLifeView />}
      {activeView === 'facilities' && <FacilitiesView />}
      {activeView === 'faculty' && <FacultyView />}
      {activeView === 'helpdesk' && <HelpDeskView />}

      {/* 3. Deep operational & academic systems */}
      {activeView === 'admissions' && <AdmissionsView />}
      {activeView === 'examinations' && <ExaminationsView />}
      {activeView === 'campus' && <CampusView />}
      {activeView === 'notices' && <NoticesView />}
      {activeView === 'portal' && <PortalView />}
      {activeView === 'php-studio' && <PhpStudioView />}
    </main>
  );
};

export default function App() {
  return (
    <CollegeProvider>
      <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </CollegeProvider>
  );
}
