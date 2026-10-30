import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Heart, Music, Trophy, Sparkles, Users, Church, Compass, ArrowRight } from 'lucide-react';

export const StudentLifeView: React.FC = () => {
  const { setActiveView } = useCollege();

  const activities = [
    {
      title: 'Chapel & Morning Devotional Fellowship',
      description: 'Daily morning assemblies, hymns, prayers, and inspirational sermons by CSI presbyters fostering peace, character, and spiritual equilibrium.',
      icon: Church,
      badge: 'Spiritual Life',
    },
    {
      title: 'EWARTFEST: Annual Cultural Extravaganza',
      description: 'Our flagship inter-collegiate festival welcoming over 30 regional colleges for music, classical/folk dance, elocution, quiz, and fine arts.',
      icon: Sparkles,
      badge: 'Cultural Highlight',
    },
    {
      title: 'National Service Scheme (NSS) & Youth Red Cross',
      description: 'Village adoption, literacy drives, medical blood donation camps, and environmental tree-planting missions in Chengalpattu district.',
      icon: Heart,
      badge: 'Community Service',
    },
    {
      title: 'Women’s Athletic & Sports Council',
      description: 'Competitive coaching in basketball, volleyball, throwball, badminton, and track events with regular victories in University of Madras tournaments.',
      icon: Trophy,
      badge: 'Athletics',
    },
    {
      title: 'College Choir & Western / Carnatic Music Club',
      description: 'Renowned collegiate choir leading worship services, carols, inter-collegiate choral competitions, and cultural festivals.',
      icon: Music,
      badge: 'Performing Arts',
    },
    {
      title: 'Rotaract Club & Citizen Consumer Club',
      description: 'Building professional leadership, consumer awareness, debate, career readiness, and international fellowship among young women.',
      icon: Compass,
      badge: 'Leadership',
    },
  ];

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Co-Curricular & Student Flourishing
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Vibrant Student Life at CSI Ewart
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Education transcends textbooks. At CSI Ewart, students discover lifelong sisterhood, hone creative talents, lead community outreach, and grow in grace.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <div
                key={i}
                className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between shadow-sm hover:border-amber-400 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-amber-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                      {act.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-lg font-bold text-stone-900">
                    {act.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-amber-800 font-semibold">
                  Active Student Participation
                </div>
              </div>
            );
          })}
        </div>

        {/* EWARTFEST Spotlight Banner */}
        <div className="bg-stone-900 text-white rounded-lg p-6 sm:p-10 border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-mono">
                <Sparkles className="w-4 h-4" />
                <span>Flagship Annual Fest</span>
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold">
                EWARTFEST 2026: Celebrating Creativity, Culture & Sisterhood
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed max-w-2xl">
                An electrifying 2-day carnival bringing together over 1,500 students across Tamil Nadu for on-stage and off-stage talent showcases, panel discussions, and celebrity guest addresses.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs">
                <button
                  onClick={() => setActiveView('notices')}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded transition-colors"
                >
                  View Fest Circular & Registration
                </button>
                <button
                  onClick={() => setActiveView('helpdesk')}
                  className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded transition-colors"
                >
                  Contact Cultural Committee
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-800 p-6 rounded-lg border border-stone-700 text-xs space-y-3">
              <div className="font-bold text-amber-400 text-sm">Student Support Cells</div>
              <ul className="space-y-2 text-stone-300">
                <li>• Anti-Ragging & Discipline Committee</li>
                <li>• Women’s Sexual Harassment Redressal Cell</li>
                <li>• Student Grievance Redressal Committee</li>
                <li>• Career Counseling & Placement Cell</li>
                <li>• Tutorial & Mentorship Program (15:1 Ratio)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
