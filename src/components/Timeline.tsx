import { TimelineData } from '@/models/TimelineData';
import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

interface TimelineProps {
  timelineData: TimelineData[];
  align?: 'left' | 'right';
}

export default function Timeline({
  timelineData,
  align = 'left',
}: TimelineProps) {
  return (
    <div className="mt-5 text-left">
      {timelineData.map((timeline, index) => (
        <div key={index} className="grid grid-cols-12">
          {align == 'left' ? (
            <div className="hidden md:block mr-9 col-span-3 h-full">
              <div className="font-bold text-center uppercase">
                {timeline.startMonth}{' '}
                <span className="font-semibold">{timeline.startYear}</span>
              </div>
              <div className="text-lg my-1 text-center">~</div>
              <div className="font-bold text-center uppercase">
                {timeline.endMonth}{' '}
                <span className="font-semibold">{timeline.endYear}</span>
              </div>
            </div>
          ) : null}
          {align == 'left' ? (
            <div className="col-span-1 flex flex-row justify-center">
              <div className="relative -left-2.5 border-l-2 border-slate-300 h-full"></div>
              <BsCircleFill className="relative -left-5 -top-1 text-md w-5 h-5" />
            </div>
          ) : null}
          <div
            className={`col-span-11 md:col-span-8 ${
              align == 'left' ? 'ml-3' : 'mr-12'
            }`}
          >
            <div className="font-bold text-lg">{timeline.title}</div>
            <div className="italic md:mb-4">
              <a
                href={timeline.organizationWebsiteURL}
                target="_blank"
                rel="noreferrer"
              >
                {timeline.organizationName}
              </a>
            </div>
            <div className="mb-4 mt-2 md:hidden">
              <div className="font-light">
                {timeline.startMonth} {timeline.startYear} - {timeline.endMonth}{' '}
                {timeline.endYear}
              </div>
            </div>
            <div className="mb-10">
              <ul className="list-outside list-disc ml-5 mb-20">
                {timeline.descriptionArray.map((description, index) => (
                  <li key={index} className="mb-4">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {align == 'right' ? (
            <div className="col-span-1 flex flex-row justify-center">
              <div className="border-l-2 border-slate-300 h-full"></div>
              <BsCircleFill className="relative -left-2.5 -top-1 text-md w-5 h-5" />
            </div>
          ) : null}
          {align == 'right' ? (
            <div className="col-span-3 hidden md:block ml-5 h-full">
              <div className="font-bold text-center uppercase">
                {timeline.startMonth} {timeline.startYear}
              </div>
              <div className="text-lg my-1 text-center">~</div>
              <div className="font-bold text-center uppercase">
                {timeline.endMonth} {timeline.endYear}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
