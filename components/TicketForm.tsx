'use client';
import React from 'react';
import { Form } from './ui/form';
import { ticketSchema } from '@/ValidationSchemas/ticket';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type TicketFormData = z.infer<typeof ticketSchema>;

const TicketForm = () => {
  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
  });

  return (
    <div>
      <Form></Form>
    </div>
  );
};

export default TicketForm;
