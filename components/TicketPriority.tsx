import React from 'react';
import { Flame } from 'lucide-react';
import { Priority } from '@prisma/client';

interface Props {
  priority: Priority;
}

const PriorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  HIGH: { label: 'High', level: 3 },
  MEDIUM: { label: 'Medium', level: 2 },
  LOW: { label: 'Low', level: 1 },
};

// Type guard function to check if a priority is valid
const isValidPriority = (key: any): key is Priority => {
  return ['HIGH', 'MEDIUM', 'LOW'].includes(key);
};

const TicketPriority = ({ priority }: Props) => {
  // Check if the priority is a valid key of PriorityMap
  if (!isValidPriority(priority)) {
    console.error(`Invalid priority: ${priority}`);
    return <div>Invalid priority</div>; // Render fallback UI
  }

  // Safely access PriorityMap
  const { level } = PriorityMap[priority];

  return (
    <>
      <Flame className={`${level >= 1 ? 'text-red-500' : 'text-muted'}`} />
      <Flame className={`${level >= 2 ? 'text-red-500' : 'text-muted'}`} />
      <Flame className={`${level >= 3 ? 'text-red-500' : 'text-muted'}`} />
    </>
  );
};

export default TicketPriority;
