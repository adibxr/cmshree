
import React from 'react';

const Calendar: React.FC = () => {
  // Public Holidays in India (Sample for 2024-25)
  const holidays = [
    { date: '15 Aug', day: 'Thursday', name: 'Independence Day' },
    { date: '02 Oct', day: 'Wednesday', name: 'Gandhi Jayanti' },
    { date: '12 Oct', day: 'Saturday', name: 'Dussehra' },
    { date: '31 Oct', day: 'Thursday', name: 'Diwali' },
    { date: '15 Nov', day: 'Friday', name: 'Guru Nanak Jayanti' },
    { date: '25 Dec', day: 'Wednesday', name: 'Christmas' },
    { date: '26 Jan', day: 'Sunday', name: 'Republic Day' },
    { date: '26 Mar', day: 'Wednesday', name: 'Holi' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {holidays.map((holiday, index) => (
        <div key={index} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-3">
            {holiday.date.split(' ')[0]}
          </div>
          <h3 className="font-bold text-slate-900">{holiday.name}</h3>
          <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">{holiday.day} • {holiday.date.split(' ')[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
