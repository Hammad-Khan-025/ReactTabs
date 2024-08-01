import React from 'react';
import TabsData from './TabsData';

export default function Tabs() {

  const [value, setValue] = React.useState(0);

  const { id, title, name, monthYear, description } = TabsData[value];

  const displayTab = (val) => {
    setValue(val);
  };

  const isActive = (index) => value === index ? 'tab-active' : '';

  return (
    <div className='flex flex-col md:flex-row justify-center min-h-screen items-center px-5  gap-8 md:gap-12 tracking-wider bg-slate-200'>

      <div className='flex md:flex-col flex-wrap gap-4 sm:gap-8 tracking-wider text-black font-bold'>
        
        {TabsData.map((tab, index) => (
          <button
            key={tab.id}
            className={`border-2 px-3 py-1 rounded-lg border-black hover:text-white hover:bg-black ${isActive(index)}`}
            onClick={() => displayTab(index)}
          >
            {tab.name}
          </button>
        ))}
        
      </div>

      <div className='max-w-[600px]'>
        <h1 className='text-3xl md:text-4xl font-semibold'>{title}</h1>
        <h2 className='mt-4 bg-gray-300 px-3 rounded-md font-semibold inline-flex'>{name}</h2>
        <h3 className='mt-4'>{monthYear}</h3>
        <p className='mt-5'>{description}</p>
      </div>
    </div>
  );
}

