import React from 'react';

export interface BadgeProps {
  text: string;
  color?:
    | 'transparent'
    | 'current'
    | 'black'
    | 'white'
    | 'rose'
    | 'pink'
    | 'fuchsia'
    | 'purple'
    | 'violet'
    | 'indigo'
    | 'blue'
    | 'lightblue'
    | 'cyan'
    | 'teal'
    | 'emerald'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'red'
    | 'warmgray'
    | 'truegray'
    | 'gray'
    | 'coolgray'
    | 'bluegray'
    | 'slate'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'sky';
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span
      className={`ring-1 ring-sky-100 text-sky-100 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-sky-900 dark:text-sky-300`}
    >
      {text}
    </span>
  );
}
